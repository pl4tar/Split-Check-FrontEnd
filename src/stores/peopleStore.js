import {defineStore} from 'pinia';

export const usePeopleStore = defineStore('peopleStore', {
    state: () => ({
        uniqId: 0,
        peoples: [],
        foodList: [],
        howOwe: []
    }),
    actions: {
        // Удаление человека из списка по id
        deletePeoleItem(id) {
            this.peoples = this.peoples.filter(el => el.id !== id);
        },

        // Удаление еды из списка по id
        deleteFoodItem(id) {
            this.foodList = this.foodList.filter(el => el.id !== id);
        },

        // Добавление нового человека
        addPeoleItem(name) {
            this.peoples.push({
                id: ++this.uniqId,
                name: name
            });
        },
        // Добавление еды и списка людей, которые участвовали
        addFoodItem(foodName, cost, peoplesId, payerId) {
            this.foodList.push({
                id: ++this.uniqId,
                foodName: foodName,
                cost: cost,
                peopleList: peoplesId,
                whoPaid: payerId
            });
        },
        // Подсчет долга кадого без взаимного вычета
        existingDebtCount() {
            this.foodList.forEach(food => {
                let amountPerPerson = food.cost / food.peopleList.length;
                const payer = food.whoPaid;
                food.peopleList.forEach(person => {
                    if (person.id !== payer.id) {
                        const existingDebt = this.howOwe.find(debt => debt.from === person.id && debt.to === payer.id);
                        if (existingDebt) {
                            existingDebt.amount += amountPerPerson;
                        } else {
                            this.howOwe.push({
                                from: person.id,
                                to: payer.id,
                                fromName: person.name,
                                toName: payer.name,
                                amount: amountPerPerson,
                            });
                        }

                    }
                });
            });
        },
        calcForEach() {
            this.howOwe = [];
            this.existingDebtCount()
            // Подсчет долга с взаимным вычетом долгов
            this.howOwe.forEach(payer => {
                this.howOwe.forEach(person => {
                    if (person.to === payer.from && person.from === payer.to) {
                        const minDebt = Math.min(person.amount, payer.amount);
                        if (person.amount > payer.amount) {
                            person.amount -= minDebt;
                            payer.amount = 0;
                        } else {
                            person.amount = 0;
                            payer.amount -= minDebt;
                        }
                    }
                })
            })
            this.howOwe = this.howOwe.filter(debt => debt.amount > 0);
        }
    }
});
