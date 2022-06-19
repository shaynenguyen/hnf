<template>
    <v-row>
        <!-- Identification Number  -->
        <v-col cols="2" md="2" sm="12">
            <v-list-item-content>
                <v-list-item-subtitle class="accent--text font-weight-bold subtitle-1">#PRO22M500{{ id }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-col>

        <!-- Name:  -->
        <v-col cols="3" md="3" sm="12">
            <v-list-item-content>
                <v-list-item-title>{{ data.title }}</v-list-item-title>
            </v-list-item-content>
        </v-col>

        <!-- Person  -->
        <v-col cols="3" md="3" sm="6">
            <v-list-item-content>
                <v-list-item-title>{{ data.person }}</v-list-item-title>
            </v-list-item-content>
        </v-col>

        <!-- End Date  -->
        <v-col cols="3" md="3" sm="12">
            <v-list-item-content>
                <v-list-item-title>{{ handleDate(data.createdAt) }}  -  {{ handleFullDate(data.createdAt) }}</v-list-item-title>
            </v-list-item-content>
        </v-col>

        <!-- Status Color  -->
        <v-col cols="1" md="1" sm="12">
            <v-list-item-content>
                <v-list-item-title>
                    <v-list-item-subtitle :class="`${data.status}--text text-center`">
                        <v-badge
                            :color="`${data.status}`"
                            dot
                            inline
                            left
                        >
                        </v-badge>
                    </v-list-item-subtitle>
                </v-list-item-title>
            </v-list-item-content>
        </v-col>
    </v-row>
</template>

<script>
import { displayFullDateMonthYear, displayDayMonth } from '@/services';

export default {
    name:   'ProjectComponent',
    props: {
        data: {
            type:       Object,
            default:    null
        },
        id: {
            type:       String,
            default:    null
        }
    },
    methods: {
        handleDate: (target) => {
            return displayDayMonth(target)
        },
        handleFullDate: (target) => {
            return displayFullDateMonthYear(target)
        }
    }
}
</script>

<style scoped>
span{
    line-height: 0.5rem !important;
}
</style>