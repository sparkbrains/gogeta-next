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
export default function HowItWorksEbay() {
    const [state, setState] = useState({
        bike_val: 1500,
        accessories_val: 100,
        salary: 30000,
        type:'ebike'
    })
    const [context,setContext] = useState<any>({})
    useEffect(()=>{
        handleCycleCalculate({...state})
    },[])
    const handleCycleCalculate = ({ bike_val = 0, accessories_val = 0, salary = 0, type = '' }) => {
        let bike_price = Number(bike_val) + Number(accessories_val)
        let val = calculatEbikePrice(bike_price, +salary, type)
        setContext(val)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const data ={
            ...state,
            [name]: value
        }
        setState(data)
        handleCycleCalculate({...data})
    }
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
                                <Button type="button" className='customSiteBtn me-2'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                                <Button type="button" className='customSiteBtn transpBtn'>FAQs <i className="fa-solid fa-angle-right"></i></Button>
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
        <Container>
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
        </Container>
        <section className='employeSaving empsvto mt-hgs mt-3 mt-md-5'>
            <Container>
                <div className='innerEmpSv empsvtoInner justify-content-center'>
                    <Row className='w-100 align-items-center'>
                        <Col md={6} className=' mb-4 mb-md-0 mobor2'>
                            <div className='d-none d-md-block mb-4'>
                                <MainHead title='What can you get?' />
                            </div>
                            <p className='text-white mx-wdt5'>In Ireland employees can benefit from tax savings up to certain limits, but can add their own funds if they wish to get a bike and accessories at a higher value. In our marketplace   <a>marketplace</a> you’ll be able to see your exact savings on any bike.</p>
                            <ul className='dotlisting'>
                                <li><span></span>Cargo bikes & safety equipment, the limit is €3,000</li>
                                <li><span></span>Electric bikes & safety equipment, the limit is €1,500</li>
                                <li><span></span>Standard bikes & safety equipment, the limit is €1,250</li>
                            </ul>
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
        <section className='works-calculate'>
            <Container>
                <div className='pt-1 pb-3'>
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
                                                <input type='text' className='form-input' value={state.bike_val} name='bike_val' onChange={onChange}/>
                                            </div>
                                        </div>
                                        <div className='calclulate-form pe-0 pe-lg-4'>
                                            <label>Accessories value?</label>
                                            <div className='d-flex align-items-center form-price-input'>
                                                <div className='currency'>£</div>
                                                <input type='text' className='form-input' value={state.accessories_val} name='accessories_val' onChange={onChange}/>
                                            </div>
                                        </div>
                                        <div className='calclulate-form pe-0 pe-lg-4'>
                                            <label>Your annual salary?</label>
                                            <div className='d-flex align-items-center form-price-input'>
                                                <div className='currency'>£</div>
                                                <input type='text' className='form-input' value={state.salary} name='salary' onChange={onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6} md={12} lg={6} className='d-flex justify-content-start justify-content-lg-end'>
                                    <div className='calclulate-form pe-0 pe-md-4'>
                                        <label>Bike type?</label>
                                        <ul className='flex-wrap d-block d-md-flex'>
                                            <li className='mb-3 mb-md-0'>
                                                <input type="radio" className='d-none' id='transport' checked={state.type === 'ebike'} value='ebike' name='type' onChange={onChange}/>
                                                <label htmlFor='transport'>
                                                    E-bike / Pedelec
                                                </label>
                                            </li>
                                            <li className='mb-3 mb-md-0'>
                                                <input type="radio" className='d-none' id='transportCargo' checked={state.type === 'Cargo'} value='Cargo' name='type' onChange={onChange}/>
                                                <label htmlFor='transportCargo'>
                                                    Cargo / E-cargo bike
                                                </label>
                                            </li>
                                            <li className='mb-3 mb-md-0'>
                                                <input type="radio" className='d-none' id='transportOther' checked={state.type === 'other'} value='other' name='type' onChange={onChange}/>
                                                <label htmlFor='transportOther'>
                                                    Other
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='cycling-saving-list'>
                        {Object.keys(context)?.length ? <Row>
                                <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                                    <div className='list listpack'>
                                        <Image src="/assets/img/Money_cashier_price_tag_euro.svg" className="mb-4" />
                                        <p>Total package value</p>
                                        <h3>£{handleChangeSalary(context?.total_savings)}</h3>
                                    </div>
                                </Col>
                                <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                                    <div className='list listOnepay'>
                                        <Image src="/assets/img/money_currency_euro_circle.svg" className="mb-4" />
                                        <p>One-off initial payment</p>
                                        <h3>£{handleChangeSalary(context?.initial_payment)}</h3>
                                    </div>
                                </Col>
                                <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                                    <div className='list listMonthPay'>
                                        <Image src="/assets/img/interface_calendar_mark.svg" className="mb-4" />
                                        <p>Your monthly payments</p>
                                        <h3>£{handleChangeSalary(context?.per_month)}</h3>
                                    </div>
                                </Col>
                                <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                                    <div className='list listEffSav'>
                                        <Image src="/assets/img/shopping_store_discount_percent_bag.svg" className="mb-4" />
                                        <p>Effective saving</p>
                                        <h3>{context.saving_percentage}</h3>
                                    </div>
                                </Col>
                            </Row>:null}
                        </div>
                    </div>
                </section>
            </Container>
        </section>
        <section className='mltSection theprocess pb-0 pb-lg-5 mb-5 mt-hgs nobefSecl mt-4'>
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
    </Applayout>
}