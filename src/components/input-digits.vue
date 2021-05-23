<template>
  <div >
    <v-sheet rounded="lg" class="pa-6">
      <v-row
        ><v-col>
          <v-text-field
            v-model="this.currententry[0]"
            outlined
            x-large
            class="text-h4 centered-input"
            disabled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="this.currententry[1]"
            outlined
            x-large
            class="text-h4 centered-input"
            disabled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="this.currententry[2]"
            outlined
            x-large
            class="text-h4 centered-input"
            disabled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="this.currententry[3]"
            outlined
            x-large
            class="text-h4 centered-input"
            disabled
          ></v-text-field>
        </v-col>
      </v-row>
      <keypad />
      <v-divider></v-divider>
      <buttons />
    </v-sheet>
  </div>
</template>

<script>
import Vue from "vue";
import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);

export default {
  computed: {
    currententry: {
      get() {
        return this.$store.getters["getCurrentEntry"];
      },
    },
  },
  components: {
    "buttons": require("@/components/buttons.vue").default,
    "keypad": require("@/components/keypad.vue").default,
  },
};
</script>

<style>
.centered-input input {
  text-align: center !important;
}
</style>