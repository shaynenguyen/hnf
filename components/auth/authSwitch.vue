<template>
    <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
        <span class="me-2">
            {{ isLogin ? 'New on our platform?' : 'Already have an account?' }}
        </span>
        <nuxt-link :to="{ name: isLogin? 'auth-register' : 'auth-login'} ">
            {{ isLogin ? 'Create an account' : 'Sign in instead' }}
        </nuxt-link>
    </v-card-text>
</template>

<script>
export default {
    props: {
        isLogin: { type: Boolean, default: true }
    }
}
</script>

<style>

</style>