<template>
  <div>
    <navbar />
    <v-main class="grey lighten-3">
      <v-container class="pt-0">
        <v-row>
          <v-col cols="12" md="4">
            <input-digits />
            
          </v-col>

          <v-col>
            <v-sheet min-height="55vh" rounded="lg" class="pa-6">
              <result-table :resultsdata="resultsdata" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("generateRandomDigit");
  },
  components: {
    "result-table": require("@/components/result-table.vue").default,
    navbar: require("@/components/navbar.vue").default,
    "input-digits": require("@/components/input-digits.vue").default,
  },
  computed: {
    resultsdata: {
      get() {
        return this.$store.getters["getResults"];
      },
      currententry: {
        get() {
          return this.$store.getters["getCurrentEntry"];
        },
      },
    },
  },
};
</script>