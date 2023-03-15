export default {
    // Dialogs
    TOGGLE_AUTH_SEND_EMAIL_DIALOG(state){
        state.authSendEmailDialog = !state.authSendEmailDialog
    },
    TOGGLE_AUTH_POLICY_TERM_DIALOG(state){
        state.authPolicyTermDialog = !state.authPolicyTermDialog
    },

    // Others
    TOGGLE_AUTH_AGREEMENT(state){
        state.authAgreement = !state.authAgreement
    },
}