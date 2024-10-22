import {defineStore} from 'pinia';

export const usePeopleStore = defineStore('peopleStore', {
    state: () => ({
        uniqId: 0,
        peoples: [],
        foodList: [],
        howOweEach: [],
        howOwe: []
    }),
    getters: {

    },
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
        calcForEach() {
            this.howOwe = [];
            this.foodList.forEach(food => {
                let amountPerPerson = food.cost / food.peopleList.length;
                const payer = food.whoPaid;
                food.peopleList.forEach(person => {
                    if (person.id !== payer.id) {
                        const existingDebt = this.howOwe.find(debt => debt.from === person.id && debt.to === payer.id);
                        const coutFlag = true;
                        if (existingDebt) {
                            existingDebt.amount += amountPerPerson;
                        } else {
                            this.howOwe.push({
                                from: person.id,
                                to: payer.id,
                                fromName: person.name,
                                toName: payer.name,
                                amount: amountPerPerson,
                                counted: coutFlag
                            });
                        }
                        this.howOwe.forEach(debt => {
                            if (debt => debt.from === person.id && debt.to === payer.id && debt.counted === true) {
                                const minDebt = Math.min(debt.amount, amountPerPerson);
                                if (debt.amount > amountPerPerson) {
                                    debt.amount -= minDebt;
                                    amountPerPerson = 0;
                                    debt.counted = false;
                                } else {
                                    debt.amount = 0;
                                    amountPerPerson -= minDebt;
                                    debt.counted = false;
                                }
                                // console.log(minDebt, debt.amount, debt.toName, debt.fromName);
                            }
                        });
                    }
                });
            });
            this.howOwe = this.howOwe.filter(debt => debt.amount > 0);
        }
    }
});
