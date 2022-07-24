<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Statistics Card</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="t-1"
      >
        <v-icon>
            mdi-dots-vertical
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle class="mb-8 mt-n5">
      <span class="font-weight-semibold text--primary me-1">Total 48.5% Growth</span>
      <span>😎 this month</span>
    </v-card-subtitle>

    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="6"
          md="3"
          class="d-flex align-center"
        >
          <v-avatar
            size="44"
            :color=" data.icon.color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ data.icon.value }}
            </v-icon>
          </v-avatar>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-semibold">
              {{ data.total }}
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
// import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'

export default {
    data: () => ({
        statisticsData: [
            {
                title: 'Sales',
                total: '245k',
                icon: {
                    value:  'mdi-trending-up',
                    color:  'primary'
                }
            },
            {
                title: 'Customers',
                total: '12.5k',
                icon: {
                    value:  'mdi-account-outline',
                    color:  'success'
                }
            },
            {
                title: 'Bookings',
                total: '100',
                icon: {
                    value:  'mdi-label-outline',
                    color:  'warning'
                }
            },
            {
                title: 'Stocks',
                total: 'Low',
                icon: {
                    value:  'mdi-currency-usd',
                    color:  'info'
                }
            },
        ]
    })
}
</script>
