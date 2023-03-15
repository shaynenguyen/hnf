<template>
    <div class="d-flex align-center ">
        <v-img
            :src="require('@/assets/images/logo.svg')"
            max-height=displayLogoPx
            max-width=displayLogoPx
            alt="logo"
            contain
            class="me-3 "
        ></v-img>
        <span class="text--primary font-weight-bold headline">HNFPRIO</span>
    </div>
</template>

<script>
export default {
    props: {
        displayLogoPx:  { type: String, default: '30px'},
        displayName:    { type: Boolean, default: true}
    }
}
</script>

<style>

</style>