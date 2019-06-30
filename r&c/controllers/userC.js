const User = require('../../models/user');
const Entry = require('../../models/entry');
const Munchies = require('../../models/munchies');
const fetch = require("node-fetch");

module.exports = {
    bearAndDrop: async (req,res)=>{
        try {
            const bearResponse = await fetch(`http://quotes.rest/quote/search.json?category=${req.params.category}&minlength=100&maxlength=300`,{
                headers: {
                    "Accept": "application/json",
                    "X-TheySaidSo-Api-Secret": process.env.SECRET
                }
            })
            const parsedResponse = await bearResponse.json()
            res.json({
                success:true,
                data:parsedResponse,
                message:"grabbed a gummy bear or a cough drop"
            })
        } catch (error) { 
            res.json({
                error: error
            })
        }
    },
    index: async (req, res)=>{
        try {
            const allUsers = await User.find();
            res.json({allUsers})
        } catch (error) {
            res.json({error})
        }
    },
    deactivate: async (req, res) =>{
        try {
            const deletedUser = await User.findByIdAndRemove(req.session.userId)
            req.session.destroy
            res.json({
                status: 200,
                message: 'Your account has been deactivated'
            })
        } catch (error) {
            res.json(error)
        }
    },
    updateProfile: async (req, res)=>{
        if(!req.body.password){
            delete req.body.password
        }                        
        try {
            const updatedUser = await User.findByIdAndUpdate(req.session.userId, req.body, {new:true})
            if(req.body.password){
                updatedUser.password = updatedUser.hashPassword(req.body.password)
                updatedUser.save();
            } 
            res.json({
                user: updatedUser,
                status: 200
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    saveEntry: async (req, res)=>{
        try {
            const savedEntry = await Entry.create(req.body)
            const foundUser = await User.findById(req.session.userId)
            foundUser.journal.push(savedEntry)
            foundUser.save()
            res.json({
                status: 200,
                user: foundUser,
                data: savedEntry,
                message: 'you have completed an entry today! :D'
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    profile: async (req, res)=>{
        try {
            const foundUser = await User.findById(req.session.userId)
            res.json({
                status: 200,
                data: foundUser,
                message: 'found user info for portfolio'
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    munch: (req, res)=>{
        const i = Math.floor(Math.random() * Munchies.length)
        const munchie = Munchies[i]
        res.json({
            status: 200,
            data: munchie,
            message: 'random munchie'
        })   
    }
}