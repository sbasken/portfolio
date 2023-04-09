import Carousel from './Slides';

import React from 'react';
import { Container, Row } from 'react-bootstrap'


export default function Banner() {
return (
	<Container>
		<Row>
			<Carousel/>
		</Row>
	</Container>
);
}
