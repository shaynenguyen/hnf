<template>
    <v-menu
        min-width="200"
        offset-y
        bottom
        right
        nudge-bottom="15"
    >
        <template #activator="{ on, attrs }">
            <v-btn
                class="mx-0 px-0"
                plain
                v-bind="attrs"
                v-on="on"
            >
                <v-avatar class="mr-3">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg">
                </v-avatar>
                <v-list-item-title class="text-capitalize grey--text">
                    Hi, <span class="white--text">Shayne</span>
                </v-list-item-title>
            </v-btn>
        </template>
        <v-list >
            <v-list-item-group color="primary">
                <!-- User's Settings  -->
                <v-list-item
                    v-for="(item, i) in account"
                    :key="i">
                    <v-list-item-icon class="mr-4">
                        <v-icon
                            :color="item.color"
                            v-text="item.icon">
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title color="rgba(255, 255, 255, 0.35)" v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            <div class="d-flex justify-center my-3">
                <v-btn
                width="80%"
                large
                outlined
                color="primary"
                class="text-capitalize"
                @click="logOut">Sign Out
                </v-btn>
            </div>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    name: 'AccountComponent',
    props: {
        account: {
            type:       Array,
            default:    null
        }
    },
    methods: {
        logOut(){
            window.localStorage.setItem('authenticated', false);
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>