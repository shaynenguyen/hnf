<template>
    <v-card-text>
        <div class="invoice-header d-flex flex-wrap justify-space-between flex-column flex-sm-row">
            <!-- Left Content -->
            <div class="mb-8 mb-sm-0">
                <AppLogo />
                <span class="d-block font-italic ml-15 mt-n3 caption accent--text">Passionate beauty</span>
            </div>
            <!-- Right Content -->
            <div>
                <span class="d-block">
                    <v-icon size="18" class="mr-2">mdi-office-building-outline</v-icon>
                    Office 149, 86 South George Street</span>
                <span class="d-block my-2">
                    <v-icon size="18" class="mr-2">mdi-google-maps</v-icon>
                    San Diego County, NSW 2000</span>
                <span class="d-block">
                    <v-icon size="18" class="mr-2">mdi-phone-dial-outline</v-icon>
                    +61 (02) 4563 7894, 0497 837 646</span>
            </div>
        </div>
    </v-card-text>
</template>

<script>
export default {
    components: {
        AppLogo: () => import('@/components/AppLogo')
    }
}
</script>

<style>

</style>