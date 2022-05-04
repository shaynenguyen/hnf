<template>
  <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="UPDATE_MAIN_DRAWER" />
      <v-btn icon @click.stop="UPDATE_MINI_VARIANT">
        <v-icon>mdi-chevron-{{ `${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="UPDATE_CLIPPED">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="UPDATE_SECOND_DRAWER">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import  { mapState, mapMutations } from 'vuex';

export default {
    props: {
        title: {
            type:   String,
            default: "Default"
        }
    },
    computed: {
        ...mapState([
            'clipped',
            'miniVariant',
            'fixed'
        ])
    },
    methods: {
        ...mapMutations([
            'UPDATE_MAIN_DRAWER',
            'UPDATE_MINI_VARIANT',
            'UPDATE_CLIPPED',
            'UPDATE_SECOND_DRAWER'
        ])
    }
}
</script>

<style>

</style>