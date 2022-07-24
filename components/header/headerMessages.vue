<template>
    <v-menu
      offset-y
      nudge-bottom="22"
      left
      content-class="list-style notification-menu-content"
    >
      <template #activator="{ on, attrs }">
        <v-badge
          :value="messageBadge"
          color="secondary"
          :content="messages.length"
          overlap
          v-bind="attrs"
          @click="messageBadge ? messageBadge = !messageBadge : ''"
          v-on="on"
        >
          <v-icon>
            mdi-bell-outline
          </v-icon>
        </v-badge>
      </template>

      <!-- Clickable Display Content  -->
      <v-list>
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4">New Messages</div>
        <div class="subtitle-2 secondary--text font-weight-regular px-4 pb-2 link-item">4 new Messages</div>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in messages"
            :key="i">
            <v-list-item-icon class="mr-4 mb-1 d-flex flex-column">
              <v-btn
                fab
                x-small
                depressed
                :color="item.color">{{ item.text }}
              </v-btn>
              <div style="font-size: 11px">{{ item.time }}</div>
            </v-list-item-icon>
            <v-list-item two-line >
              <v-list-item-content style="width: 190px">
                <v-list-item-title class="pb-2" v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle class="text-truncate" v-text="item.message"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
          </v-list-item-group>
        <div class="d-flex justify-center my-3">
            <v-btn
              large
              color="primary"
              rounded
              elevation="5"
              class="text-capitalize">
              Send New Message
            <v-icon right dark>mdi-send</v-icon>
          </v-btn>
          </div>
      </v-list>
    </v-menu>
</template>

<script>
/**
 * @layout - from '@src/layouts/variants/vertical-nav/LayoutContentVerticalNav.vue'
 *
 * @content - from '@src/core/layouts/components/app-bar/AppBarNotification.vue'
 */

export default {
    name: 'HeaderMessages',
    data: () => ({
        messageBadge: true,
        messages: [
          { text: 'JH', name: 'Jane Hew', message: 'Hey! How is it going?', time: '09:32', color: 'warning' },
          { text: 'LB', name: 'Lloyd Brown', message: 'Check out my new Dashboard', time: '10:02', color: 'success'  },
          { text: 'MW', name: 'Mark Winstein', message: 'I want rearrange the appointment', time: '12:16', color: 'error'  },
          { text: 'LD', name: 'Liana Dutti', message: 'Good news from sale department', time: '14:56', color: 'primary'  },
        ],
    })
}
</script>

<style>

</style>