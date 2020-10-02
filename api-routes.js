const router = require('express').Router();
var UserController = require('./controller');
router.get('/',(req,res)=>
{
	res.json({
		message:'api connected',
		status: 'success'
	})
})
router.route('/register').post(UserController.new);
router.route('/signin').post(UserController.signIn);

module.exports = router