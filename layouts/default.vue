<template>
    <v-app dark>
        <!-- Main Navigation  -->
        <LeftNav  :title="title"/>

        <!-- Header Section  -->
        <Header/>

        <!-- Page Content  -->
        <v-main>
          <v-container>
              <Nuxt />
          </v-container>
          <Dialog />
        </v-main>
        <!-- <RightNav /> -->

        <!-- Footer Section  -->
        <!-- <Footer /> -->
    </v-app>
</template>

<script>
import LeftNav from '@/components/LeftNavigation';
import Header from '@/components/Header';
import Dialog from '@/components/used/_loadingDialog'

export default {
  name: 'DefaultLayout',
  components: { LeftNav, Header, Dialog },
  data() {
    return {
      title:    'HNF Project'
    }
  }
}
</script>
