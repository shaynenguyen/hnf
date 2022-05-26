<template>
    <v-row cols="12" md="12" sm="12" class="secondbg rounded-lg mx-0 mb-3 mt-1">
        <!-- Identification Number  -->
        <v-col cols="1" md="1" sm="2">
            <p :class="`${data.status}--text mt-4 headline`">
                <span class="accent--text">#</span>
                00{{ id }}
            </p>
        </v-col>

        <!-- Name:  -->
        <v-col cols="4" md="4" sm="10">
            <span class="accent--text">Project Name:</span>
            <p class="title white--text">{{ data.title }}</p>
        </v-col>

        <!-- Person  -->
        <v-col cols="3" md="3" sm="6">
            <span class="accent--text">Created By:</span>
            <p class="title white--text">{{ data.person }}</p>
        </v-col>

        <!-- Date  -->
        <v-col cols="2" md="2" sm="6">
            <span class="accent--text">Date:</span>
            <p class="title white--text">{{ handleDate(data.createdAt) }}</p>
        </v-col>

        <!-- Status  -->
        <v-col cols="2" md="2" sm="3">
            <v-chip
                label
                align="center"
                :class="`${data.status} white--text body-2 mt-5 px-5 d-block`">
                {{ data.status}}</v-chip>
        </v-col>
    </v-row>
</template>

<script>
import { displayDate } from '@/services';

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
            return displayDate(target)
        }
    }
}
</script>

<style scoped>
span{
    line-height: 0.5rem !important;
}
</style>