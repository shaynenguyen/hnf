// STAGE
export const state = () => ({
    mainDrawer:     null,
    secondDrawer:   null,
    clipped:        false,
    miniVariant:    false,
    fixed:          false,
    message:        'empty',
})

// MUTATIONS
export const mutations = {
    UPDATE_MAIN_DRAWER(state){
        state.mainDrawer = !state.mainDrawer
    },
    UPDATE_SECOND_DRAWER(state) {
        state.secondDrawer = !state.secondDrawer
    },
    UPDATE_CLIPPED(state) {
        state.clipped = !state.clipped
    },
    UPDATE_MINI_VARIANT(state) {
        state.miniVariant = !state.miniVariant
    },
    UPDATE_FIXED(state) {
        state.fixed = !state.fixed
    },
    UPDATE_MESSAGE(state, payload){
        state.message = payload
    }
}

// ACTIONS
export const actions = {}

// GETTERS
export const getters = {}