import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import Button from "../button";
import { MainHead } from "../main-head";
export default function HelpingHand(){
    return<section className='helpingHand'>
    <Container>
        <Row className='align-items-md-center'>
            <Col md={6} className='d-none d-sm-block'>
                <Image width={372} height={499} alt='support' src='/assets/img/Illustration-Support.svg' className={'support img-fluid'} />
            </Col>
            <Col md={6} >
                <MainHead title="A helping hand" />
                <Image width={372} height={499} alt='support' src='/assets/img/Illustration-Support.svg' className={'d-block d-sm-none support img-fluid'} />
                <Row className='pt-4'>
                    <div className='speakExpert'>
                        <Image width={67} height={66} alt='ico' src='/assets/img/helping-speak.svg' />
                        <p className='py-3'>Our experts are on hand to give advice and support on choosing a bike and using the Cycle to Work scheme.</p>
                        <Button type="button" className='customSiteBtn'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
</section>
}