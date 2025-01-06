<template>
  <v-container>
    <h1>Leads</h1>
    <v-btn @click="fetchLeads">Fetch Leads</v-btn>

    <v-list> </v-list>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const leads = ref([]);

const fetchLeads = async () => {
  const { data } = await useFetch("/api/leads");
  leads.value = data;
};

const deleteLead = async (id) => {
  await useFetch(`/id/leads/${id}`, {
    method: "DELETE",
  });

  fetchLeads();
};
</script>
