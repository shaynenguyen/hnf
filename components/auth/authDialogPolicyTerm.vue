<template>
    <v-dialog
        v-model="authPolicyTermDialog"
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
                <v-toolbar-title>Our Terms & Policy</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
                <v-textarea>

                </v-textarea>
            </v-card-text>
            <v-card-actions class="d-flex justify-center align-end">
                <v-btn
                    class="d-flex align-center text-sm text-capitalize"
                    color="accent"
                    plain
                    @click="cancelTerms"
                >Cancel</v-btn>
                <v-btn
                    class="d-flex align-center text-sm text-capitalize"
                    color="primary"
                    @click="acceptTerms"
                >Accept</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState('sessions', {
            authPolicyTermDialog: state => state.authPolicyTermDialog
        }),
        ...mapGetters('sessions',[
            'getAuthPolicyTermDialog'
        ])
    },
    methods: {
        ...mapMutations('sessions',[
            'TOGGLE_AUTH_POLICY_TERM_DIALOG',
            'TOGGLE_AUTH_AGREEMENT'
        ]),
        cancelTerms(){
            this.TOGGLE_AUTH_POLICY_TERM_DIALOG();
            setTimeout(() => {
                this.TOGGLE_AUTH_AGREEMENT();
            },1000)
            this.authPolicyTermDialog = false;
        },
        acceptTerms(){
            this.TOGGLE_AUTH_POLICY_TERM_DIALOG();
            this.TOGGLE_AUTH_AGREEMENT();
        }
    }
}
</script>

<style>

</style>