<template>
  <v-main>
    <v-container>
      <div class="page-title text-center pa-5">
        <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
          <span class="me-2">Page Not Found</span>
          <v-icon color="warning">
            mdi-alert
          </v-icon>
        </h2>
        <p class="text-sm">
          we couldn't find the page you are looking for
        </p>

        <div class="misc-character d-flex justify-center">
          <v-img
            max-width="420"
            :src="require(`@/assets/images/3d-characters/error.png`)"
          ></v-img>
        </div>

        <v-btn
          color="primary"
          to="/"
          class="my-4"
        >
          Back to home
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'ErrorLayout',
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
