<template>
    <div class="auth-wrapper justify-center mt-7">
        <div class="auth-inner">
            <v-card class="auth-card">
                <!-- Logo  -->
                <v-card-title class="d-flex align-center justify-center">
                    <AppLogo />
                </v-card-title>

                <!-- Login form  -->
                <v-card-text class="mt-7">
                    <Form />
                </v-card-text>

                <!-- Switch  -->
                <SwitchLog />

                <!-- divider -->
                <v-card-text class="d-flex align-center mt-2">
                    <v-divider></v-divider>
                    <span class="mx-5">or</span>
                    <v-divider></v-divider>
                </v-card-text>

                <!-- Social Link  -->
                <SocialLink />
            </v-card>
        </div>

        <!-- Background Shape  -->
        <!-- @source: https://icons8.com/illustrations/illustration/casual-life-3d-girl-and-boy-sitting-with-laptop-1 -->
        <img
            class="auth-mask-bg"
            height="173"
            :src="require(`@/assets/images/misc/mask-dark.png`)"
        >
        <v-img
            class="auth-tree"
            width="214"
            height="400"
            :src="require(`@/assets/images/misc/login-2.png`)"
        ></v-img>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    components: {
        AppLogo:    () => import('@/components/AppLogo'),
        Form:       () => import('@/components/auth/authForm'),
        SocialLink: () => import('@/components/auth/authSocialLinks'),
        SwitchLog:  () => import('@/components/auth/authSwitch')
    },
    layout: 'full'
}
</script>

<style lang="scss">
@import '@/assets/pages/auth.scss';
</style>