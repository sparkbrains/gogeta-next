import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import { MainHead } from "../main-head";
import { MainHeadSub } from "../main-head/sub-main";
export default function TheProcess({data,host}:any){
    return<Container>
    <section className='theProcess'>
        <MainHead title='The process' />
        <Row className={`pt-5 ${host.includes('uk')?'rowLineBef':''}`}>
            {
                data?.map((item:any,key:number)=>{
                    return <Col key={key} lg={data?.length > 3 ? 3:4} md={6}>
                    <Image width={62} height={62} alt='ico' src={item.img} className='mb-3' />
                    <MainHeadSub title={item.title} />
                    <div dangerouslySetInnerHTML={{__html:item.des}}></div>
                </Col>
                })
            }
            {/* <Col lg={3} md={6}>
                <Image width={62} height={62} alt='ico' src="/assets/img/browse-process.svg" className='mb-3' />
                <MainHeadSub title="1. Browse" />
                <p>Find your bike or ebike. You can use our <a>marketplace</a> to explore an extensive range from the best brands and retailers. Or visit any of our <a>participating retailers</a> to get a quote.</p>
            </Col>
            <Col lg={3} md={6}>
                <Image width={62} height={62} alt='ico' src="/assets/img/process-choose.svg" className='mb-3' />
                <MainHeadSub title="2. Choose" />
                <p>Choose an offer from your preferred bike retailer and complete the salary sacrifice agreement, or <a>apply now</a> if you are using a local bike shop.</p>
            </Col>
            <Col lg={3} md={6}>
                <Image width={62} height={62} alt='ico' src="/assets/img/process-approval.svg" className='mb-3' />
                <MainHeadSub title="3. Approval" />
                <p>The eBay People team will review and approve your application, and set-up your salary sacrifice</p>
            </Col>
            <Col lg={3} md={6}>
                <Image width={62} height={62} alt='ico' src="/assets/img/process-ride.svg" className='mb-3' />
                <MainHeadSub title="4. Ride" />
                <p>As soon as you are approved you will receive your gogeta voucher to enable you to get your new bike.</p>
            </Col> */}
        </Row>
    </section>
</Container>
}