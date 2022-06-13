<template>
    <v-tabs
        color="accent lighten-3"
        class="mt-12 mb-4"
    >
        <v-spacer></v-spacer>
        <v-tabs-slider color="accent lighten-3"></v-tabs-slider>
        <v-tab>
            <v-badge
                color="primary accent-4"
                icon="mdi-vuetify"
                inline
            >All</v-badge>
        </v-tab>
        <v-tab>
            <v-badge
                color="ongoing"
                content="6"
                inline
            >Ongoing</v-badge>
        </v-tab>
        <v-tab>
            <v-badge
                color="overdue"
                content="1"
                inline
            >Overdue</v-badge>
        </v-tab>
        <v-tab>
            <v-badge
                color="postpone"
                content="2"
                inline
            >Postpone</v-badge>
        </v-tab>
    </v-tabs>
</template>

<script>
export default {

}
</script>

<style>

</style>