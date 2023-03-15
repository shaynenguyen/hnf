<template>
    <div class="auth-wrapper justify-center">
        <div class="auth-inner">
            <div class="page-title text-center px-5">
                <h2 class="headline font-weight-semibold text--primary">
                    You are not authorized! 🔐
                </h2>
                <p class="text-sm mt-3">
                    You don’t have permission to access this page. Go Home!
                </p>

                <div class="misc-character d-flex justify-center my-9">
                    <v-img
                        max-width="300"
                        :src="require(`@/assets/images/misc/not-auth.png`)"
                    ></v-img>
                </div>

                <BackToHome />
            </div>
        </div>

        <img
            class="auth-mask-bg"
            height="173"
            :src="require(`@/assets/images/misc/misc-mask-dark.png`)"
        />
    </div>
</template>

<script>
export default {
    name:   'SignOut',
    components: {
        BackToHome:    () => import('@/components/auth/authBackHome')
    },
    layout: 'full'
}
</script>

<style lang="scss">
@import '@/assets/pages/auth.scss';
</style>