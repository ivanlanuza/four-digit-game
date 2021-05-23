<template>
  <v-dialog :value="true" persistent max-width="480">
    <v-card>
      <v-card-title class="headline">
        <span class="myfont" v-if="!this.$store.state.highScoreFlag"
          >You're a Winner!</span
        >
        <span class="myfont" v-if="this.$store.state.highScoreFlag"
          >Woohoo! A new record!</span
        >
      </v-card-title>
      <BR />
      <v-card-text class="text-subtitle-2">
        <span class="myfont">
          <v-simple-table>
            <tr>
              <th></th>
              <th class="text-center">This Game</th>
              <th class="text-center">Best Record</th>
            </tr>
            <tr>
              <td>Answers</td>
              <td class="text-center">
                {{ this.$store.state.gameStats.answerCurrent }}
              </td>
              <td class="text-center">
                {{ this.$store.state.gameStats.answerHigh }}
              </td>
            </tr>
            <tr>
              <td>Time to Solve</td>
              <td class="text-center">
                {{ this.$store.state.gameStats.timeCurrent }} s
              </td>
              <td class="text-center">
                {{ this.$store.state.gameStats.timeHigh }} s
              </td>
            </tr>
          </v-simple-table>
        </span>
      </v-card-text>
      <BR />
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn x-small outlined text @click="$emit('resethighscores')">
          Reset High Scores
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('hidedialogwinner')"> CLOSE </v-btn>
        <v-btn outlined color="green" text @click="$emit('playagain')">
          Play Again
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style>
.myfont {
  font-family: "Poppins", "Roboto", sans-serif !important;
}
</style>
