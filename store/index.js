// STAGE
export const state = () => ({
    mainDrawer:             false,
    fixed:                  false,
    message:                'empty',
    loadingDialog:          false,
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
    SWITCH_LOADING(state){
        state.loadingDialog = !state.loadingDialog
    },

}

// ACTIONS
export const actions = {}

// GETTERS
export const getters = {}