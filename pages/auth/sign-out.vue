<template>
    <div class="auth-wrapper justify-center mt-7">
        <div class="auth-inner">

            <div class="page-title text-center px-5">
                <h2 class="headline font-weight-semibold text--primary">
                    You are success signed out.
                </h2>
                <p class="text-sm mt-3">
                    Please login again to use our app!
                </p>

                <div class="misc-character d-flex justify-center mb-9">
                    <v-img
                        max-width="400"
                        :src="require(`@/assets/images/misc/sign-out.png`)"
                    ></v-img>
                </div>

                <BackToLogin />
            </div>
        </div>

        <img
            class="auth-mask-bg"
            height="226"
            :src="require(`@/assets/images/misc/misc-mask-dark.png`)"
        />
    </div>
</template>

<script>
export default {
    name:   'SignOut',
    components: {
        BackToLogin:    () => import('@/components/auth/authBackLogin')
    },
    layout: 'full'
}
</script>

<style>

</style>