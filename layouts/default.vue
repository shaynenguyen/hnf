<template>
    <v-app dark>
        <!-- Main Navigation  -->
        <LeftNav  :title="title"/>

        <!-- Header Section  -->
        <Header/>

        <!-- Page Content  -->
        <transition
            name="scroll-x-transition"
            mode="out-in"
            appear
        >
          <v-main>
            <v-container>
                <Nuxt />
            </v-container>
            <Dialog />
          </v-main>
        </transition>

        <Snackbar />
    </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  components: {
    LeftNav:      () => import('@/components/LeftNavigation'),
    Header:       () => import('@/components/Header'),
    Dialog:       () => import('@/components/LoadingDialog'),
    Snackbar:     () => import('@/components/Snackbar')
  },
  data() {
    return {
      title:    'HNFPRO'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/layout.scss';
</style>
