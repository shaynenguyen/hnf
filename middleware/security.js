export default function ({ route, store }){
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(route.fullPath)
    const loggedIn = localStorage.getItem('authToken');

    // Trying to access a restricted page + not logged in
    // redirect to login page.
    if ( authRequired && !loggedIn && !store.state.authenticated ) {
        this.$router.push({ name: 'auth-login'})
    }
}