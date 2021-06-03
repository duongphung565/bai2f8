const Course =require('../models/Course');

const{mongooseToObject}=require('../../util/mongoose');
//Load packages
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 
app.use(express.static('public'));
app.set("view engine", "ejs");

class CourseCotroller {
    //[GET]/news
   
    
    //[GET]/courses/:slug
    show(req, res,next) {
       Course.findOne({slug: req.params.slug})
       .then(course=>
         res.render('courses/show',{course:mongooseToObject(course)})
          //res.json(course)
       )
       .catch(next);
      
    }
    //[GET] /courses/create
    create(req, res,next) {
     res.render('courses/create');
     
   }
   //[POST] /courses/store
   store(req, res,next) {
      console.log(req.body);
      //const formData=req.body;
     // formData.image='https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg';
     //const course=new Course(formData);
     //course.save();
//      app.use(express.urlencoded());
// res.send(res.json(req));
//     // res.send('Save');
//     res.json(req.body);
    }
}
module.exports = new CourseCotroller();
