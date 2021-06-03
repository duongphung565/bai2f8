const Course =require('../models/Course');
const{mutipleMongooseToObject}=require('../../util/mongoose');
class SiteCotroller {
    //[GET]/news
    index(req, res,next) {
       
       // res.render('home');
     
       Course.find({})
       .then(courses=>{
           
           res.render('home',{
            courses:mutipleMongooseToObject(courses)
        })
       })
       .catch(next);
    }
    
    //[GET]/show
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteCotroller();
