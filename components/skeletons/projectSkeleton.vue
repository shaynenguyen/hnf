<template>
    <v-sheet>
        <v-row
            v-for="n in 4" :key="n"
            cols="12" md="12" sm="12"
            class="mainbg rounded-lg mx-0 mb-3 mt-1 py-4"
        >
            <!-- Identification Number  -->
            <v-col cols="1" md="1" sm="12">
                <v-skeleton-loader
                    type="chip"
                ></v-skeleton-loader>
            </v-col>

            <!-- Name:  -->
            <v-col cols="4" md="4" sm="9">
                <v-skeleton-loader
                    type="sentences"
                ></v-skeleton-loader>
            </v-col>

            <!-- Person  -->
            <v-col cols="3" md="3" sm="6">
                <v-skeleton-loader
                    type="sentences"
                ></v-skeleton-loader>
            </v-col>

            <!-- Date  -->
            <v-col cols="2" md="2" sm="6">
                <v-skeleton-loader
                    type="sentences"
                ></v-skeleton-loader>
            </v-col>

            <!-- Status  -->
            <v-col cols="2" md="2" sm="3">
                <v-skeleton-loader
                    type="chip"
                ></v-skeleton-loader>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    name: 'ProjectSkeleton',
    inject: {
        theme: {
            default: { isDark: false }
        }
    }
}
</script>

<style>

</style>