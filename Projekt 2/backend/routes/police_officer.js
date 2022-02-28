const express = require ('express')
const router = express.Router ()
const { police_officers, reports } = require ('../models')
const { validateToken } = require('../middlewares/AuthMiddleware.js')

router.get('/info', validateToken, async (req, res) => {
	
	const police_officer = await police_officers.findOne({
		where: {
			id: req.officer.badge_number
		},
		attributes: ['id', 'name', 'surname']
	})
	
	res.json ({
		badge_number: police_officer.id,
		name: police_officer.name,
		surname: police_officer.surname
	})
})

router.get('/reports/accepted', validateToken, async (req, res) => {
	
	const accepted_reports = await reports.findAll ({
		where: {
			badge_number: req.officer.badge_number,
			status: "in progress"
		}
	});
	
	res.json(accepted_reports)
})

router.get('/reports/completed', validateToken, async (req, res) => {
	
	const completed_reports = await reports.findAll ({
		where: {
			badge_number: req.officer.badge_number,
			status: "completed"
		}
	});
	
	res.json(completed_reports)
})

router.post('/reports/accept', validateToken, async (req, res) => {
	const { report_id } = req.body
	
	await reports.update(
		{
			status: 'in progress',
			badge_number: req.officer.badge_number
		},
		{
			where: {
				id: report_id,
			}
		}
	)
	
	res.json ({
		message: 'Police officer ' + req.officer.badge_number + ' is enroute to call #' + report_id
	})
})

router.post('/reports/mark-as-completed', validateToken, async (req, res) => {
	const { report_id } = req.body
	
	await reports.update(
		{
			status: 'completed'
		},
		{
			where: {
				id: report_id,
				badge_number: req.officer.badge_number
			}
		}
	)
	
	res.json ({
		message: 'Police officer ' + req.officer.badge_number + ' marked call #' + report_id + ' as completed'
	})
})

module.exports = router