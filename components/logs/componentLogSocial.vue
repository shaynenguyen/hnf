<template>
    <div class="text-center mt-4">
        <!-- Signin with social options  -->
        <v-btn
            v-for="(social, index) in socials" :key="index"
            class="mx-2"
            fab
            depressed
            color="accent darken-4">
            <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return ({
            socials: [
                { icon: 'mdi-facebook'},
                { icon: 'mdi-google-plus'},
                { icon: 'mdi-linkedin'},
            ]
        })
    }
}
</script>

<style>

</style>