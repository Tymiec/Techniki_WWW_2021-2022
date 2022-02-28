const {verify} = require('jsonwebtoken')

const validateToken = (req, res, next) => {
	const accessToken = req.header('accessToken')
	
	if (!accessToken) {
		return res.json({
			error: "Access denied! You are not a police officer!"
		})
	}
	
	try {
		const validToken = verify(accessToken, "importantsecret")
		
		req.officer = validToken
		
		if (validToken) {
			return next()
		}
	} catch (err) {
		return res.json({
			error: err
		})
	}
	
}

module.exports = {validateToken}