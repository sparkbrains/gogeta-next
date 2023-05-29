import Image from "next/image"
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap"
import Button from "../button"

export default function Welcome({ host }:any) {
    const router = useRouter();
    const handleClick = (pageName: string) => {
        router.push(pageName);
    };
    return <section className={`gogetaBannerCell ${host === 'uk' ?'':'perfectBike'}`}>
        <Container>
            <Row>
                <Col md={6} >
                    <div className='bannerCont'>
                        <h2 className='h2'>Welcome to the eBay Cycle to Work Scheme</h2>
                        <Image src={`assets/img/${host === 'uk' ?'Ebike.svg':'Illustration-Unicycle.svg'}`}height={490} width={388} alt="img" className='img-fluid d-block d-sm-none' />
                        <p>This is where you can find your perfect bike, learn more about how the scheme works and apply.</p>
                        <div className='d-flex align-items-center'>
                            {
                                host === 'uk' ?
                                    <Button type="button" className='customSiteBtn me-2' onClick={()=>router.push('/apply-now')}>Apply now <i className="fa-solid fa-angle-right"></i></Button>
                                    :
                                    <Button type="button" className='customSiteBtn me-2' onClick={() => handleClick('/bikes?listing_type=ebikes&showCyclePrice=on')}>Browse bikes <i className="fa-solid fa-angle-right"></i></Button>
                            }
                            <Button type="button" className='customSiteBtn transpBtn' onClick={() => handleClick('/how-it-works')}>How it works <i className="fa-solid fa-angle-right"></i></Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} >
                    <div className={`bannerImg d-none d-sm-block ${host === 'uk' ?'lpasd':''} `}>
                        <div className='imgcell'>
                            <Image src={`assets/img/${host === 'uk' ?'Ebike.svg':'Illustration-Unicycle.svg'}`} height={490} width={388} alt="img" className='img-fluid' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}