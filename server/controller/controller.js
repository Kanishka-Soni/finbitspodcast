var Userdb = require('../model/model');


exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content cannot be empty!"});
        return;
    }
    
    const user = new Userdb({
        name : req.body.name,
        content : req.body.content,
        imagelink : req.body.imagelink,
        url: req.body.url,
        type: req.body.type,
        length: req.body.length,
        date: req.body.date,
        category : req.body.category
    })

    // save in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-news');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred during a create operation"
            });
        });

}

// retrieve and return news
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "404 Not found News with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving news with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving information" })
            })
    }

    
}

// Update
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Updating user information"})
        })
}

// Delete 
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}