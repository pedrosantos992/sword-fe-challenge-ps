import { SESSION_STORAGE } from "@/helpers/constants";
import axios from "axios";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useDiscoverStore = defineStore("discoverStore", {
  state: () => ({
    items: useStorage(SESSION_STORAGE.ITEMS, []) as any,
    bookmarks: useStorage(SESSION_STORAGE.BOOKMARKS, []) as any,
  }),
  getters: {
    getItems(state) {
      return state.items;
    },
    getBookmarks(state) {
      return state.bookmarks;
    },
    getSelectedFilters(state) {
      return state.items.map((e: { language: String }) => e.language);
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
        if (
          this.items.filter(
            (e: { language: String }) => e.language === language
          ).length > 0
        ) {
          this.items.splice(
            this.items.findIndex(
              (item: { language: String }) => item.language === language
            ),
            1
          );
        } else {
          this.items.push({ ...data.data, language: language });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleFavorites(item: { id: Number }) {
      if (
        this.bookmarks.filter((e: { id: Number }) => e.id === item.id).length >
        0
      ) {
        this.bookmarks.splice(
          this.bookmarks.findIndex((e: { id: Number }) => e.id === item.id),
          1
        );
      } else {
        this.bookmarks.push(item);
      }
    },
  },
});
