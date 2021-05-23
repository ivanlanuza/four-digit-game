<template>
  <tr>
    <td class="text-body-1 text-center">{{ result.id }}</td>
    <td class="text-body-1 text-left">{{ result.guess }}</td>
    <td class="text-body-1 text-center">{{ result.rNrP }}</td>
    <td class="text-body-1 text-center">{{ result.rNwP }}</td>
  </tr>
</template>

<script>
export default {
  props: ["result"],
};
</script>

<style>
</style>