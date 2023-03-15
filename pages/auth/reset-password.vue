<template>
    <div class="auth-wrapper justify-center">
        <div class="auth-inner">
            <v-card class="auth-card">
                <!-- Logo  -->
                <v-card-title class="d-flex align-center justify-center">
                    <AppLogo />
                </v-card-title>

                <v-card-text>
                    <p class="title font-weight-semibold text--primary">
                        Reset Password 🔒
                    </p>
                    <p class="mb-2">
                        Your new password must be different from previously used passwords
                    </p>
                </v-card-text>

                <!-- Login form  -->
                <v-card-text class="mt-7">
                    <Form :is-login="checkLogin($route.params.slug)"/>
                </v-card-text>

                <!-- Back to Login link  -->
                <BackToLogin  />
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
            width="256"
            height="405"
            :src="require(`@/assets/images/misc/login-4.png`)"
        ></v-img>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
    components: {
        AppLogo:    () => import('@/components/AppLogo'),
        Form:       () => import('@/components/auth/authFormForgotPassword'),
        BackToLogin:() => import('@/components/auth/authBackLogin')
    },
    layout: 'full',
    methods: {
        checkLogin(value){
            if(value === 'login'){
                return true;
            }

            return false;
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/pages/auth.scss';
</style>