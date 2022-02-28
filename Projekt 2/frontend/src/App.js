import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Police_Officer from './pages/Police_Officer'
import Thanks from './pages/Thanks'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
	return (
		<div className='root'>
			<Router>
				<div className='my_header'>
					<Container>
						<Row>
							<Col md='4'>
								<Link to='/'>
									<img className='logo' src='https://cdn.discordapp.com/attachments/915393766293123142/945390630400561173/aaaaa.png' alt='logo' />
								</Link>
							</Col>
							<Col md='4' className='name_1'>
								<h1>Report a crime!</h1>
							</Col>
							<Col md='4'></Col>
						</Row>
					</Container>
				</div>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/login' exact element={<Login />} />
					<Route path='/police_officer' exact element={<Police_Officer />} />
					<Route path='/thanks' exact element={<Thanks />} />
				</Routes>
				<div className='footer'>
					<Container>
						<Row>
							<Col md='6'>
								<h2>For officers</h2>
								<p>
									<Link to='/login'>Login</Link>
								</p>
							</Col>
							<Col md='6'>
								<h2>Contact info:</h2>
								<p>Adres: 99th precinct</p>
								<p>Phone: Why would you call a precinct that doesn't exist?</p>
								<p>Email: 99th@nypd.org</p>
							</Col>
						</Row>
					</Container>
					<Container fluid>
						<Row>
							<p className='text-center'>Copyright &copy; 2022 - All rights reserved to 99th precinct</p>
						</Row>
					</Container>
				</div>
			</Router>
		</div>
	)
}

export default App;
