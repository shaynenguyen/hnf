<template>
    <v-card-actions class="d-flex justify-center">
        <a
            v-for="link in socialLink"
            :key="link.icon"
            :href="link.to"
            icon
            class="mx-1"
        >
            <v-icon :color="link.colorInDark">{{ link.icon }}</v-icon>
        </a>
    </v-card-actions>
</template>

<script>
export default {
    data: () => ({
        socialLink: [
            {
                icon: 'mdi-facebook',
                color: '#4267b2',
                colorInDark: '#4267b2',
                to: 'http://www.facebook.com',
            },
            {
                icon: 'mdi-twitter',
                color: '#1da1f2',
                colorInDark: '#1da1f2',
                to: 'http://www.twitter.com',
            },
            {
                icon: 'mdi-github',
                color: '#272727',
                colorInDark: '#fff',
                to: 'http://www.github.com',
            },
            {
                icon: 'mdi-google',
                color: '#db4437',
                colorInDark: '#db4437',
                to: 'http://www.google.com.au',
            },
        ]
    })
}
</script>

<style>

</style>