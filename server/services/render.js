const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.add_news = (req, res) =>{
    res.render('add_news');
}

exports.update_news = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_news", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}