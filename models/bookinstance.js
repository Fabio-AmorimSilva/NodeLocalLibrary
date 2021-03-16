var mongoose = require('mongoose');

var bookInstanceSchema = new mongoose.Schema ({
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
});

//Virtual for bookInstance's URL
bookInstanceSchema.virtual('url').get(function(){
    return '/catalog/bookinstance/' + this._id;

});

//Export model
module.exports = mongoose.model('BookInstance', bookInstanceSchema);