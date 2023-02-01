const { Schema, model } = require("mongoose");

const discussionSchema = new Schema({
    title: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});


module.exports = model("Discussion", discussionSchema);
