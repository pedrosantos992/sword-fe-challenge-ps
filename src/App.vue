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
        <RouterLink to="/discover" v-if="isLoggedIn">Discover</RouterLink>
        <div class="account-options">
          <RouterLink to="/login" v-if="!isLoggedIn">Login</RouterLink>
          <RouterLink to="/my-account" v-else>{{ userEmail }}</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
</script>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: row;
}

.logo {
  display: block;
  margin: 0;
  cursor: pointer;
}

.wrapper {
  font-size: 18px;
  text-align: center;
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
  width: 100%;
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
  margin-top: auto;
  margin-bottom: auto;
}

nav a:first-of-type {
  border: 0;
}
.account-options {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

@media (max-width: 500px) {
  nav {
    flex-direction: column;
    gap: 10px;
  }
  .account-options {
    margin-right: auto;
    margin-left: 0;
  }
}
</style>
