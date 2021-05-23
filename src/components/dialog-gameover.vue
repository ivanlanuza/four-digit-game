<template>
  <v-dialog :value="true" persistent max-width="400">
    <v-card>
      <v-card-title class="headline">
        <span class="myfont">Uh-oh! Game Over!</span>
      </v-card-title>
      <v-card-text class="text-subtitle-2"
        ><span class="myfont"
          >Sorry, the correct answer is:
          {{ this.$store.state.answer.join("") }}. <BR /> Play again?</span
        ></v-card-text
      >

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('hidedialog')"> No </v-btn>
        <v-btn color="green" text @click="$emit('playagain')">
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
