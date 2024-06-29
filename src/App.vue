<template>
  <header class="header-container">
    <div class="logo">
      <h1>Жилфонд</h1>
    </div>
    <div class="user">
      <article>
        <p class="user-text">Пользователь</p>
      </article>
    </div>
  </header>
  <main>
    <div class="main-container">
      <div class="side-bar">
        <SideBar />
      </div>
      <div class="variant-item-info">
        <Main />
      </div>
    </div>
  </main>
  <footer>
    
  </footer>
</template>

<script setup>
import Main from './components/Main.vue'
import SideBar from './components/SideBar.vue';
</script>

<style lang="scss" scoped>
@import "./assets/css/style.scss";
</style>
