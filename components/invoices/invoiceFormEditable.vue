<template>
    <v-card class="app-invoice-editable py-3 px-2">
        <!-- Header  -->
        <MainDetailsHeader class="pt-4"/>

        <v-divider class="mx-3 my-6"></v-divider>

        <!-- Payment Details  -->
        <MainPaymentDetail :data=clients :amount=12300 />

        <v-divider class="mx-3 mt-6"></v-divider>

        <!-- Table -->
        <div class="add-products-form pt-9 pb-10 px-4">
            <p class="font-weight-semibold payment-details-header accent--text title">Invoice's Items:</p>
            <div
                v-for="(purchasedProduct, purchasedProductIndex) in purchasedProducts"
                :key="purchasedProductIndex"
                class="single-product-form"
            >
                <div class="add-products-header mb-2 d-none d-md-flex">
                    <div class="px-5 flex-grow-1 font-weight-semibold">
                        <v-row>
                            <v-col cols="12" md="6"><span>Item</span></v-col>
                            <v-col cols="12" md="2"><span>Cost</span></v-col>
                            <v-col cols="12" md="2"><span>Hours</span></v-col>
                            <v-col cols="12" md="2"><span class="ml-3">Price</span></v-col>
                        </v-row>
                    </div>
                    <div class="header-spacer"></div>
                </div>
                <v-card class="d-flex" outlined>
                    <div class="pa-4 flex-grow-1">
                        <v-row>
                            <!-- Item & Descriptions  -->
                            <v-col cols="12" md="6">
                                <v-select
                                    :value="purchasedProduct.itemTitle"
                                    :items="itemsOptions"
                                    item-text="itemTitle"
                                    item-value="itemTitle"
                                    outlined
                                    dense
                                    :menu-props="{ offsetY : true }"
                                    return-object
                                    placeholder="Select Item"
                                    hide-details="auto"
                                    label="Select Item"
                                    class="mb-4"
                                    @input="obj => updateItemForm(purchasedProductIndex, obj)"
                                ></v-select>
                                <v-textarea
                                    :value="purchasedProduct.description"
                                    outlined
                                    label="Description"
                                    rows="3"
                                    hide-details="auto"
                                    placeholder="Description"
                                ></v-textarea>
                            </v-col>

                            <!-- Cost  -->
                            <v-col cols="12" md="2" sm="4">
                                <v-text-field
                                    :value="purchasedProduct.cost"
                                    outlined
                                    dense
                                    min="0"
                                    type="number"
                                    label="Cost"
                                    placeholder="$"
                                    hide-details="auto"
                                    @input="val => updateCost(purchasedProductIndex, val)"
                                ></v-text-field>
                            </v-col>

                            <!-- Hours  -->
                            <v-col cols="12" md="2" sm="4">
                                <v-text-field
                                    :value="purchasedProduct.hours"
                                    outlined
                                    dense
                                    hide-details="auto"
                                    min="0"
                                    type="number"
                                    label="Hours"
                                    placeholder="Hours"
                                    @input="val => updateHours(purchasedProductIndex, val)"
                                ></v-text-field>
                            </v-col>

                            <!-- Price  -->
                            <v-col cols="12" md="2" sm="4">
                                <p class="my-2 ml-4">
                                    <span class="d-inline d-md-none">Price: </span>
                                    <span>${{ purchasedProduct.total }}</span>
                                </p>
                            </v-col>
                        </v-row>
                    </div>

                    <!-- Item Actions  -->
                    <div class="d-flex flex-column item-actions rounded-0 py-3 px-2">
                        <v-btn
                            icon
                            small
                            @click="REMOVE_PURCHASED_PRODUCTS(purchasedProductIndex, purchasedProduct)"
                        >
                            <v-icon size="20" color="accent">mdi-close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            icon
                            small
                        >
                        <v-icon size="20" color="accent">mdi-cog-outline</v-icon>
                        </v-btn>
                    </div>

                </v-card>
            </div>
            <v-btn
                outlined
                color="primary"
                class="mt-4"
                @click="addToPurchasedProducts()"
            >
                <v-icon size="18" left>mdi-plus</v-icon>
                <span>Add Item</span>
            </v-btn>
        </div>

        <!-- Total -->
        <MainTotalPaymentDetail :subtotal="invoiceInTotal" :discount=30 />

        <!-- Invoice's Note  -->
        <v-card-text class="px-4 py-6">
            <div class="d-flex">
                <p class="align-self-start text-decoration-underline font-weight-bold mr-2 mt-3">Notes:</p>
                <v-textarea
                    v-model="data.note"
                    full-width
                    outlined
                    rows="3"
                    hide-details="auto"
                    class="mb-0 d-flex d-inline-flex font-italic align-self-stretch subtitle-2"
                    placeholder="`It was a pleasure working with you and your team.
