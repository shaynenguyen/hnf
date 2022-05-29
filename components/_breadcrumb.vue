<template>
    <v-breadcrumbs :items="items">
        <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
        </template>
    </v-breadcrumbs>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                text: 'Home',
                disabled: false,
                href: '/'
            },
            {
                text: 'Projects',
                disabled: true,
                href:'/projects'
            }
        ]
    })
}
</script>

<style>

</style>