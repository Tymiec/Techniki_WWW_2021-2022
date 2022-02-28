import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
	
	let navigate = useNavigate()
	
	const initialValues = {
		email: "",
		password: ""
	}
	
	const onSubmit = (login_data) => {
		
		axios.post('http://localhost:3001/login', login_data).then((response) => {
			if (!response.data.error) {
				
				sessionStorage.setItem('accessToken', response.data.accessToken)
				
				navigate('/police_officer')
			} else {
				alert (response.data.error)
			}
		})
		
	}
	
	const validationSchema = Yup.object().shape({
		email: Yup.string().email("Incorrect email").required("You need to fill this box with your email"),
		password: Yup.string().required("No password was given!")
	})
	
	return (
		<main>
			<Container className='wrapper-login'>
				<div className='large-button'>
					<p onClick={() => {navigate('/')}}>Back to main menu</p>
				</div>
				<Row>
					<h2>Login Panel</h2>
				</Row>
				<Row>
					<Formik
						initialValues={ initialValues }
						onSubmit={ onSubmit }
						validationSchema={ validationSchema }
					>
						<Form>
							<label>Email:</label>
							<ErrorMessage name='email' component='span' />
							<Field id='inputMail' name='email' placeholder='example@example.com'></Field>
							<label>Password:</label>
							<ErrorMessage name='password' component='span' />
							<Field id='inputpassword' name='password' type='password' placeholder='********'></Field>
							<button type='submit' className='button-login-submit'>Sign in</button>
						</Form>
					</Formik>
				</Row>
			</Container>
		</main>
	)
}

export default Login
