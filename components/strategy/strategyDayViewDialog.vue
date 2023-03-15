<template>
    <v-dialog
        v-model="strategyDayViewDialog"
        persistent
        max-width="480px"
        overlay-opacity="0.92"
        dark
    >
        <v-card>
            <!-- As title  -->
            <v-toolbar
                color="primary"
            >
                <span>Selected View Day</span>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    dark
                    @click="TOGGLE_STRATEGY_DAY_VIEW_DIALOG"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <!-- Content  -->
            <v-card-text>
                <v-list
                    subheader
                    two-line
                >
                    <!-- Technicians  -->
                    <div class="primary--text mx-3 mt-6">
                        <span>Technicians</span>
                    </div>
                    <template
                        v-for="(technician, index) in technicians">
                        <v-list-item
                            :key="index"
                            :value="technician"
                        >
                            <v-list-item-avatar>
                                <v-img :src="technician.avatar"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ technician.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle v-if="technician.booking">
                                    <span class="accent--text">
                                        {{ technician.booking.name }}
                                    </span>
                                    &mdash; {{ technician.booking.desc }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider :key="index" inset></v-divider>
                    </template>

                    <!-- Assistants  -->
                    <div class="secondary--text mx-3 mt-7">
                        <span>Assistants</span>
                    </div>
                    <template
                        v-for="(assistant, index) in assistants">
                        <v-list-item
                            :key="index"
                            :value="assistant"
                        >
                            <v-list-item-avatar>
                                <v-img :src="assistant.avatar"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ assistant.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle v-if="assistant.booking">
                                    <span class="accent--text">
                                        {{ assistant.booking.name }}
                                    </span>
                                    &mdash; {{ assistant.booking.desc }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider :key="index" inset></v-divider>
                    </template>
                </v-list>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    data: () => ({
        technicians: [
            {
                avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
                title: 'Technicians 1',
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
                title: 'Technicians 2',
                booking: {
                    name: 'Ali Connors',
                    desc: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                },
            },
            {
                avatar: 'https://i.pravatar.cc/100',
                title: 'Technicians 3',
                booking: {
                    name: 'Sandra Adams',
                    desc: 'Do you have Paris recommendations? Have you ever been?',
                },
            }

        ],
        assistants: [
            {
                avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
                title: 'Assistant Person 2',
                booking: {
                    name: 'Ali Connors',
                    desc: "Light service required.",
                },
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
                title: 'Assistant 3',
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                title: 'Assistant Member 4',
                booking: {
                    name: 'Scott, Jennifer',
                    desc: "Light service required.",
                },
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
                title: 'Assistant 5',
                booking: {
                    name: 'James',
                    desc: "Wish I could come, but I'm out of town this weekend..",
                },
            },

        ]
    }),
    computed: {
        ...mapState('strategy',{
            strategyDayViewDialog: state => state.strategyDayViewDialog
        }),
        ...mapGetters('strategy',[
            'getStrategyDayViewDialog'
        ]),
    },
    methods: {
        ...mapMutations('strategy',[
            'TOGGLE_STRATEGY_DAY_VIEW_DIALOG'
        ])
    }
}
</script>

<style lang="scss">
@import '@/assets/pages/strategy.scss';
</style>