<script lang="ts" setup>
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
</script>

<template>
  <Card>
    <CardContent class="shopping-item">
      <span class="text-lg">Mehl</span>
      <span class="text-lg text-right">100 g</span>
      <Button variant="destructive" size="icon">
        <Trash2 class="w-4 h-4" />
      </Button>
    </CardContent>
  </Card>
</template>

<style scoped>
.shopping-item {
  display: grid;
  grid-template-columns: 1fr 100px auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
</style>
