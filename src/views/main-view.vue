<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecipesView from "./recipes-view.vue";
import ShoppingList from "./shopping-list.vue";
import ThemeToggle from "@/components/theme-toggle.vue";
import Settings from "@/components/settings.vue";
import { onMounted, ref } from "vue";
import { SettingsCategories } from "@/types";
import { getSettingByName, updateSettings } from "@/firebase";

//Settings
const setting = ref<SettingsCategories>();
const categories = ref<string[]>([]);

onMounted(async () => {
  setting.value = await getSettingByName<SettingsCategories>("categories");
  if (setting.value) {
    categories.value = setting.value.data.categories;
  }
  console.log(setting.value);
});

async function addCategory(input: string) {
  if (!setting.value || !input) return;
  categories.value.push(input);
  await updateSettings(setting.value.id, { categories: categories.value });
}

async function deleteCategory(index: number) {
  if (!setting.value) return;
  categories.value.splice(index, 1);
  await updateSettings(setting.value.id, { categories: categories.value });
}
</script>

<template>
  <Tabs default-value="shopping-list" class="w-[400px]">
    <div class="flex justify-between w-full">
      <ThemeToggle />
      <Settings
        :categories="categories"
        @addCategory="addCategory"
        @deleteCategory="deleteCategory"
      />
      <TabsList>
        <TabsTrigger value="shopping-list"> Einkaufsliste </TabsTrigger>
        <TabsTrigger value="recipes"> Rezepte </TabsTrigger>
      </TabsList>
    </div>
    <TabsContent value="shopping-list"> <ShoppingList /> </TabsContent>
    <TabsContent value="recipes"> <RecipesView /> </TabsContent>
  </Tabs>
</template>

<style scoped></style>
