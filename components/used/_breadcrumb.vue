<template>
    <v-breadcrumbs :items="items">
        <template #:divider>
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

<style lang="scss" scoped>
    a{
        color: $secondary;
    }
</style>