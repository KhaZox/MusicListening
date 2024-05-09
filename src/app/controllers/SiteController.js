
const {mutipleMongooseToObject}= require('../../util/mongoose');
const Youtubes = require('../models/Youtube');

class SiteController{
    //GET /home
    index(req, res, next){
        Youtubes.find({})
            .then(youtube => res.render('home',{
                youtube:mutipleMongooseToObject(youtube)
            }))
            .catch(next)
    }


}

module.exports= new SiteController()
