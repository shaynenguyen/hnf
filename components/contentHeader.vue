<template>
    <v-row no-gutters class="mb-10">
        <v-col cols="12" md="12">
            <v-breadcrumbs :items="items" class="px-0 pb-0" divider=">">
                <!-- <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template> -->
            </v-breadcrumbs>
        </v-col>
        <v-col cols="12" md="12" sm="12">
            <v-subheader class="pl-0 pt-0 float-left">
                <h2 class="headline">{{ title }}s List Report</h2>
            </v-subheader>
            <v-spacer></v-spacer>

            <div class="float-right">
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-view-grid-plus-outline</v-icon>
                </v-btn>
                <v-btn icon class="mr-3">
                    <v-icon>mdi-filter</v-icon>
                </v-btn>
                <v-btn
                    depressed
                    color="primary"
                    class="float-right"
                    @click="openCreateProjectDialog"
                >
                    <v-icon class="mr-2">mdi-plus</v-icon>
                    New {{ title }}
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        title: {
            type:       String,
            default:    "Link 1"
        },
        breadcrumbs: {
            type:       Object,
            default:    () => ({
                            text: 'NoName',
                            disabled:   true,
                            href: '/'
                        })
        }
    },
    data: () => {
      return ({
        items: [
          {
            text: 'Home',
            disabled: false,
            href: '/'
          },
          {
            text: 'Projects',
            disabled: true,
            href: '/projects'
          }
        ]
      });
    },
    computed: {
        ...mapState('projects',{
            createdDialog: state => state.createdDialog
        })
    },
    methods: {
        openCreateProjectDialog(){
            this.$emit('createNewDialog')
        }
    }
}
</script>

<style>

</style>