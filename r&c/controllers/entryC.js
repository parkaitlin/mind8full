const Entry = require('../../models/entry');
const User = require('../../models/user');

module.exports = {
    deleteEntry: async (req, res)=>{
        console.log(req.body, '<=== req.body')
        try {
            const foundUser = await User.findById(req.session.userId)
            const deletedEntry = await Entry.findByIdAndRemove(req.params.id)
            foundUser.journal.splice(req.body.key, 1)
            foundUser.save();
            res.json({
                user: foundUser,
                message: 'entry has been deleted'
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    }
}
