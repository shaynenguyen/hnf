<template>
    <v-row class="mt-5">
        <v-col cols="12" md="4" offset-md="8">
            <div class="text-center">
                <v-pagination
                    v-model="page"
                    color="info"
                    :length="17"
                    :total-visible="5"
                ></v-pagination>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-pagination__item--active.primary{
        background-color: $dark-accent !important;
    }
</style>