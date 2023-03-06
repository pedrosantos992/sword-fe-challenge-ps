import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";

library.add(starRegular, starSolid);
const app = createApp(App);

const firebaseConfig = {
  apiKey: "AIzaSyBbn0jne0VY4pnQD_xMyfqByd90SqF4Lhg",
  authDomain: "sword-fe-challenge-ps.firebaseapp.com",
  projectId: "sword-fe-challenge-ps",
  storageBucket: "sword-fe-challenge-ps.appspot.com",
  messagingSenderId: "95171738760",
  appId: "1:95171738760:web:640729c4264d1a548c333d",
  measurementId: "G-Y51844TWQ3",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export { auth };

app.component("fa-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
