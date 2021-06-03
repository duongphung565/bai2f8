const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
function route(app) {
    // app.get('/news',(req,res)=>{
    //   res.render('news');
    // });
    app.use('/news', newRouter);
    app.use('/courses',coursesRouter)

    app.use('/', siteRouter);
}
module.exports = route;
