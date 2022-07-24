<template>
    <v-row no-gutters class="mb-4">
        <v-col>
            <v-chip
                class="ml-1 float-md-right"
                color="accent darken-2"
                text-color="accent lighten-3"
                label
            >
                <v-badge
                    color="complete accent-4"
                    icon="mdi-chart-bubble"
                    inline
                    left
                >All</v-badge>
            </v-chip>

            <v-chip
                class="ml-1 float-md-right"
                color="accent darken-2"
                text-color="accent lighten-3"
                label
            >
                <v-badge
                    color="ongoing"
                    content="6"
                    inline
                    left
                >Ongoing</v-badge>
            </v-chip>

            <v-chip
                class="ml-1 float-md-right"
                color="accent darken-2"
                text-color="accent lighten-3"
                label
            >
                <v-badge
                    color="overdue"
                    content="2"
                    inline
                    left
                >Overdue</v-badge>
            </v-chip>

            <v-chip
                class="ml-1 float-md-right"
                color="accent darken-2"
                text-color="accent lighten-3"
                label
                close
            >
                <v-badge
                    color="postpone"
                    content="1"
                    inline
                    left
                >Postpone</v-badge>
            </v-chip>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>