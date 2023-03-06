import { defineStore } from "pinia";
import router from "../router/index";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const useAuthStore = defineStore("authStore", {
  state: () => ({}),
  getters: {},
  actions: {
    async signIn(user: any) {
      const auth = getAuth();
      const { email, password } = user;
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push("/discover");
          const user = userCredential.user;
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    async register(user: any) {
      const auth = getAuth();
      const { email, password, confirmPassword } = user;
      if (password !== confirmPassword) {
        return alert("Passwords do not match!");
      }
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          router.push("/discover");
          alert("Account created!");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    async signout() {
      const auth = getAuth();
      await signOut(auth).catch((error) => {
        console.log(error.message);
      });
    },
  },
});
