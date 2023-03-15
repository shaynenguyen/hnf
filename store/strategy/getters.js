export default {
    // Variants
    getBookingDetails(state){
        return state.bookingDetails
    },

    // Dialogs / Sidebar
    getDailyRosterSidebar(state){
        return state.dailyRosterSidebar;
    },
    getStrategyDayViewDialog(state){
        return state.strategyDayViewDialog;
    },
    getBookingFormSidebar(state){
        return state.bookingFormSidebar
    }
}