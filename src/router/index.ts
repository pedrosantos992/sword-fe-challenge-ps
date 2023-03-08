import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DiscoverView from "../components/Discover.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyAccountView from "../views/MyAccountView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/my-account",
      name: "myAccount",
      component: MyAccountView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/");
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (await getCurrentUser()) {
      next("/discover");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
