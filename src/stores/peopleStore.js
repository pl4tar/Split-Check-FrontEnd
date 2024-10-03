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
        addFoodItem(foodName, cost, peopleIds) {
            this.foodList.push({
                id: ++this.uniqId,
                foodName: foodName,
                cost: cost,
                peopleList: peopleIds
            });
        },
        // Расчет долга
        calcForEach() {
            this.howOwe = [];

            this.foodList.forEach(food => {
                const amountPerPerson = food.cost / food.peopleList.length;

                food.peopleList.forEach(person => {
                    const existingDebt = this.howOwe.find(debt => debt.id === person.id);

                    if (existingDebt) {
                        existingDebt.moneyOwn += amountPerPerson;
                    } else {
                        this.howOwe.push({
                            id: person.id,
                            name: person.name,
                            moneyOwn: amountPerPerson
                        });
                    }
                });
            });
        }
    }
});
