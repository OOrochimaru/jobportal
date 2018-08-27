var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type:String, required: true},
    email: {type: String, required:true},
    password: {type: String, required: true},
    address: {type: String, required:true},
    isEmployer:{type:Boolean, default:false},
    hasPayment:{type:Boolean, default:false},
    userDetail:{
        qualification:{type: String, required:true},
        technicalSkill: {type: String},
        paymentdetail: {type: String}
    },
    resume: {data:Buffer, contentType: String}
});

module.exports = mongoose.model('user', userSchema);
