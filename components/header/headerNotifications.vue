<template>
    <v-menu
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
            @click="notificationsBadge ? notificationsBadge = !notificationsBadge : ''"
            v-on="on">
                <v-badge
                :value="notificationsBadge"
                color="error"
                :content="notifications.length"
                overlap>
                    <v-icon
                    style="font-size: 28px"
                    color="rgba(255, 255, 255, 0.35)">mdi-bell-outline</v-icon>
                </v-badge>
            </v-btn>
        </template>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in notifications"
              :key="i">
                <v-list-item-icon class="mr-4 mb-1">
                  <v-icon
                    :color="item.color"
                    v-text="item.icon">
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
</template>

<script>
export default {
    name: 'HeaderNotifications',
    props: {
        notifications: {
            type:       Array,
            default:    null
        }
    },
    data: () => ({
        notificationsBadge: true,
    })
}
</script>

<style>

</style>