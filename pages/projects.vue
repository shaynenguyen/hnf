<template>
    <div>
        <!-- Header Content  -->
        <ContentHeader title="Project"/>
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
    </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex';
import Project from '../components/routes/project'
import Skeleton from '../components/skeletons/projectSkeleton'
import ContentHeader from '@/components/contentHeader';
import Pagination from '@/components/_pagination';
import ListHeader from '@/components/static/projectListHeader';
import Tags from '@/components/_tags';

export default {
    name: 'ProjectPage',
    components: { Project, Skeleton, ContentHeader, Pagination, ListHeader, Tags},
    layout: 'default',
    async asyncData({ $axios }) {
       const result = (await $axios.get("/project/list-all")).data;

       const message = result.status;
       const projectList = result.data;

       return { message, projectList }
    },
    computed: {
        // ...mapState({
        //     listHeader: state => state.projects.listHeader
        // })
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

<style scoped>
a{
    text-decoration: none;
    color: #FBF5F3 !important;
}
</style>