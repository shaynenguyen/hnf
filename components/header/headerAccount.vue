<template>
    <v-menu
        min-width="230"
        offset-y
        bottom
        right
        nudge-bottom="15"
        content-class="user-profile-menu-content"
    >
        <template #activator="{ on, attrs }">
            <v-badge
                bottom
                color="success"
                overlap
                offset-x="12"
                offset-y="12"
                class="ms-4"
                dot
            >
                <v-avatar
                    size="40px"
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-img :src="`https://randomuser.me/api/portraits/men/11.jpg`"></v-img>
                </v-avatar>
            </v-badge>
        </template>
        <v-list >
            <!-- No re-display avatar/role  -->
            <v-list-item-group color="primary">

                <!-- User's Profile  -->
                <v-list-item
                    v-for="item in account"
                    :key="item.text"
                    :to="item.to"
                    nuxt
                >
                    <v-list-item-icon class="me-2">
                        <v-icon
                            size="22"
                            v-text="item.icon">
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action v-if="item.total">
                        <v-badge
                            inline
                            color="error"
                            :content="item.total"
                        >
                        </v-badge>
                    </v-list-item-action>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <!-- General's Settings  -->
                <v-list-item
                    v-for="(item, i) in general"
                    :key="i">
                    <v-list-item-icon class="me-2">
                        <v-icon
                            size="22"
                            v-text="item.icon">
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>

                <!-- Logout  -->
                <v-list-item
                    to="/logout"
                    nuxt
                >
                    <v-list-item-icon class="me-2">
                        <v-icon size="22">
                            {{ logout.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ logout.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    name: 'AccountComponent',
    data: () => ({
        account: [
            { text: 'Profile', icon: 'mdi-account', to: '/user/profile'},
            { text: 'Inbox', icon: 'mdi-email-outline', to: '/chat', total: 2},
            { text: 'Tasks', icon: 'mdi-monitor-dashboard', to: '/chat', total: 4}
        ],
        general: [
            { text: 'Settings', icon: 'mdi-cog-outline'},
            { text: 'Pricing', icon: 'mdi-wallet-outline'},
            { text: 'FAQ', icon: 'mdi-help-circle-outline'},
        ],
        logout: {
            text: 'Logout',
            icon: 'mdi-logout'
        }
    }),
}
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
</style>