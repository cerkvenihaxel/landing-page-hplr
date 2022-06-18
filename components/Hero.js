
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import programming from "../components/assets/images/programming.jpg";
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4 text-primary">Holis</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Potenciá tu <span className="text-primary font-weight-medium">negocio</span></h1>
              <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <div className='className="img-fluid mx-auto'>
              <Image  src={programming} objectFit="cover" className="rounded " alt=""/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className='mx-auto w-25 mt-5'></hr>
    </section>
  );
}
export default Hero;