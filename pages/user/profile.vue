<template>
    <div id="user-view">
        <!-- Main Layout  -->
        <v-row>
            <v-col cols="12" md="5" lg="4">
                <UserBioPanel />
            </v-col>
            <v-col cols="12" md="7" lg="8">
                <v-tabs
                    v-model="userTab"
                    show-arrows
                    class="user-tabs"
                    background-color="transparent"
                >
                    <v-tab
                        v-for="tab in tabs"
                        :key="tab.icon"
                    >
                        <v-icon
                            size="20"
                            class="me-3"
                        >
                            {{ tab.icon }}
                        </v-icon>
                        <span>{{ tab.title }}</span>
                    </v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <v-tabs-items
                    id="user-tabs-content"
                    v-model="userTab"
                    class="mt-5 pa-1"
                >
                    <v-tab-item>
                        <UserOverView />
                    </v-tab-item>
                    <v-tab-item>
                        <UserTabSecurity />
                    </v-tab-item>
                    <v-tab-item>
                        <UserTabBillingPlan />
                    </v-tab-item>
                    <v-tab-item>
                        <UserNotifications />
                    </v-tab-item>
                    <v-tab-item>
                        <UserConnections />
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'UserProfile',
    components: {
        UserBioPanel:       () => import('@/components/user/userBioPanel'),
        UserOverView:       () => import('@/components/user/userOverView'),
        UserTabSecurity:    () => import('@/components/user/userTabSecurity'),
        UserTabBillingPlan: () => import('@/components/user/userTabBilling'),
        UserNotifications:  () => import('@/components/user/userNotifications'),
        UserConnections:    () => import('@/components/user/userConnections'),
    },
    data: () => ({
        userTab: null,
        tabs: [
            { icon: 'mdi-account-outline', title: 'Overview' },
            { icon: 'mdi-lock-outline', title: 'Security' },
            { icon: 'mdi-bookmark-outline', title: 'Billing & Plan' },
            { icon: 'mdi-bell-outline', title: 'Notifications' },
            { icon: 'mdi-link-variant', title: 'Connections' },
        ]
    })
}
</script>

<style lang="scss" scoped>
// user view
#user-view {
    .user-tabs {
        &.v-tabs:not(.v-tabs--vertical) {
            box-shadow: none !important;
            .v-tabs-bar {
                background-color: transparent !important;
            }
        }
    }
    #user-tabs-content {
        background-color: transparent;
    }
}

</style>