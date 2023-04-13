import React from 'react'
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Overlay from 'react-bootstrap/Overlay'
import { useTranslation } from "react-i18next"


const About = () => {
    const { t } = useTranslation(["i18n"])

  return (
    <>
        <Row className="text-center my-5">
            <h1>{t("about1")} <br></br> {t("about2")}</h1>
        </Row>
        <Row>
            <Col className='col-md-4 col-8 mx-auto mb-3'>
                <Overlay className='bg-dark'/>
                <div className='position-relative'>
                    <img 
                        className='img-card position-relative hover-shadow' 
                        src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                        alt="" 
                    />
                    <div className='position-absolute z-0 top-50 start-50 translate-middle'>
                        <h4 className='text-center'>{t('image1')} </h4>
                    </div>
                </div>
            </Col>
            <Col className='col-md-4 col-8 mx-auto mb-3'>
                <Overlay className='bg-dark'/>
                <div className='position-relative'>
                    <img 
                        className='img-card position-relative hover-shadow' 
                        src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                        alt="" 
                    />
                    <div className='position-absolute z-0 top-50 start-50 translate-middle'>
                        <h4 className='text-center'> Currently enrolled in an immersive software engineering program to master coding skills. </h4>
                    </div>
                </div>
            </Col>
            <Col className='col-md-4 col-8 mx-auto mb-3'>
                <Overlay className='bg-dark'/>
                <div className='position-relative'>
                    <img 
                        className='img-card position-relative hover-shadow' 
                        src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                        alt="" 
                    />
                    <div className='position-absolute z-0 top-50 start-50 translate-middle'>
                        <h4 className='text-center'> Programming and sustainability are her passion. </h4>
                    </div>
                </div>
            </Col>
            <Col className='col-md-4 col-8 mx-auto mb-3'>
                <Overlay className='bg-dark'/>
                <div className='position-relative'>
                    <img 
                        className='img-card position-relative hover-shadow' 
                        src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNvb2wlMjBiYWNrZ3JvdW5kfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                        alt="" 
                    />
                    <div className='position-absolute z-0 top-50 start-50 translate-middle'>
                        <h4 className='text-center'> Looking for opportunities to make the world a little better, using my technical skills and knowledge in sustainability. </h4>
                    </div>
                </div>
            </Col>
            <Col className='col-md-4 col-8 mx-auto mb-3'>
                <Overlay className='bg-dark'/>
                <div className='position-relative'>
                    <img 
                        className='img-card position-relative hover-shadow' 
                        src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" 
                        alt="" 
                    />
                    <div className='position-absolute z-0 top-50 start-50 translate-middle'>
                        <h2 className='text-center'> Hello World! </h2>
                    </div>
                </div>
            </Col>
            <Col className='col-md-4 col-8 mx-auto mb-3'>
                <Overlay className='bg-dark'/>
                <div className='position-relative'>
                    <img 
                        className='img-card position-relative hover-shadow' 
                        src="https://images.unsplash.com/photo-1546026502-797e11a59f50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvb2wlMjBiYWNrZ3JvdW5kfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                        alt="" 
                    />
                    <div className='position-absolute z-0 top-50 start-50 translate-middle'>
                        <h2 className='text-center'> Hello World! </h2>
                    </div>
                </div>
            </Col>

        </Row>
    </>
  )
}

export default About