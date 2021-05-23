<template>
  <div>
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
        class="pt-0"
        @click="submitNumber"
        :disabled="checkDigits"
      >
        Submit
      </v-btn>
    </v-sheet>
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
import Vue from "vue";
import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);

export default {
  data() {
    return {
      digit_entry: "",
      dialogs: {
        gameover: false,
        winner: false,
      },
    };
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
    currententry: {
      get() {
        return this.$store.getters["getCurrentEntry"];
      },
    },
  },
  components: {
    "dialog-gameover": require("@/components/dialog-gameover.vue").default,
    "dialog-winner": require("@/components/dialog-winner.vue").default,
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
  },
};
</script>

<style>
.centered-input input {
  text-align: center !important;
}
</style>