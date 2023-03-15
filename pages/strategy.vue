<template>
    <v-row class="app-strategy">
        <v-col cols="12" md="9">
            <v-card class="max-h-content-container app-calendar position-relative overflow-hidden text-sm" dark>
                <v-card-title class="d-flex mb-3">
                    <span v-if="strategyCalendarView === 'week'" class="accent--text">Week {{ getWeekNr(today) }} - Commercing on {{ getMonday(today) }}</span>
                    <span v-else-if="strategyCalendarView" class="accent--text">{{ getMonth(today) }} Booking Planned</span>
                    <span v-else class="accent--text">{{ (new Date(today)).toLocaleString('default', {weekday: 'long', day: '2-digit', month: 'short', year: 'numeric'}) }} - Booking time slots</span>
                    <v-spacer></v-spacer>
                    <v-btn-toggle
                        v-model="strategyCalendarView"
                        class="mt-3 mt-sm-0"
                        color="primary"
                        borderless
                        tile
                    >
                            <v-btn
                                v-for="(strategyViewOption, index) in strategyViewOptions"
                                :key="index"
                                elevation="0"
                                :value="strategyViewOption"
                            >
                                <v-icon class="text-center">{{ strategyTypeOptions[index].icon }}</v-icon>
                                <span v-if="strategyViewOption" class="hidden-sm-and-down ml-3">{{ strategyTypeOptions[index].name }}</span>
                            </v-btn>

                    </v-btn-toggle>
                </v-card-title>
                <v-card-text v-if="strategyCalendarView">
                    <v-calendar
                        ref="refCalendar"
                        v-model="today"
                        event-overlap-mode="column"
                        :now="today"
                        :events="events"
                        :type="strategyCalendarView"
                        :weekdays='[1, 2, 3, 4, 5, 6, 0]'
                        first-time="8"
                        interval-count="14"
                        transition="fade-transition"
                        show-week
                        dark
                        @click:event="viewRoster"
                        @click:day="viewDate"
                    >
                        <template #event="{ }" >
                        <!-- <template #event="{ event, eventParsed }" > -->
                            <div
                                class="text-center haize"
                            >
                                <!-- <span>{{ eventParsed.endTimestampIdentifier - eventParsed.startTimestampIdentifier }}</span>
                                <v-spacer></v-spacer>
                                <span>{{ event.category }}</span>
                                <v-spacer></v-spacer>
                                <span>{{ event.color }}</span> -->
                            </div>
                        </template>
                    </v-calendar>
                </v-card-text>
                <v-card-text v-else class="mt-5">
                    <BookingSlot :pickedDate="today"/>
                </v-card-text>
            </v-card>

        </v-col>
        <v-col cols="12" md="3">
            <v-date-picker
                v-model="today"
                type="date"
                width="270"
                color="primary"
                header-color="transparent"
                first-day-of-week="1"
                show-adjacent-months
                dark
                no-title
                class="booking-indicator mb-6"
            ></v-date-picker>

            <div v-if="strategyCalendarView === 'week'" transition="fade-transition">
                <!-- Switches  -->
                <div class="d-flex align-center justify-space-between my-3">
                    <span>Nail Technicians</span>
                    <v-switch
                        v-model="showTechnicians"
                        hide-details="auto"
                        color="primary"
                        class="mt-0"
                        flat
                    ></v-switch>
                </div>
                <div class="d-flex align-center justify-space-between">
                    <span>Assistants Team</span>
                    <v-switch
                        v-model="showAssistants"
                        class="mt-0"
                        hide-details="auto"
                        color="secondary"
                        flat
                    ></v-switch>
                </div>
            </div>
            <div v-else-if="strategyCalendarView"></div>
            <BookingActions v-else/>
        </v-col>
        <Sidebar :event="eventToSidebar"/>
        <SidebarBookingForm />
        <Dialog />
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'StrategyPage',
    components: {
        BookingSlot:            () => import('@/components/strategy/strategyBookingSlot'),
        SidebarBookingForm:     () => import('@/components/strategy/strategySidebarBookingForm'),
        Sidebar:                () => import('@/components/strategy/strategySidebarViewDaily'),
        Dialog:                 () => import('@/components/strategy/strategyDayViewDialog'),
        BookingActions:         () => import('@/components/strategy/strategyBookingActions'),
    },
    data: () => ({
        refCalendar: null,
        today: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        // today: '2022-12-20', // Test
        showTechnicians:    true,
        showAssistants:     false,
        iconColor:          '',
        eventToSidebar:     {
          name:     '',
          color:    '',
          start:    '',
          end:      '',
          category: ''
        },
        strategyCalendarView: 'week',
        strategyViewOptions: [ 'week', 'month',''],
        strategyTypeOptions: [
            {
                name:   'Rosters',
                icon:   'mdi-human-queue'
            },
            {   name:   'Bookings',
                icon:   'mdi-calendar-edit'
            },
            {
                icon:   'mdi-clipboard-clock-outline'
            }
        ],
        events: [
            {
                name: 'Technicians',
                start: '2022-12-12 09:00',
                end: '2022-12-12 18:00',
                color: 'secondary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-12 08:30',
                end: '2022-12-12 18:30',
                color: 'secondary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-13 09:00',
                end: '2022-12-13 18:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-13 08:30',
                end: '2022-12-13 18:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-14 09:00',
                end: '2022-12-14 18:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-14 08:30',
                end: '2022-12-14 18:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-15 09:00',
                end: '2022-12-15 18:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-15 08:30',
                end: '2022-12-15 20:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-16 09:00',
                end: '2022-12-16 18:30',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-16 08:30',
                end: '2022-12-16 18:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-17 09:00',
                end: '2022-12-17 18:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-17 09:00',
                end: '2022-12-17 17:00',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Assistants',
                start: '2022-12-18 09:00',
                end: '2022-12-18 17:00',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-18 09:00',
                end: '2022-12-18 17:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Technicians',
                start: '2022-12-19 09:00',
                end: '2022-12-19 17:00',
                color: 'secondary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-19 08:30',
                end: '2022-12-19 18:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-20 09:00',
                end: '2022-12-20 18:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-20 08:30',
                end: '2022-12-20 18:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-21 09:00',
                end: '2022-12-21 18:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-21 08:30',
                end: '2022-12-21 15:00',
                color: 'secondary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-22 09:00',
                end: '2022-12-22 20:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-22 08:30',
                end: '2022-12-22 20:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-23 09:00',
                end: '2022-12-23 18:30',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-23 08:30',
                end: '2022-12-23 16:00',
                color: 'secondary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-24 09:00',
                end: '2022-12-24 17:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-24 09:00',
                end: '2022-12-24 17:30',
                color: 'primary',
                category: 'Assistants'
            },
            {
                name: 'Technicians',
                start: '2022-12-25 09:00',
                end: '2022-12-25 17:00',
                color: 'primary',
                category: 'Nail Technicians'
            },
            {
                name: 'Assistants',
                start: '2022-12-25 09:00',
                end: '2022-12-25 17:30',
                color: 'primary',
                category: 'Assistants'
            },
        ]
    }),
    watch: {
        today(newVal){
            // console.log(newVal)
            this.getWeekNr(newVal);
            this.getMonth(newVal)
        },
        strategyCalendarView(newVal){
            this.iconColor = 'primary'
        }
    },
    methods: {
        ...mapMutations('strategy',[
          'TOGGLE_DAILY_ROSTER_SIDEBAR',
          'TOGGLE_STRATEGY_DAY_VIEW_DIALOG',
        ]),
        getWeekNr(date) {

            const myDate = new Date(date);
            const firstJanuary = new Date(myDate.getFullYear(), 0, 1);
            const dayNr = Math.ceil((myDate - firstJanuary) / (24 * 60 * 60 * 1000));
            const weekNr = Math.ceil((dayNr + firstJanuary.getDay()) / 7);
            return weekNr;
        },
        getMonth(date){
            const myDate = new Date(date);
            return myDate.toLocaleString('default', { month: 'long'})
        },
        getMonday(date){
            const myDate = new Date(date);
            const dayofWeek = myDate.getDay();
            const differentToMonday = myDate.getDate() - dayofWeek + ( dayofWeek === 0 ? -61: 1);

            return (new Date(myDate.setDate(differentToMonday))).toLocaleString('default', {day: '2-digit', month: 'short', year: 'numeric'});
        },
        viewRoster(eventObj){
            // Grab only event object
            // eslint-disable-next-line no-undef
            this.eventToSidebar = {
                name:       eventObj.event.name,
                color:      eventObj.event.color,
                start:      eventObj.event.start,
                end:        eventObj.event.end,
                category:   eventObj.event.category
            }

            this.TOGGLE_DAILY_ROSTER_SIDEBAR();
        },
        viewDate(dayObj){
            console.log({dayObj})
            this.TOGGLE_STRATEGY_DAY_VIEW_DIALOG();
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/pages/strategy.scss';
</style>