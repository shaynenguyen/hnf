<template>
    <v-row>
        <v-col cols="12" md="12" sm="12">
            <v-breadcrumbs :items="items" class="pb-0 pl-0">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <v-subheader class="pl-0">
                <h2 class="headline">{{ title }}</h2>
            </v-subheader>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        title: {
            type:       String,
            default:    "Link 1"
        }
    },
    data: () => {
      return ({
        items: [
          {
            text: 'Home',
            disabled: false,
            href: '/'
          },
          {
            text: 'Projects',
            disabled: true,
            href: '/projects'
          }
        ]
      });
    }
}
</script>

<style>

</style>