<template>
  <div class="text-center">
  <!--<v-sheet rounded="lg" class="pa-2 mt-6 text-center">-->
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(1)"
      :disabled="checkOne"
      >1</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(2)"
      :disabled="checkTwo"
      >2</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(3)"
      :disabled="checkThree"
      >3</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(4)"
      :disabled="checkFour"
      >4</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(5)"
      :disabled="checkFive"
      >5</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(6)"
      :disabled="checkSix"
      >6</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(7)"
      :disabled="checkSeven"
      >7</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(8)"
      :disabled="checkEight"
      >8</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(9)"
      :disabled="checkNine"
      >9</v-btn
    >
    <v-btn
      :x-large=!$vuetify.breakpoint.xs
      :medium=$vuetify.breakpoint.xs
      plain
      color="primary"
      class="ma-1"
      @click="keypadEntry(0)"
      :disabled="checkZero"
      >0</v-btn
    >
  <!--</v-sheet>-->
  </div>
</template>

<script>
export default {
  methods: {
    keypadEntry(x) {
      this.$store.dispatch("keypadEntry", x);
    },
  },
  computed: {
    checkZero() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.length < 1) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("0") != -1) {
        check = true;
      }
      return check;
    },
    checkOne() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("1") != -1) {
        check = true;
      }
      return check;
    },
    checkTwo() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("2") != -1) {
        check = true;
      }
      return check;
    },
    checkThree() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("3") != -1) {
        check = true;
      }
      return check;
    },
    checkFour() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("4") != -1) {
        check = true;
      }
      return check;
    },
    checkFive() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("5") != -1) {
        check = true;
      }
      return check;
    },
    checkSix() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("6") != -1) {
        check = true;
      }
      return check;
    },
    checkSeven() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("7") != -1) {
        check = true;
      }
      return check;
    },
    checkEight() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("8") != -1) {
        check = true;
      }
      return check;
    },
    checkNine() {
      var check = false;
      if (this.$store.state.current_entry.length >= 4 || this.$store.state.gameoverFlag || this.$store.state.wonFlag) {
        check = true;
      }
      if (this.$store.state.current_entry.indexOf("9") != -1) {
        check = true;
      }
      return check;
    },                                
  },
};
</script>

<style>
</style>