
const newRouter= require('./news')
const siteRouter= require('./site')
const youtubeRouter= require('./youtube')
const meRouter= require('./me')
const loginRouter= require('./login')

function router(app) {
    // app.use('/new',newRouter)
    app.use('/auth', loginRouter)
    app.use('/youtube',youtubeRouter)
    app.use('/me',meRouter)
    app.use('/', siteRouter)
}

module.exports = router;
