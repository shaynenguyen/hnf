<template>
     <v-navigation-drawer
      :value="mainDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      permanent
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

      <template #append>
        <div class="text-center">
          <v-subheader class="py-4 caption d-block">Version: 0.01.00</v-subheader>
        </div>
      </template>
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
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-view-week-outline',
          title: 'Rosters',
          to: '/rosters'
        },
        {
          icon: 'mdi-warehouse',
          title: 'Inventory',
          to: 'inventory'
        }
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