var mongoose = require('mongoose');


var genreSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 100}

});

//Virtual for genre's
genreSchema.virtual('url').get(function(){
    return '/catalog/genre/' + this._id;

});

//Module exports
module.exports = mongoose.model('Genre', genreSchema);
