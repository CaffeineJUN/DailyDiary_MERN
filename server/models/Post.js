const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = mongoose.Schema(
    {
        writer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            maxlength: 50,
        },
        description: {
            type: String,
        },
        weather: {
            type: String,
        },
        // filePath: {
        //     type: String,
        // },
        catogory: String,
        views: {
            type: Number,
            default: 0,
        },
        // duration: {
        //     type: String,
        // },
        // thumbnail: {
        //     type: String,
        // },
        selectedFile: {
            type: String,
        },
    },
    {timestamps: true},
)

const Post = mongoose.model('Post', PostSchema)

module.exports = {Post}
