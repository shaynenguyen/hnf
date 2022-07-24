<template>
    <v-menu
        offset-y
        nudge-bottom="22"
        left
        content-class="list-style notification-menu-content"
      >
        <template #activator="{ on, attrs }">
          <v-badge
            color="secondary"
            dot
            overlap
          >
            <v-icon
              v-bind="attrs"
              v-on="on"
            >
              mdi-bell-outline
            </v-icon>
          </v-badge>
        </template>

        <!-- Clickable Display  -->
        <v-card>
          <v-list class="py-0">
            <!-- Header  -->
            <v-list-item
              class="d-flex"
              link
            >
              <div class="d-flex align-center justify-space-between flex-grow-1">
                <span class="font-weight-semibold">Notifications</span>
                <v-chip
                  class="v-chip-light-bg primary--text font-weight-semibold"
                  small
                >
                  6 New
                </v-chip>
              </div>
            </v-list-item>
            <v-divider></v-divider>

            <!-- Notifications  -->
            <template v-for="(notification, index) in notifications">
              <v-list-item
                :key="index"
                link
              >
                <!-- Avatar -->
                <v-list-item-avatar
                  :class="[{'v-avatar-light-bg primary--text justify-center': notification.user && !notification.user.avatar}]"
                  size="38"
                >
                  <v-img
                    v-if="notification.user && notification.user.avatar"
                    :src="notification.user.avatar"
                  ></v-img>
                  <span
                    v-else-if="notification.user && !notification.user.avatar"
                    class="text-lg"
                  >{{ getInitialName(notification.user.name) }}</span>
                  <v-img
                    v-else
                    :src="notification.service.icon"
                  ></v-img>
                </v-list-item-avatar>

                <!-- Content -->
                <v-list-item-content class="d-block">
                  <v-list-item-title class="text-sm font-weight-semibold">
                    {{ notification.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-sm">
                    {{ notification.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <!-- Item Action/Time -->
                <v-list-item-action>
                  <span class="text--secondary text-xs">{{ notification.time }}</span>
                </v-list-item-action>
              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>

            <v-list-item
              key="read-all-btn"
              class="read-all-btn-list-item mt-2 pb-2"
            >
              <v-btn
                block
                color="primary"
              >
                Read All Notifications
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
</template>

<script>
/**
 * @layout - from '@src/layouts/variants/vertical-nav/LayoutContentVerticalNav.vue'
 *
 * @content - from '@src/core/layouts/components/app-bar/AppBarNotification.vue'
 */
import { getInitialName } from '@/utils'

export default {
    name: 'HeaderNotification',
    data: () => ({
        notificationsBadge: true,
        notifications: [
          {
            user: {
              avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
              name: 'Flora Downey',
            },
            title: 'Congratulation John! 🎉 ',
            subtitle: 'Won the monthly best seller badge',
            time: 'Today',
          },
          {
            user: {
              avatar: '',
              name: 'Tom Holland',
            },
            title: 'New user registered.',
            subtitle: '5 hours ago',
            time: 'Yesterday',
          },
          {
            user: {
              avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
              name: 'Bertram Gilfoyle',
            },
            title: 'New message received',
            subtitle: 'You have 10 unread messages',
            time: '11 Aug',
          },
          {
            service: {
              icon: require('@/assets/images/svg/paypal.svg'),
            },
            title: 'Paypal',
            subtitle: 'Received Payment',
            time: '25 May',
          },
          {
            user: {
              avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
              name: 'John Smith',
            },
            title: 'Revised Order 📦',
            subtitle: 'New order revised from john',
            time: '19 Mar',
          },
          {
            service: {
              icon: require('@/assets/images/svg/chart.svg'),
            },
            title: 'Finance report has been generated',
            subtitle: '25 hrs ago',
            time: '27 Dec',
          },
        ],
    }),
    methods: {
      getInitialName: (target) => {return getInitialName(target)}
    }
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.app-bar-notification-content-container {
  .read-all-btn-list-item {
    padding-top: 14px;
    padding-bottom: 14px;
    min-height: unset;
  }
}

.ps-user-notifications {
  max-height: calc(var(--vh, 1vh) * 80);
}

.notification-menu-content {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    min-width: calc(100vw - (1.5rem * 2)) !important;
    left: 50% !important;
    transform: translateX(-50%);
  }
}
</style>