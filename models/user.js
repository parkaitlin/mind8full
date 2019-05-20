const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    email: {type: String, required: true, unique: true}, //may not use
    password: {type: String, required: true},
    calendar: [],
    journal: [],
    level: String
}) 

// UserSchema.methods.findLevel = function(){
//     if(this.calendar.length >= 35){
//         this.level = 'meditation guru'
//     } else if(this.calender.length >= 21){
//         this.level = 'transitioning meditator'
//     } else if(this.calendar.length >= 11){
//         this.level = 'skilled meditator'
//     } else {
//         this.level = 'exploring meditator'
//     }
// }

UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}


UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

UserSchema.pre('save', function(next){
    if(this.isModified('password')){
        this.password = this.hashPassword(this.password)
    }
    next()
})


module.exports = mongoose.model('User', UserSchema)
