<template>
  <v-row justify="center" align="center">
    <!-- First Row  -->
    <v-col
      cols="12"
      md="4"
    >
      <DashboardUser/>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <DashboardStatisticCard />
    </v-col>

    <!-- Second Row  -->
    <v-col
      cols="12"
      md="4"
    >
      <DashBoardTotalEarn />
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <DashBoardSmallDetail
            :stat-title="logisticsOptions.statTitle"
            :icon="logisticsOptions.icon"
            :color="logisticsOptions.color"
            :subtitle="logisticsOptions.subtitle"
            :statistics="logisticsOptions.statistics"
            :change="logisticsOptions.change"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <DashBoardSmallDetail
            :stat-title="reportsOptions.statTitle"
            :icon="reportsOptions.icon"
            :color="reportsOptions.color"
            :subtitle="reportsOptions.subtitle"
            :statistics="reportsOptions.statistics"
            :change="reportsOptions.change"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <DashBoardSmallDetail
            :stat-title="rosterOptions.statTitle"
            :icon="rosterOptions.icon"
            :color="rosterOptions.color"
            :subtitle="rosterOptions.subtitle"
            :statistics="rosterOptions.statistics"
            :change="rosterOptions.change"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <DashBoardSmallDetail
            :stat-title="newProjectOptions.statTitle"
            :icon="newProjectOptions.icon"
            :color="newProjectOptions.color"
            :subtitle="newProjectOptions.subtitle"
            :statistics="newProjectOptions.statistics"
            :change="newProjectOptions.change"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <DashBoardCardTransaction />
    </v-col>

    <!-- Last Row  -->
    <v-col
      cols="12"
      md="8"
    >
      <DashBoardTableUsers />
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <DashBoardServicesByStaff />
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'IndexPage',
    components: {
        // Own directory
        DashboardUser:              () => import('@/components/dashboard/dashBoardWelcomeUser'),
        DashboardStatisticCard:     () => import('@/components/dashboard/dashBoardStatisticCard'),
        DashBoardTotalEarn:         () => import('@/components/dashboard/dashBoardTotalEarn'),
        DashBoardTableUsers:        () => import('@/components/dashboard/dashBoardTableUsers'),
        DashBoardCardTransaction:   () => import('@/components/dashboard/dashBoardCardTransaction'),
        DashBoardServicesByStaff:   () => import('@/components/dashboard/dashBoardServicesByStaff'),

        // Shared directory
        DashBoardSmallDetail:       () => import('@/components/shared/cardVerticalTwoColumns')
    },
    data: () => ({
      logisticsOptions: {
        statTitle: 'Logistics',
        icon: 'mdi-truck-fast-outline',
        color: 'error',
        subtitle: 'Revenue Increase',
        statistics: '44.1k',
        change: '+12%',
      },
      reportsOptions: {
        statTitle: 'Reports',
        icon: 'mdi-presentation',
        color: 'warning',
        subtitle: 'System Bugs',
        statistics: '268',
        change: '-8%',
      },
      rosterOptions: {
        statTitle: 'Roster',
        icon: 'mdi-calendar-check-outline',
        color: 'success',
        subtitle: 'Fixed Staff',
        statistics: '170',
        change: '+hrs',
      },
      newProjectOptions: {
        statTitle: 'New Project',
        icon: 'mdi-label-variant-outline',
        color: 'primary',
        subtitle: 'Yearly Project',
        statistics: '862',
        change: '-18%',
      }
    })
}
</script>
