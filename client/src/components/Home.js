import React from 'react'
import Banner from './Banner';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
	<div>
		<Container>
			<Row>
				<Col>
					<h1 className='text-center mt-5'>Welcome to my Portfolio website!</h1>
				</Col>
			</Row>
		</Container>
		<Banner />
	</div>
	
);
}

export default Home