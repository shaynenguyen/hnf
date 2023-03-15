<template>
    <div class="user-tab-security">
        <!-- Update Password  -->
        <v-card class="mb-7">
            <v-card-title>Change Password</v-card-title>
            <v-card-text>
                <v-alert color="warning" text>
                    <p class="font-weight-semibold mb-1">
                        Ensure that these requirements are met.
                    </p>
                    <p class="text-sm mb-0">
                        Minimum 8 characters long, uppercase &amp; symbol
                    </p>
                </v-alert>
                <!-- form -->
                <v-form class="multi-col-validation">
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            v-model="newPassword"
                            outlined
                            dense
                            label="New Password"
                            :type="PasswordVisible ? 'text' : 'password'"
                            :append-icon="PasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                            @click:append="TOGGLE_PASSWORD_VISIBLE()"
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            v-model="confirmPassword"
                            outlined
                            dense
                            label="Confirm New Password"
                            :type="isPasswordConfirmVisible ? 'text' : 'password'"
                            :append-icon="isPasswordConfirmVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                            @click:append="isPasswordConfirmVisible = !isPasswordConfirmVisible"
                        ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                        <v-btn color="primary">
                            Change Password
                        </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>

        <!-- Two Step Verification -->
        <v-card class="mb-7">
            <v-card-title>Two-step verification</v-card-title>
            <v-card-subtitle>Keep your account secure with authentication step</v-card-subtitle>
            <v-card-text>
                <div>
                    <h4 class="font-weight-medium mb-1">SMS</h4>
                    <div class="d-flex align-center justify-space-between">
                        <span class="user-verification-number">{{ smsVerificationNumber }}</span>
                        <div>
                            <v-btn
                                icon
                                small
                                color="primary"
                                @click="TOGGLE_TWO_FACTOR_DIALOG()"
                            >
                                <v-icon size="20">mdi-square-edit-outline</v-icon>
                            </v-btn>
                            <v-btn
                                icon
                                small
                                @click="clear_my_sms_number()"
                            >
                                <v-icon size="20">mdi-delete-outline</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </div>

                <v-divider></v-divider>
                <p class="mb-0 pt-4">
                    Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
                    <a
                        href="javascript:void(0)"
                        class="text-decoration-none"
                    >Learn more</a>.
                </p>
            </v-card-text>
        </v-card>

        <!-- Login Devices  -->
        <v-card>
            <v-card-title>Recent Devices</v-card-title>
            <v-card-subtitle>Recently login with devices.</v-card-subtitle>
            <!-- Ref import UserTabSecurity from './user-tab-security/UserTabSecurity.vue' -->
        </v-card>

        <!-- dialog -->
        <v-dialog
            v-model="twoFactorDialog"
            max-width="650px"
        >
            <v-card class="two-factor-dialog pa-sm-10">
                <v-card-title class="headline justify-center mb-7">
                    Enable One Time Password
                </v-card-title>
                <v-card-text>
                    <h4 class="title font-weight-medium">
                        Verify Your Mobile Number for SMS
                    </h4>
                    <p class="accent-text subtitle-2">Enter your mobile phone number with country code and we will send you a verification code.</p>

                    <v-form class="mt-2">
                        <v-text-field
                            v-model="smsVerificationNumber"
                            outlined
                            dense
                            placeholder="Mobile number with country code"
                            label="Mobile number with country code"
                        ></v-text-field>

                        <div class="d-flex align-center">
                        <v-btn
                            color="accent"
                            outlined
                            class="me-3 ms-auto"
                            @click="TOGGLE_TWO_FACTOR_DIALOG()"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="primary"
                            @click="TOGGLE_TWO_FACTOR_DIALOG()"
                        >
                            send
                        </v-btn>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    data: () => ({
        newPassword:        '',
        confirmPassword:    '',
        isPasswordConfirmVisible:   false,
        smsVerificationNumber:      '+61 497 837 646'
    }),
    computed: {
        ...mapState('user',{
            PasswordVisible: (state) => state.PasswordVisible,
            twoFactorDialog: (state) => state.twoFactorDialog
        }),
        ...mapGetters('user',[
            'getPasswordVisible',
            'getTwoFactorDialog'
        ])
    },
    methods: {
        ...mapMutations('user',[
            'TOGGLE_PASSWORD_VISIBLE',
            'TOGGLE_TWO_FACTOR_DIALOG'
        ]),
        clear_my_sms_number(){
            this.smsVerificationNumber = ''
        }

    }
}
</script>

<style>

</style>