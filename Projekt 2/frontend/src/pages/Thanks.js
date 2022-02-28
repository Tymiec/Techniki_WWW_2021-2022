import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Thanks() {
	
	const navigate = useNavigate()
	
	return (
		<main>
			<Container>
				<p>Thanks for reporthing the crime, our officers are being dispatched to the scene right now,</p> 
				<p>due to safety of our officers we cannot disclose the report status to you. </p>
				<p>Our city is safer because of people like you!</p>
				<img className='logo' src='https://images.gawker.com/gh3nb6pjgkwlz2jrftib/original.jpg' alt='logo' />
			</Container>
		</main>
	)
}

export default Thanks