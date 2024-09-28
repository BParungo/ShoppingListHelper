<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cog, Trash2 } from "lucide-vue-next";
import DialogDescription from "@/components/ui/dialog/DialogDescription.vue";
import { ref } from "vue";

defineEmits(["addCategory", "deleteCategory"]);
defineProps<{ categories: string[] }>();
const input = ref<string>();
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="secondary" size="icon"> <Cog /> </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Kategorien bearbeiten</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        Hier kannst du Kategorien hinzufügen, bearbeiten oder löschen.
      </DialogDescription>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="category" class="text-right"> Kategorie </Label>
          <Input id="category" class="col-span-3" v-model="input" autofocus />
        </div>
      </div>
      <Button @click="$emit('addCategory', input)"> Hinzufügen </Button>
      <div>
        <Card v-for="(category, index) in categories" :key="category">
          <CardContent class="list-item">
            <span class="text-lg">{{ category }}</span>
            <Button
              @click="$emit('deleteCategory', index)"
              variant="destructive"
              size="icon"
            >
              <Trash2 class="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      <DialogFooter> </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
<style scoped>
.list-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
</style>
