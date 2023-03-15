<template>
    <div>
        <!-- Header Content  -->
        <ContentHeader title="Project" @createNewDialog="handleCreator"/>
        <Tags />

        <!-- Main Content  -->
        <!-- ============= -->
        <v-list>
        <!-- List Projects  -->
            <Skeleton v-if="projectList.length === 0"/>
            <v-list-item-group v-else>
                <ListHeader />
                <v-list-item
                    v-for="(project, index) in projectList"
                    :key="index"
                >
                    <v-list-item-content class="pb-0">
                        <nuxt-link :to="{ name: 'project-slug', params: {slug: project._id}}">
                            <Project
                                :id="index.toString()"
                                :data="project"
                            />

                            <v-divider></v-divider>
                        </nuxt-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>

            <!-- Pagination  -->
            <v-list-item>
                <Pagination />
            </v-list-item>
        </v-list>

        <!-- Dialogs  -->
        <Dialog />
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Project from '../components/projects/singleProject'
import Skeleton from '../components/skeletons/projectSkeleton'
import ContentHeader from '@/components/used/contentHeader';
import Pagination from '@/components/used/_pagination';
import ListHeader from '@/components/static/projectListHeader';
import Dialog from '@/components/projects/projectDialog'
import Tags from '@/components/used/_tags';

export default {
    name: 'ProjectPage',
    components: { Project, Skeleton, ContentHeader, Pagination, ListHeader, Tags, Dialog},
    layout: 'default',
    async asyncData({ $axios }) {
       const result = (await $axios.get("/project/list-all")).data;

       const message = result.status;
       const projectList = result.data;

       return { message, projectList }
    },
    computed: {
        ...mapState('projects',{
            listHeader:     state => state.listHeader,
            createdDialog:  state => state.createdDialog
        })
    },
    methods: {
        ...mapMutations('projects',[
            'SWITCH_CREATE_DIALOG'
        ]),
        openCreatedDialog() {
            this.$store.dispatch('projects/SWITCH_CREATE_DIALOG',!this.$store.state.projects.createdDialog);
        },
        handleCreator(){
            this.SWITCH_CREATE_DIALOG();
        }
    }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: $white !important;
}
</style>