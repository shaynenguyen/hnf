<template>
    <div>
        <h1>Single Project, {{ id }}, Page!.</h1>
        <!-- Card Detail  -->
        <v-card>
            <v-card-title>{{ projectDetail.title }}</v-card-title>
            <v-card-text>{{ projectDetail.content }}</v-card-text>
            <v-card-actions>Save</v-card-actions>
        </v-card>
        <!-- Raw data  -->
        {{ projectDetail }}
    </div>
</template>

<script>
export default {
    name: 'SingleProjectPage',
    layout: 'default',
    async asyncData({ $axios, params }) {
        const id = params.slug;
        const result = (await $axios.get("/project/" + id)).data;

        const message = result.status;
        const projectDetail = result.data;

        return { id, message, projectDetail }
    }
}
</script>

<style>

</style>