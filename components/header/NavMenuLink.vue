<template>
    <v-list-item
        class="vertical-nav-menu-link"
        v-bind="$attrs"
        active-class="bg-gradient-primary white--text"
    >
        <v-list-item-icon
            :class="{'alternate-icon-small': !icon}"
            class="mr-3"
        >
            <v-icon>
                {{ icon || alternateIcon }}
            </v-icon>
        </v-list-item-icon>

        <v-list-item-title>
            {{ title }}
        </v-list-item-title>
    </v-list-item>
</template>

<script>
/**
 * @ref - from './layouts/components/vertical-nav-menu/components/NavMenuLink.vue'
 */
export default {
    name: 'NavMenuLink',
    props: {
        title: {
            type:       String,
            required:   true,
        },
        icon: {
            type:       String,
            default:    undefined,
        }
    },
    data: () => {
        return {
            alternateIcon: 'mdi-checkbox-blank-circle-outline'
        }
    }
}
</script>

<style lang="scss" scoped>
// @import '~vuetify/src/styles/styles.sass';

.alternate-icon-small {
  font-size: 14px;
  height: 14px;
  width: 14px;
}

.vertical-nav-menu-link {
  &.v-list-item--active {
    box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
    // @include elevationTransition();
  }
}
</style>