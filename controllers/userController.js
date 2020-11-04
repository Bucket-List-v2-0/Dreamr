const db = require('../models/dbmodel')

userController = {}

userController.addUser = (req, res, next) => {
    let query = 'insert into users (username, password) values ($1,$2);'
    let params = [req.body.username, req.body.password]

    db.query(query,params, (err, result) =>{
        if(err){
            console.log(err)
            res.status(201)
            next()
        }
        else{
            console.log('signed in')
            next()
        }
    })
}



module.exports = userController