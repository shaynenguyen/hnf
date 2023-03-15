<template>
    <!-- IN invoice/list  -->
    <div id="invoice-list">
        <!-- Summary  -->
        <v-row class="mb-4">
            <v-col
                v-for="total in userTotalAnalyst"
                :key="total.statistics"
                cols="12"
                sm="6"
                md="3"
            >
                <CardHorizonStat
                    :stat-title="total.status"
                    :change="total.change"
                    :color="total.status"
                    :icon="total.icon"
                    :statistics="total.statistics"
                    :piu="`Invoices`"
                />
            </v-col>
        </v-row>

        <!-- Datatable  -->
        <v-card>
            <!-- search/filters -->
            <v-card-text class="d-flex align-center flex-wrap pb-0">
                <div class="d-flex align-center pb-5">
                    <v-text-field
                        v-model="searchQuery"
                        single-line
                        dense
                        outlined
                        hide-details
                        placeholder="Search Invoice"
                        class="invoice-list-search me-3"
                    ></v-text-field>

                    <v-select
                        v-model="statusFilter"
                        :items="statusOptions"
                        single-line
                        outlined
                        dense
                        hide-details
                        clearable
                        placeholder="Select Status"
                        class="invoice-list-status"
                    ></v-select>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex align-center pb-5">

                    <!-- create invoice -->
                    <v-btn
                        color="primary"
                        class="me-3"
                        :to="{ name: 'invoice-slug' }"
                    >
                        <v-icon
                            size="18"
                            class="me-1"
                        >mdi-plus</v-icon>
                        <span>Create Invoice</span>
                    </v-btn>
                </div>
            </v-card-text>

            <v-data-table
                :headers="tableHeaders"
                :items="tableData"
                show-select
                class="text-no-wrap"
            >
                <!-- trending header -->
                <template #[`header.trending`]>
                    <v-icon size="22">mdi-trending-up</v-icon>
                </template>

                <!-- id -->
                <template #[`item.id`]="{item}">
                    <nuxt-link
                        class="font-weight-medium text-decoration-none"
                        :to="{ name: 'invoice-id', params: { id: item.id } }"
                    >#{{ item.id }}</nuxt-link>
                </template>

                <!-- Status  -->
                <template #[`item.trending`]="{item}">
                    <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <v-avatar
                        size="30"
                        :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
                        :class="`v-avatar-light-bg ${resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant}--text darken-4`"
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-icon
                            size="18"
                            :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
                        >
                            {{ resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon }}
                        </v-icon>
                        </v-avatar>
                    </template>
                    <span>{{ item.invoiceStatus }}</span>
                    </v-tooltip>
                </template>

                <!-- client -->
                <template #[`item.client`]="{item}">
                    <div class="d-flex align-center">
                        <v-avatar
                            :color="resolveClientAvatarVariant(item.invoiceStatus)"
                            :class="`v-avatar-light-bg ${resolveClientAvatarVariant(item.invoiceStatus)}--text darken-4`"
                            size="30"
                        >
                            <v-img
                                v-if="item.avatar"
                                :src="require(`@/assets/images/avatars/${item.avatar}`)"
                            ></v-img>
                            <span
                                v-else
                                class="font-weight-medium"
                            >{{ avatarText(item.client.name) }}</span>
                        </v-avatar>

                        <div class="d-flex flex-column ms-3">
                            <span class="d-block text--primary  font-weight-semibold text-truncate">{{ item.client.name }}</span>
                            <span class="text-xs accent--text">{{ item.client.companyEmail }}</span>
                        </div>
                    </div>
                </template>

                <!-- Total  -->
                <template #[`itm.id`]="{ itm }">
                    {{ itm.total }}
                </template>

                <!-- Balance  -->
                <template #[`item.balance`]="{ item }">
                    <span v-if="checkType(item.balance) !== 'number'">
                        {{ item.balance }}
                    </span>

                     <!-- chip -->
                    <v-chip
                        v-else
                        small
                        :color="item.total !== item.balance ? 'success':'error'"
                        :class="`v-chip-light-bg ${item.total !== item.balance ? 'success':'error'}--text font-weight-semibold darken-4`"
                    >
                        {{ item.total !== item.balance ? 'Paid':'Unpaid' }}
                    </v-chip>
                </template>

                <!-- date -->
                <template #[`item.issuedDate`]="{item}">
                    <span class="text-no-wrap">{{ item.issuedDate }}</span>
                </template>

                <!-- actions -->
                <template #[`item.actions`]="{item}">
                    <div class="d-flex align-center justify-center">
                    <!-- dropdown -->
                    <v-menu
                        bottom
                        left
                    >
                        <template #activator="{ on, attrs }">
                            <v-btn
                                small
                                icon
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon size="18">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                        <v-list-item
                            v-for="(option, i) in actionOptions"
                            :key="i"
                            :to="{ name: 'invoice-id', params: { id: item.id } }"
                        >
                            <v-list-item-title>
                            <v-icon
                                size="18"
                                class="me-2"
                            >
                                {{ option.icon }}
                            </v-icon>
                            <span>{{ option.title }}</span>
                            </v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                    </div>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import { avatarText } from '@/utils';

