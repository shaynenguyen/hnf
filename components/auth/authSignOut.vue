<template>
    <div id="misc">
        <img
            class="misc-mask"
            height="226"
            :src="require(`@/assets/images/misc/misc-mask-dark.png`)"
        />
        <div class="page-title text-center px-5">
            <h2 class="headline font-weight-semibold text--primary">
                Under Maintenance! 🚧
            </h2>
            <p class="text-sm">
                Sorry for the inconvenience but we're performing some maintenance at the moment
            </p>

            <div class="misc-character d-flex justify-center">
                <v-img
                max-width="700"
                src="@/assets/images/misc/sign-out.png"
                ></v-img>
            </div>

            <BackToLogin />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        BackToLogin:    () => import('@/components/auth/authBackLogin')
    }
}
</script>

<style>

</style>