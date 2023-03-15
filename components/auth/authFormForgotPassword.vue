<template>
    <v-form>
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

        <v-btn
            block
            color="primary"
            class="mt-4"
        >Set New Password</v-btn>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        isPasswordVisible:  false,
        password:           '',
        confirmPassword:    '',
    })
}
</script>

<style>

</style>