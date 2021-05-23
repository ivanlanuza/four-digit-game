<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center text-subtitle-1 myfont">
              <span class="myfont">#</span>
            </th>
            <th class="text-left text-subtitle-1 myfont">
              <span class="myfont">Answers</span>
            </th>
            <th class="text-center">
              <v-icon large color="green"> mdi-check-all </v-icon>
            </th>
            <th class="text-center">
              <v-icon large color="orange"> mdi-check </v-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <result-item
            v-for="result in resultsdata"
            :key="result.id"
            :result="result"
          />
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ["resultsdata"],
  components: {
    "result-item": require("@/components/result-item.vue").default,
  },
};
</script>

<style>
.myfont {
  font-family: "Poppins", "Roboto", sans-serif !important;
}
</style>