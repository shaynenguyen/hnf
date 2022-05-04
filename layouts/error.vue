<template>
    <v-app dark>
        <!-- Main Navigation  -->
        <LeftNav />

        <!-- Header Section  -->
        <Header/>

        <!-- Page Content  -->
        <v-main>
          <v-container>
              <h1 v-if="error.statusCode === 404">
                {{ pageNotFound }}
              </h1>
              <h1 v-else>
                {{ otherError }}
              </h1>
              <NuxtLink to="/"> Home page </NuxtLink>
          </v-container>
        </v-main>

        <!-- Footer Section  -->
        <Footer />
    </v-app>
</template>

<script>
import LeftNav from '@/components/_leftNavigation';
import Footer from '@/components/_footer';
import Header from '@/components/_header';

export default {
  name: 'EmptyLayout',
  components: { LeftNav, Footer, Header },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
