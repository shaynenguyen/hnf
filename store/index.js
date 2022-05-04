export const state = () => ({
    mainDrawer:     null,
    secondDrawer:   null,
    clipped:        false,
    miniVariant:    false,
    fixed:          false,
})

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
    }
}