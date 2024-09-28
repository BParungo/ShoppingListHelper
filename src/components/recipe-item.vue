<script setup lang="ts">
import { defineProps } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
defineProps<{
  name: string;
  items?: {
    name: string;
    amount: number;
    amountType: string;
    itemType: string;
  }[];
}>();
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ name }}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul>
        <li v-for="item in items" :key="item.name">
          {{ item.name }}: {{ item.amount }} {{ item.amountType }}
          {{ item.itemType }}
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button>Zur Einkaufsliste</Button>
      <Button>Rezept Löschen</Button>
    </CardFooter>
  </Card>
</template>
