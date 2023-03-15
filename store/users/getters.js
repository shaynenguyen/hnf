export default {
    // Dialogs
    getUserBioDiaglog(state) {
        return state.bioDialog;
    },
    getTwoFactorDialog(state){
        return state.twoFactorDialog;
    },

    // Others
    getPasswordVisible(state){
        return state.PasswordVisible;
    },
}