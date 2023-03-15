<template>
    <v-app dark>
        <!-- Page Content  -->
        <transition
            name="scroll-x-transition"
            mode="out-in"
            appear
            hide-on-leave
        >
            <!-- https://vuetifyjs.com/en/styles/transitions/#api -->
            <v-main>
                <v-container>
                    <Nuxt />
                </v-container>
            </v-main>
        </transition>

    </v-app>
</template>

<script>
export default {
    name: 'FullLayout'
}
</script>

<style>

</style>