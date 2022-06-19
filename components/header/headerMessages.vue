<template>
    <v-menu
      max-width="280"
      offset-y
      bottom
      nudge-bottom="10"
      left>
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          class="mr-2"
          style="font-size: 28px"
          icon
          @click="messageBadge ? messageBadge = !messageBadge : ''"
          v-on="on">
          <v-badge
              :value="messageBadge"
              color="secondary"
              :content="messages.length"
              overlap>
              <v-icon
                  color="rgba(255, 255, 255, 0.35)"
                  style="font-size: 28px">
                  mdi-email-outline</v-icon>
            </v-badge>
        </v-btn>
      </template>
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
export default {
    name: 'HeaderMessages',
    props: {
        messages: {
            type:       Array,
            default:    null
        }
    },
    data: () => ({
        messageBadge: true
    })
}
</script>

<style>

</style>