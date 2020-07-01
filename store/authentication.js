
const state = () => ({
    loginLoading: false,
    registrationLoading: false,
    loginError: null,
    registrationError: null,
    jwt: null,
    user: null
})

const getters = {

}

const actions = {
    async login({commit, dispatch}, credentials) {
        try {
            commit("login");
            commit("loginSuccess", "fakejwt");
            dispatch("notifications/showSnackBar", {
                text: 'Login Successful',
                color: 'success',
                position: 'top'
            },
            {root: true})
        } catch (error) {
            commit("loginFailure");
            console.error(error.message);
        }
    }
}

const mutations = {
    login (state) {
        state.loginLoading = true;
        state.loginError = null;
        state.user = null;
        state.jwt = null;
    },
    loginSuccess (state, jwt) {
        state.loginLoading = false;
        state.loginError = null;
        state.user = null;
        state.jwt = jwt;
    },
    loginFailure (state, error) {
        state.loginLoading = false;
        state.loginError = error;
        state.user = null;
        state.jwt = null;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}