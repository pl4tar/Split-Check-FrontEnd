import {defineStore} from 'pinia';

export const usePeopleStore = defineStore('peopleStore', {
    state: () => ({
        uniqId: 0,
        peoples: [],
        foodList: [],
        howOwe: []
    }),
    getters: {},
    actions: {
        // totalCountFood() {
        //     return this.foodList.length;
        // },
        deletePeoleItem(id) {
            this.peoples = this.peoples.filter(el => el.id !== id);
        },
        deleteFoodItem(id) {
            this.foodList = this.foodList.filter(el => el.id !== id);
        },
        addPeoleItem(name) {
            this.peoples.push({
                id: this.uniqId += 1,
                name: name
            });
        },
        addFoodItem(foodName, cost, peopleList) {
            this.foodList.push({
                id: this.uniqId += 1,
                foodName: foodName,
                cost: cost,
                userId: peopleList
            });
        }
    }
});