<template>
    <v-form>
        <v-text-field
            v-if="!isLogin"
            v-model="username"
            outlined
            label="Username"
            placeholder="JohnDoe"
            hide-details
            class="mb-3"
        ></v-text-field>
        <v-text-field
            v-model="email"
            outlined
            label="Email"
            placeholder="john@example.com"
            hide-details
            class="mb-3"
        ></v-text-field>

        <v-text-field
            v-model="password"
            outlined
            :type="isPasswordVisible ? 'text' : 'password'"
            label="Password"
            placeholder="············"
            :append-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline' "
            hide-details

            class="mb-3"
            @click:append="isPasswordVisible = !isPasswordVisible"
        ></v-text-field>

        <v-text-field
            v-if="!isLogin"
            v-model="confirmPassword"
            outlined
            :type="isPasswordVisible ? 'text' : 'password'"
            label="Confirm Password"
            placeholder="············"
            :append-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline' "
            hide-details

            class="mb-5"
            @click:append="isPasswordVisible = !isPasswordVisible"
        ></v-text-field>

        <div class="d-flex align-center justify-space-between flex-wrap">
            <v-checkbox
                v-model="authAgreement"
                label="Remember Me"
                hide-details
                class="me-3 mt-1"
            >
                <template v-if="!isLogin" #label>
                    <div class="d-flex align-center flex-wrap">
                        <span class="me-2">I agree to</span>
                        <v-btn
                            plain
                            color="primary"
                            class="px-0 text-capitalize"
                            @click="TOGGLE_AUTH_POLICY_TERM_DIALOG"
                        >privacy policy &amp; terms</v-btn>
                    </div>
                </template>
            </v-checkbox>

            <!-- forgot link -->
            <v-btn
                v-if="isLogin"
                plain
                color="primary"
                class="mt-1 text-capitalize"
                @click="TOGGLE_AUTH_SEND_EMAIL_DIALOG"
            >
                Forgot Password?
            </v-btn>
        </div>

        <v-btn
            block
            color="primary"
            class="mt-6"
            @click.prevent="perform()"
        >
            {{ isLogin ? 'Login' : 'Register' }}
            <template #loader>
                <span>{{ isLogin ? 'Login' : 'Registerr'}}ing...</span>
            </template>
        </v-btn>

        <!-- Dialogs  -->
        <DialogReset />
        <DialogTerms />
    </v-form>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { login } from '../../services/auth.front.service';

export default {
    components: {
        DialogReset: () => import('@/components/auth/authDialogEmailReset'),
        DialogTerms: () => import('@/components/auth/authDialogPolicyTerm'),
    },
    props: {
        isLogin: { type: Boolean, default: true }
    },
    data: () => ({
        isPasswordVisible:  false,
        confirmPassword:    '',
        username:           'Hai Test Ng',
        email:              'phamhai1986@yahoo.com',
        password:           '123456789',
    }),
    computed: {
        // Module state
        ...mapState('sessions',{
            authAgreement: state => state.authAgreement
        }),
        ...mapGetters('sessions',[
            'getAuthAgreement'
        ])
    },
    methods: {
        // Module state
        ...mapMutations('sessions',[
            'TOGGLE_AUTH_SEND_EMAIL_DIALOG',
            'TOGGLE_AUTH_POLICY_TERM_DIALOG'
        ]),
        ...mapMutations([
            'UPDATE_LOGIN_USER',
            'TOGGLE_AUTHENTICATED'
        ]),

        /**
         * Local Methods
         */
        perform(){
            const data  = {
                email:      this.email,
                password:   this.password
            }

            // When register
            if (!this.isLogin && this.username){
                data.username = this.username;
            }

            // Frontend Login Services
            login(data)
                .then((response) => {
                    if(response.success){
                        /**
                         * SET localStorage authentication Token
                         * REDIRECT to dashboard.
                         */
                        localStorage.setItem("authToken", response.token)
                        this.$router.push({name: 'index'});

                        // UPDATE this state logged User
                        this.UPDATE_LOGIN_USER(this.username);
                        this.TOGGLE_AUTHENTICATED();
                        this.$notifier.showMessage({
                            content: "You're success logged in",
                            color:  'info'
                        })
                    }else{
                        this.$notifier.showMessage({
                            content: response.message,
                            color:  'warning'
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style>

</style>