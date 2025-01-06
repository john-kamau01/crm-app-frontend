<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-toolbar-title>CRM App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/leads" text>Leads</v-btn>
      <v-btn to="/contacts" text>Contacts</v-btn>
      <v-btn to="/notes" text>Notes</v-btn>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
