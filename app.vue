<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-toolbar-title>CRM App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/leads">Leads</v-btn>
      <v-btn to="/contacts">Contacts</v-btn>
      <v-btn to="/notes">Notes</v-btn>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
