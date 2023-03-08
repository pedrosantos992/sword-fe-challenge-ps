<script setup lang="ts"></script>

<template>
  <main>
    <h1 class="welcome">
      Welcome! Please <a href="/login">Login</a> to view Discover page
    </h1>
  </main>
</template>

<style scoped>
.welcome {
  text-align: center;
  margin-top: 40px;
}
.welcome a {
  text-decoration: underline;
}
.welcome a:hover {
  background: unset;
}

@media (max-width: 500px) {
  .welcome {
    font-size: 30px;
    margin-top: 80px;
  }
}
</style>
