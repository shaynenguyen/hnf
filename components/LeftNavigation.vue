<template>
     <v-navigation-drawer
      ::mini-variant.sync="isVerticalNavMini"
      app
      floating
      width="240"
      height="100vh"
      class="app-navigation-menu transparent"
    >
      <!-- Navigation Header  -->
      <NavMenuHeader class="mb-4"/>

      <!-- Navigation Items  -->
      <NavMenuLink />

    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "LeftNavigation",
  components: {
    NavMenuHeader: () => import('@/components/navigations/VerticalNavMenuHeader'),
    NavMenuLink: () => import('@/components/navigations/VerticalNavMenuLink'),
  },
  props: {
    title: {
            type:   String,
            default: "Default"
        }
  },

  computed: {
    ...mapState('menu',{
      isVerticalNavMini: (state) => state.isVerticalNavMini
    })
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}



</style>