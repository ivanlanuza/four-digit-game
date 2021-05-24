<template>
  <div>
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <div v-show="!$vuetify.breakpoint.xs">
          <v-icon class="ml-4 mr-2">mdi-dialpad</v-icon>Four-Digit Game
        </div>
        <v-spacer></v-spacer>

        <v-btn text @click="resetGame" outlined large> New Game </v-btn>

        <v-btn class="ml-2" large text @click="showInstructions">
          How to Play
        </v-btn>
      </v-container>
    </v-app-bar>
    <dialog-instructions
      v-if="dialogs.instructions"
      @hidedialog="dialogs.instructions = false"
      @ellieMode="ellieMode()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogs: {
        instructions: false,
      },
    };
  },

  components: {
    "dialog-instructions": require("@/components/dialog-instructions.vue")
      .default,
  },
  methods: {
    resetGame() {
      this.$store.dispatch("resetGame");
    },
    showInstructions() {
      this.dialogs.instructions = true;
    },
    ellieMode() {
      this.dialogs.instructions = false;
      this.$store.dispatch("resetGame");
      this.$store.commit("ellieMode");
    },
  },
};
</script>
