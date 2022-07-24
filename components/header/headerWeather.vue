<template>
    <v-menu
        offset-y
        nudge-bottom="22"
        left
        min-width="300"
        content-class="list-style weather-menu-content"
    >
        <template #activator="{ on, attrs }">

            <v-icon
                v-bind="attrs"
                class="me-4"
                v-on="on"
            >
                mdi-temperature-celsius
            </v-icon>
        </template>

        <!-- Clickable Display  -->
        <v-card>
            <v-list class="py-0">
                <!-- Header  -->
                <v-list-item
                    class="d-flex"
                    link
                >
                    <div class="d-flex align-center justify-space-between flex-grow-1">
                        <span class="font-weight-semibold">Sunday, 24th July 2022</span>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <!-- Notifications  -->
                <template v-for="(weather, index) in weathers">
                    <v-list-item
                        :key="index"
                        link
                    >
                        <!-- Icon -->
                        <v-list-item-icon class="me-2 mr-2">
                            <v-icon
                                size="38"
                                v-text="weather.icon"
                            />
                        </v-list-item-icon>

                        <!-- Content -->
                        <v-list-item-content class="d-block">
                            <v-list-item-title class="text-sm font-weight-semibold">
                                {{ weather.time }}
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-sm">
                                {{ weather.description }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <!-- Item Action/Time -->
                        <v-list-item-action>
                            <span class="text--secondary text-lg">{{ weather.temperature }}</span>
                            <v-icon>mdi-temperature-celsius</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider :key="index"></v-divider>
                </template>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    name: 'HeaderWeather',
    data: () => ({
        weathers: [
            {
                icon:           'mdi-weather-cloudy',
                time:           '07:00am',
                description:    'Party Cloudy',
                temperature:    '22'
            },
            {
                icon:           'mdi-weather-partly-snowy-rainy',
                time:           '08:00am',
                description:    'Light Cloudy',
                temperature:    '25'
            },
            {
                icon:           'mdi-weather-partly-snowy-rainy',
                time:           '09:00am',
                description:    'Rainy',
                temperature:    '26'
            },
            {
                icon:           'mdi-weather-partly-cloudy',
                time:           '10:00am',
                description:    'Heavy Rainy',
                temperature:    '22'
            },
            {
                icon:           'mdi-weather-sunny',
                time:           '11:00am',
                description:    'Rainy',
                temperature:    '22'
            },
            {
                icon:           'mdi-weather-sunny',
                time:           '12:00pm',
                description:    'Sunny',
                temperature:    '24'
            },
        ]
    })
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.app-bar-weather-content-container {
  .read-all-btn-list-item {
    padding-top: 14px;
    padding-bottom: 14px;
    min-height: unset;
  }
}

.ps-user-weathers {
  max-height: calc(var(--vh, 1vh) * 80);
}

.weather-menu-content {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    min-width: calc(100vw - (1.5rem * 2)) !important;
    left: 50% !important;
    transform: translateX(-50%);
  }
}
</style>