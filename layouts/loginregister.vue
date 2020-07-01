<template>
  <v-app>
    <nuxt />
    <SnackBar/>
  </v-app>
</template>

<script>
import SnackBar from "~/components/SnackBar"
export default {
  components: {
    SnackBar
  }
};
</script>