import React from 'react'
import Banner from './Banner';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
	<div>
		<Container>
			<Row>
				<Col>
					<h1 className='text-center m-5 text-secondary'>Welcome to my Portfolio Website!</h1>
				</Col>
			</Row>
		</Container>
		<Banner />
	</div>
	
);
}

export default Home