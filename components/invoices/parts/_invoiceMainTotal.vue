<template>
    <v-card-text class="py-9 px-8">
        <div class="invoice-total d-flex justify-end flex-column flex-sm-row">
            <div class="me-4">
                <table>
                    <tr>
                        <td class="pe-16">Subtotal:</td>
                        <th class="text-right">${{ subtotal }}</th>
                    </tr>
                    <tr>
                        <td class="pe-16">Discount:</td>
                        <th class="text-right">${{ discount }}</th>
                    </tr>
                    <tr>
                        <td class="pe-16">Tax:</td>
                        <th class="text-right">{{ tax }}%</th>
                    </tr>
                </table>
                <v-divider class="mt-4 mb-3"></v-divider>
                <table>
                    <tr>
                        <td class="pe-16">Total:</td>
                        <th class="text-right">${{ Math.abs((subtotal - discount) * (1 - tax/100)).toFixed(2) }}</th>
                    </tr>
                </table>
            </div>
        </div>
    </v-card-text>
</template>

<script>
export default {
    props: {
        subtotal:   { type: Number, default: 0},
        discount:   { type: Number, default: 0},
        tax:        { type: Number, default: 21},
    }
}
</script>

<style lang="scss" scoped>
.invoice-total{
    div{
        width: 13.5rem;
    }
    table{
        width: 100%;
    }
}
</style>