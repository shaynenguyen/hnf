<template>
    <v-card class="my-5">
        <v-row>
            <v-col cols='12' sm='8' md='12'>
                <!-- Title  -->
                <v-card-title class="headline">Our Current Projects</v-card-title>
                <v-card-subtitle v-if="projectList" class="accent--text" >Has {{ message }} fetched {{ projectList.length }} items.</v-card-subtitle>
                <v-divider class="mx-4"></v-divider>

                <!-- Content  -->
                <v-card-text>
                    <Skeleton v-if="skeleton"/>
                    <Project
                        v-for="(project, index) in projectList"
                        v-else
                        :id="index.toString()"
                        :key="project._id"
                        :data="project"
                        />
                </v-card-text>

                <!-- Raw Data  -->
                <!-- <v-card-text>
                    {{ projectList }}
                </v-card-text> -->
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import Project from '../components/routes/project'
import Skeleton from '../components/skeletons/projectSkeleton'

export default {
    name: 'ProjectPage',
    components: { Project, Skeleton},
    layout: 'default',
    async asyncData({ $axios, commit }) {
        const result = await $axios.get("/project/list-all")
        console.table(result.data)
        commit('UPDATE_SKELETON', null, {root: true})
        commit('UPDATE_MESSAGE', result.status ,{root: true})
        return commit('UPDATE_LIST_PROJECTS', result.data )
    },
    computed: {
        ...mapState({
            projectList:    state   => state.projects.projectList,
            skeleton:       state   => state.skeleton,
            message:        state   => state.message
        })
    },
    methods: {
        ...mapMutations([
            'UPDATE_SKELETON',
            'UPDATE_MESSAGE',
            'projects/UPDATE_LIST_PROJECTS'
        ]),
        ...mapActions({
            getProject: 'projects/getProject'
        })
    }
}
</script>

<style>

</style>