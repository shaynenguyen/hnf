// ~/store/snackbar.js

export const state = () => ({
    content:    'Default Message.',
    color:      ''
})

export const mutations = {
    showMessage ( state, payload ) {
        state.content   = payload.content
        state.color     = payload.color
    }
}