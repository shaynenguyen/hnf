<template>
    <v-app-bar clipped-left fixed app>
        <!-- <v-app-bar-nav-icon @click.stop="UPDATE_MAIN_DRAWER" />
        <v-btn icon @click.stop="UPDATE_MINI_VARIANT">
          <v-icon>mdi-chevron-{{ `${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn> -->
        <!-- <v-btn icon @click.stop="UPDATE_CLIPPED">
          <v-icon>mdi-application</v-icon>
        </v-btn>
        <v-btn icon @click.stop="UPDATE_FIXED">
          <v-icon>mdi-minus</v-icon>
        </v-btn> -->
        <!-- <v-toolbar-title class="ml-20" :value="title"/> -->
        <v-spacer />
        <!-- <v-btn icon @click.stop="UPDATE_SECOND_DRAWER">
          <v-icon>mdi-menu</v-icon>
        </v-btn> -->

        <!-- Search Bar  -->
        <SearchBar class="mr-3"/>

        <!-- Notification  -->
        <Notifications :notifications="notifications"/>

        <!-- Messages  -->
        <Messages :messages="messages"/>

        <!-- Account  -->
        <Account :account="account"/>
      </v-app-bar>
</template>

<script>
import  { mapState, mapMutations } from 'vuex';
import SearchBar from '@/components/header/headerSearchBar';
import Account from '@/components/header/headerAccount';
import Notifications from '@/components/header/headerNotifications';
import Messages from '@/components/header/headerMessages';

export default {
    components: { SearchBar, Account, Notifications, Messages },

    data: () => ({
      notifications: [
        { text: 'Check out this awesome ticket', icon: 'mdi-tag', color: 'warning' },
        { text: 'What is the best way to get ...', icon: 'mdi-thumb-up', color: 'success'  },
        { text: 'This is just a simple notification', icon: 'mdi-flag', color: 'error'  },
        { text: '12 new orders has arrived today', icon: 'mdi-cart', color: 'primary'  },
      ],
      messages: [
        { text: 'JH', name: 'Jane Hew', message: 'Hey! How is it going?', time: '09:32', color: 'warning' },
        { text: 'LB', name: 'Lloyd Brown', message: 'Check out my new Dashboard', time: '10:02', color: 'success'  },
        { text: 'MW', name: 'Mark Winstein', message: 'I want rearrange the appointment', time: '12:16', color: 'error'  },
        { text: 'LD', name: 'Liana Dutti', message: 'Good news from sale department', time: '14:56', color: 'primary'  },
      ],
      account: [
        { text: 'Profile', icon: 'mdi-account', color: 'textColor' },
        { text: 'Tasks', icon: 'mdi-thumb-up', color: 'textColor'  },
        { text: 'Messages', icon: 'mdi-flag', color: 'textColor'  }
      ],
    }),
    computed: {
        ...mapState([
            'fixed'
        ])
    },
    methods: {
        ...mapMutations([
            'UPDATE_MAIN_DRAWER',
            'UPDATE_FIXED'
        ])
    }
}
</script>

<style>

</style>