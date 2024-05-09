
const {mongooseToObject,mutipleMongooseToObject}= require('../../util/mongoose')
const Youtubes= require('../models/Youtube')

class MeController{
    storedVideos(req,res,next){

        let youtubeQuery= Youtubes.find({})
        //sort easy
        if(req.query.hasOwnProperty('_sort')){
            youtubeQuery= youtubeQuery.sort({
                [req.query.col] : req.query.type
            })
        }
        Promise.all([youtubeQuery, Youtubes.findWithDeleted()])
            .then(([youtube, deletedCountt]) =>
                res.render('me/stored-videos', {
                    youtube: mutipleMongooseToObject(youtube),
                    deletedCountt: deletedCountt.filter(youtube => youtube.deleted).length
                }),
            )
            .catch(next);
    }
    create(req,res,next){
        res.render('youtube/create')
    }
    store(req,res,next){
        const formData= req.body
        const youtube= new Youtubes(formData)
        youtube.save()
            .then(()=> res.redirect('/'))
            .catch(next)
    }
    trashVideos(req, res, next){
        Youtubes.findWithDeleted({deleted: true})
            .then(youtube=> res.render('me/trash-videos',{
                youtube: mutipleMongooseToObject(youtube)
            }))
            .catch(next)
    }
}

module.exports= new MeController();