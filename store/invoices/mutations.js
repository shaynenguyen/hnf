export default {
    // Dialogs
    TOGGLE_INVOICE_SEND_SIDEBAR(state) {
        state.invoiceSendSidebar = !state.invoiceSendSidebar;
    },
    TOGGLE_INVOICE_ADD_PAYMENT_SIDEBAR(state){
        state.invoiceAddPaymentSidebar = !state.invoiceAddPaymentSidebar;
    },

    // Others
    ADD_PURCHASED_PRODUCTS(state, payload){
        state.purchasedProducts.push(payload);
    },
    REMOVE_PURCHASED_PRODUCTS(state, payload){

        if(payload > -1){
            // Item found
            state.purchasedProducts.splice(payload, 1)
            this.commit('invoices/UPDATE_INVOICE_IN_TOTAL')
        }
    },
    UPDATE_PURCHASED_PRODUCTS(state, { index, payload }){

        /* eslint-disable no-param-reassign */
        state.purchasedProducts[index].itemTitle = payload.itemTitle
        state.purchasedProducts[index].cost = payload.cost
        state.purchasedProducts[index].hours = payload.hours
        state.purchasedProducts[index].description = payload.description
        state.purchasedProducts[index].total = payload.cost * payload.hours
        /* eslint-enable */

        this.commit('invoices/UPDATE_INVOICE_IN_TOTAL')
    },
    UPDATE_PURCHASED_PRODUCTS_COST(state, { index, payload }){
        state.purchasedProducts[index].cost = payload
        state.purchasedProducts[index].total = payload * state.purchasedProducts[index].hours
        this.commit('invoices/UPDATE_INVOICE_IN_TOTAL')
    },
    UPDATE_PURCHASED_PRODUCTS_HOURS(state, { index, payload }){
        state.purchasedProducts[index].hours = payload
        state.purchasedProducts[index].total = payload * state.purchasedProducts[index].cost
        this.commit('invoices/UPDATE_INVOICE_IN_TOTAL')
    },
    UPDATE_INVOICE_IN_TOTAL(state){
        if(state.invoiceInTotal > 0){
            state.invoiceInTotal = 0;
        }
        (state.purchasedProducts).forEach(( item)=> {
            state.invoiceInTotal += item.total;
        })
    }
}