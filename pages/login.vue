<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="9" xs="12">
        <v-card>
          <v-card-title primary-title class="justify-center">Welcome, Login Now</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field v-model="email" label="Email Address" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="password" label="Password" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="d-none d-sm-flex">
            <v-btn large color="primary" width="150" :loading="loginLoading" @click="login()">Login</v-btn>
            <v-spacer />
            <v-btn large color="error">Register</v-btn>
          </v-card-actions>
          <v-card-actions class="d-sm-none">
            <v-row no-gutters>
              <v-col cols="12" class="mb-3">
                <v-btn large color="primary" width="100%" :loading="loginLoading" @click="login()">Login</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn large color="error" width="100%">Register</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { matpGetters, mapActions } from "vuex";
export default {
  layout: "loginregister",
  components: {},
  data: () => {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    loginLoading () {
      return this.$store.state.authentication.loginLoading;
    }
  },
  watch: {},
  methods: {
    ...mapActions({
      login: "authentication/login"
    })
  }
};
</script>