
const {mongooseToObject,mutipleMongooseToObject}= require('../../util/mongoose')
const Youtubes= require('../models/Youtube')

class YoutubeController{
    create(req,res,next){
        res.render('youtube/create')
    }
    edit(req,res,next){
        Youtubes.findById(req.params.id)
            .then(youtube=> res.render('youtube/edit',{
                youtube: mongooseToObject(youtube)
            }))
            .catch(next)
        
    }
    update(req,res,next){
        // res.json(req.body)
        Youtubes.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/me/videos'))
            .catch(next)
    }
    delete(req,res,next){
        Youtubes.delete({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    forcedelete(req,res,next){
        Youtubes.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    store(req,res,next){
        const formData= req.body
        const youtube= new Youtubes(formData)
        youtube.save()
            .then(()=> res.redirect('/'))
            .catch(next)
    }
    show(req, res,next) {
        const OnlyObject= Youtubes.findOne({slug: req.params.slug})
        const OverObject= Youtubes.find({slug: { $ne: req.params.slug }})
        Promise.all([OnlyObject, OverObject])
        .then(([youtube, youtubes]) =>
            res.render('youtube/show', {
                youtube: mongooseToObject(youtube),
                youtubes: mutipleMongooseToObject(youtubes)
            }),
        )
        .catch(next);

        // Youtubes.findOne({slug: req.params.slug})
        //     .then(youtube=> {
        //         res.render('youtube/show',{
        //             youtube: mongooseToObject(youtube)
        //         })
        //     })
        //     .catch(next)
        // Youtubes.find({})
        //     .then(youtube => res.render('home',{
        //         youtube:mutipleMongooseToObject(youtube)
        //     }))
        //     .catch(next)
    }
    restore(req,res,next){
        Youtubes.restore({_id: req.params.id})
                    .then(()=> res.redirect('back'))
                    .catch(next)
    }
    handleFormActions(req,res,next){
        switch(req.body.action){
            case 'delete':
                Youtubes.delete({_id: {$in: req.body.videoId}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;
            case 'restore':
                Youtubes.restore({_id:{$in: req.body.videoId}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;
            case 'forceDelete':
                Youtubes.deleteMany({_id: {$in: req.body.videoId}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;
            default:
                break
        }
    }
}

module.exports= new YoutubeController();