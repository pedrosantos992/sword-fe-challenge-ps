import axios from "axios";
import { defineStore } from "pinia";

export const useDiscoverStore = defineStore("discoverStore", {
  state: () => ({
    items: [],
  }),
  getters: {
    getItems(state) {
      return state.items;
    },
  },
  actions: {
    async fetchItems(language?: string, sort?: string) {
      const params = { language: language, sort: sort };
      try {
        const data = await axios.get(
          `https://api.github.com/search/repositories?q=stars%3A%3E1000%20license%3Amit&per_page=5&page=1`,
          { params }
        );
        this.items = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
