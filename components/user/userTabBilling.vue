<template>
    <div id="user-tab-bill-plan">
        <!-- Tax File Number  -->
        <v-card class="mb-7">
            <v-card-title>Your TFN</v-card-title>
            <v-card-subtitle>0415 384 928</v-card-subtitle>
        </v-card>
        <!-- Payment Card  -->
        <v-card class="mb-7">
            <v-card-title>
                <p class="title mb-sm-0">Payment Methods</p>
                <v-spacer></v-spacer>
                <v-btn color="primary">
                    <v-icon
                        size="18"
                        class="me-1"
                    >
                        mdi-plus
                    </v-icon>
                    <span>Add Card</span>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-card
                    v-for="(paymentCard,index) in paymentCards"
                    :key="paymentCard.id"
                    outlined
                    :class="index < paymentCards.length -1 ? 'mb-4':''"
                >
                    <v-card-text class="d-flex align-sm-center flex-column flex-sm-row">
                        <div class="mb-3 mb-sm-0">
                            <v-img
                                contain
                                :max-width="paymentCard.imgWidth"
                                height="25"
                                :src="require(`@/assets/images/logos/${paymentCard.cardImg}`)"
                            ></v-img>
                            <div class="text--primary font-weight-medium mt-2">
                                <span class="text-base me-2">{{ paymentCard.owner }}</span>

                                <v-chip
                                    v-if="paymentCard.cardStatus"
                                    :color="`${resolvePaymentStatusVariant(paymentCard.cardStatus)}`"
                                    label
                                    small
                                    :class="`v-chip-light-bg ${resolvePaymentStatusVariant(paymentCard.cardStatus)}--text darken-4`"
                                    >
                                    {{ paymentCard.cardStatus }}
                                </v-chip>
                            </div>
                            <span>
                                <span class="text-xs">**** **** **** </span>
                                <span>{{ paymentCard.cardLastDigit.substring(paymentCard.cardLastDigit.length - 4) }}</span>
                            </span>
                        </div>

                        <v-spacer></v-spacer>

                        <div class="text-sm-right">
                            <v-icon
                                color="accent"
                                outlined
                                class="mb-5"
                                @click="editCardDetails(paymentCard.id)"
                            >mdi-dots-vertical</v-icon>
                            <p class="mb-0">
                                <span class="me-1">Card expires at</span>
                                <span>{{ paymentCard.cardExpires }}</span>
                            </p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>

        <!-- Billing Address   -->
        <v-card>
            <v-card-title>
                <p class="mb-2 mb-sm-0">Billing Address</p>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    @click="isEditAddressDialogVisible =!isEditAddressDialogVisible"
                >Edit Address</v-btn>
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col
                        cols="12"
                        lg="6"
                    >
                        <v-list class="billing-address-table">
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">Company Name:</span>
                                <span class="text--secondary">{{ currentBillingAddress.companyName }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">Billing Email:</span>
                                <span class="text--secondary">{{ currentBillingAddress.billingEmail }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">Tax ID:</span>
                                <span class="text--secondary">{{ currentBillingAddress.taxID }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">VAT Number:</span>
                                <span class="text--secondary">{{ currentBillingAddress.vatNumber }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium mb-0">Billing Address:</span>
                                <span class="text--secondary mb-0 address">{{ currentBillingAddress.address }}</span>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col
                        cols="12"
                        lg="6"
                    >
                        <v-list class="billing-address-table">
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">Contact:</span>
                                <span class="text--secondary">{{ currentBillingAddress.contact }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">Country:</span>
                                <span class="text--secondary">{{ currentBillingAddress.country }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">State:</span>
                                <span class="text--secondary">{{ currentBillingAddress.state }}</span>
                            </v-list-item>
                            <v-list-item class="px-0 mb-n2">
                                <span class="billing-title text-no-wrap font-weight-medium me-2">Postcode:</span>
                                <span class="text--secondary">{{ currentBillingAddress.zipCode }}</span>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'UserBillingPlan',
    data: () => ({
        currentBillingAddress: {
            companyName: 'Kelly Group',
            billingEmail: 'gertrude@gmail.com',
            taxID: 'TAX-875623',
            vatNumber: 'SDF754K77',
            address: '100 Bankstown Avenue, Building 1303 Wake Island',
            contact: '+1(609) 933-44-22',
            country: 'USA',
            state: 'Capholim',
            zipCode: '403114',
        },
        paymentCards: [
            {
                id: 1,
                cardImg: 'master.png',
                imgWidth: '45',
                owner: 'Tom McBride',
                cardLastDigit: '5577 0000 5577 9865',
                cardExpires: '12/24',
                cardStatus: 'Primary',
            },
            {
                id: 2,
                cardImg: 'visa.png',
                imgWidth: '60',
                owner: 'Mildred Wagner',
                cardLastDigit: '4532 3616 2070 5678',
                cardExpires: '02/24',
            },
            {
                id: 3,
                cardImg: 'american-express.png',
                imgWidth: '80',
                owner: 'Lester Jennings',
                cardLastDigit: '6011 0009 9013 9424',
                cardExpires: '08/20',
                cardStatus: 'Expired',
            },
        ]
    }),
    methods: {
        resolvePaymentStatusVariant(status) {
            if (status === 'Primary') return 'primary'
            if (status === 'Expired') return 'error'

            return 'secondary'
        }
    }
}
</script>

<style lang="scss" scoped>
.v-list-item {
    > span:first-child{
        min-width: 6.5rem;
    }
    > span:last-child{
        max-width: 9.5rem;
    }
    .address{
        min-width: 8.5rem;
        margin-left: 0.5rem;
    }
}
</style>