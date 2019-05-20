const User = require('../../models/user');

module.exports = {
    authorize: async (req, res)=>{
        try {
            const foundUser = await User.findOne({email: req.body.email});
            console.log(foundUser)
            // foundUser.findLevel;
            // if(foundUser){
            //     console.log(foundUser.validPassword(req.body.password))
                if(foundUser.validPassword(req.body.password)){
                    console.log('valid password')
                    req.session.message= '';
                    req.session.userId = foundUser._id;
                    req.session.userCheckIn = new Date().toDateString();
                    foundUser.calendar.push(req.session.userCheckIn);
                    foundUser.save();

                    console.log(req.session, '<=== req.session')
                    res.json({
                        status: 205,
                        data: 'login successful',
                        user: foundUser,
                        session: req.session
                    })
                } else {
                    console.log('invalid password')
                    req.session.message = 'Unfortunately the login information provided, does not match our records. Please try again.'
                    res.json({
                        data: 'invalid password',
                        message: req.session.message
                    })
                }
            // } else {
            //     console.log('invalid email')
            //     req.session.message = 'Unfortunately the login information provided, does not match our records. Please try again.'
            //     res.json({
            //         data: 'invalid email',
            //         message: req.session.message
            //     })
            // }
        } catch (error) {
            req.session.message = 'Unfortunately the login information provided, does not match our records. Please try again.'
            res.json({
                error: error,
                data: 'invalid email',
                message: req.session.message
            })
        }
    },
    new: async (req, res)=>{
        try {
            console.log(req.body, '<==req.body')
            const newUser = await User.create(req.body);
            // newUser.findLevel();
            req.session.message = '';
            req.session.userId = newUser._id;
            req.session.userCheckIn = new Date().toDateString();
            newUser.calendar.push(req.session.userCheckIn);
            newUser.save();
            res.json({
                status: 200,
                data: 'user created',
                user: newUser,
                session: req.session
            })
        } catch (error) {
            req.session.message = 'an account with that email already exists'
            res.json({
                error: error,
                data: 'account with that email already exists',
                message: req.session.message
            })
        }
    },
    logout: async (req, res)=>{
        try {
            req.session.destroy
            res.json({
                status: 200,
                message: 'You have successfully logged out. Have a wonderful day!'
            })
        } catch (error) {
            res.json({
                error: error,
            })
        }
    }
}