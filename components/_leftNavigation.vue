<template>
     <v-navigation-drawer
      :value="mainDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "LeftNavigation",
  data() {
      return{
        items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-lightbulb-on-outline',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      }
  },
  computed: {
    ...mapState([
      'miniVariant',
      'mainDrawer',
      'clipped'
      ])
  }
}
</script>

<style>

</style>