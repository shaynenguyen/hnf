<template>
    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
        <!-- <v-app-bar-nav-icon @click.stop="UPDATE_MAIN_DRAWER" /> -->
        <!-- <v-btn icon @click.stop="UPDATE_MINI_VARIANT">
          <v-icon>mdi-chevron-{{ `${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn> -->
        <!-- <v-btn icon @click.stop="UPDATE_CLIPPED">
          <v-icon>mdi-application</v-icon>
        </v-btn>
        <v-btn icon @click.stop="UPDATE_FIXED">
          <v-icon>mdi-minus</v-icon>
        </v-btn> -->
        <!-- <v-toolbar-title class="ml-20" :value="title"/> -->
        <v-spacer />
        <!-- <v-btn icon @click.stop="UPDATE_SECOND_DRAWER">
          <v-icon>mdi-menu</v-icon>
        </v-btn> -->

        <!-- Search Bar  -->
        <!-- <SearchBar class="mr-3"/> -->

        <!-- Weather  -->
        <Weather/>

        <!-- Notification  -->
        <Notifications/>

        <!-- Account  -->
        <Account />
      </v-app-bar>
</template>

<script>
import  { mapState, mapMutations } from 'vuex';

export default {
    name:       'HeaderComponent',
    components: {
        Account:        () => import('@/components/header/headerAccount'),
        Notifications:  () => import('@/components/header/headerNotifications'),
        Weather:        () => import('@/components/header/headerWeather'),
    },
    data: () => ({}),
    computed: {
        ...mapState([
            'fixed'
        ])
    },
    methods: {
        ...mapMutations([
            'UPDATE_MAIN_DRAWER',
            'UPDATE_FIXED'
        ])
    }
}
</script>

<style>

</style>