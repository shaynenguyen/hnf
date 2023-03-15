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
                v-if="loginUser"
                bottom
                color="success"
                overlap
                bordered
                offset-x="12"
                offset-y="10"
                class="ms-4"
                dot
            >
                <v-avatar
                    size="40px"
                    v-bind="attrs"
                    v-on="on"
                >
                    <!-- <v-img :src="$auth.user.thumbnail" ></v-img> -->
                </v-avatar>
                <v-icon>HN</v-icon>
            </v-badge>
            <v-btn
                v-else
                icon
                :to="{name: 'auth-login'}"
                class="ms-1"
            >
                <v-icon>mdi-login-variant</v-icon>
            </v-btn>
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
                    :to="{ name: 'auth-sign-out'}"
                    nuxt
                    @click="logoutMethods"
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
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'AccountComponent',
    data: () => ({
        loggedIn:   false,
        account: [
            { text: 'Profile', icon: 'mdi-account', to: { name: 'user-profile'}},
            { text: 'Inbox', icon: 'mdi-email-outline', to: {name: 'chat'}, total: 2},
            { text: 'Tasks', icon: 'mdi-monitor-dashboard', to: {name: 'index'}, total: 4}
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
    computed: {
        ...mapState({
            loginUser:  state => state.loginUser
        }),
        ...mapGetters([
            'UPDATE_LOGIN_USER'
        ])
    },
    methods: {
        async logoutMethods(){
            await this.$auth.logout()
                    .then(() => this.$router.push({name: 'auth-sign-out'}));
        }
    }
}
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
</style>