import React from 'react'
import Banner from '../Banner/Banner';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next"

const Home = () => {
	const { t } = useTranslation(["i18n"])
	
  return (
	<div>
		<Container>
			<Row>
				<Col>
					<h1 className='text-center m-5'>{t("welcome")}</h1>
				</Col>
			</Row>
		</Container>
		<Banner />
	</div>
	
);
}

export default Home