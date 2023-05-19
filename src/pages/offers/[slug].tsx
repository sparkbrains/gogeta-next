import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import Image from '../../component/image';
import Toggle from '../../component/toggle';

import Applayout from '<prefix>/layout/applayout';
import StoreFinder from '<prefix>/component/storefinder';
import { useEffect, useState } from 'react';
import TransitionPage from '<prefix>/component/transition';
export default function MyOffers({ partners }: any) {
    const [isTransitionLoading, setTransitionLoading] = useState(true)
    useEffect(() => { setTimeout(() => { setTransitionLoading(false) }, 2000) })
    if (isTransitionLoading) {
        return <TransitionPage partners={partners} />
    }
    return <Applayout className='ebay-howWorks w-100 m-0 pt-0'>

        <div className='pt-5 pb-4'>
            <Container>
                <Nav.Link className='backPage' href="/"><Image src='/assets/img/ic_left-Stroke.svg' className="img-fluid" /> Back to the bike</Nav.Link>
            </Container>
        </div>
        <section className='cycleOfferBanner poreZindex mb-5'>
            <Container>
                <div className='offerBanInner'>
                    <Row className='align-items-end'>
                        <Col md={12} lg={5} className='mb-4 mb-lg-0'>
                            <div className='coloffer'>
                                <Image src='/assets/img/spz-logo.svg' className="img-fluid brandLogo" />
                                <h3 className='mainHeadSub'>Turbo Como SL 5.0</h3>
                                <div className='productSpeci mb-4'>
                                    <p className='labelText'>Colour:</p>
                                    <p><span className='colorRd'></span> Brassy Yellow / Transparent</p>
                                </div>
                                <div className='productSpeci'>
                                    <p className='labelText'>Your size:</p>
                                    <p><span className='spcSize'>L</span> Large</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mb-3 mb-sm-0'>
                            <div className='coloffer prdImg'>
                                <Image src='/assets/img/img_Product-Image.svg' className="img-fluid" />
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className='coloffer productPriceDetail'>
                                <span>SRP €4,5000.00</span>
                                <p>Cycle to Work price </p>
                                <h4>€2,875.00</h4>
                                <p>€89.06 per month</p>
                                <p className='saveOff'>Save €1,625.00 <span className='d-block'>(28.75%)</span></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='schemeCost poreZindex mb-5'>
            <Container>
                <div className='toggleSchemeCost'>
                    <div className='workScheme'>
                        <div className="d-flex align-items-center justify-content-between schemeHead">
                            <h5>Cycle to Work Scheme costs & savings</h5>
                            <img src="/assets/img/ic_plus-Open.svg" alt="img" className="img-fluid" /></div>
                        <div className='scmBodyamin'>
                            <Row>
                                <Col md={7} lg={8}>
                                    <div className='schemeForm'>
                                        <div className='inline-field'>
                                            <label>Cost of bike:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Cost of accessories:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Total bike + accessories:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Initial one-off payment:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Your salary before tax:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Salary period:</label>
                                            <div className='bkrig'>
                                                <select>
                                                    <option selected disabled>Salary period</option>
                                                    <option>12 months</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Total salary sacrifice:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Monthly salary sacrifice:</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' placeholder='Accessories' />
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label></label>
                                            <div className='bkrig'>
                                                <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={5} lg={4}>
                                    <div className='scmRight'>
                                        <div className='singleSaving'>
                                            <img src="/assets/img/ic_saving-kit.svg" alt="img" className='img-fluid' />
                                            <div className='savingSrc'>
                                                <div className='bxts'>
                                                    <p>Income tax saving</p>
                                                    <h4>€25.00</h4>
                                                </div>
                                                <div className='bxts'>
                                                    <p>Employee PRSI saving</p>
                                                    <h4>€5.00</h4>
                                                </div>
                                                <div className='bxts'>
                                                    <p>Employee USC saving</p>
                                                    <h4>€5.94</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='singleSaving blueBx mt-3'>
                                            <img src="/assets/img/ic_saving-kit.svg" alt="img" className='img-fluid' />
                                            <div className='savingSrc'>
                                                <div className='bxts'>
                                                    <h5>Total savings</h5>
                                                    <h2>€35.94</h2>
                                                </div>
                                                <div className='bxts'>
                                                    <h5>Total savings</h5>
                                                    <h2>28.75%</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='notScm'>
                                            Our savings calculator gives an indication of your approximate savings. Your individual circumstances may cause this to differ slightly.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section className='inStockNow poreZindex pb-5'>
            <Container>
                <div className='heading_section'>
                    <h3 className='mainHeadSub'>In stock now <Image src='/assets/img/ic_instock-now.svg' className="img-fluid" /></h3>
                    <p>We checked with all of our bike shops. Here are your offers. Please remember that stock information is real-time and may change.</p>
                </div>
                <div className='retailStockBx'>
                    <Row>
                        <Col md={8} lg={7}>
                            <div className='retailerDetail'>
                                <div className='retImgCell'>
                                    <Image src='/assets/img/ic_Retailer-Logo.svg' className="img-fluid" />
                                </div>
                                <div className='detailCont'>
                                    <h4>Retailer name</h4>
                                    <p>123 Building, Street, City, County, AB1 2CD</p>
                                    <div className='d-flex flex-wrap bdgeGrp'>
                                        <span className='bedgeCell'>Click and Collect</span>
                                        <span className='bedgeCell'>Cycle to Work Scheme</span>
                                        <span className='bedgeCell'>Finance Available</span>
                                        <span className='bedgeCell'>Free Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} lg={5}>
                            <div className='rightCellStock'>
                                <p>In stock <Image src='/assets/img/ic_instock.svg' className="img-fluid" /></p>
                                <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='retailStockBx'>
                    <Row>
                        <Col md={8} lg={7}>
                            <div className='retailerDetail'>
                                <div className='retImgCell'>
                                    <Image src='/assets/img/ic_Retailer-Logo.svg' className="img-fluid" />
                                </div>
                                <div className='detailCont'>
                                    <h4>Retailer name</h4>
                                    <p>123 Building, Street, City, County, AB1 2CD</p>
                                    <div className='d-flex flex-wrap bdgeGrp'>
                                        <span className='bedgeCell'>Click and Collect</span>
                                        <span className='bedgeCell'>Cycle to Work Scheme</span>
                                        <span className='bedgeCell'>Finance Available</span>
                                        <span className='bedgeCell'>Free Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} lg={5}>
                            <div className='rightCellStock'>
                                <p>In stock <Image src='/assets/img/ic_instock.svg' className="img-fluid" /></p>
                                <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='retailStockBx voucherCell'>
                    <Row>
                        <Col md={12}>
                            <div className='retailerDetail'>
                                <div className='detailCont'>
                                    <h4 className='mb-3'>Or get your voucher now, choose your bike later</h4>
                                    <p className='MB-3'>You don’t have to commit to a specific bike or shop right away. Apply for your voucher now. We’ll get it sorted and ready for you to use; for the bike you want, at the shop of your choice.</p>
                                    <button type="button" className="customSiteBtn btn btn-primary px-4">Apply for your voucher <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='mltSection   findlocalBike'>
            <Container>
                <div className='bikeFindMap poreZindex'>
                    <h3>Find your local bike shop</h3>
                    <div className='mapInner'>
                        <StoreFinder />
                    </div>
                </div>
            </Container>
        </section>
    </Applayout>
}
export async function getServerSideProps(context: any) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(baseURL + `loading?portalDomain=gogeta.dev`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await response.json()
    return {
        props: {
            partners: { ...data },
        },
    }
}