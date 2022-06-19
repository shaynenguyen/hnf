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
import LeftNav from '@/components/_leftNavigation';
import Header from '@/components/_header';
import Dialog from '@/components/_loadingDialog'

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
