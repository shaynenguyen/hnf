<template>
    <div class="text-center">
        <v-overlay :value="loadingDialog">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
        <!-- <v-dialog
            v-model="loadingDialog"
            hide-overlay
            persistent
            width="320"
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text>
                    Please stand by
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog> -->
    </div>
</template>

<script>
export default {
    computed: {
        loadingDialog: {
            get() {
                return this.$store.state.loadingDialog
            },
            set(value) {
                this.$store.commit('SWITCH_LOADING', value)
            }
        }
    },
    watch: {
        loadingDialog (val) {
            if (!val) return

            setTimeout(() => (this.loadingDialog = false), 4000)
        },
    },
}
</script>

<style>

</style>