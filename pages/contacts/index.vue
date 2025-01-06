<template>
  <v-container>
    <h1>Contacts</h1>
    <v-btn>Fetch Contacts</v-btn>

    <v-list>
      <v-list-item v-for="contact in contacts" :key="contact.id">
        <v-list-item-title>{{ contact.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ contact.role }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const contacts = ref([]);

const fetchContacts = async () => {
  const { data } = await useFetch(`/api/contacts`);
  contacts.value = data;
};
</script>
