<template>
    <v-card
        outlined
        class="statistics-horizontal"
    >
        <div class="d-flex align-center">
            <v-avatar
                :color="$vuetify.theme.dark ? '#312d4b': '#fff'"
                rounded
                size="44"
                class="elevation-3"
            >
                <v-icon
                    size="30"
                    :color="resolveCommonColor(color)"
                >
                    {{ icon }}
                </v-icon>
            </v-avatar>

            <div class="ms-3">
                <span class="text-xs text-capitalize">{{ statTitle }} {{ piu }}</span>
                <p class="text-no-wrap mb-0">
                <span
                    class="text-xl font-weight-semibold text--primary mr-3"
                >{{ statistics }}</span>
                <v-icon
                    size="15"
                    :color="checkChange(change) ? 'success':'error'"
                >
                    {{ checkChange(change) ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
                <span
                    class="font-weight-semibold text-xs"
                    :class="checkChange(change) ? 'success--text':'error--text'"
                >{{ change.slice(1) }}</span>
                </p>
            </div>
        </div>
    </v-card>
</template>

<script>
import { resolveCommonColor } from '@/utils/resolveUi'
export default {
    props: {
        statTitle:  { type: String, default: '' },
        statistics: { type: String, default: '' },
        change:     { type: String, default: '' },
        icon:       { type: String, default: '' },
        color:      { type: String, default: '' },
        piu:        { type: String, default: '' },
    },
    methods: {
        resolveCommonColor: (d) => { return resolveCommonColor(d) },
        checkChange(value) {
            const firstChar = value.charAt(0)

            if(firstChar === '+'){
                return true
            }

            return false
        }
    }
}
</script>

<style lang="scss" scoped>
.statistics-horizontal {
  background-color: transparent !important;
  padding: 1.25rem 4.063rem 1.125rem 1.25rem;
}

.v-application {
    &.v-application--is-rtl {
        .statistics-horizontal {
        padding: 1.25rem 1.125rem 1.25rem 4.063rem;
        }
    }
}
</style>