// ~/plugins/notitier.js
// @source: https://dev.to/stephann/how-to-create-a-global-snackbar-using-nuxt-vuetify-and-vuex-1bda

export default ({ app, store }, inject ) => {
    inject('notifier', {
        showMessage ({ content = '', color = '' }) {
            store.commit('snackbar/showMessage', { content, color })
        }
    })
}