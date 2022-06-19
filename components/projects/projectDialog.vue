<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="640px"
        overlay-opacity="0.92"
        dark
    >
        <v-card>
            <v-card-title class="text-h5 primary">
                Create New Project
                <v-spacer/>
                <v-btn
                    icon
                    dark
                    @click="dialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <Form />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Form from './registerProjectForm'

export default {
    components: { Form },
    computed: {
        dialog: {
            get() {
                return this.$store.state.projects.createdDialog
            },
            set(value){
                this.$store.commit('projects/SWITCH_CREATE_DIALOG', value)
            }
        }
    }
}
</script>

<style>

</style>