<template>
    <v-row>
        <!-- User's profile  -->
        <v-col cols="12">
            <v-card class="pt-10">
                <v-card-title class="justify-center flex-column">
                    <!-- Avatar  -->
                    <v-avatar
                        :color="userData.avatar ? '' : 'primary'"
                        :class="userData.avatar ? '' : 'v-avatar-light-bg primary--text'"
                        size="120"
                        rounded
                        class="mb-4"
                    >
                        <v-img
                            v-if="userData.avatar"
                            :src="require(`@/assets/images/avatars/${userData.avatar}`)"
                        />
                        <span
                            v-else
                            class="font-weight-semibold text-title"
                        >{{ avatarText(userData.fullName) }}</span>
                    </v-avatar>

                    <!-- Fullname  -->
                    <span class="mb-2">{{ userData.fullName }}</span>

                    <!-- Role  -->
                    <v-chip
                        label
                        small
                        :color="resolveUserRoleVariant(userData.role)"
                        :class="`v-chip-light-bg text-sm font-weight-semibold ${resolveUserRoleVariant(userData.role)}--text text-capitalize darken-4`"
                    >
                        {{ userData.role }}
                    </v-chip>
                </v-card-title>

                <v-card-text class="d-flex justify-center flex-wrap mt-2">
                    <div class="d-flex align-center me-8 mb-4">
                        <v-avatar
                            size="40"
                            rounded
                            color="primary darken-4"
                            class="v-avatar-light-bg primary--text me-3"
                        >
                            <v-icon
                                color="primary"
                                size="22"
                            >
                                mdi-check
                            </v-icon>
                        </v-avatar>
                        <div>
                            <h3 class="headline font-weight-medium mb-n1">
                                {{ kFormatter(userData.taskDone) }}
                            </h3>
                            <span class="accent--text">Task Done</span>
                        </div>
                    </div>
                    <div class="d-flex align-center me-8 mb-4">
                        <v-avatar
                            size="40"
                            rounded
                            color="primary darken-4"
                            class="v-avatar-light-bg primary--text me-3"
                        >
                            <v-icon
                                color="primary"
                                size="22"
                            >mdi-briefcase-variant-outline</v-icon>
                        </v-avatar>

                        <div>
                            <h3 class="headline font-weight-medium mb-n1">
                                {{ kFormatter(userData.projectDone) }}
                            </h3>
                            <span class="accent--text">Project Done</span>
                        </div>
                    </div>
                </v-card-text>

                <v-card-text>
                    <h2 class="text-xl font-weight-semibold mb-2">
                        Details
                    </h2>

                    <v-divider></v-divider>

                    <v-list>
                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Username:</span>
                            <span class="text--secondary">{{ userData.username }}</span>
                        </v-list-item>

                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium text-no-wrap me-2">Billing Email:</span>
                            <span class="text--secondary">{{ userData.email }}</span>
                        </v-list-item>

                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Status:</span>
                            <span>
                                <v-chip
                                    small
                                    label
                                    :color="`${resolveUserStatusVariant(userData.status)}`"
                                    :class="`v-chip-light-bg ${resolveUserStatusVariant(userData.status)}--text font-weight-medium text-capitalize darken-4`"
                                >
                                    {{ userData.status }}
                                </v-chip>
                            </span>
                        </v-list-item>

                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Role:</span>
                            <span class="text--secondary text-capitalize">{{ userData.role }}</span>
                        </v-list-item>
                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Tax ID:</span>
                            <span class="text--secondary">{{ userData.taxId }}</span>
                        </v-list-item>

                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Contact:</span>
                            <span class="text--secondary">+1 {{ userData.contact }}</span>
                        </v-list-item>

                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Language:</span>
                            <span class="text--secondary">{{ userData.language }}</span>
                        </v-list-item>

                        <v-list-item
                            dense
                            class="px-0 mb-n2"
                        >
                            <span class="font-weight-medium me-2">Country:</span>
                            <span class="text--secondary">{{ userData.country }}</span>
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <!-- Actions  -->
                <v-card-actions class="justify-center">
                    <v-btn
                        color="primary"
                        class="me-3"
                        @click="isBioDialogOpen = !isBioDialogOpen"
                    >
                        Edit
                    </v-btn>
                    <v-btn
                        color="error"
                        outlined
                    >
                        Suspended
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { avatarText, kFormatter, resolveUserRoleVariant, resolveUserStatusVariant } from '@/utils'

export default {
    data: () => ({
        userData: {
            id: 21,
            fullName: 'Selina Kyle',
            company: 'Wayne Enterprises',
            role: 'admin',
            username: 'catwomen1940',
            country: 'USA',
            contact: '(829) 537-0057',
            email: 'irena@wayne.com',
            currentPlan: 'standard',
            status: 'active',
            avatar: '2.png',
            taxId: 'Tax-8894',
            language: 'Vietnamese',
            taskDone: 12,
            projectDone: 9
        }
    }),
    computed: {
        ...mapState('user',{
            isBioDialogOpen: (state) => state.isBioDialogOpen
        }),
        ...mapGetters(['getUserBioDiaglog'])
    },
    methods: {
        avatarText:                 (d) => { return avatarText(d) },
        kFormatter:                 (d) => { return kFormatter(d) },
        resolveUserRoleVariant:     (d) => { return resolveUserRoleVariant(d) },
        resolveUserStatusVariant:   (d) => { return resolveUserStatusVariant(d)}
    }
}
</script>

<style lang="scss" scoped>
.v-list-item > span:first-child{
    min-width: 6rem;
}
</style>