export default {
    name: 'InvoiceListPage',
    components: {
        CardHorizonStat: () => import('@/components/shared/cardHorizonalStatistics')
    },
    data: () => ({
        statusFilter:       '',
        searchQuery:        '',
        statusOptions:      ['Downloaded', 'Draft', 'Paid', 'Partial Payment', 'Past Due'],
        userTotalAnalyst: [
            {
                status:         'total',
                statistics:     '1,024',
                icon:           'mdi-file-chart-outline',
                change:         '-3.4%'
            },
            {
                status:         'paid',
                statistics:     '234',
                icon:           'mdi-file-check-outline',
                change:         '+20.1%'
            },
            {
                status:         'active',
                statistics:     '46',
                icon:           'mdi-file-alert-outline',
                change:         '+12.9%'
            },
            {
                status:         'pending',
                statistics:     '439',
                icon:           'mdi-file-sign',
                change:         '-33.7%'
            },
        ],
        actionOptions: [
            { title: 'Download', icon: 'mdi-download-outline' },
            { title: 'Edit', icon: 'mdi-pencil-outline' },
            { title: 'Delete', icon: 'mdi-delete-outline' },
            { title: 'Duplicate', icon: 'mdi-content-copy' },
        ],

        // Tables
        tableHeaders: [
            {
                text: '#ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Trending', value: 'trending', sortable: false },
            { text: 'CLIENT', value: 'client' },
            { text: 'TOTAL', value: 'total' },
            { text: 'DUE DATE', value: 'issuedDate' },
            { text: 'BALANCE', value: 'balance' },
            {
                text: 'ACTIONS',
                value: 'actions',
                align: 'center',
                sortable: false,
            },
        ],
        tableData: [
            {
                id: 4987,
                issuedDate: '2019-12-13',
                client: {
                    address: '7777 Mendez Plains',
                    company: 'Hall-Robbins PLC',
                    companyEmail: 'don85@johnson.com',
                    country: 'USA',
                    contact: '(616) 865-4180',
                    name: 'Jordan Stevenson',
                },
                service: 'Software Development',
                total: 3428,
                avatar: '',
                invoiceStatus: 'Paid',
                balance: '$724',
                dueDate: '2019-04-23',
            },
            {
                id: 4988,
                issuedDate: '2019-07-17',
                client: {
                    address: '04033 Wesley Wall Apt. 961',
                    company: 'Mccann LLC and Sons',
                    companyEmail: 'brenda49@taylor.info',
                    country: 'Haiti',
                    contact: '(226) 204-8287',
                    name: 'Stephanie Burns',
                },
                service: 'UI/UX Design & Development',
                total: 5219,
                avatar: '1.png',
                invoiceStatus: 'Downloaded',
                balance: 0,
                dueDate: '2019-12-15',
            },
            {
                id: 4990,
                issuedDate: '2020-03-06',
                client: {
                    address: '19022 Clark Parks Suite 149',
                    company: 'Smith, Miller and Henry LLC',
                    companyEmail: 'mejiageorge@lee-perez.com',
                    country: 'Cambodia',
                    contact: '(832) 323-6914',
                    name: 'Kevin Patton',
                },
                service: 'Software Development',
                total: 4749,
                avatar: '3.png',
                invoiceStatus: 'Sent',
                balance: 0,
                dueDate: '2020-02-11',
            },
            {
                id: 4991,
                issuedDate: '2020-02-08',
                client: {
                    address: '8534 Saunders Hill Apt. 583',
                    company: 'Garcia-Cameron and Sons',
                    companyEmail: 'brandon07@pierce.com',
                    country: 'Martinique',
                    contact: '(970) 982-3353',
                    name: 'Mrs. Julie Donovan MD',
                },
                service: 'UI/UX Design & Development',
                total: 4056,
                avatar: '4.png',
                invoiceStatus: 'Draft',
                balance: '$815',
                dueDate: '2019-06-30',
            },
            {
                id: 4995,
                issuedDate: '2020-01-26',
                client: {
                    address: '23717 James Club Suite 277',
                    company: 'Henderson-Holder PLC',
                    companyEmail: 'dianarodriguez@villegas.com',
                    country: 'Cambodia',
                    contact: '(292) 873-8254',
                    name: 'Valerie Perez',
                },
                service: 'Software Development',
                total: 3367,
                avatar: '6.png',
                invoiceStatus: 'Downloaded',
                balance: 3367,
                dueDate: '2019-12-24',
            },
        ]
    }),
    methods: {
        avatarText(d){ return avatarText(d)},

        resolveUserTotalIcon(total) {
            if (total === 'paid') return 'info'
            if (total === 'active') return 'warning'
            if (total === 'pending') return 'error'

            return 'success'
        },
        checkType(data){
            if (typeof data === 'number') return 'number'
            if (typeof data === 'string') return 'string'

            return 0
        },
        resolveInvoiceStatusVariantAndIcon(status) {
            if (status === 'Partial Payment') return { variant: 'warning', icon: 'mdi-chart-timeline-variant' }
            if (status === 'Paid') return { variant: 'success', icon: 'mdi-check' }
            if (status === 'Downloaded') return { variant: 'info', icon: 'mdi-cloud-download-outline' }
            if (status === 'Draft') return { variant: 'secondary', icon: 'mdi-content-save-outline' }
            if (status === 'Sent') return { variant: 'primary', icon: 'mdi-email-outline' }
            if (status === 'Past Due') return { variant: 'error', icon: 'mdi-alert-outline' }

            return { variant: 'secondary', icon: 'mdi-close' }
        },
        resolveClientAvatarVariant(status){
            if (status === 'Partial Payment') return 'primary'
            if (status === 'Paid') return 'error'
            if (status === 'Downloaded') return 'secondary'
            if (status === 'Draft') return 'warning'
            if (status === 'Sent') return 'info'
            if (status === 'Past Due') return 'success'

            return 'primary'
        }
    }
}
</script>

<style>

</style>