import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const usePeopleStore = defineStore('peopleStore', {
    state: () => ({
        // return {
        //     peoples: [],
        //     foodList: [],
        //     howOwe: []
        // }
        peoples: [
            {
                id: 1,
                name: "Иван",
            },
            {
                id: 2,
                name: "Данил",
            },
            {
                id: 3,
                name: "Андрей",
            },
        ],
        foodList: [
            {
                id: 1231,
                foodName: "краб",
                cost: 111,
            },
            {
                id: 23212,
                foodName: "мидии",
                cost: 112,
            },
            {
                id: 331231,
                foodName: "лангуст",
                cost: 113,
            },
        ]
    }),
    getters: {
        countedCheck(){

        },
    },
},)