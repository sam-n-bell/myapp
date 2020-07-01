
const state = () => ({
    snackBar: {
        visible: false,
        text: '',
        color: '',
        position: ''
    } 
})

const getters = {

}

const actions = {
    hideSnackBar( {commit}) {
        commit("hideSnackBar");
    },
    showSnackBar ( {commit, dispatch}, options) {
        commit("showSnackBar", options)
    }
}

const mutations = {
    showSnackBar (state, options) {
        state.snackBar.visible = true;
        state.snackBar.text = options.text;
        state.snackBar.color = options.color;
        state.snackBar.position = options.position || 'bottom'
    },
    hideSnackBar (state) {
        state.snackBar.visible = false;
        state.snackBar.text = "";
        state.snackBar.color = "";
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}