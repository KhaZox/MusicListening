const mongoose = require('mongoose')
const slug= require('mongoose-slug-updater')
const mongooseDelete= require('mongoose-delete')

const Schema = mongoose.Schema;

const Youtubes = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  logo: String,
  img: String,
  videoID: {type: String,require: true},
  seen: String,
  slug: { type: String, slug: "videoID",unique: true},
},{
    timestamps:true
});

mongoose.plugin(slug);
Youtubes.plugin(mongooseDelete,{ 
  deletedAt: true,
  overrideMethods: 'all' 
})

module.exports= mongoose.model('Youtube',Youtubes)
