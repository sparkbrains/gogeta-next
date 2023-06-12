import { Button, Container, Row, Col } from 'react-bootstrap';
import Image from '../../component/image';
import { MainHead } from '../../component/main-head';
import { MainHeadSub } from '../../component/main-head/sub-main';
import Toggle from '../../component/toggle';
import Applayout from '<prefix>/layout/applayout';
import CalculateSchemePackage from '<prefix>/component/calculateSchemePackage';
import SavingCalculate from '<prefix>/component/home/savingCalculate';
import { useRouter } from 'next/router';
function HowWorks({ context }: any) {
    const host: string = context.host
    const router = useRouter()
    return <Applayout className='ebay-howWorks w-100 m-0 pt-0'>
        <section className='gogetaBannerCell mb-3 mt-4 mt-sm-0'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} >
                        <div className='bannerCont'>
                            <h2 className='h2'>How it works</h2>
                            <Image src="/assets/how-it-works-ebay.svg" height={490} width={388} alt="img" className='img-fluid d-block d-sm-none mb-3' />
                            <p>The Cycle to Work Scheme is a tax incentive aimed at getting more people active, by providing unbeatable savings on the cost of a new bike, or e-bike as well as cycling accessories such as a helmet, lights or a lock. </p>
                            <div className='d-flex align-items-center'>
                                {
                                    host.includes('uk') ?
                                        <Button onClick={() => router.replace((router?.query?.companySlug?'/'+router?.query?.companySlug:'')+`/how-it-works/#faq`)} type="button" className='customSiteBtn me-2' >FAQs <i className="fa-solid fa-angle-right"></i></Button>
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
                                <Image src="/assets/how-it-works-ebay.svg" height={606} width={547} alt="img" className='img-fluid d-none d-sm-block' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {host.includes('uk') ? null : <Container>
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
                                host.includes('uk') ? <>
                                    <p className='text-white mx-wdt5'>The Cycle to Work Scheme voucher limit set by [companyname] is £[limit].</p>
                                    <p className='text-white mx-wdt5'>You can get whatever you need to keep you in the saddle and commuting regularly. That includes any type of bike or e-bike and cycling accessories including:</p>
                                    <Row className='mt-4 mt-md-5 mb-4'>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="/assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Cycle clothing</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="/assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Lights</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="/assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Helmets</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="/assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Child seats</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="/assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
                                                <span>Locks</span>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='mb-4 px-0 px-sm-3'>
                                            <div className='realtimeBike d-flex align-items-start text-white'>
                                                <img src="/assets/img/ic_Bullet-Point-nw-Icon.svg" alt="img" className='img-fluid mt-1 me-2' />
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
                                <img src="/assets/market-place.svg" alt="img" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        {host.includes('uk') ? <div className='ebay-main'>
            <SavingCalculate />
        </div> :
            <CalculateSchemePackage />}
        {host.includes('uk') ? null : <section className='mltSection theprocess pb-0 pb-lg-5 mb-5 mt-hgs nobefSecl mt-4'>
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
        <section className='helpingHand' id='faq'>
            <Container>
                <MainHead title="Frequently asked questions" />
                <div className='pt-5'>
                    <Toggle title='What is the Cycle to Work Scheme?'>
                        <p>The Cycle to Work Scheme was introduced by the UK Government to encourage greater participation in cycling. </p>
                        <p>The Scheme enables employers to offer their employees the opportunity to get a bike and cycling accessories via their salary.</p>
                        <p>This means the employee reduces part of their gross salary before tax, in exchange for a bike and accessories, and benefits from not paying Income Tax or National Insurance on the value of the bike and gear.</p>
                        <p>Employees can use the bike for commuting as well as for leisure.</p>
                        <p>Cycle to Work savings are typically 32% - 42% depending on your earnings.</p>
                        <p>The scheme also acts as a form of interest free loan via salary, to further improve the affordability of getting a new bike.</p>
                        <p>Neither the employer or the employee is required to keep a log of their use of the bike.</p>
                    </Toggle>
                    <Toggle title='How do I join the scheme?'>
                        <p>To start your employer must register with <b>go</b>geta to make the scheme available to employees. It is not possible to have a salary sacrifice without the employer offering it.</p>
                        <p>Then use <b>go</b>geta to find your bike and cycling accessories, see how much this will cost and the total salary sacrifice amount, plus the estimated tax savings.</p>
                        <p>When you apply to join the scheme your employer will review your application, and when it is approved you will sign a salary sacrifice agreement and a hire agreement.   </p>
                        <p>Your employer then notifies <b>go</b>geta and you get a voucher to redeem for your new bike from your preferred bike retailer. Happy cycling!</p>
                    </Toggle>
                    <Toggle title='What bikes and cycling accessories are available?'>
                        <p>You can get any adult bike, including electric bikes, plus a wide range of cycling equipment and clothing. You can select cycling equipment with a bike, or if you already have a bike and are cycling to work you can choose to get equipment only, with all the same tax savings. </p>
                        <p>You cannot get a bike for someone else.</p>
                    </Toggle>
                    <Toggle title='Is there a limit on how much an employee can spend via the scheme?'>
                        <p>Your employer will set the minimum and maximum scheme limits within the <b>go</b>geta portal. You will be notified of these when the scheme is promoted to you.</p>
                    </Toggle>
                    <Toggle title='How are the savings made?'>
                        <p>The Cycle to Work scheme savings are made by reducing your gross salary in exchange for your new bike. That’s called salary sacrifice.</p>
                        <p>By reducing your salary before tax you are not paying Income Tax or National Insurance on the amount which is the value of the voucher you want to redeem for your new bike. </p>
                        <p>So the cycle to work amount you will see in your payslip each month is before tax. The true net cost of your bike will be lower because you are not paying tax on it.</p>
                        <p>Here’s an example:</p>
                        {/* <p className='colorOrg'>//This will be a static instance of the calculator with values pre-filled. I will add this shortly.</p> */}
                        <p>Plus don’t forget another nice benefit is the option to pay for the bike interest free through your salary.</p>
                    </Toggle>
                    <Toggle title='What happens at the end of the scheme?'>
                        <p>The tax benefits available through the Cycle to Work Scheme are provided on the basis that employees are hiring the equipment from their employer. This avoids the scheme becoming a benefit in kind, which would attract additional tax. </p>
                        <p>A hire agreement is supplied when the employee joins the scheme.</p>
                        <p>This agreement is between gogeta and the employee, so there’s nothing employees will need to do, except to see out the hire term with no further charges or deposits. This offers the best benefit, with no hidden transfer of ownership fees.</p>
                        <p>When the Fair Market Value of the goods becomes negligible, we’ll transfer ownership to the employee for free.</p>
                        <p>Employees also have the opportunity to buy the goods early or return the bike, if they wish.</p>
                    </Toggle>
                    <Toggle title='How often can I join the scheme?'>
                        <p>Your employer will decide this but it’s usually once an existing Cycle to Work Scheme salary sacrifice has ended.</p>
                    </Toggle>
                    <Toggle title='If I work from home can I join the scheme?'>
                        <p>Yes, if you use the bike for work related trips such as to a co-work space, to the post office or to collect work-related items.</p>
                    </Toggle>
                    <Toggle title='What happens if I leave my job during the scheme?'>
                        <p>If you leave during the salary sacrifice period your employer will deduct the outstanding balance from your final net pay.</p>
                    </Toggle>
                    <Toggle title='What happens if I take maternity/paternity/adoption or sick leave?'>
                        <p>The salary sacrifice will continue as long as your salary remains at an acceptable level to ensure affordability, and it does not drop below National Minimum Wage. Your employer will confirm this with you.</p>
                    </Toggle>
                    <Toggle title='Who owns the bike?'>
                        <p><b>go</b>geta owns the bike during the term of the hire agreement. </p>
                        <p>This ensures the tax benefits are maintained. </p>
                        <p>At the end of the hire term the employee is given the option to take ownership of the bike for a £1 transfer of ownership fee..</p>
                    </Toggle>
                    <Toggle title='Who is responsible for maintaining the bike?'>
                        <p>It is the employee’s responsibility to ensure the bike is well maintained. </p>
                    </Toggle>
                    <Toggle title='What happens if there is a problem with the bike?'>
                        <p>Should there be any issues with the bike, in the first instance contact the bike supplier. </p>
                        <p>In the event of a warranty issue and subsequent replacement the bike supplier will handle this for the employee, and the scheme will continue.</p>
                    </Toggle>
                    <Toggle title='Do I have to spend the full amount of my gogeta voucher in one go?'>
                        <p>Yes, you need to complete your Cycle to Work transaction with a single supplier in one go, as it is not possible to split the amounts or use more than one supplier. </p>
                        <p>Remember your salary sacrifice will be for the full amount, and will start shortly after your employer approves your application. So it’s important to spend the full amount promptly.</p>
                        <p>In the event there is a shortfall you can make up the difference by getting extra cycling accessories.</p>
                    </Toggle>
                    <Toggle title='What happens if the bike is stolen?'>
                        <p>It is the employee’s responsibility to insure the bike.</p>
                        <p>If the bike is stolen during the salary sacrifice period the employee remains liable for any remaining payments. If the bike is insured and replaced then the agreement continues as normal.</p>
                        <p>We highly recommend getting insurance for the bike.</p>
                    </Toggle>
                    <Toggle title='What if I change my mind?'>
                        <p>There is a 14 day cooling off period after you collect the bike if you change your mind. After that the salary sacrifice agreement with your employer cannot be cancelled.</p>
                    </Toggle>
                    <Toggle title='How do I make a complaint?'>
                        <p>We endeavour to provide you with excellent customer service however we acknowledge that, at times, we may fail to meet your expectations. </p>
                        <p>Should you be dissatisfied with the provision or our failure to provide a service to you, you can make a complaint by: </p>
                        <ul>
                            <li><p>Email: hello@gogeta.bike</p></li>
                            <li><p>Post: Velomatch Limited (trading as gogeta), ℅ Johnston Carmichael, Birchin Court, 20 Birchin Lane, London EC3V 9DU</p></li>
                        </ul>
                        <p>We try to resolve complaints as soon as possible. Should we resolve your complaint by the close of the third business day following the day on which we receive your complaint, we will issue you with a written communication called a summary resolution acknowledging that you made a complaint and setting out that the complaint has been resolved and making you aware of your right to refer the complaint to the Financial Ombudsman Service should you be dissatisfied with the resolution. </p>
                        <p>Should we consider that we are not able to resolve the complaint by the close of the third business day, we will issue you with a written complaint acknowledgement within two working days.  </p>
                        <p>Thereafter, we will investigate your complaint in order to reach a fair resolution. Please note that investigating your complaint may require us to contact you in order to obtain further information about your complaint and the allegations raised.</p>
                        <p>We endeavour to issue you with a written final response within eight weeks.</p>
                    </Toggle>
                </div>
            </Container>
        </section>
    </Applayout>
}
export default HowWorks;