const {mongooseToObject,mutipleMongooseToObject}= require('../../util/mongoose')
const Youtubes= require('../models/Youtube')
class LoginController{
    // storedVideos(req,res,next){

    //     let youtubeQuery= Youtubes.find({})
    //     //sort easy
    //     if(req.query.hasOwnProperty('_sort')){
    //         youtubeQuery= youtubeQuery.sort({
    //             [req.query.col] : req.query.type
    //         })
    //     }
    //     Promise.all([youtubeQuery, Youtubes.findWithDeleted()])
    //         .then(([youtube, deletedCountt]) =>
    //             res.render('me/stored-videos', {
    //                 youtube: mutipleMongooseToObject(youtube),
    //                 deletedCountt: deletedCountt.filter(youtube => youtube.deleted).length
    //             }),
    //         )
    //         .catch(next);
    // }
    loginBack(req,res,next){
        res.redirect('/login');
    }
}
module.exports= new LoginController();
