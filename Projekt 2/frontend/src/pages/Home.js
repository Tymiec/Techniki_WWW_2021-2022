import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
	
	const navigate = useNavigate()
	
	const initialValues = {
		report_description: "",
		area_code: "",
		city: "",
		street: "",
		flat_number: "",
		caller_name: "",
		contact_number: "",
	}
	
	const validationSchema = Yup.object().shape({
		report_description: Yup.string().required("Field description cannot be empty!"),
		area_code: Yup.string().required("Field area code cannot be empty!"),
		city: Yup.string().required("Field city cannot be empty!"),
		street: Yup.string().required("Field street cannot be empty!"),
		flat_number: Yup.string(),
		caller_number: Yup.string(),
		contact_number: Yup.string(),
	})
	
	const onSubmit = (data) => {
		
		data.status = "reported";
		
		axios.post('http://localhost:3001/reports/new', data).then((response) => {
			console.log ("Crime has been reported!");
		})
		
		navigate('/thanks')
	}
	
	return (
		<main>
			<Container>
				
				<Formik
					initialValues={ initialValues }
					onSubmit={ onSubmit }
					validationSchema={ validationSchema }
					>
					<Form>
						<Row>
								<label>What happened:</label>
								<ErrorMessage name='report_description' component='span' />
								<Field as='textarea' id='inputReport_Description' name='report_description' placeholder=''></Field>
								
								<center><h3>Where it happened:</h3></center>
								<label>City:</label>
								<ErrorMessage name='city' component='span' />
								<Field id='inputCity' name='city' placeholder=''></Field>
								
								<label>Area code:</label>
								<ErrorMessage name='area_code' component='span' />
								<Field id='inputAreaCode' name='area_code' placeholder=''></Field>

								<label>Street:</label>
								<ErrorMessage name='street' component='span' />
								<Field id='inputStreet' name='street' placeholder=''></Field>

								<label>Flat number:</label>
								<ErrorMessage name='flat_number' component='span' />
								<Field id='inputFlatNumber' name='flat_number' placeholder=''></Field>

								<label>Caller name:</label>
								<ErrorMessage name='caller_name' component='span' />
								<Field id='inputCallerName' name='caller_name' placeholder=''></Field>

								<label>Caller number:</label>
								<ErrorMessage name='contact_number' component='span' />
								<Field id='inputContactNumber' name='contact_number' placeholder=''></Field>
						</Row>
						<hr></hr>
						<Row>
							<div className='large-button'>
								<button type='submit'>Report the crime!</button>
							</div>
						</Row>
					</Form>
				</Formik>
			</Container>
		</main>
	)
}

export default Home
