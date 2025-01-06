<template>
  <v-container class="pt-5">
    <h1>Leads</h1>
    <div class="flex flew-column" style="gap: 10px">
      <v-btn @click="dialog = true" color="primary" class="mb-4"
        >Add Lead</v-btn
      >
      <!-- <v-btn @click="fetchLeads" color="blue">Fetch Leads</v-btn> -->
    </div>

    <v-list>
      <v-list-item v-for="lead in leads" :key="lead.id">
        <v-list-item-content>
          <v-list-item-title>{{ lead.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ lead.email }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ lead.phone }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="error" @click="deleteLead(lead._id)" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>Create a New Lead</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="newLead.name"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="newLead.email"
              label="Email"
              type="email"
              required
            ></v-text-field>

            <v-text-field
              v-model="newLead.phone"
              label="Phone"
              type="tel"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="dialog = false">Cancel</v-btn>
          <v-btn @click="createLead" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const config = useRuntimeConfig();
const leads = ref([]);
const dialog = ref(false);

const newLead = ref({
  name: "",
  email: "",
  phone: "",
});

const fetchLeads = async () => {
  const { data } = await useFetch(`${config.public.apiBase}/leads`);
  leads.value = data._rawValue;
};

const createLead = async () => {
  const response = await useFetch(`${config.public.apiBase}/leads`, {
    method: "POST",
    body: newLead.value,
  });

  if (response.status == 200) {
    newLead.value = { name: "", email: "", phone: "" };
    dialog.value = false;
    fetchLeads();
  } else {
    console.error("Error creating lead", response);
  }
};

const deleteLead = async (id) => {
  try {
    const response = await useFetch(`${config.public.apiBase}/lead/${id}`, {
      method: "DELETE",
    });

    if (response.status == 200) {
      leads.value = leads.value.filter((lead) => lead._id !== id);
    } else {
      console.error("Failed to delete lead", response);
    }
  } catch (error) {
    console.error("Error deleting lead", error);
  }
};

fetchLeads();
</script>
