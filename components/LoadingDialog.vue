<template>
    <v-dialog
        v-model="loadingDialog"
        persistent
        width="320"
        overlay-opacity="0.92"
        dark
    >
        <v-card
            color="primary"
            dark
        >
            <v-card-text>
                Please stand by
                <v-progress-linear
                    indeterminate
                    color="teal accent-4"
                    class="mb-0"
                    rounded
                    height="6"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState({
            // arrow functions can make the code very succinct!
            loadingDialog: state => state.loadingDialog
        }),
        ...mapGetters([
            'getLoadingDialog',
        ])
    },
}
</script>

<style>

</style>