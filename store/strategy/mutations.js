export default {
    // Variants
    SETUP_BOOKING_DETAILS(state, payload){
        state.bookingDetails    = payload;
    },

    // Dialogs
    TOGGLE_DAILY_ROSTER_SIDEBAR(state){
        state.dailyRosterSidebar = !state.dailyRosterSidebar;
    },
    TOGGLE_STRATEGY_DAY_VIEW_DIALOG(state){
        state.strategyDayViewDialog = !state.strategyDayViewDialog;
    },
    TOGGLE_STRATEGY_BOOKING_SIDEBAR(state){
        state.bookingFormSidebar = !state.bookingFormSidebar
    }
}