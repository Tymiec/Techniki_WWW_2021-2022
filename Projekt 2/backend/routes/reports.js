const express = require ('express')
const router = express.Router ()
const { reports } = require ('../models')
const { validateToken } = require('../middlewares/AuthMiddleware.js')

router.get('/get', validateToken, async (req, res) => {
	
	const reports_res = await reports.findAll ({
		where: {
			status: 'reported'
		}
	});
	
	res.json(reports_res)
})

router.post('/new', async (req, res) => {
	const report_data = req.body
	
	report_data.status = 'reported'
	
	await reports.create(report_data)
	
	res.json({
		message: 'Report received'
	})
})

module.exports = router