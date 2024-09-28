<script setup lang="ts">
import ThemeToggle from "./components/theme-toggle.vue";
import main_view from "./views/main-view.vue";
</script>

<template>
  <div class="main-container">
    <main_view />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh;
  position: relative;
  padding: 1rem;
}
</style>