We hope you will keep us in mind for future freelance projects.
Thank You!`"
                ></v-textarea>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    components: {
        MainDetailsHeader:      () => import('@/components/invoices/parts/_invoiceMainDetailsHeader'),
        MainPaymentDetail:      () => import('@/components/invoices/parts/_invoiceMainPaymentDetails'),
        MainTotalPaymentDetail: () => import('@/components/invoices/parts/_invoiceMainTotal'),
    },
    data: () => ({
        data: {
            localPurchasedProduct: {
                itemTitle:      '',
                cost:           null,
                hours:          null,
                description:    ''
            },
        },
        itemsOptions: [
            {
                itemTitle: 'App Design',
                cost: 24,
                hours: 1,
                description: 'Designed UI kit & app pages.',
            },
            {
                itemTitle: 'App Customization',
                cost: 26,
                hours: 1,
                description: 'Customization & Bug Fixes.',
            },
            {
                itemTitle: 'ABC Template',
                cost: 28,
                hours: 1,
                description: 'Vuetify admin template.',
            },
            {
                itemTitle: 'App Development',
                cost: 32,
                hours: 1,
                description: 'Native App Development.',
            },
        ],
        clients: [
            {
                address: '1770 Sandra Mountains Suite 636',
                company: 'Foster-Pham PLC',
                companyEmail: 'jamesjoel@chapman.net',
                country: 'Western Sahara',
                contact: '(936) 550-1638',
                name: 'Dana Carey',
            },
            {
                address: '2577 Pearson Overpass Apt. 314',
                company: 'Mason-Reed PLC',
                companyEmail: 'eric47@george-castillo.com',
                country: 'Paraguay',
                contact: '(602) 336-9806',
                name: 'Tammy Sanchez',
            },
            {
                address: '075 Smith Views',
                company: 'Jenkins-Rosales Inc',
                companyEmail: 'calvin07@joseph-edwards.org',
                country: 'Colombia',
                contact: '(895) 401-4255',
                name: 'Lori Wells',
            },
            {
                address: '01871 Kristy Square',
                company: 'Yang, Hansen and Hart PLC',
                companyEmail: 'ywagner@jones.com',
                country: 'Germany',
                contact: '(203) 601-8603',
                name: 'Richard Payne',
            },
            {
                address: '141 Adrian Ridge Suite 550',
                company: 'Stone-Zimmerman Group',
                companyEmail: 'john77@anderson.net',
                country: 'Falkland Islands (Malvinas)',
                contact: '(612) 546-3485',
                name: 'Jennifer Summers',
            },
        ]
    }),
    computed: {
        ...mapState('invoices',{
            purchasedProducts:  state => state.purchasedProducts,
            invoiceInTotal:     state => state.invoiceInTotal
        }),
        ...mapGetters('invoices',[
            'getPurchasedProducts',
            'getInvoiceInTotal'
        ])
    },
    methods: {
        ...mapMutations('invoices', [
            'ADD_PURCHASED_PRODUCTS',
            'REMOVE_PURCHASED_PRODUCTS',
            'UPDATE_PURCHASED_PRODUCTS',
            'UPDATE_PURCHASED_PRODUCTS_COST',
            'UPDATE_PURCHASED_PRODUCTS_HOURS',
            'UPDATE_INVOICE_IN_TOTAL'
        ]),
        addToPurchasedProducts(){
            const newPurchasedProduct = {
                itemTitle:      '',
                cost:           0,
                hours:          0,
                description:    '',
                total:          0
            };

            this.ADD_PURCHASED_PRODUCTS(newPurchasedProduct);
        },
        updateItemForm(index, payload) {
            this.UPDATE_PURCHASED_PRODUCTS({index, payload})
        },
        updateHours(index, payload){
            this.UPDATE_PURCHASED_PRODUCTS_HOURS({index, payload})
        },
        updateCost(index, payload){
            this.UPDATE_PURCHASED_PRODUCTS_COST({index, payload})
        }
    },
}
</script>

<style lang="scss">
.app-invoice-editable {
    .add-products-form {
        .single-product-form {
            &:not(:first-child){
                margin-top: 2rem;
            }
        }
        .header-spacer{
            width: 39px;
        }
        .item-actions {
            border-left: 1px solid rgba(255, 255, 255, 0.12);
        }
    }
}
</style>