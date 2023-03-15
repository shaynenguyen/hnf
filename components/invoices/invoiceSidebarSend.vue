<template>
    <v-navigation-drawer
        :value="invoiceSendSidebar"
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
                color="primary"
                dark
            >
                <v-toolbar-title>Send Invoice</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    small
                    @click="TOGGLE_INVOICE_SEND_SIDEBAR()"
                >
                <v-icon size="22">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <!-- Form Content  -->
            <v-card-text class="pt-5">
                <v-form>
                    <!-- from -->
                    <v-text-field
                        v-model="sendInvoiceData.from"
                        outlined
                        label="From"
                        dense
                        hide-details="auto"
                        class="mb-6"
                    ></v-text-field>

                    <!-- to -->
                    <v-text-field
                        v-model="sendInvoiceData.to"
                        outlined
                        label="To"
                        dense
                        hide-details="auto"
                        class="mb-6"
                    ></v-text-field>

                    <!-- subject -->
                    <v-text-field
                        v-model="sendInvoiceData.subject"
                        outlined
                        label="Subject"
                        dense
                        hide-details="auto"
                        class="mb-6"
                    ></v-text-field>

                    <!-- Message -->
                    <v-textarea
                        v-model="sendInvoiceData.message"
                        outlined
                        label="Message"
                        rows="14"
                        hide-details="auto"
                        class="mb-6"
                    >
                    </v-textarea>

                    <!-- attached invoice chip -->
                    <v-chip
                        color="primary"
                        small
                        label
                        class="v-chip-light-bg primary--text mb-6 darken-4"
                    >
                        Invoice Attached
                    </v-chip>

                    <div class="d-flex flex-wrap">
                        <v-btn
                            color="primary"
                            class="me-3"
                        >send</v-btn>
                        <v-btn
                            color="accent"
                            outlined
                            @click="TOGGLE_INVOICE_SEND_SIDEBAR()"
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
        sendInvoiceData: {
            from: 'shelbyComapny@email.com',
            to: 'qConsolidated@email.com',
            subject: 'Invoice of purchased Admin Templates',
            message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019


Kindy Regards,
HNFPRIO team`,


      // ? Need to handle how you want to send item
      // * You can also send link to download invoice in message
        }
    }),
    computed:{
        ...mapState('invoices',{
            invoiceSendSidebar: state => state.invoiceSendSidebar
        }),
        ...mapGetters('invoices',[
            'getInvoiceSendSidebar'
        ])
    },
    methods: {
        ...mapMutations('invoices',[
            'TOGGLE_INVOICE_SEND_SIDEBAR'
        ])
    }
}
</script>

<style>

</style>