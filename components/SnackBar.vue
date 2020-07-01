<template>
  <v-snackbar 
  v-model="localSnackBar.visible" 
  :color="localSnackBar.color" 
  @input="hideSnackBar()"
  :bottom="localSnackBar.position === 'bottom'"
  :top="localSnackBar.position === 'top'">
  {{ localSnackBar.text }}
  <v-btn color="primary" text @click="hideSnackBar()">
      Close
  </v-btn>
  </v-snackbar>
</template>

<script>
import { mapActions } from "vuex";
import _ from 'lodash';

export default {
  data () {
    return {
        localSnackBar: {
            color: '',
            visible: false,
            text: '',
            position: ''
        }
    }
  },
  computed: {
    snackBar () {
        return this.$store.state.notifications.snackBar;
    }
  },
  watch: {
      snackBar: {
          handler(object) {
            this.localSnackBar = _.cloneDeep(object);
          },
          deep: true
      }
  },
  methods: {
    ...mapActions({
      hideSnackBar: "notifications/hideSnackBar"
    })
  }
};
</script>

<style scoped>
</style>