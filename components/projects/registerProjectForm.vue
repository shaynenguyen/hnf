<template>
    <v-form ref="form" class="px-3">
        <v-text-field
            v-model="newProject.title"
            label="Title"
            prepend-icon="mdi-folder-multiple-plus-outline"
            :rules="titleRules"
        />
        <v-text-field
            v-model="newProject.person"
            label="Creator"
            prepend-icon="mdi-account-tie-outline"
            :rules="personRules"
        />
        <v-menu>
            <template #activator="{ on }">
                <v-text-field
                    :value="formattedDate"
                    label="Due Date"
                    prepend-icon="mdi-calendar-outline"
                    v-on="on"
                />
            </template>

            <v-date-picker
                v-model="due"
            />
        </v-menu>
        <v-textarea
            v-model="newProject.description"
            label="Description"
            prepend-icon="mdi-pencil-outline"
        />

        <!-- Actions  -->
        <v-btn
            text
            class="primary mx-0 mt-4"
            @click="submit()"
        >
        Add Project</v-btn>
    </v-form>
</template>

<script>
import { mapMutations } from 'vuex';
import { format, parseISO } from 'date-fns';

export default {
    props: {

    },
    data(){
        return {
            due: null,
            newProject: {
                title:  '',
                person: '',
                due: null,
                description: ''
            },

            // Rules for Validation
            titleRules: [
                v => !!v || 'Title is required',
                v => v.length >= 7 || 'Name must be minimum 7 characters',
                v => /(\D\W\S)/.test(v) || 'Title must not contain special characters'
            ],
            personRules: [
                v => !!v || 'Person is required.'
            ]
        }
    },
    computed: {
        formattedDate(){
            return this.due ? format(parseISO(this.due), 'do MMM yyyy') : null
        }
    },
    methods: {
        ...mapMutations(['SWITCH_LOADING']),

        submit() {
            if(this.$refs.form.validate()){
                this.SWITCH_LOADING();
                this.newProject.due = this.due;
                console.log(this.newProject)
            }
        }
    }
}
</script>

<style>

</style>