<template>
    <v-card>
        <v-card-text>
            <v-btn
                color="primary"
                block
                outlined
                @click="TOGGLE_STRATEGY_BOOKING_SIDEBAR"
            >
                <v-icon class="me-2" size="16">mdi-clipboard-edit-outline</v-icon>
                <span>Edit Booking</span>
            </v-btn>
            <v-btn
                color="accent"
                class="my-3"
                block
                outlined
            >
                <v-icon class="me-2" size="16">mdi-content-duplicate</v-icon>
                <span>Clone</span>
            </v-btn>
            <v-btn
                color="accent"
                class="mb-3"
                block
                outlined
                :to="{name: 'invoice-id', params: { id: '4987' } }"
            >
                <v-icon class="me-2" size="20">mdi-email-fast-outline</v-icon>
                <span>Invoice</span>
            </v-btn>
            <v-btn
                color="error darken-3"
                block
                outlined
            >
                <v-icon class="me-2" size="16">mdi-delete-forever-outline</v-icon>
                <span>Delete</span>
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations('strategy', ['TOGGLE_STRATEGY_BOOKING_SIDEBAR'])
    }
}
</script>

<style>

</style>