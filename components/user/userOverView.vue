<template>
    <div class="user-tab-overview">
        <!-- User's recent projects  -->
        <v-card class="mb-7">
            <v-card-title>User Project</v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="tableColumnHeaders"
                    :items="projectList"
                    hide-default-footer
                >
                    <!-- project -->
                    <template #[`item.project`]="{item}">
                        <div class="d-flex align-center">
                            <v-avatar
                            size="33"
                            class="me-3"
                            >
                            <v-img :src="require(`@/assets/images/icons/project-icons/${item.logo}`)"></v-img>
                            </v-avatar>
                            <div class="text-no-wrap">
                            <p class="font-weight-medium text--primary mb-n1">
                                {{ item.name }}
                            </p>
                            <span class="text-xs text--disabled">{{ item.project }}</span>
                            </div>
                        </div>
                    </template>

                    <!-- progress -->
                    <template #[`item.progress`]="{item}">
                        <span>{{ item.progress }}%</span>
                        <v-progress-linear
                            height="6"
                            rounded
                            class="project-progress mt-1"
                            :color="resolveUserProgressVariant(item.progress)"
                            :value="item.progress"
                        ></v-progress-linear>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
        <!-- Activvity Timeline  -->
        <v-card class="mb-7">
            <v-card-title>User Activity Timeline</v-card-title>

            <v-card-text>
                <v-timeline
                    dense
                    class="timeline-custom-dense timeline-custom-dots"
                >
                    <v-timeline-item
                        color="error"
                        small
                    >
                        <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-medium me-1">
                                User login
                            </h4>
                            <small class="text-no-wrap">12 min ago</small>
                        </div>
                            <p class="mb-0 accent--text">
                                User login at 2:12pm
                            </p>
                    </v-timeline-item>

                    <v-timeline-item
                        color="primary"
                        small
                    >
                        <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-medium me-1">
                                Meeting with john
                            </h4>
                            <small class="text-no-wrap">45 min ago</small>
                        </div>

                        <p class="mb-1 accent--text">
                            React Project meeting with john @10:15am
                        </p>

                        <div class="d-flex align-center mt-3">
                            <v-avatar
                                size="40"
                                class="me-2"
                            >
                                <v-img :src="require('@/assets/images/avatars/2.png')"></v-img>
                            </v-avatar>
                            <div>
                                <p class="text--primary font-weight-medium mb-0">
                                Leona Watkins (Client)
                                </p>
                                <span>CEO of Kelly Group</span>
                            </div>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item
                        color="info"
                        small
                    >
                        <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-medium me-1">
                                Create a new react project for client
                            </h4>
                            <small class="text-no-wrap">2 day ago</small>
                        </div>
                        <p class="mb-0 accent--text">Add files to new design folder</p>
                    </v-timeline-item>

                    <v-timeline-item
                        color="warning"
                        small
                    >
                        <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-medium me-1">
                                User login
                            </h4>
                            <small class="text-no-wrap">a week ago</small>
                        </div>
                            <p class="mb-0 accent--text">
                                User login at 7:45am
                            </p>
                    </v-timeline-item>

                    <v-timeline-item
                        color="success"
                        small
                    >
                        <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                Create invoices for client
                            </h4>
                            <small class="text-no-wrap">12 min ago</small>
                        </div>
                        <p class="mb-0 accent--text">
                            Create new invoices and send to Leona Watkins
                        </p>
                        <span class="d-flex align-center mt-2">
                            <v-icon
                                color="error"
                                class="me-1"
                            >mdi-file-document</v-icon>
                            <span class="text--primary font-weight-semibold text-sm">invoice.pdf</span>
                        </span>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        tableColumnHeaders: [
            {
                text: 'PROJECT',
                value: 'project',
                sortable: false,
            },
            { text: 'TOTAL TASK', value: 'totalTask', sortable: false },
            { text: 'PROGRESS', value: 'progress', sortable: false },
            { text: 'HOURS', value: 'hours', sortable: false },
        ],
        projectList: [
            {
                logo: 'vue.png',
                name: 'Dashboard Design',
                project: 'Nuxtjs Project',
                totalTask: '290/320',
                progress: 62,
                hours: '120:87',
            },
            {
                logo: 'figma.png',
                name: 'Falcon Logo Design',
                project: 'Logos & Layout Website',
                totalTask: '9/56',
                progress: 5,
                hours: '20:42',
            },
            {
                logo: 'python.png',
                name: 'Customer ChatBot',
                project: 'Python AI Project',
                totalTask: '1/109',
                progress: 25,
                hours: '342:41',
            },
            {
                logo: 'html.png',
                name: 'Landing Website',
                project: 'HTML Project',
                totalTask: '3/110',
                progress: 3,
                hours: '12:45',
            },
        ]
    }),
    methods: {
        resolveUserProgressVariant(progrss){
            if (progrss <= 25) return 'error'
            if (progrss > 25 && progrss <= 50) return 'warning'
            if (progrss > 50 && progrss <= 75) return 'primary'
            if (progrss > 75 && progrss <= 100) return 'success'

            return 'secondary'
        }
    }
}
</script>

<style lang="scss" scoped>
.project-progress {
  min-width: 4rem;
}
</style>
