<template>
    <v-row class="app-invoice-actions">
        <v-col cols="12" md="9">
            <InvoiceEditable class="mt-4"/>
        </v-col>

        <v-col cols="12" md="3">
            <!-- Invoices Action  -->
            <v-card class="mt-4">
                <v-card-text>
                    <v-btn
                        color="primary"
                        class="mb-3"
                        block
                        @click="TOGGLE_INVOICE_SEND_SIDEBAR()"
                    >
                        <v-icon class="me-2" size="18">mdi-content-save-move-outline</v-icon>
                        <span>Send Invoice</span>
                    </v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined
                    >Save As Draft</v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined
                        :to="{ name: 'invoice-id-action', params:{ id: $route.params.id, action: 'duplicate' } }"
                    >
                        <v-icon class="me-2" size="16">mdi-content-duplicate</v-icon>
                        <span>Duplicate</span>
                    </v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined
                        :to="{ name: 'invoice-id', params:{ id: $route.params.id } }"
                    >
                        <v-icon class="me-2" size="16">mdi-monitor-screenshot</v-icon>
                        <span>Preview</span>
                    </v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined

                    >
                        <v-icon class="me-2" size="16">mdi-content-save-outline</v-icon>
                        <span>Update</span>
                    </v-btn>
                    <v-btn
                        color="error"
                        block
                        outlined
                        :to="{ name: 'invoice-id-action', params:{ id: $route.params.id, action: 'delete' } }"
                    >Delete</v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Dialogs  -->
        <InvoiceSidebarSend />
        <InvoiceSidebarAddPayment />
    </v-row>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'InvoiceInAction',
    components: {
        InvoiceEditable:                () => import('@/components/invoices/invoiceFormEditable'),
        InvoiceSidebarSend:             () => import('@/components/invoices/invoiceSidebarSend'),
        InvoiceSidebarAddPayment:       () => import('@/components/invoices/invoiceSidebarAddPayment'),
    },
    props: {
        actions:    { type: String, default: 'edit' },
    },
    computed: {
        ...mapState('invoices',{
            invoiceSendSidebar:         state => state.invoiceSendSidebar,
            invoiceAddPaymentSidebar:   state => state.invoiceAddPaymentSidebar
        }),
        ...mapGetters('invoices',[
            'getInvoiceSendSidebar',
            'getInvoiceAddPaymentSidebar'
        ])
    },
    methods: {
        ...mapMutations('invoices',[
            'TOGGLE_INVOICE_SEND_SIDEBAR',
            'TOGGLE_INVOICE_ADD_PAYMENT_SIDEBAR'
        ])
    }
}
</script>

<style>

</style>