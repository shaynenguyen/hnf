<template>
    <v-form>
        <v-text-field
            v-if="hasName"
            v-model="userInfo.name"
            label="Name"
            prepend-icon="mdi-account"
            type="text"
            color="teal darken-3"
        />
        <v-text-field
            v-model="userInfo.email"
            label="Email"
            prepend-icon="mdi-email"
            type="text"
            color="teal darken-3"
        />
        <v-text-field
            v-model="userInfo.password"
            label="Password"
            :type="showPassword ? 'text': 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-lock "
            color="teal darken-3"
            @click:append="showPassword = !showPassword"
        />
    </v-form>
</template>

<script>
export default {
    props: {
        hasName: {
            type:       Boolean,
            default:    true,
        }
    },
    data(){
        return {
            userInfo:       {
                email:      '',
                password:   ''
            },
            showPassword:   false
        }
    }
}
</script>

<style>

</style>