import { defineStore } from "pinia";

export const useStore = defineStore("app", {
  state: () => {
    return {
      counter: 0,
      name:'Jimmy',
      age:31,
      sex:'男',
      weight:'89kg',
      address:'广东省深圳市南山区沙河观景阁1418'
    };
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
  actions: {
    setCounter(c: number) {
      this.counter = c;
    },
    setDoubleCounter(c: number) {
      this.counter = c * 2;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
  },
});

export function useStoreWidthOut(){
  return useStore;
}
