<template>
  <div class="text-right mt-4">
    <v-btn
      color="warning"
      @click="clearNumber"
      :disabled="checkAtLeastOne"
      text
      small
      class="text-center"
    >
      backspace
    </v-btn>
    
    <v-btn
      x-large
      color="primary"
      text
      outlined
      class="pt-0"
      @click="submitNumber"
      :disabled="checkDigits"
    >
      Submit
    </v-btn>

    <dialog-gameover
      v-if="dialogs.gameover"
      @hidedialog="dialogs.gameover = false"
      @playagain="playAgain()"
    />

    <dialog-winner
      v-if="dialogs.winner"
      @hidedialogwinner="hidedialogwinner()"
      @playagain="playAgain()"
      @resethighscores="resethighscores()"
    />

  </div>
</template>

<script>

export default {
  data() {
    return {
      //digit_entry: "",
      dialogs: {
        gameover: false,
        winner: false,
      },
    };
  },
  components: {
    "dialog-gameover": require("@/components/dialog-gameover.vue").default,
    "dialog-winner": require("@/components/dialog-winner.vue").default,
  },
  computed: {
    checkDigits() {
      if (this.$store.state.current_entry.length < 4) {
        var check = true;
      }
      return check;
    },
    checkAtLeastOne() {
      if (this.$store.state.current_entry.length < 1) {
        var check = true;
      }
      return check;
    },
  },
  methods: {
    submitNumber() {
      this.$store.dispatch("submitNumber");

      if (this.$store.state.rightNumberRightPlace == 4) {
        this.$store.dispatch("setWonFlag");
        this.dialogs.winner = true;
        this.$confetti.start();
        setTimeout(() => {
          this.$confetti.stop();
        }, 3000);
      }

      if (this.$store.state.gameoverFlag == true) {
        this.dialogs.gameover = true;
      }

    },
    clearNumber() {
      this.$store.commit("keypadDelete");
    },
    playAgain() {
      this.dialogs.gameover = false;
      this.dialogs.winner = false;
      this.$store.dispatch("resetGame");
    },
    resethighscores() {
      this.dialogs.winner = false;
      this.$store.dispatch("resetGame");
      localStorage.removeItem("answerHigh");
      localStorage.removeItem("timeHigh");
    },
    hidedialogwinner() {
      this.dialogs.winner = false;
      this.$store.commit("showWinnerMove"); //avoid gameover dialog from showing
    }    
  }
}

</script>