<template>
    <v-navigation-drawer
        :value="invoiceAddPaymentSidebar"
        color="#1E1E1E"
        temporary
        right
        width="350"
        app
    >
        <v-card
            elevation="0"
        >
            <!-- Toolbar Title  -->
            <v-toolbar
                class="elevation-0"
                color="success"
                dark
            >
                <v-toolbar-title>Add Payment</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    small
                    @click="TOGGLE_INVOICE_ADD_PAYMENT_SIDEBAR()"
                >
                <v-icon size="22">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text class="pt-5">
                <v-form>
                    <!-- balance -->
                    <v-text-field
                        v-model="addPaymentData.balance"
                        outlined
                        label="Invoice Balance"
                        dense
                        hide-details="auto"
                        class="mb-6"
                    ></v-text-field>

                    <!-- amount -->
                    <v-text-field
                        v-model="addPaymentData.amount"
                        outlined
                        label="Payment Amount"
                        dense
                        hide-details="auto"
                        class="mb-6"
                    ></v-text-field>

                    <!-- date -->
                    <v-menu
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template #activator="{ on, attrs }">
                        <v-text-field
                            v-model="addPaymentData.paymentDate"
                            outlined
                            dense
                            label="Payment Date"
                            :prepend-icon="`mdi-calendar-outline`"
                            readonly
                            v-bind="attrs"
                            hide-details="auto"
                            class="mb-6"
                            v-on="on"
                        ></v-text-field>
                        </template>

                        <v-date-picker
                            v-model="addPaymentData.paymentDate"
                            color="primary"
                            @input="menu2 = false"
                        ></v-date-picker>
                    </v-menu>

                    <!-- payment method -->
                    <v-select
                        v-model="addPaymentData.selectedPaymentMethod"
                        :items="paymentOptions"
                        outlined
                        dense
                        label="Select Payment Method"
                    ></v-select>

                    <!-- note -->
                    <v-textarea
                        v-model="addPaymentData.paymentNote"
                        label="Internal Payment Note"
                        placeholder="Internal Payment Note"
                        outlined
                    >
                    </v-textarea>

                    <div class="d-flex flex-wrap">
                        <v-btn
                        color="success"
                        class="me-3"

                        >send</v-btn>
                        <v-btn
                            color="accent"
                            outlined
                            @click="TOGGLE_INVOICE_ADD_PAYMENT_SIDEBAR()"
                        >cancel</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    data: () => ({
        paymentOptions: ['Cash', 'Bank Transfer', 'Debit', 'Credit', 'Paypal'],
        addPaymentData: {
            balance: 5000,
            amount: null,
            paymentDate: new Date().toISOString().substr(0, 10),
            selectedPaymentMethod: '',
            paymentNote: 'Please Pay ASAP',

            // ? Need to handle how you want to send item
            // * You can also send link to download invoice in message
        }
    }),
    computed: {
        ...mapState('invoices',{
            invoiceAddPaymentSidebar: state => state.invoiceAddPaymentSidebar
        }),
        ...mapGetters('invoices',[
            'getInvoiceAddPaymentSidebar'
        ])
    },
    methods: {
        ...mapMutations('invoices',[
            'TOGGLE_INVOICE_ADD_PAYMENT_SIDEBAR'
        ])
    }
}
</script>

<style>

</style>