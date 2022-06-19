export default {
    SWITCH_CREATE_DIALOG(state){
        state.createdDialog = !state.createdDialog
    },
    SWITCH_CONFIRM_DIALOG({state}){
        state.confirmDialog = !state.confirmDialog
    },
    UPDATE_LIST_PROJECTS(state, payload){
        state.projectList = payload
    }
}