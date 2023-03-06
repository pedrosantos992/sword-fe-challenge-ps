<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <img
            alt="Home"
            class="logo"
            src="@/assets/logo.png"
            width="40"
            height="40"
          />
        </RouterLink>
        <RouterLink to="/discover">Discover</RouterLink>
        <RouterLink to="/login" v-if="!isLoggedIn">Login</RouterLink>
        <div class="account-options" v-else>
          <RouterLink to="/my-account">{{ userEmail }}</RouterLink>
          <Button @click="handleSignout" :label="'Sign out'" />
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
import Button from "./components/atoms/Button.vue";

const isLoggedIn = ref({});
const userEmail = ref({});
let auth: any;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      userEmail.value = user.email!;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignout = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  width: 100%;
  font-size: 18px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  margin-top: auto;
  margin-bottom: auto;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
  }

  .logo {
    margin: 0;
    cursor: pointer;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }
  .account-options {
    display: flex;
    flex-direction: row;
  }
  .account-options a {
    width: fit-content;
  }
}
</style>
