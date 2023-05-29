import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from '../component/image';
import { MainHead } from '../component/main-head';
import { MainHeadSub } from '../component/main-head/sub-main';
import { Bus, Car, Train } from '../component/svgIcon';
import Toggle from '../component/toggle';
import Applayout from '<prefix>/layout/applayout';
import { calculatEbikePrice, handleChangeSalary } from '<prefix>/common/utilits';
import { useState, ChangeEvent, useEffect } from 'react';
import CalculateSchemePackage from '<prefix>/component/calculateSchemePackage';
import { withContext } from '<prefix>/context/appContext';
import SavingCalculate from '<prefix>/component/home/savingCalculate';
function HowItWorksEbay({ context }: any) {
    const host: string = context.host
    return <Applayout className='ebay-howWorks w-100 m-0 pt-0'>
        <section className='gogetaBannerCell mb-3 mt-4 mt-sm-0'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} >
                        <div className='bannerCont'>
                            <h2 className='h2'>How it works</h2>
                            <Image src="assets/how-it-works-ebay.svg" height={490} width={388} alt="img" className='img-fluid d-block d-sm-none mb-3' />
                            <p>The Cycle to Work Scheme is a tax incentive aimed at getting more people active, by providing unbeatable savings on the cost of a new bike, or e-bike as well as cycling accessories such as a helmet, lights or a lock. </p>
                            <div className='d-flex align-items-center'>
                                {
                                    host === 'uk' ?
                                        <Button type="button" className='customSiteBtn me-2'>FAQs <i className="fa-solid fa-angle-right"></i></Button>
                                        :
                                        <>
                                            <Button type="button" className='customSiteBtn me-2'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                                            <Button type="button" className='customSiteBtn transpBtn'>FAQs <i className="fa-solid fa-angle-right"></i></Button>
                                        </>
                                }

                            </div>
                        </div>
                    </Col>
                    <Col md={6} >
                        <div className='hitweb'>
                            <div className='imgcell'>
                                <Image src="assets/how-it-works-ebay.svg" height={606} width={547} alt="img" className='img-fluid d-none d-sm-block' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {host === 'uk' ? null : <Container>
            <section className='save-up svNup'>
                <Row className="align-items-center">
                    <Col md={6} >
                        <div className='d-block d-sm-none mb-4'>
                            <MainHead title='Save up to 48%' />
                        </div>
                        <Image src='/assets/img/Illustration-Piggybank.svg' />
                    </Col>
                    <Col md={6} >
                        <div className='d-none d-sm-block'>
                            <MainHead title='Save up to 48%' />
                        </div>
                        <p className='pt-3'>By reducing your gross pay before tax - known as Salary Sacrifice - you’ll not pay Income Tax, PRSI or USC on the value of the bike and accessories. Which means you can benefit from <strong>savings of up to 48%</strong>, and spread the cost interest free over 12 months. </p>
                        <p className="mt-4"> At the end of 12 months you will have repaid your employer for the cost of the bike, and it will then become yours.</p>
                    </Col>
                </Row>
            </section>
        </Container>}
        <section className='employeSaving empsvto mt-hgs mt-3 mt-md-5'>
            <Container>
                <div className='innerEmpSv empsvtoInner justify-content-center'>
                    <Row className='w-100 align-items-center'>
                        <Col md={6} className=' mb-4 mb-md-0 mobor2'>
                            <div className='d-none d-md-block mb-4'>
                                <MainHead title='What can you get?' />
                            </div>
                            {
                                host === 'uk' ? <>
                                    <p className='text-white mx-wdt5'>The Cycle to Work Scheme voucher limit set by [companyname] is £[limit].</p>
                                    <p className='text-white mx-wdt5'>You can get whatever you need to keep you in the saddle and commuting regularly. That includes any type of bike or e-bike and cycling accessories including:</p>
                                    <Row className='mt-4 mt-md-5 mb-4'>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Cycle clothing</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Lights</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Helmets</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Child seats</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Locks</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Bags</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className='text-white mx-wdt5'>
                                        Anything that’s going to help you and your bike arrive (warm, safe and secure) is allowable.
                                    </p>
                                </> :
                                    <>
                                        <p className='text-white mx-wdt5'>In Ireland employees can benefit from tax savings up to certain limits, but can add their own funds if they wish to get a bike and accessories at a higher value. In our marketplace   <a>marketplace</a> you’ll be able to see your exact savings on any bike.</p>
                                        <ul className='dotlisting'>
                                            <li><span></span>Cargo bikes & safety equipment, the limit is €3,000</li>
                                            <li><span></span>Electric bikes & safety equipment, the limit is €1,500</li>
                                            <li><span></span>Standard bikes & safety equipment, the limit is €1,250</li>
                                        </ul>
                                    </>
                            }

                        </Col>
                        <Col md={6} className='mobor1'>
                            <div className='d-block d-md-none mb-4'>
                                <MainHead title='What can you get?' />
                            </div>
                            <div className='bgSvcontant my-4 mt-md-0 text-center'>
                                <img src="assets/market-place.svg" alt="img" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        {host === 'uk' ? <div className='ebay-main'>
            <SavingCalculate />
        </div> :
            <CalculateSchemePackage />}
        {host === 'uk' ? null : <section className='mltSection theprocess pb-0 pb-lg-5 mb-5 mt-hgs nobefSecl mt-4'>
            <div className='howtheRide'>
                <Container>
                    <MainHead title='The process' />
                    <Row className='rowLineBef mt-5'>
                        <Col lg={3} md={4} xs={6} className='mb-4 mb-lg-0'>
                            <Image src="/assets/img/browse-process.svg" className='mb-3' />
                            <MainHeadSub title="1. Browse" />
                            <p>Find your bike or ebike. You can use our <a>marketplace</a> to explore an extensive range from the best brands and retailers. Or visit any of our <a>participating retailers</a> to get a quote.</p>
                        </Col>
                        <Col lg={3} md={4} xs={6} className='mb-4 mb-lg-0'>
                            <Image src="/assets/img/process-choose.svg" className='mb-3' />
                            <MainHeadSub title="2. Choose" />
                            <p>Choose an offer from your preferred bike retailer and complete the salary sacrifice agreement, or <a>apply now</a> if you are using a local bike shop.</p>
                        </Col>
                        <Col lg={3} md={4} xs={6} className='mb-4 mb-lg-0'>
                            <Image src="/assets/img/process-approval.svg" className='mb-3' />
                            <MainHeadSub title="3. Approval" />
                            <p>The eBay People team will review and approve your application, and set-up your salary sacrifice</p>
                        </Col>
                        <Col lg={3} md={4} xs={6} className='mb-4 mb-lg-0'>
                            <Image src="/assets/img/process-ride.svg" className='mb-3' />
                            <MainHeadSub title="4. Ride" />
                            <p>As soon as you are approved you will receive your gogeta voucher to enable you to get your new bike.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>}
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
    </Applayout>
}
export default withContext(HowItWorksEbay)