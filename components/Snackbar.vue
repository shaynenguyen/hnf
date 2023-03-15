<template>
    <v-snackbar
        v-model="isVisibleSnackbar"
        :timeout="timer"
        :color="colorType"
        transition="scroll-x-reverse-transition"
        origin="top right"
        right
        bottom
        text
    >
        {{ message }}

        <template #action="{ attrs }">
            <v-btn
                color="white"
                :icon="colorType === 'warning' ? false : true"
                :plain="colorType === 'warning'? true : false"
                v-bind="attrs"
                @click="isVisibleSnackbar = false"
            >
                <v-icon v-if="colorType !== 'warning'">mdi-close</v-icon>
                <span v-else>Fix Now</span>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'VtoastComponent',
    data: () => ({
        isVisibleSnackbar:  false,
        message:            '',
        colorType:          'success',
        timer:              3000
    }),
    created() {
        this.$store.subscribe(( mutation, state) => {
            if( mutation.type === 'snackbar/showMessage') {
                this.message            = state.snackbar.content
                this.colorType          = state.snackbar.color
                this.isVisibleSnackbar  = true
            }
        })
    }
}
</script>

<style>

</style>