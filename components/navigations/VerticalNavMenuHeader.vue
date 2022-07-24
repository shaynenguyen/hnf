<template>
    <div class="vertical-nav-header d-flex align-center justify-space-between ps-6 pe-5 pt-5 pb-2">
        <nuxt-link
          to="/"
          class="d-flex align-center text-decoration-none"
        >
          <v-img
            :src="require('@/assets/images/logo.svg')"
            max-height="30px"
            max-width="30px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
          ></v-img>
          <v-slide-x-transition>
            <h2
                v-show="!(menuIsVerticalNavMini)"
                class="app-title text--primary"
            >
              HNFPRIO
            </h2>
          </v-slide-x-transition>
        </nuxt-link>

        <v-slide-x-transition>
            <div
                v-show="!(menuIsVerticalNavMini)"
                class="d-flex align-center ms-1"
                @click.stop="TOGGLE_MENU_VERTICAL_NAV_MINI"
            >
                <v-icon
                    v-show="!menuIsVerticalNavMini"
                    size="20"
                    class="cursor-pointer"
                >mdi-record-circle-outline</v-icon>

                <v-icon
                    v-show="menuIsVerticalNavMini"
                    size="20"
                    class="cursor-pointer"
                >mdi-radiobox-blank</v-icon>
            </div>
        </v-slide-x-transition>
    </div>
</template>

<script>
import { mapState , mapMutations, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState('menu',{
            menuIsVerticalNavMini: (state) => state.isVerticalNavMini
        }),
        ...mapGetters('menu',{
            menuIsVerticalNavMini: 'getIsVerticalNavMini'
        })
    },
    methods: {
        ...mapMutations('menu',[
            'TOGGLE_MENU_VERTICAL_NAV_MINI'
        ]),
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