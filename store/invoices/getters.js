export default {
    // Dialogs
    getInvoiceSendSidebar(state){
        return state.invoiceSendSidebar
    },
    getInvoiceAddPaymentSidebar(state){
        return state.invoiceAddPaymentSidebar;
    },

    // Others
    getPurchasedProducts(state){
        return state.purchasedProducts;
    },
    getInvoiceInTotal(state){
        return state.invoiceInTotal
    }
}