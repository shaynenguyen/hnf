<template>
    <v-card-text>
        <div class="payment-details d-flex justify-space-between flex-wrap flex-column flex-sm-row">
            <div class="mb-8 mb-sm-0">
                <p class="font-weight-semibold payment-details-header accent--text title">Invoice To:</p>
                 <v-select
                    :value="client"
                    outlined
                    :menu-props="{ offsetY: true }"
                    :items="data"
                    item-text="name"
                    item-value="company"
                    return-object
                    full-width
                    dense
                    placeholder="Select Customer"
                    class="select-invoice-to"
                    @input="obj => { importClient(obj)}"
                ></v-select>
                <p class="mb-1">{{ client.name }}</p>
                <p class="mb-1">{{ client.company }}</p>
                <p v-if="client" class="mb-1">{{ client.address }}, {{ client.country }}</p>
                <p class="mb-1">{{ client.contact }}</p>
                <p class="mb-0">{{ client.companyEmail }}</p>
            </div>
            <div>
                <p class="font-weight-semibold payment-details-header accent--text title">Bill To:</p>
                <table>
                    <tr>
                        <td class="pe-6">Total Due:</td>
                        <td>${{ amount }}</td>
                    </tr>
                    <tr>
                        <td class="pe-6">Bank Name:</td>
                        <td>{{ paymentDetails.bankName }}</td>
                    </tr>
                    <tr>
                        <td class="pe-6">Country:</td>
                        <td>{{ paymentDetails.branch }}</td>
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
</template>

<script>
export default {
    props: {
        data: {
            type:       Array,
            default:    null
        },
        amount: {
            type:       Number,
            default:    0
        }
    },
    data: () => ({
        client:     '',
        paymentDetails: {
            totalDue:   '$12,110.55',
            bankName:   'Commonwealth Bank',
            branch:     'Sydney, Australia',
            iban:       'ETD95476213874685',
            swiftCode:  'BR91905',
        },
    }),
    methods: {
        importClient(val){
            this.client = {
                address:        val.address,
                company:        val.company,
                companyEmail:   val.companyEmail,
                country:        val.country,
                contact:        val.contact,
                name:           val.name,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.payment-details{
    > div:first-child{
        height: 15rem !important;
    }
    .select-invoice-to {
        width: 15rem !important;
    }
}
</style>