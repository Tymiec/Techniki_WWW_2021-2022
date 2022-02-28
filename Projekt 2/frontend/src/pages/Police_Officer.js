import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Police_Officer() {
	
	const navigate = useNavigate()
	
	const [temp_time, setTimer] = useState([])
	
	const [police_officer, getPoliceOfficerData] = useState([])
	const [reports_list, getReportedReports] = useState([])
	const [taken_reported_reports, getAcceptedReports] = useState([])
	const [completed_reports_list, getCompletedReports] = useState([])
	
	useEffect (() => {
		
		let interval = null;
		interval = setInterval(() => {
			setTimer(temp_time => temp_time + 1);
		}, 1000);
		
		axios.get(`http://localhost:3001/police_officer/info`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getPoliceOfficerData(response.data)
		})
		
		axios.get(`http://localhost:3001/reports/get`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getReportedReports(response.data)
		})
		
		axios.get(`http://localhost:3001/police_officer/reports/accepted`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getAcceptedReports(response.data)
		})
		
		axios.get(`http://localhost:3001/police_officer/reports/completed`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getCompletedReports(response.data)
		})
		
		return () => clearInterval(interval);
	}, [temp_time])
	
	function acceptReport (id) {
		console.log('Mark call ' + id + ' as accepted')
		
		const data = {
			report_id: id
		}
		
		axios.post(`http://localhost:3001/police_officer/reports/accept`, data, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {console.log(response)})
	}
	
	function markAsCompleted (id) {
		console.log('Mark call ' + id + ' as completed')
		
		const data = {
			report_id: id
		}
		
		axios.post(`http://localhost:3001/police_officer/reports/mark-as-completed`, data, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {})
	}
	
	return (
		<main>
			<Container>
				<Row>
					<div className='large-button'>
						<p onClick={() => {
							window.sessionStorage.removeItem('accessToken')
							navigate('/')
						}}>Log out</p>
					</div>
				</Row>
				<Row>
					<h1 className='text-center'>Police Officer:</h1>
					<p className='text-center'>#{police_officer.badge_number} {police_officer.name} {police_officer.surname}</p>
				</Row>
				<hr></hr>
				<Row>
					
					<Col md='12'>
						<h2>Calls taken:</h2>
						<div className='reports'>
							{taken_reported_reports.map((report, key) => {
								return (
									<div key={ key } className='report'>
										<div className='report-header-in-progress'>
											<Row>
												<Col md='12'>
													<h3>#{report.id}</h3>
												</Col>
												
											</Row>
										</div>
										<div key={ key } className='report-descript-in-progress report-dostepne'>
											<p>Description: {report.report_description}</p>
											<p>Area code: {report.area_code}</p>
											<p>City: {report.city}</p>
											<p>Street: {report.street}</p>
											<p>Flat number: {report.flat_number}</p>
											<p>Caller name: {report.caller_name}</p>
											<p>Caller contact number: {report.contact_number}</p>
											<p>If blank, it means caller did not provide this information</p>
											<div className='button_1'>
												<button onClick={ () => {
													markAsCompleted(report.id)
												}}>Mark call as completed</button>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</Col>
					<Col md='12'>
						<h2>Available calls:</h2>
						<div className='reports'>
							{reports_list.map((report, key) => {
								return (
									<div key={ key } className='report'>
										<div className='report-header'>
											<Row>
												<Col md='6'>
													<h3>#{report.id}</h3>
												</Col>
											</Row>
										</div>
										<div className='report-descript report-dostepne'>
											<p>Description: {report.report_description}</p>
											<p>Area code: {report.area_code}</p>
											<p>City: {report.city}</p>
											<p>Street: {report.street}</p>
											<p>Flat number: {report.flat_number}</p>
											<p>Caller name: {report.caller_name}</p>
											<p>Caller contact number: {report.contact_number}</p>
											<p>If blank, it means caller did not provide this information</p>
											<div className='button_1'>
												<button onClick={ () => {
													acceptReport(report.id)
												}}>Accept call</button>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<h2>Calls completed</h2>
					<div className='reports'>
						{completed_reports_list.map((report, key) => {
							return (
								<div key={ key } className='report'>
									<div className='report-header-completed'>
										<Row>
											<Col md='12'>
												<h3>#{report.id}</h3>
											</Col>
										</Row>
									</div>
									<div key={ key } className='report-descript-completed report-dostepne'>
											<p>Description: {report.report_description}</p>
											<p>Area code: {report.area_code}</p>
											<p>City: {report.city}</p>
											<p>Street: {report.street}</p>
											<p>Flat number: {report.flat_number}</p>
											<p>Caller name: {report.caller_name}</p>
											<p>Caller contact number: {report.contact_number}</p>
											<p>If blank, it means caller did not provide this information</p>
									</div>
								</div>
							)
						})}
					</div>
				</Row>
			</Container>
		</main>
	)
}

export default Police_Officer
