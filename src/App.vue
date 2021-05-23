<template>
  <v-app >
    <v-main :class="$vuetify.breakpoint.xs ? 'pt-10' : 'pt-16'">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
  }
</script>

<style>
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  .v-application, .v-application .text-body-2, .v-application .text-body-1, .v-application .title,
  .v-application .text-h1,
  .v-application .text-h2,
  .v-application .text-h3,
  .v-application .text-h4,
  .v-application .text-h5,
  .v-application .text-h6,
  .v-application .text-subtitle-2,
  .v-application .text-subtitle-1,
  .v-application .text-caption
     {
    font-family: 'Poppins', 'Roboto', sans-serif !important;
  }

  .v-application--is-ltr .v-text-field .v-label {
    font-family: 'Poppins' !important;
    font-size: 12px !important;
  }

  .v-application .v-application--wrap .v-main {
    transition-duration: 0s !important;
  }
  
</style>