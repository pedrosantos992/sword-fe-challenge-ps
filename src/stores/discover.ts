import { defineStore } from 'pinia'

export const useDiscoverStore = defineStore('discoverStore', {
  state:() => ({
    items: [
      {
        name: "first",
        image: "https://opengraph.githubassets.com/123abc/facebook/react",
      },
      {
        name: "second",
        image:
          "https://opengraph.githubassets.com/%7Brandom_hash%7D/%7Buser%7D/%7Brepo%7D",
      },
      {
        name: "third",
        image: "https://opengraph.githubassets.com/123abc/facebook/react",
      },
      {
        name: "fourth",
        image:
          "https://opengraph.githubassets.com/%7Brandom_hash%7D/%7Buser%7D/%7Brepo%7D",
      },
    ]
  })
})
