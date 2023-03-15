<template>
    <div>
        <v-row  id="time-slots">
            <v-col
                v-for="k in time_slots"
                :key="k"
                cols="12"
                md="3"
                sm="2"
            >
                <v-card
                    v-model="bookingConfirmation"
                    class="text-center pa-2"
                    transition="fade-transition"
                    tile
                    outlined
                    @click="selectedHours(k)"
                >
                    {{ k }}
                </v-card>
            </v-col>
        </v-row>

        <v-divider class="mt-12 mb-6"></v-divider>

        <v-row>
            <v-col cols="12" md="7">
                <v-list dense>
                    <v-list-item
                        v-for="(booking, index) in bookingConfirmation"
                        :key="index"
                    >
                        <v-list-item-icon class="mr-4">
                            <v-icon color="accent">{{ bookingIcons[index] }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="pb-1">
                            <v-list-item-title>
                                <p class="mb-0 subtitle-1">{{ booking }}</p>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="12" md="4" offset-md="1">

                <div id="statusBtn">
                    <v-speed-dial
                        v-model="dialStatusBtn"
                        direction="left"
                        bottom
                        right
                        transition="scale-transition"
                    >
                        <template #activator>
                            <v-btn
                                v-model="dialStatusBtn"
                                color="secondary"
                                dark
                                outlined
                                fab
                            >
                                <v-icon v-if="dialStatusBtn">mdi-close</v-icon>
                                <v-icon v-else>mdi-shield-alert-outline</v-icon>
                            </v-btn>
                        </template>

                        <v-btn
                            fab
                            dark
                            small
                            color="accent"
                        ><v-icon>mdi-cog-outline</v-icon></v-btn>
                        <v-btn
                            fab
                            dark
                            small
                            color="info"
                        ><v-icon>mdi-cellphone-message</v-icon></v-btn>
                        <!-- Snackbars on hover -->
                        <v-btn
                            fab
                            dark
                            small
                            color="green"
                            @click="showSnackbar"
                        ><v-icon>mdi-email-check-outline</v-icon></v-btn>
                        <v-btn
                            fab
                            dark
                            small
                            :color="bookingStatus[0].color"
                            @click="showSnackbar(bookingStatus[0])"
                        ><v-icon>mdi-account-alert-outline</v-icon></v-btn>
                        <v-btn
                            fab
                            dark
                            small
                            :color="bookingStatus[1].color"
                            @click="showSnackbar(bookingStatus[1])"
                        ><v-icon>mdi-alert-remove-outline</v-icon></v-btn>
                    </v-speed-dial>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        pickedDate: {
            type:       String,
            default:    '1970-1-1'
        }
    },
    data: () => ({
        dialStatusBtn:  '',
        // @tip: https://flexiple.com/javascript/loop-through-object-javascript/
        bookingIcons: {
            person:         'mdi-account-outline',
            day:            'mdi-calendar-outline',
            slot:           'mdi-clock-time-five-outline',
            service:        'mdi-shopping-outline',
            estimate_total: 'mdi-credit-card-outline'
        },
        time_slots: [
            '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
            '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
            '17:00', '17:30', '18:00', '18:30'
        ],
        bookingConfirmation: {
            person:         'Booked for Chistina Smith',
            day:            'Wednesday, 20 December 2022',
            slot:           '09:00 - 09:30',
            service:        '03. General Nail - Modern Style with Rosie',
            estimate_total: 'Estimated total $90.00',
        },
        bookingStatus: [
            { message: 'Booking User Not Confirm Yet !', color: 'warning'},
            { message: 'Staff is not Available for Booking', color: 'warning'}
        ]
    }),
    watch: {
        day(newValue){
            this.bookingConfirmation.day = newValue
        },
        slot(newValue){
            this.bookingConfirmation.slot = newValue;
        }
    },
    methods: {
        ...mapMutations('strategy',
        [
            'TOGGLE_STRATEGY_BOOKING_SIDEBAR',
            'SETUP_BOOKING_DETAILS'
        ]),

        selectedHours(value){

            const outputDate = new Date(this.pickedDate);
            const outHrs = parseInt(value.substr(0,2));
            const outMins = parseInt(value.substr(3,2));

            const finalOutput = outputDate.setHours(outHrs, outMins, 0);
            // console.log((new Date(finalOutput)).toTimeString())

            // Options settings
            const dayOptions = {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }
            this.bookingConfirmation.day = (new Date(this.pickedDate)).toLocaleString('default', dayOptions);
            this.bookingConfirmation.slot = (new Date(finalOutput)).toTimeString();
            this.SETUP_BOOKING_DETAILS(
                {
                    time: finalOutput
                })
            this.TOGGLE_STRATEGY_BOOKING_SIDEBAR();
        },
        showSnackbar(data){
            if (data) {
                this.$notifier.showMessage({ content: data.message, color: data.color })
            }else{
                this.$notifier.showMessage({ content: 'Hello, snackbar', color: 'info' })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/assets/variables.scss';

#time-slots{
    .v-sheet:hover{
        background-color: $main_color !important;
        color: $white !important;
        cursor: pointer;
    }
    .theme--dark.v-card{
        color: $main_color !important;
        border-color: $main_color !important;
        background-color: transparent !important;
        font-weight: 800;
    }

}
#statusBtn{
    height: 100%;

    .v-speed-dial {
        position: absolute;
        // background-color: $black !important;
    }
    .v-btn--floating {
        position: relative;
    }
}
</style>