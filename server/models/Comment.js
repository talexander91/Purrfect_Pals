const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    text: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    discussion: {
        type: Schema.Types.ObjectId,
        ref: 'Discussion'
    }
});


module.exports = model("Comment", commentSchema);
