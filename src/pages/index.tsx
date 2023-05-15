import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../component/image';
import { MainHead } from '../component/main-head';
import { MainHeadSub } from '../component/main-head/sub-main';
import { Bus, Car, Train } from '../component/svgIcon';
import Link from 'next/link';
import { useRouter } from "next/router";
import Applayout from '<prefix>/layout/applayout';
function EbayLp() {
    //const navigate = useNavigate();
    const router = useRouter();

    const handleClick = (pageName: string) => {
        router.push(pageName);
    };
    return (
        <Applayout className='ebay w-100 m-0 pt-0'>
            <div className='main-back'>
                <section className='gogetaBannerCell perfectBike'>
                    <Container>
                        <Row>
                            <Col md={6} >
                                <div className='bannerCont'>
                                    <h2 className='h2'>Welcome to the eBay Cycle to Work Scheme</h2>
                                    <Image src="assets/img/Illustration-unicycle-mobile.svg" height={490} width={388} alt="img" className='img-fluid d-block d-sm-none' />
                                    <p>This is where you can find your perfect bike, learn more about how the scheme works and apply.</p>
                                    <div className='d-flex align-items-center'>
                                        <Button type="button" className='customSiteBtn me-2' onClick={() => handleClick('/bikes?listing_type=bike')}>Browse bikes <i className="fa-solid fa-angle-right"></i></Button>
                                        <Button type="button" className='customSiteBtn transpBtn' onClick={() => handleClick('/how-it-works')}>How it works <i className="fa-solid fa-angle-right"></i></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className='bannerImg d-none d-sm-block'>
                                    <div className='imgcell'>
                                        <Image src="assets/img/Illustration-Unicycle.svg" height={490} width={388} alt="img" className='img-fluid' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container>
                    <section className='save-up'>
                        <Row className="align-items-center">
                            <Col md={6} >
                                <Image alt="img" src='/assets/img/Illustration-Piggybank.svg' />
                            </Col>
                            <Col md={6} >
                                <MainHead title='Save up to 48%' />
                                <p className='pt-3'>By reducing your gross pay before tax - known as Salary Sacrifice - you’ll not pay Income Tax, PRSI or USC on the value of the bike and accessories. Which means you can benefit from <strong>savings of up to 48%</strong>, and spread the cost interest free over 12 months. </p>
                            </Col>
                        </Row>
                    </section>
                </Container>
                <Container>
                    <section className='theProcess'>
                        <MainHead title='The process' />
                        <Row className='pt-5'>
                            <Col lg={3} md={6}>
                                <Image src="/assets/img/browse-process.svg" className='mb-3' />
                                <MainHeadSub title="1. Browse" />
                                <p>Find your bike or ebike. You can use our <a>marketplace</a> to explore an extensive range from the best brands and retailers. Or visit any of our <a>participating retailers</a> to get a quote.</p>
                            </Col>
                            <Col lg={3} md={6}>
                                <Image src="/assets/img/process-choose.svg" className='mb-3' />
                                <MainHeadSub title="2. Choose" />
                                <p>Choose an offer from your preferred bike retailer and complete the salary sacrifice agreement, or <a>apply now</a> if you are using a local bike shop.</p>
                            </Col>
                            <Col lg={3} md={6}>
                                <Image src="/assets/img/process-approval.svg" className='mb-3' />
                                <MainHeadSub title="3. Approval" />
                                <p>The eBay People team will review and approve your application, and set-up your salary sacrifice</p>
                            </Col>
                            <Col lg={3} md={6}>
                                <Image src="/assets/img/process-ride.svg" className='mb-3' />
                                <MainHeadSub title="4. Ride" />
                                <p>As soon as you are approved you will receive your gogeta voucher to enable you to get your new bike.</p>
                            </Col>
                        </Row>
                    </section>
                </Container>
                <section className='helpingHand'>
                    <Container>
                        <Row className='align-items-md-center'>
                            <Col md={6} className='d-none d-sm-block'>
                                <Image src='/assets/img/Illustration-Support.svg' className={'support img-fluid'} />
                            </Col>
                            <Col md={6} >
                                <MainHead title="A helping hand" />
                                <Image src='/assets/img/Illustration-Support.svg' className={'d-block d-sm-none support img-fluid'} />
                                <Row className='pt-4'>
                                    <div className='speakExpert'>
                                        <Image src='/assets/img/helping-speak.svg' />
                                        <p className='py-3'>Our experts are on hand to give advice and support on choosing a bike and using the Cycle to Work scheme.</p>
                                        <Button type="button" className='customSiteBtn'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            <div className='ebay-main'>
                <Container>
                    <div className='pt-5 pb-3'>
                        <MainHead title="Switch to cycling and start saving" />
                    </div>
                    <section className='cycling-saving mb-5'>
                        <div className='cycling-saving'>
                            <div className='cycling-saving-calclulate'>
                                <Row className='align-items-center'>
                                    <Col lg={8}>
                                        <div className='d-flex flex-wrap align-items-center align-items-sm-start justify-content-between'>
                                            <div className='calclulate-form'>
                                                <label className='d-none d-lg-block'>Commute distance each way</label>
                                                <label className='d-block d-lg-none'>Commute distance</label>
                                                <div className='d-flex align-items-center'>
                                                    <input type='text' className='form-input' />
                                                    <p className='p-2 m-0'>kilometres</p>
                                                </div>
                                            </div>
                                            <div className='calclulate-form'>
                                                <label>Mode of transport</label>
                                                <ul>
                                                    <li>
                                                        <input type="radio" className='d-none' id='transport' />
                                                        <label htmlFor='transport'>
                                                            <Car />
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" className='d-none' id='transportTrain' />
                                                        <label htmlFor='transportTrain'>
                                                            <Train />
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" className='d-none' id='transportBus' />
                                                        <label htmlFor='transportBus'>
                                                            <Bus />
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='calclulate-form'>
                                                <label>Mode of transport</label>
                                                <ul>
                                                    <li>
                                                        <input type="radio" className='d-none' id='transportAnnual' />
                                                        <label htmlFor='transportAnnual'>
                                                            Annually
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" className='d-none' id='transportMonth' />
                                                        <label htmlFor='transportMonth'>
                                                            Monthly
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" className='d-none' id='transportWeek' />
                                                        <label htmlFor='transportWeek'>
                                                            Weekly
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <Button type="button" className='d-flex align-items-center d-sm-none customSiteBtn'>Caclulate savings <i className="fa-solid fa-angle-right"></i></Button>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='d-none d-sm-flex justify-content-start justify-content-lg-end mt-md-3'>
                                        <Button type="button" className='customSiteBtn'>Caclulate savings <i className="fa-solid fa-angle-right"></i></Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='cycling-saving-list'>
                                <Row>
                                    <Col md={4} className='mb-4 mb-sm-0'>
                                        <div className='list listEmmi'>
                                            <Image src="/assets/img/nature_ecology_leaf.svg" className="mb-4" />
                                            <p>CO2 emissions saved:</p>
                                            <h3>1,178kg</h3>
                                            <p>Equivalent of:</p>
                                            <h4>56 trees</h4>
                                            <ul>
                                                <li><Image src='/assets/img/tree_icon.svg' /></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-4 mb-sm-0'>
                                        <div className='list listBurned'>
                                            <Image src="/assets/img/health_medical_heart_rate.svg" className="mb-4" />
                                            <p>Calories burned</p>
                                            <h3>123,930kcal</h3>
                                            <p>Equivalent of:</p>
                                            <h4>420 burgers</h4>
                                            <ul>
                                                <li><Image src='/assets/img/tree_icon.svg' /></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-4 mb-sm-0'>
                                        <div className='list listSaved'>
                                            <Image src="/assets/img/money_cash_bag_euro.svg" className="mb-4" />
                                            <p>Money saved:</p>
                                            <h3>€583</h3>
                                            <p>Equivalent of:</p>
                                            <h4>68 takeaways</h4>
                                            <ul>
                                                <li><Image src='/assets/img/tree_icon.svg' /></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </section>
                </Container>
                <div className='call-us'>
                    <Container>
                        <MainHead title="Call to action" />
                        <p>Call to action</p>
                        <div className='d-flex align-items-center'>
                            <Button type="button" className='customSiteBtn me-2'>Browse bikes <i className="fa-solid fa-angle-right"></i></Button>
                            <Button type="button" className='customSiteBtn transpBtn'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                        </div>
                    </Container>
                </div>
            </div>
        </Applayout>
    );
}

export default EbayLp;