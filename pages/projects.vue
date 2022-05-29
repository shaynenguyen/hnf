<template>
    <div>
        <!-- Header Content  -->
        <ContentHeader title="Projects Report"/>

        <!-- Main Content  -->
        <!-- ============= -->
        <v-card class="my-5">
            <v-row>
                <v-col cols='12' sm='8' md='12'>
                    <!-- Title  -->
                    <!-- <v-card-title class="headline">Our Current Projects</v-card-title>
                    <v-card-subtitle v-if="projectList" class="accent--text" >Has {{ message }} fetched {{ projectList.length }} items.</v-card-subtitle> -->


                    <!-- Content  -->
                    <v-card-text>
                        <Skeleton v-if="projectList.length === 0"/>
                        <Project
                            v-for="(project, index) in projectList"
                            v-else
                            :id="index.toString()"
                            :key="project._id"
                            :data="project"
                            />
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <!-- Raw Data  -->
                    <!-- <v-card-text>
                        {{ projectList }}
                    </v-card-text> -->
                </v-col>
            </v-row>
        </v-card>

        <!-- Footer Content  -->
    </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex';
import Project from '../components/routes/project'
import Skeleton from '../components/skeletons/projectSkeleton'
import ContentHeader from '@/components/contentHeader'

export default {
    name: 'ProjectPage',
    components: { Project, Skeleton, ContentHeader},
    layout: 'default',
    async asyncData({ $axios }) {
       const result = (await $axios.get("/project/list-all")).data;

       const message = result.status;
       const projectList = result.data;

       return { message, projectList }
    },
    // computed: {
    //     ...mapState({
    //         projectList:    state   => state.projects.projectList,
    //         message:        state   => state.message
    //     })
    // },
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