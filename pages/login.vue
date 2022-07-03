<template>
   <v-row align="center" justify="center" class="my-auto">
        <v-col cols="12" md="8" sm="8">
            <v-card class="elevation-12">
                <v-window v-model="step">
                    <!-- Step 1  -->
                    <v-window-item :value="1">
                        <v-row>
                            <v-col cols="12" md="8">
                                <v-card-text class="mt-12">
                                    <h1 class="text-center display-2 teal--text text--accent-3">
                                        Login to HNF
                                    </h1>
                                    <Socials />
                                    <h4 class="text-center mt-4 accent--text">Ensure your email for registration.</h4>
                                    <Forms :hasName="false"/>
                                    <h3 class="text-center mt-3">Forgot your password ?</h3>
                                </v-card-text>
                                <div class="text-center my-3">
                                    <v-btn rounded color="teal darken-2 accent-4">Sign In</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4" class="teal accent-4">
                                <HighlightContent
                                    :displayTop="`Hello, Friends !`"
                                    :displayMiddle="`Enter your personnel details and start journey with us.`"
                                />
                                <div class="text-center">
                                    <v-btn rounded outlined dark @click="step++">Sign up</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>

                    <!-- Step 2  -->
                    <v-window-item :value="2">
                        <v-row class="fill-height">
                            <v-col cols="12" md="4" class="teal accent-4">
                                <HighlightContent
                                    :displayTop="`Welcome Back !`"
                                    :displayMiddle="`To keep connected with us please login with your personnel info`"
                                />
                                <div class="text-center my-3">
                                    <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8" sm="8">
                                <v-card-text class="mt-12">
                                    <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                                    <Socials />
                                    <h4 class="text-center mt-4 accent--text">Ensure your email for registration.</h4>
                                    <Forms/>
                                </v-card-text>
                                <div class="text-center mb-3">
                                    <v-btn rounded color="teal darken-2 accent-4">Register</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import Socials from '@/components/logs/componentLogSocial'
import Forms from '@/components/logs/componentLogForm'
import HighlightContent from '@/components/logs/componentLogHightlightColumn'


export default {
    name: 'LoginPage',
    components: { Socials, Forms, HighlightContent },
    layout: 'full',
    props: {
        source: {
            type:   String,
            default: null
        }
    },
    data: () => ({
        step: 1,
    }),
}
</script>

<style>

</style>