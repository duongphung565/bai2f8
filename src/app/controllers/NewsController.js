class NewsCotroller {
    //[GET]/news
    index(req, res) {
        res.render('news');
    }
    //[GET]/show
    show(req, res) {
        res.send('detail');
    }
}
module.exports = new NewsCotroller();
