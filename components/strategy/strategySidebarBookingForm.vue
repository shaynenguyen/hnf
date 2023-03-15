<template>
    <v-navigation-drawer
        :value="bookingFormSidebar"
        color="#1E1E1E"
        width="380"
        overlay-opacity="0.95"
        class="sidebarBooking"
        temporary
        right
        app
    >
        <v-card elevation="0">
            <!-- Toolbar Title  -->
            <v-toolbar
                class="elevation-0"
                color="primary"
            >
                <v-toolbar-title>New Booking</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    small
                    @click="TOGGLE_STRATEGY_BOOKING_SIDEBAR"
                >
                <v-icon size="22">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <!-- Display booking date & time  -->
            <v-card-text>
                <!-- Selected Date  -->
                <div class="d-flex align-center">
                    <v-icon
                        size="20"
                        class="mt-n4"
                        color="primary"
                    >mdi-calendar-text-outline</v-icon>
                    <div class="ms-2">
                        <p class="text--primary mb-0">{{ (new Date(bookingDetails.time)).toLocaleString('default', dayOptions) }}</p>
                        <span class="text-xs font-italic accent--text">Upcoming week.</span>
                    </div>
                </div>

                <!-- Selected Hours  -->
                <div class="d-flex align-center mt-2">
                    <v-icon
                        size="20"
                        class="mt-n4"
                        color="primary"
                    >mdi-clock-outline</v-icon>
                    <div class="ms-2">
                        <p class="text--primary mb-0">{{ (new Date(bookingDetails.time)).toLocaleString('default', timeOptions) }}</p>
                        <span class="text-xs font-italic accent--text">@1305 Lexington Ave, New York</span>
                    </div>
                </div>
            </v-card-text>
            <v-divider class="my-3 mx-5"></v-divider>
            <v-card-text class="pt-5">
                <v-form>
                    <v-text-field
                        v-model="firstname"
                        append-icon="mdi-account-outline"
                        label="First Name"
                        outlined
                        dense
                        placeholder="Customer Name"
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        append-icon="mdi-email-outline"
                        label="Email"
                        type="email"
                        outlined
                        dense
                        placeholder="Email"
                    ></v-text-field>

                    <v-text-field
                        v-model="mobile"
                        append-icon="mdi-cellphone"
                        label="Mobile"
                        outlined
                        dense
                        placeholder="0497 837 646"
                    ></v-text-field>

                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Service is required']"
                        label="Services"
                        required
                        hide-details="auto"
                        class="mb-6"
                        outlined
                        dense
                    ></v-select>

                    <v-select
                        v-model="select"
                        :items="staffs"
                        :rules="[v => !!v || 'Staff is required']"
                        label="Staff"
                        required
                        hide-details="auto"
                        class="mb-6"
                        outlined
                        dense
                    ></v-select>

                    <v-checkbox
                        v-model="checkbox"
                        label="Register me"
                        class="mt-0"
                    ></v-checkbox>

                    <v-spacer class="my-7"></v-spacer>

                    <v-btn color="primary" class="black--text">Submit </v-btn>
                    <v-btn
                        type="reset"
                        outlined
                        class="mx-2"
                        color="warning"
                    >Reset</v-btn>
                    <v-btn
                        outlined
                        color="accent"
                        @click="TOGGLE_STRATEGY_BOOKING_SIDEBAR"
                    >Cancel</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    data: () => ({
        firstname:  '',
        email:      '',
        mobile:     '',
        select:     '',
        checkbox:   '',
        items:      [
            '01. General Nail - Standard Services',
            '02. General Nail - In Design Services',
            '03. General Nail - Modern Style Design Services',
            '04. Advance Nail Services',
            '05. Advance Nail Services with design'
        ],
        staffs:     [
            'Rosie',
            'Shayne',
            'Nguyen',
            'Pham'
        ],
        // Options settings
        dayOptions: {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        },
        timeOptions: {
            hour:   '2-digit',
            minute: '2-digit'
        }
    }),
    computed: {
        ...mapState('strategy', {
            bookingFormSidebar: state => state.bookingFormSidebar,
            bookingDetails:     state => state.bookingDetails,
        }),
        ...mapGetters('strategy',['getBookingFormSidebar','getBookingDetails'])
    },
    methods: {
        ...mapMutations('strategy', ['TOGGLE_STRATEGY_BOOKING_SIDEBAR'])
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.theme--dark.v-toolbar.v-sheet{
    background-color: $main-color !important;
}
</style>