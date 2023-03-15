<template>
    <v-card-actions class="d-flex justify-center align-center">
        <nuxt-link
            :to="{name:'auth-login'}"
            class="d-flex align-center text-sm"
        >
            <v-icon
                size="24"
                color="primary"
            >mdi-arrow-left-thin</v-icon>
            <span>Back to login</span>
        </nuxt-link>
    </v-card-actions>
</template>

<script>
export default {

}
</script>

<style>

</style>