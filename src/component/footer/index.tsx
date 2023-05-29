import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withContext } from '<prefix>/context/appContext';
function Footer({context:{host}}:any){
    return<footer className='footer'>
    {host === 'uk'?null:<div className='footer-main'>
        <Container>
            <Row>
                <Col sm={12} md={3} lg={2} className="mb-4 mb-lg-0">
                    <div className='ftlogo'>
                        <img src="/assets/logo/eBay_logo.svg" alt="Gogeta Logo" />
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
                                <img src="/assets/img/sm-instagram.svg" alt="img" className='img-fluid' /></a></li>
                            <li className="nav-endurance-ebike"><a href="mailto:hello@gogeta.bike"><img src="/assets/img/sm-youtube.svg" alt="img" className='img-fluid' /></a></li>
                            <li className="nav-cargo-ebike"><a href="/">
                                <img src="/assets/img/sm-strava.svg" alt="img" className='img-fluid' /></a></li>
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
                            <li><a href='#'>Cookie policy</a></li>
                            <li><a href='#'>Privacy policy</a></li>
                            <li><a href='#'>Terms of use</a></li>
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
export default withContext(Footer)