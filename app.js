const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const app =  express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

let apiRoutes = require('./api-routes');
app.use('/api',apiRoutes);

mongoose.connect('mongodb+srv://vishalmongo:vsharmaa0077@cluster0.q0bvj.mongodb.net/smartbrains',{useNewUrlParser:true,useUnifiedTopology:true});
var db = mongoose.connection;
if(!db)
{
	console.log('error in connection')
}
else
{
	console.log('connected')
}
app.get('/',(req,res)=>
{
	res.json(hello)
})
// app.post('/signin',(req,res)=>{

// 	if(req.body.email === database.users[0].email && req.body.password === database.users[0].password)
// 	{
// 		res.json('success')
// 	}
// 	else
// 	{
// 		res.json("failed")
// 	}
// })

// app.post('/register',(req,res)=> {
// 	database.users.push({
// 		id:'125',
// 		name: req.body.name,
// 		email: req.body.email,
// 		password: req.body.password,
// 		entries: 0,
// 		joined: new Date()
// 	})
// 	res.json(database.users[database.users.length - 1])
// })
// app.get('/profile/:id',(req,res) =>{
// 	const id = req.params.id;
// 	const found=false;
// 	for(var user of database.users)
// 	{
// 		if(user.id === id)
// 		{
// 			res.json(user);
// 			found=true;
// 			break;
// 		}
// 	}
// 	if(found===false)
// 	{
// 		res.status(400)
// 	}
// 	})

app.listen(process.env.PORT || 8080);