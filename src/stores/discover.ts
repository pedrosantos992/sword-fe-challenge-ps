import axios from "axios";
import { defineStore } from "pinia";
import { testData } from "./mockData.js";

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
          `https://api.github.com/search/repositories?q=license%3Amit&per_page=10&page=1`,
          { params }
        );
        // add or remove filter
        if (this.items.filter((e) => e.language === language).length > 0) {
          this.items.splice(
            this.items.findIndex((item) => item.language === language),
            1
          );
        } else {
          this.items.push({ ...data.data, language: language });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
