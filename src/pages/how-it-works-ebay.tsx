import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from '../component/image';
import { MainHead } from '../component/main-head';
import { MainHeadSub } from '../component/main-head/sub-main';
import { Bus, Car, Train } from '../component/svgIcon';
import Toggle from '../component/toggle';
export default function HowItWorksEbay() {
    return <div className="gogetaMain">
        <header className="header border-0">
            <Navbar expand="lg">
                <Container className='mob_re_non'>
                    <Link href="/ebay"><img src="assets/logo/eBay_logo.svg" alt="Gogeta Logo" /></Link>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto ms-lg-5 my-2 my-lg-0"
                            navbarScroll
                        >
                            <div className='d-flex align-items-center d-block d-lg-none'>
                                <Nav.Link href="#action4"><Image width="" height="" className="" alt="" src='/assets/img/interface_search_square.svg' /></Nav.Link>
                                <Nav.Link href="#action4"><Image width="" height="" className="" alt="" src='/assets/img/interface_user_square_alternate.svg' /></Nav.Link>
                            </div>
                            <Nav.Link className='d-block d-lg-none' href="#action4">Find Bikes <i className="fa-solid fa-angle-right"></i></Nav.Link>
                            <Nav.Link className='d-block d-lg-none' href="#action4">Help <i className="fa-solid fa-angle-right"></i></Nav.Link>
                        </Nav>
                        <div className=" align-items-center navbar-nav d-none d-lg-flex">
                            <Nav.Link className='d-none d-lg-block' href="#action4">Find Bikes <i className="fa-solid fa-angle-right"></i></Nav.Link>
                            <Nav.Link className='d-none d-lg-block' href="#action4">Help <i className="fa-solid fa-angle-right"></i></Nav.Link>
                            <Nav.Link className='d-none d-lg-block' href="#action4"><Image width="" height="" className="" alt="" src='/assets/img/interface_search_square.svg' /></Nav.Link>
                            <Nav.Link className='d-none d-lg-block' href="#action4"><Image width="" height="" className="" alt="" src='/assets/img/interface_user_square_alternate.svg' /></Nav.Link>
                        </div>
                    </Navbar.Collapse>
                    <div className='mbo_lef d-flex align-items-center'>
                        {/* <Button type="button" className='customSiteBtn d-block d-lg-none me-3 me-md-4'>Book a demo <i className="fa-solid fa-angle-right"></i></Button> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                    </div>
                </Container>
            </Navbar>
        </header>
        <div className='main ebay-howWorks w-100 m-0 pt-0'>
            <section className='gogetaBannerCell mb-3 mt-4 mt-sm-0'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} >
                            <div className='bannerCont'>
                                <h2 className='h2'>How it works</h2>
                                <Image src="assets/img/Illustration-unicycle-mobile.svg" height={490} width={388} alt="img" className='img-fluid d-block d-sm-none' />
                                <p>The Cycle to Work Scheme is a tax incentive aimed at getting more people active, by providing unbeatable savings on the cost of a new bike, or e-bike as well as cycling accessories such as a helmet, lights or a lock. </p>
                                <div className='d-flex align-items-center'>
                                    <Button type="button" className='customSiteBtn me-2'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                                    <Button type="button" className='customSiteBtn transpBtn'>FAQs <i className="fa-solid fa-angle-right"></i></Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} >
                            <div className='d-none d-sm-block'>
                                <div className='imgcell'>
                                    <Image src="assets/how-it-works-ebay.svg" height={606} width={547} alt="img" className='img-fluid' />
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
                            <div className='d-block d-sm-none mb-4'>
                                <MainHead title='Save up to 48%' />
                            </div>
                            <Image width="" height="" className="" alt="" src='/assets/img/Illustration-Piggybank.svg' />
                        </Col>
                        <Col md={6} >
                            <div className='d-none d-sm-block'>
                                <MainHead title='Save up to 48%' />
                            </div>
                            <p className='pt-3'>By reducing your gross pay before tax - known as Salary Sacrifice - you’ll not pay Income Tax, PRSI or USC on the value of the bike and accessories. Which means you can benefit from <strong>savings of up to 48%</strong>, and spread the cost interest free over 12 months. </p>
                        </Col>
                    </Row>
                </section>
            </Container>
            <section className='employeSaving empsvto mt-hgs'>
                <Container>
                    <div className='innerEmpSv empsvtoInner'>
                        <Row>
                            <Col lg={6} className='mb-4 mb-lg-0'>
                                <div className='d-none d-sm-block'>
                                    <MainHead title='What can you get?' />
                                </div>
                                <p className='text-white'>Employees can benefit from tax savings on bikes and accessories. In our <a>marketplace</a> you’ll be able to see your exact savings on any bike. </p>
                            </Col>
                            <Col lg={6}>
                                <div className='d-block d-sm-none'>
                                    <MainHead title='What can you get?' />
                                </div>
                                <div className='bgSvcontant my-4 mt-md-0'>
                                    <img src="assets/market-place.svg" alt="img" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className='works-calculate'>
                <Container>
                    <div className='pt-5 pb-3'>
                        <MainHead title="Calculate your Cycle Scheme package" />
                    </div>
                    <section className='cycling-saving mb-5'>
                        <div className='cycling-saving'>
                            <div className='cycling-saving-calclulate'>
                                <Row className='align-items-start align-items-md-center'>
                                    <Col xs={6} md={12} lg={6} className='mb-md-4 mb-lg-0'>
                                        <div className='d-flex flex-wrap align-items-center align-items-sm-start'>
                                            <div className='calclulate-form pe-0 pe-lg-4'>
                                                <label>Bike value?</label>
                                                <div className='d-flex align-items-center form-price-input'>
                                                    <div className='currency'>£</div>
                                                    <input type='text' className='form-input' />
                                                </div>
                                            </div>
                                            <div className='calclulate-form pe-0 pe-lg-4'>
                                                <label>Accessories value?</label>
                                                <div className='d-flex align-items-center form-price-input'>
                                                    <div className='currency'>£</div>
                                                    <input type='text' className='form-input' />
                                                </div>
                                            </div>
                                            <div className='calclulate-form pe-0 pe-lg-4'>
                                                <label>Your annual salary?</label>
                                                <div className='d-flex align-items-center form-price-input'>
                                                    <div className='currency'>£</div>
                                                    <input type='text' className='form-input' />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={12} lg={6} className='d-flex justify-content-start justify-content-lg-end'>
                                        <div className='calclulate-form pe-0 pe-md-4'>
                                            <label>Bike type?</label>
                                            <ul className='flex-wrap d-block d-md-flex'>
                                                <li className='mb-3 mb-md-0'>
                                                    <input type="radio" className='d-none' id='transport' />
                                                    <label htmlFor='transport'>
                                                        E-bike / Pedelec
                                                    </label>
                                                </li>
                                                <li className='mb-3 mb-md-0'>
                                                    <input type="radio" className='d-none' id='transport' />
                                                    <label htmlFor='transport'>
                                                        Cargo / E-cargo bike
                                                    </label>
                                                </li>
                                                <li className='mb-3 mb-md-0'>
                                                    <input type="radio" className='d-none' id='transport' />
                                                    <label htmlFor='transport'>
                                                        Other
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='cycling-saving-list'>
                                <Row>
                                    <Col xs={12} md={6} lg={3} className='mb-4 mb-sm-3'>
                                        <div className='list listpack'>
                                            <Image width="" height="" alt="" src="/assets/img/Money_cashier_price_tag_euro.svg" className="mb-4" />
                                            <p>Total package value</p>
                                            <h3>£3,500</h3>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={3} className='mb-4 mb-sm-3'>
                                        <div className='list listOnepay'>
                                            <Image width="" height="" alt="" src="/assets/img/money_currency_euro_circle.svg" className="mb-4" />
                                            <p>One-off initial payment</p>
                                            <h3>£500</h3>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={3} className='mb-4 mb-sm-3'>
                                        <div className='list listMonthPay'>
                                            <Image width="" height="" alt="" src="/assets/img/interface_calendar_mark.svg" className="mb-4" />
                                            <p>Your monthly payments</p>
                                            <h3>£128.13</h3>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={3} className='mb-4 mb-sm-3'>
                                        <div className='list listEffSav'>
                                            <Image width="" height="" alt="" src="/assets/img/shopping_store_discount_percent_bag.svg" className="mb-4" />
                                            <p>Effective saving</p>
                                            <h3>48%</h3>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </section>
                </Container>
            </section>
            <section className='mltSection theprocess pb-5 mb-5 mt-hgs'>
                <div className='howtheRide'>
                    <Container>
                        <MainHead title='The process' />
                        <Row className='rowLineBef'>
                            <Col lg={3} md={6}>
                                <Image width="" height="" alt="" src="/assets/img/browse-process.svg" className='mb-3' />
                                <MainHeadSub title="1. Browse" />
                                <p>Find your bike or ebike. You can use our <a>marketplace</a> to explore an extensive range from the best brands and retailers. Or visit any of our <a>participating retailers</a> to get a quote.</p>
                            </Col>
                            <Col lg={3} md={6}>
                                <Image width="" height="" alt="" src="/assets/img/process-choose.svg" className='mb-3' />
                                <MainHeadSub title="2. Choose" />
                                <p>Choose an offer from your preferred bike retailer and complete the salary sacrifice agreement, or <a>apply now</a> if you are using a local bike shop.</p>
                            </Col>
                            <Col lg={3} md={6}>
                                <Image width="" height="" alt="" src="/assets/img/process-approval.svg" className='mb-3' />
                                <MainHeadSub title="3. Approval" />
                                <p>The eBay People team will review and approve your application, and set-up your salary sacrifice</p>
                            </Col>
                            <Col lg={3} md={6}>
                                <Image width="" height="" alt="" src="/assets/img/process-ride.svg" className='mb-3' />
                                <MainHeadSub title="4. Ride" />
                                <p>As soon as you are approved you will receive your gogeta voucher to enable you to get your new bike.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className='helpingHand'>
                <Container>
                    <MainHead title="Frequently asked questions" />
                    <div className='pt-5'>
                        <Toggle title='What is the maximum value of a Cycle to Work voucher I can use?'>
                            <p>The maximum limit is £1500 for electric bikes, or £1250 for conventional pedal bikes. This total can include accessories, if your bike is below the limit.</p>
                            <p>If you want to buy a more expensive bike most bike shops will allow you to pay the difference.</p>
                            <p>For example if your electric bike was priced at £2000 you could pay £500 up front to the retailer and use the Cycle to Work voucher to pay the balance of £1500. Your monthly salary sacrifice payments would be based on the £1500 balance.</p>
                        </Toggle>
                        <Toggle title='Question'>
                            <p>The maximum limit is £1500 for electric bikes, or £1250 for conventional pedal bikes. This total can include accessories, if your bike is below the limit.</p>
                            <p> If you want to buy a more expensive bike most bike shops will allow you to pay the difference.</p>
                            <p>  For example if your electric bike was priced at £2000 you could pay £500 up front to the retailer and use the Cycle to Work voucher to pay the balance of £1500. Your monthly salary sacrifice payments would be based on the £1500 balance.</p>
                        </Toggle>
                        <Toggle title='Question'>
                            <p>The maximum limit is £1500 for electric bikes, or £1250 for conventional pedal bikes. This total can include accessories, if your bike is below the limit.</p>
                            <p> If you want to buy a more expensive bike most bike shops will allow you to pay the difference.</p>
                            <p>  For example if your electric bike was priced at £2000 you could pay £500 up front to the retailer and use the Cycle to Work voucher to pay the balance of £1500. Your monthly salary sacrifice payments would be based on the £1500 balance.</p>
                        </Toggle>
                        <Toggle title='Question'>
                            <p>The maximum limit is £1500 for electric bikes, or £1250 for conventional pedal bikes. This total can include accessories, if your bike is below the limit.</p>
                            <p> If you want to buy a more expensive bike most bike shops will allow you to pay the difference.</p>
                            <p>  For example if your electric bike was priced at £2000 you could pay £500 up front to the retailer and use the Cycle to Work voucher to pay the balance of £1500. Your monthly salary sacrifice payments would be based on the £1500 balance.</p>
                        </Toggle>
                    </div>
                </Container>
            </section>
            <footer className='footer'>
                <div className='footer-main'>
                    <Container>
                        <Row>
                            <Col sm={12} md={3} lg={2} className="mb-4 mb-lg-0">
                                <div className='ftlogo'>
                                    <img src="assets/logo/eBay_logo.svg" alt="Gogeta Logo" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                                <div className='footer-col'>
                                    <h4 className="footer-col__header">eBikes</h4>
                                    <ul className='list-unstyled'>
                                        <li className="nav-leisure-ebike"><a href="/">Leisure eBikes</a></li>
                                        <li className="nav-endurance-ebike"><a href="/">Road eBikes</a></li>
                                        <li className="nav-cargo-ebike"><a href="/">Cargo eBikes</a></li>
                                        <li className="nav-commuting-ebike"><a href="/">Commuting eBikes</a></li>
                                        <li className="nav-gravel-ebike"><a href="/">Gravel eBikes</a></li>
                                        <li className="nav-mountain-ebike"><a href="/">Mountain eBikes</a></li>
                                        <li className="nav-mountain-ebike"><a href="/">Folding eBikes</a></li>
                                        <li><a href="/">Shop all</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                                <div className='footer-col'>
                                    <h4 className="footer-col__header">Bikes</h4>
                                    <ul className='list-unstyled'>
                                        <li className="nav-leisure-ebike"><a href="/">Performance Road</a></li>
                                        <li className="nav-endurance-ebike"><a href="/">Endurance Road</a></li>
                                        <li className="nav-cargo-ebike"><a href="/">Aero Road</a></li>
                                        <li className="nav-commuting-ebike"><a href="/">Ultralight Road</a></li>
                                        <li className="nav-gravel-ebike"><a href="/">Gravel</a></li>
                                        <li><a href="/">Shop all</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                                <div className='footer-col'>
                                    <h4 className="footer-col__header">Resources</h4>
                                    <ul className='list-unstyled'>
                                        <li className="nav-leisure-ebike"><a href="/">Cycle to work</a></li>
                                        <li className="nav-endurance-ebike"><a href="/">Buyer's guides</a></li>
                                        <li className="nav-cargo-ebike"><a href="/">Blog</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                                <div className='footer-col'>
                                    <h4 className="footer-col__header">Support</h4>
                                    <ul className='list-unstyled'>
                                        <li className="nav-leisure-ebike"><a href="/">FAQs</a></li>
                                        <li className="nav-endurance-ebike"><a href="mailto:hello@gogeta.bike">hello@gogeta.bike</a></li>
                                        <li className="nav-cargo-ebike"><a href="/">About us</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                                <div className='footer-col socialIcons'>
                                    <ul className='list-unstyled d-flex align-items-center'>
                                        <li className="nav-leisure-ebike"><a href="/">
                                            <img src="assets/img/sm-instagram.svg" alt="img" className='img-fluid' /></a></li>
                                        <li className="nav-endurance-ebike"><a href="mailto:hello@gogeta.bike"><img src="assets/img/sm-youtube.svg" alt="img" className='img-fluid' /></a></li>
                                        <li className="nav-cargo-ebike"><a href="/">
                                            <img src="assets/img/sm-strava.svg" alt="img" className='img-fluid' /></a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='footer-end'>
                    <div className='bottomFooter'>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <ul className='list-unstyled d-flex'>
                                        <li><a href='#'>Cookie policy</a></li>
                                        <li><a href='#'>Privacy policy</a></li>
                                        <li><a href='#'>Terms of use</a></li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <p className='copyRightTxt'>© 2023 Velomatch Ltd. t/a gogeta</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </footer>
        </div>
    </div>
}