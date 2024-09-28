<script setup lang="ts">
import { onMounted, ref } from "vue";
import { addRecipe, getRecipeAll } from "../firebase";
import { DocumentData } from "firebase/firestore";
import RecipeItem from "@/components/recipe-item.vue";

const recipes = ref<DocumentData[]>([]);
onMounted(async () => {
  recipes.value = await getRecipeAll();
  //await updateRecipeByName(recipes.value[0]);
  //await addRecipe();
});
</script>

<template>
  <div>
    <RecipeItem v-for="recipe in recipes" :key="recipe.id" :name="recipe.name">
    </RecipeItem>
  </div>
</template>
