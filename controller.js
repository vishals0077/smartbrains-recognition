var User = require('./model');
var bcrypt = require('bcrypt-nodejs');
exports.new=function(req,res){
	var user = new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.password = (bcrypt.hashSync(req.body.password));
	
	user.save(function(err){
		if(err)
		{
			res.json(err)
		}
		else
		{
			res.json({
				message: 'user added',
				data: user
			})
		}
	})
}

exports.signIn= function(req,res){
	User.find({email:{$eq:req.body.email}},function(err,user){
		if(err)
		{

			res.json({
				status:400,
				message:'no such user'
			})
		}
		else
		{
			if(user.length!==0)
			{
				if(bcrypt.compareSync(req.body.password,user[0].password))
				{
					res.json({
					status:'success',
					data: user
				})
				}
				else
				{
					res.json({
						status:'fail',
						message: 'invalid credetials'
					})
				}
			}

			else
			{
				res.json({
					status:'user not found',
					message:'not a registered user'
				})
			}
			
			
		}
	})
}

