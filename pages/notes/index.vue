<template>
  <v-container>
    <h1>Notes</h1>
    <v-btn @click="fetchNotes" color="primary">Fetch Notes</v-btn>

    <v-list>
      <v-list-item v-for="note in notes" :key="note.id">
        <v-list-item-title>{{ note.content }}</v-list-item-title>
        <v-list-item-subtitle>{{ note.content }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const notes = ref([]);

const fetchNotes = async () => {
  const { data } = await useFetch("/api/notes");
  notes.value;
};
</script>
