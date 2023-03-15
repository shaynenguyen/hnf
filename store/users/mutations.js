export default {
    // Dialogs
    TOGGLE_BIO_DIALOG(state){
        state.bioDialog = !state.bioDialog
    },
    TOGGLE_TWO_FACTOR_DIALOG(state){
        state.twoFactorDialog = !state.twoFactorDialog
    },

    // Others
    TOGGLE_PASSWORD_VISIBLE(state){
        state.PasswordVisible = !state.PasswordVisible
    },
}