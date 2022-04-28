module.exports = function(app, obj){

    app.get('/', (req, res) => {
        res.render('home', {title: 'Welcome to HNF Homepage !', nTest: obj.API})
    })
    app.get('/about', (req, res) => {
        res.render('about',{title: 'About HNF Project !'})
    })
    app.get('/contact', (req, res) => {
        res.render('contact', {title: 'Contact HNF team'})
    })
    app.get('/chat', (req, res) => {
        res.render('chat', {title: 'Chat with HNF team'})
    })
}