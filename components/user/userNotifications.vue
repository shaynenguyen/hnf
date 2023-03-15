<template>
    <v-card class="mb-7 user-tab-notification">
        <v-card-title>Notifications Settings</v-card-title>
        <v-card-subtitle class="text--primary font-weight-medium">
            You will receive notification for the below selected items.
        </v-card-subtitle>

        <v-card-text>
            <v-data-table
                :headers="tableColumn"
                :items="notifications"
                hide-default-footer
            >
                <!-- email -->
                <template #[`item.email`]="{item}">
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-checkbox
                            v-model="item.email"
                            hide-details
                            dense
                            class="shrink"
                        ></v-checkbox>
                    </v-row>
                </template>

                <!-- browser -->
                <template #[`item.browser`]="{item}">
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-checkbox
                            v-model="item.browser"
                            hide-details
                            dense
                            class="shrink"
                        ></v-checkbox>
                    </v-row>
                </template>

                <!-- app -->
                <template #[`item.app`]="{item}">
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-checkbox
                            v-model="item.app"
                            hide-details
                            dense
                            class="shrink"
                        ></v-checkbox>
                    </v-row>
                </template>
            </v-data-table>
        </v-card-text>

        <v-card-actions class="mt-7 pb-4">
            <v-btn
                color="primary"
                class="ms-3"
            >
                save changes
            </v-btn>
            <v-btn
                color="accent"
                outlined
            >
                Discard
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        tableColumn: [
            {
                text: 'TYPE',
                value: 'type',
                sortable: false,
            },
            {
                text: 'EMAIL',
                value: 'email',
                sortable: false,
                align: 'center',
            },
            {
                text: 'BROWSER',
                value: 'browser',
                sortable: false,
                align: 'center',
            },
            {
                text: 'APP',
                value: 'app',
                sortable: false,
                align: 'center',
            },
        ],
        notifications: [
            {
                type: 'New for you',
                email: true,
                browser: false,
                app: false,
            },
            {
                type: 'Account activity',
                email: false,
                browser: true,
                app: true,
            },
            {
                type: 'A new browser used to sign in',
                email: true,
                browser: true,
                app: true,
            },
            {
                type: 'A new device is linked',
                email: false,
                browser: true,
                app: false,
            },
        ]
    })
}
</script>

<style>

</style>