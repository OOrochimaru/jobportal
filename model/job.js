var mongoose = require('mongosoe');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    title:{type: String, required:true},
    description:{
        jobType:{type:Sting, required:true},
        qualification:{type:Sting, required:true},
        experience:{type:Sting, required:true},
    }
})