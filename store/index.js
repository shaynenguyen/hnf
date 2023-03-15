// STAGE
export const state = () => ({
    mainDrawer:             false,
    fixed:                  false,
    loadingDialog:          false,
    loginUser:              '',
    authenticated:          false,
})

// MUTATIONS
export const mutations = {
    UPDATE_MAIN_DRAWER(state){
        state.mainDrawer = !state.mainDrawer
    },
    UPDATE_FIXED(state) {
        state.fixed = !state.fixed
    },
    UPDATE_MESSAGE(state, payload){
        state.message = payload
    },
    TOGGLE_LOADING_DIALOG(state){
        state.loadingDialog = !state.loadingDialog
    },
    UPDATE_LOGIN_USER(state, payload){
        state.loginUser = payload
    },
    TOGGLE_AUTHENTICATED(state){
        state.authenticated = !state.authenticated
    }
}

// ACTIONS
export const actions = {}

// GETTERS
export const getters = {
    getLoadingDialog(state){
        return state.loadingDialog;
    },
    getLoginUser(state){
        return state.loginUser;
    },
    getAuthenticated(state){
        return state.authenticated;
    }
}