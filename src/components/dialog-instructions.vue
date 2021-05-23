<template>
  <v-dialog :value="true" persistent max-width="480">
    <v-card>
      <v-card-title class="headline">
        <span class="myfont">How To Play</span>
      </v-card-title>
      <v-card-text class="text-heading-4"
        ><span class="myfont"
          >Goal: Guess the 4-digit number in as few tries as possible.</span
        ></v-card-text
      >
      <v-card-text class="text-heading-4"
        ><span class="myfont">Game Instructions: </span>
        <ul>
          <li>The number cannot start with 0.</li>
          <li>Each digit should be unique.</li>
          <li>
            The <v-icon color="green"> mdi-check-all </v-icon> icon indicates
            count of digits in your guess that is the RIGHT number in the RIGHT
            place
          </li>
          <li>
            The <v-icon color="orange"> mdi-check </v-icon> icon indicates count
            of digits in your guess that is the RIGHT number but in the WRONG
            place
          </li>
          <li>You have max 8 tries.</li>
        </ul>
      </v-card-text>

      <v-card-text class="text-heading-4"
        ><span class="myfont"
          >Ellie Mode: Allows my daughter to win by inputting her favorite 1023
          number.</span
        ></v-card-text
      >
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="red" outlined small text @click="$emit('ellieMode')">
          Ellie Mode
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn large outlined color="primary" text @click="$emit('hidedialog')">
          close
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
