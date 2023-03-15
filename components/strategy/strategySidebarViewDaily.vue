<template>
    <v-navigation-drawer
        :value="dailyRosterSidebar"
        color="#1E1E1E"
        overlay-opacity="0.86"
        width="350"
        temporary
        right
        app
    >
        <v-card elevation="0">
            <!-- Toolbar Title  -->
            <v-toolbar
                class="elevation-0"
                :color=" event ? event.color: 'primary'"
                dark
            >
                <v-toolbar-title>{{ event.name }}</v-toolbar-title>
                <v-subheader>{{ event.start }}</v-subheader>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    small
                    @click="TOGGLE_DAILY_ROSTER_SIDEBAR()"
                >
                <v-icon size="22">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text class="pt-5">
                {{ event.color }}
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    props: {
        event: {
            type:       Object,
            required:   true
        }
    },
    computed: {
        ...mapState('strategy',{
            dailyRosterSidebar: state => state.dailyRosterSidebar
        }),
        ...mapGetters('strategy',[
            'getDailyRosterSidebar'
        ])
    },
    methods: {
        ...mapMutations('strategy',[
            'TOGGLE_DAILY_ROSTER_SIDEBAR'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/pages/strategy.scss';

.theme--dark.v-toolbar.v-sheet{
    background-color: $main-color !important;
}
</style>