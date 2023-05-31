import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withContext } from '<prefix>/context/appContext';
import Link from 'next/link';
const logo:any = {
    uk:'/assets/logo/logo_without.svg',
    ukMarket:'/assets/logo/logo_without.svg',
    ebay:'/assets/logo/eBay_logo.svg'
}
function Footer({context:{host}}:any){
    return<footer className='footer'>
    {host === 'uk'?null:<div className='footer-main'>
        <Container>
            <Row>
                <Col sm={12} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='ftlogo'>
                        <img src={logo[host]} alt="Gogeta Logo" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='footer-col'>
                        <h4 className="footer-col__header">eBikes</h4>
                        <ul className='list-unstyled'>
                            <li className="nav-leisure-ebike"><Link href="/">Leisure eBikes</Link></li>
                            <li className="nav-endurance-ebike"><Link href="/">Road eBikes</Link></li>
                            <li className="nav-cargo-ebike"><Link href="/">Cargo eBikes</Link></li>
                            <li className="nav-commuting-ebike"><Link href="/">Commuting eBikes</Link></li>
                            <li className="nav-gravel-ebike"><Link href="/">Gravel eBikes</Link></li>
                            <li className="nav-mountain-ebike"><Link href="/">Mountain eBikes</Link></li>
                            <li className="nav-mountain-ebike"><Link href="/">Folding eBikes</Link></li>
                            <li><Link href="/">Shop all</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='footer-col'>
                        <h4 className="footer-col__header">Bikes</h4>
                        <ul className='list-unstyled'>
                            <li className="nav-leisure-ebike"><Link href="/">Performance Road</Link></li>
                            <li className="nav-endurance-ebike"><Link href="/">Endurance Road</Link></li>
                            <li className="nav-cargo-ebike"><Link href="/">Aero Road</Link></li>
                            <li className="nav-commuting-ebike"><Link href="/">Ultralight Road</Link></li>
                            <li className="nav-gravel-ebike"><Link href="/">Gravel</Link></li>
                            <li><Link href="/">Shop all</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='footer-col'>
                        <h4 className="footer-col__header">Resources</h4>
                        <ul className='list-unstyled'>
                            <li className="nav-leisure-ebike"><Link href="/">Cycle to work</Link></li>
                            <li className="nav-endurance-ebike"><Link href="/">Buyer&apos;s guides</Link></li>
                            <li className="nav-cargo-ebike"><Link href="/">Blog</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='footer-col'>
                        <h4 className="footer-col__header">Support</h4>
                        <ul className='list-unstyled'>
                            <li className="nav-leisure-ebike"><Link href="/">FAQs</Link></li>
                            <li className="nav-endurance-ebike"><Link href="mailto:hello@gogeta.bike">hello@gogeta.bike</Link></li>
                            <li className="nav-cargo-ebike"><Link href="/">About us</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='footer-col socialIcons'>
                        <ul className='list-unstyled d-flex align-items-center'>
                            <li className="nav-leisure-ebike"><Link href="/">
                                <img src="/assets/img/sm-instagram.svg" alt="img" className='img-fluid' /></Link></li>
                            <li className="nav-endurance-ebike"><Link href="mailto:hello@gogeta.bike"><img src="/assets/img/sm-youtube.svg" alt="img" className='img-fluid' /></Link></li>
                            <li className="nav-cargo-ebike"><Link href="/">
                                <img src="/assets/img/sm-strava.svg" alt="img" className='img-fluid' /></Link></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>}
    <div className='footer-end'>
        <div className='bottomFooter'>
            <Container>
                <Row className={host !== 'uk'?'':'flex-row-reverse'}>
                    <Col md={6}>
                        <ul className={`list-unstyled d-flex ${host === 'uk'?'justify-content-end':''}`}>
                            <li><Link href='#'>Cookie policy</Link></li>
                            <li><Link href='#'>Privacy policy</Link></li>
                            <li><Link href='#'>Terms of use</Link></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <p className={`copyRightTxt ${host === 'uk'?'text-start mb-2':''}`}>© 2023 Velomatch Ltd. t/a gogeta</p>
                        {host !== 'uk'?'':<p className='copyRightTxt text-start velomatchCont'>Velomatch Limited t/a gogeta is a registered company in England and Wales as Velomatch Limited (No. 13403344), Birchin Court, 20 Birchin Lane, London EC3V 9DU. We are authorised and regulated by the Financial Conduct Authority under registration number 994240.</p>}
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
</footer>
}
export default Footer