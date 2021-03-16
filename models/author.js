var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
    
});

//Virtual for author's full name
authorSchema.virtual('name').get(function(){
    return this.family_name + ' ,' + this.first_name;

});

//Virtual for author's lifespan
authorSchema.virtual('lifespan').get(function(){
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();

});

//Virutal for author's URL
authorSchema.virtual('url').get(function(){
    return '/catalog/author/' + this._id;

});

//Export model
module.exports = mongoose.model('Author', authorSchema);