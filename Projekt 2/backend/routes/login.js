const express = require ('express')
const router = express.Router ()
const { police_officers } = require ('../models')
const bcrypt = require ('bcrypt')
const {sign} = require('jsonwebtoken')

router.get('/hash/:haslo', async (req, res) => { //admin function for creating password tokens for new police officers
	const password = req.params.haslo
	bcrypt.hash (password, 10).then ((hash) => {
		res.json ({
			password: password,
			hash: hash
		}) 
	})
})

router.post('/', async (req, res) => {
	const { email, password } = req.body
	
	if (!email || !password) {
		res.json ({
			error: 'Missing data'
		})
		return
	}
	
	const police_officer = await police_officers.findOne({
		where: {
			email: email
		}
	})
	
	if (!police_officer) {
		res.json ({
			error: 'Username not found'
		})
		return
	}
	
	bcrypt.compare (password, police_officer.password_hash).then((zgodne) => {
		if (!zgodne) {
			res.json({
				error: 'Incorrect password'
			})
			return
		}
		
		//token creation 
		const accessToken = sign({  
			badge_number: police_officer.id,
			username: police_officer.name + " " + police_officer.surname
		}, "importantsecret") 
		
		res.json({
			message: 'Succesfully logged in',
			accessToken: accessToken
		})
	})
})

module.exports = router