<template>
    <v-card-text class="white--text mt-12">
        <h1 class="text-center display-1">{{ displayTop }}</h1>
        <h5 class="text-center subtitle-2 my-4">{{ displayMiddle }}</h5>
    </v-card-text>
</template>

<script>
export default {
    props: {
        displayTop: {
            type:       String,
            default:    null
        },
        displayMiddle: {
            type:       String,
            default:    null
        }
    }
}
</script>

<style>

</style>