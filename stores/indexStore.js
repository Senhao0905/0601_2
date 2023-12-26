import { defineStore } from "pinia";

export default defineStore("indexStore", {
    // data
    state: () => ({
        location : 0
    }),
    // computed
    getters: {
        getLocation: (state) => `現在的位置是: ${state.location}`
    },
    // methods
    // 可以用this 的區域
    actions:{
        updateLocation(local){
            this.location = local;
        }
    }
});

