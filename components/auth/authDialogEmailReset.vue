<template>
    <v-dialog
        v-model="authSendEmailDialog"
        persistent
        max-width="30rem"
        overlay-opacity="0.95"
        dark
    >
        <v-card class="auth-card">
            <v-toolbar
                color="accent"
                dark
            >
                <v-toolbar-title>Forgot Password? 🔒</v-toolbar-title>
            </v-toolbar>

            <v-card-subtitle>
                <p class="my-3">
                    Enter your email and we'll send you instructions to reset your password
                </p>
            </v-card-subtitle>

            <!-- login form -->
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="email"
                        outlined
                        label="Email"
                        placeholder="john@example.com"
                        hide-details
                        class="mb-4"
                    ></v-text-field>

                    <v-btn
                        block
                        color="primary"
                        @click="TOGGLE_AUTH_SEND_EMAIL_DIALOG"
                    >Send reset link</v-btn>
                </v-form>
            </v-card-text>

            <v-card-actions class="d-flex justify-center align-center">
                <v-btn
                    class="d-flex align-center text-sm text-capitalize"
                    plain
                    color="primary"
                    @click="TOGGLE_AUTH_SEND_EMAIL_DIALOG"
                >
                    <v-icon
                        size="24"
                        color="primary"
                    >mdi-arrow-left-thin</v-icon>
                    <span>Back to login</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    data: () => ({
        email:  ''
    }),
    computed: {
        ...mapState('sessions', {
            authSendEmailDialog: state => state.authSendEmailDialog
        }),
        ...mapGetters('sessions',[
            'getAuthSendEmailDialog'
        ])
    },
    methods: {
        ...mapMutations('sessions',[
            'TOGGLE_AUTH_SEND_EMAIL_DIALOG'
        ])
    }
}
</script>

<style>

</style>