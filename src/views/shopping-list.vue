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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addItemToShoppingList } from "@/firebase";
import { ShoppingListItem } from "@/types";
import { Plus } from "lucide-vue-next";
import { ref } from "vue";

const itemToAdd = ref<ShoppingListItem>({
  name: "Test",
  amount: 1,
  unit: "g",
  category: "TroSo",
});

async function addItem() {
  addItemToShoppingList(itemToAdd.value);
}
</script>

<template>
  <div>
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="default" size="icon"> <Plus /> </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Zur Einkaufsliste hinzufügen</DialogTitle>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="Name" class="text-right"> Name </Label>
            <Input id="name" class="col-span-3" autofocus />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="amount" class="text-right"> Anzahl </Label>
            <Input id="amount" type="number" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button @click="addItem()"> Hinzufügen </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
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
