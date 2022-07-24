<template>
    <v-list
        expand
        shaped
        class="vertical-nav-menu-items"
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            router
            class="vertical-nav-menu-link"
            active-class="bg-gradient-primary"
        >
            <v-list-item-icon>
                <v-icon
                    :class="{'alternate-icon-small': !item.icon}"
                    :color="isActive ? 'white': null"
                >
                    {{ item.icon || alternateIcon }}
                </v-icon>
            </v-list-item-icon>

            <v-list-item-title
                :class="{'white--text': isActive}"
            >
                {{ item.title }}
            </v-list-item-title>
        </v-list-item>
      </v-list>
</template>

<script>
export default {
    data() {
      return{
            isActive:       false,
            alternateIcon:  'mdi-checkbox-blank-circle-outline',
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
                    title: 'Schedules',
                    to: '/schedules'
                },
                {
                    icon: 'mdi-warehouse',
                    title: 'Inventory',
                    to: 'inventory'
                }
            ],
      }
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.vertical-nav-menu-link {
  &.v-list-item--active {
    box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
    @include elevationTransition();
  }

  .v-list-item__title {
    z-index: 1;
  }
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}
</style>