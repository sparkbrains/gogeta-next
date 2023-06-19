import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import { MainHead } from "../main-head";
interface iProps {
    data: {
        title: string,
        des: string,
    },
    host: string
}
export default function SaveUp({ data, host }: iProps) {
    return host.includes('uk') ?
        <section className={`save-up border-radius-0`}>
            <Container>
                <SaveDes data={data} />
            </Container>
        </section>
        :
        <Container>
            <section className='save-up'>
                <SaveDes data={data} />
            </section>
        </Container>
}
const SaveDes = ({ data }: any) => {
    return <Row className="align-items-center">
        <Col md={6} >
            <Image width={461} height={374} alt="img" src='/go/assets/img/Illustration-Piggybank.svg' />
        </Col>
        <Col md={6} >
            <MainHead title={data.title} />
            <div dangerouslySetInnerHTML={{ __html: data.des }} />
            {/* <p className='pt-3'>By reducing your gross pay before tax - known as Salary Sacrifice - you’ll not pay Income Tax, PRSI or USC on the value of the bike and accessories. Which means you can benefit from <strong>savings of up to 48%</strong>, and spread the cost interest free over 12 months. </p> */}
        </Col>
    </Row>
}