<script setup lang="ts">
import { ref } from "vue";
import main_view from "./views/main-view.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const deferredPrompt = ref();
window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e);
  deferredPrompt.value = e;
});
</script>

<template>
  <div class="main-container">
    <main_view />
  </div>
  <Card
    class="absolute bottom-0 rounded-none w-full h-32 flex items-center justify-center"
    v-if="deferredPrompt"
  >
    <Button @click="deferredPrompt.prompt()"> App installieren</Button>
  </Card>
</template>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh;
  position: relative;
  padding: 1rem;
}
</style>
