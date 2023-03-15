<template>
    <v-row class="app-invoice-preview">
        <!-- Left Column: Main Details  -->
        <v-col cols="12" md="9">
            <v-card class="py-3 px-2 mt-4">
                <!-- Header -->
                <MainDetailsHeader />

                <v-divider class="mx-3"></v-divider>

                <!-- Payment Details  -->
                <v-card-text>
                    <div class="payment-details d-flex justify-space-between flex-wrap flex-column flex-sm-row">
                        <div class="mb-8 mb-sm-0">
                            <p class="font-weight-semibold payment-details-header accent--text title">Invoice To:</p>
                            <p class="mb-1">{{ invoiceData.client.name }}</p>
                            <p class="mb-1">{{ invoiceData.client.company }}</p>
                            <p class="mb-1">{{ invoiceData.client.address }}, {{ invoiceData.client.country }}</p>
                            <p class="mb-1">{{ invoiceData.client.contact }}</p>
                            <p class="mb-0">{{ invoiceData.client.companyEmail }}</p>
                        </div>
                        <div>
                            <p class="font-weight-semibold payment-details-header accent--text title">Bill To:</p>
                            <table>
                                <tr>
                                    <td class="pe-6">Total Due:</td>
                                    <td>{{ paymentDetails.totalDue }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-6">Bank Name:</td>
                                    <td>{{ paymentDetails.bankName }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-6">Country:</td>
                                    <td>{{ paymentDetails.country }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-6">IBAN:</td>
                                    <td>{{ paymentDetails.iban }}</td>
                                </tr>
                                <tr>
                                    <td class="pe-6">SWIFT Code:</td>
                                    <td>{{ paymentDetails.swiftCode }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </v-card-text>

                <!-- Table -->
                <v-card-text class="mt-7 mb-4">
                    <v-simple-table class="purchased-items-table" dark>
                        <template #default>
                            <thead>
                                <tr>
                                    <th>ITEM</th>
                                    <th>DESCRIPTION</th>
                                    <th>COST</th>
                                    <th>HOURS</th>
                                    <th>PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="item in purchasedProducts"
                                    :key="item.name"
                                >
                                    <td class="text-no-wrap">{{ item.name }}</td>
                                    <td class="text-no-wrap">{{ item.description }}</td>
                                    <td>{{ item.cost }}</td>
                                    <td>{{ item.hours }}</td>
                                    <td class="text-center">{{ item.price }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>

                <!-- Total -->
                <v-card-text class="py-9 px-8">
                    <div class="invoice-total d-flex justify-end flex-column flex-sm-row">
                        <div class="me-4">
                            <table>
                                <tr>
                                    <td class="pe-16">Subtotal:</td>
                                    <th class="text-right">$1800</th>
                                </tr>
                                <tr>
                                    <td class="pe-16">Discount:</td>
                                    <th class="text-right">$28</th>
                                </tr>
                                <tr>
                                    <td class="pe-16">Tax:</td>
                                    <th class="text-right">21%</th>
                                </tr>
                            </table>
                            <v-divider class="mt-4 mb-3"></v-divider>
                            <table>
                                <tr>
                                    <td class="pe-16">Total:</td>
                                    <th class="text-right">$1690</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </v-card-text>

                <!-- Invoice's Note  -->
                <v-card-text class="px-8 py-6">
                    <div class="d-flex">
                        <p class="align-self-start text-decoration-underline font-weight-bold mr-2">Notes:</p>
                        <p class="mb-0 d-flex align-start flex-column font-italic align-self-stretch caption">
                            <span>It was a pleasure working with you and your team.</span>
                            <span>We hope you will keep us in mind for future freelance projects.</span>
                            <span>Thank You!</span>
                        </p>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Right Column: Invoice Action -->
        <v-col cols="12" md="3">
            <!-- General Infos  -->
            <v-card class="mb-6 mt-4">
                <v-card-text>
                    <div>
                        <p class="font-weight-medium headline text--primary mb-4">
                            #2208{{ invoiceData.id }}
                        </p>
                        <p class="mb-2">
                            <span>Date Issued: </span>
                            <span class="font-weight-semibold">{{ invoiceData.issuedDate }}</span>
                        </p>
                        <p class="mb-2">
                            <span>Due Date: </span>
                            <span class="font-weight-semibold">{{ invoiceData.dueDate }}</span>
                        </p>
                    </div>
                </v-card-text>
            </v-card>

            <v-card>
                <v-card-text>
                    <v-btn
                        color="primary"
                        class="mb-3"
                        block
                        @click="TOGGLE_INVOICE_SEND_SIDEBAR()"
                    >
                        <v-icon class="me-2" size="16">mdi-send-outline</v-icon>
                        <span>Send Invoice</span>
                    </v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined
                        @click="downloadInvoice"
                    >Download</v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined
                        @click="printInvoice"
                    >
                        <v-icon class="me-2" size="16">mdi-printer-outline</v-icon>
                        <span>Print</span>
                    </v-btn>
                    <v-btn
                        class="mb-3"
                        color="accent"
                        block
                        outlined
                        :to="{ name: 'invoice-id-action', params: { id: $route.params.id, action: 'edit' } }"
                    >
                        <v-icon class="me-2" size="16">mdi-pencil</v-icon>
                        <span>Edit</span>
                    </v-btn>
                    <v-btn
                        color="secondary"
                        block
                        @click="TOGGLE_INVOICE_ADD_PAYMENT_SIDEBAR()"
                    >
                        <v-icon
                            class="me-2"
                            left
                        >mdi-wallet-plus-outline</v-icon>
                        <span>Add Payment</span>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Dialogs  -->
        <InvoiceSidebarSend />
        <InvoiceSidebarAddPayment />
    </v-row>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'SingularInvoice',
    components: {
        MainDetailsHeader:          () => import('@/components/invoices/parts/_invoiceMainDetailsHeader'),
        InvoiceSidebarSend:         () => import('@/components/invoices/invoiceSidebarSend'),
        InvoiceSidebarAddPayment:   () => import('@/components/invoices/invoiceSidebarAddPayment'),
    },
    data: () => ({
        invoiceData: {
            id: 5036,
            issuedDate: '2019-04-19',
            client: {
                address: '78083 Laura Pines',
                company: 'Richardson and Sons LLC',
                companyEmail: 'pwillis@cross.org',
                country: 'Bhutan',
                contact: '(687) 660-2473',
                name: 'Andrew Burns',
            },
            service: 'Unlimited Extended License',
            total: 3171,
            avatar: '3.png',
            invoiceStatus: 'Paid',
            balance: '-$205',
            dueDate: '2019-09-25'
        },
        paymentDetails: {
            totalDue: '$12,110.55',
            bankName: 'American Bank',
            country: 'United States',
            iban: 'ETD95476213874685',
            swiftCode: 'BR91905',
        },
        purchasedProducts: [
            {
                name: 'Premium Branding Package',
                description: 'Branding & Promotion',
                cost: 98,
                hours: 15,
                price: 32,
            },
            {
                name: 'SMM',
                description: 'Social media templates',
                cost: 49,
                hours: 14,
                price: 28,
            },
            {
                name: 'Web Design',
                description: 'Web designing package',
                cost: 30,
                hours: 12,
                price: 24,
            },
            {
                name: 'SEO',
                description: 'Search engine optimization',
                cost: 12,
                hours: 5,
                price: 22,
            },
        ]
    }),
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
        ]),
        printInvoice() {
            alert('Follow https://techformist.com/print-section-page-button-vue/')
        },
        downloadInvoice(){
            alert('Follow https://stackoverflow.com/questions/57549867/how-to-create-a-file-download-button-a-href-and-axios-not-working')
        }
    }
}
</script>

<style lang="scss" scoped>
.purchased-items-table{
    thead{
        background-color: #333;
    }
}
.invoice-total{
    div{
        width: 13.5rem;
    }
    table{
        width: 100%;
    }
}
@media print {
    .v-application {
        background: none !important;
    }

    .app-navigation-menu,
    .v-app-bar,
    .v-footer,
    .product-buy-now,
    .app-invoice-preview.row .col-12:last-of-type {
        display: none !important;
    }

    .app-invoice-preview.row .col-12:first-child {
        max-width: 100% !important;
        flex: 1 !important;
    }

    .v-main,
    .app-content-container {
        padding: 0px !important;
    }

    .v-card {
        box-shadow: none !important;
    }

    .app-invoice-preview {
        .invoice-header,
        .payment-details,
        .invoice-total {
        &.d-flex {
            flex-direction: row !important;
        }
        }
    }
}
</style>