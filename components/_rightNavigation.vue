<template>
   <v-navigation-drawer :value="secondDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="UPDATE_SECOND_DRAWER">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'RightNavigation',
    data(){
        return {
            right: true,
        }
    },
    computed: {
        ...mapState(['secondDrawer'])
    },
    methods: {
        ...mapMutations(['UPDATE_SECOND_DRAWER'])
    }
}
</script>

<style>

</style>