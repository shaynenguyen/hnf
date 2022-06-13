<template>
    <v-subheader color="accent darken-1">
        <v-row >
            <v-col cols="2" md="2" sm="12">{{ listHeader[0] }}</v-col>
            <v-col cols="3" md="3" sm="12">{{ listHeader[1] }}</v-col>
            <v-col cols="3" md="3" sm="6">{{ listHeader[2] }}</v-col>
            <v-col cols="3" md="3" sm="12">{{ listHeader[3] }}</v-col>
            <v-col cols="1" md="1" sm="12">{{ listHeader[4] }}</v-col>
        </v-row>
    </v-subheader>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            listHeader: state => state.projects.listHeader
        })
    }
}
</script>

<style>

</style>