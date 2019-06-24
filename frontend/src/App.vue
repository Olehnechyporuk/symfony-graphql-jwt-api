<template>
  <v-app>
    <v-toolbar app>
      <div id="nav">
        <router-link to="/">Login</router-link> |
        <router-link to="/registration">Registration</router-link>
      </div>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

