<template>
    <v-app dark>
        <!-- Main Navigation  -->
        <LeftNav />

        <!-- Header Section  -->
        <Header/>

        <!-- Page Content  -->
        <v-main>
          <v-container>
              <Nuxt />
          </v-container>
        </v-main>
        <RightNav />

        <!-- Footer Section  -->
        <Footer />
    </v-app>
</template>

<script>
import LeftNav from '@/components/_leftNavigation';
import RightNav from '@/components/_rightNavigation';
import Footer from '@/components/_footer';
import Header from '@/components/_header';

export default {
  name: 'DefaultLayout',
  components: { LeftNav, RightNav, Footer, Header },
  data() {
    return {
      title:    'HNF Project'
    }
  }
}
</script>
