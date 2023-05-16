import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../component/image';
import Link from 'next/link';
import React from "react";
import Slider from "react-slick";
function Pdp() {
   var settings = {
    dots: true,
    infinite: true,
    autoPlay:true,
    speed: 500,
    padding: '15px',
    slidesToShow: 4,
    slidesToScroll: 1,
    nav:false,
    arrows: true,
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
return (
<div className="gogetaMain">
   <header className="header border-0">
      <Navbar expand="lg">
         <Container className='mob_re_non'>
            <Link href="/ebay">
            <img src="assets/logo/eBay_logo.svg" alt="Gogeta Logo" /></Link>
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="me-auto ms-lg-5 my-2 my-lg-0"
                  navbarScroll
                  >
                  <div className='d-flex align-items-center d-block d-lg-none'>
                     <Nav.Link href="#action4">
                        <Image src='/assets/img/interface_search_square.svg' />
                     </Nav.Link>
                     <Nav.Link href="#action4">
                        <Image src='/assets/img/interface_user_square_alternate.svg' />
                     </Nav.Link>
                  </div>
                  <Nav.Link className='d-block d-lg-none' href="#action4">Find Bikes <i className="fa-solid fa-angle-right"></i></Nav.Link>
                  <Nav.Link className='d-block d-lg-none' href="#action4">Help <i className="fa-solid fa-angle-right"></i></Nav.Link>
               </Nav>
               <div className=" align-items-center navbar-nav d-none d-lg-flex">
                  <Nav.Link className='d-none d-lg-block' href="#action4">Find Bikes <i className="fa-solid fa-angle-right"></i></Nav.Link>
                  <Nav.Link className='d-none d-lg-block' href="#action4">Help <i className="fa-solid fa-angle-right"></i></Nav.Link>
                  <Nav.Link className='d-none d-lg-block' href="#action4">
                     <Image src='/assets/img/interface_search_square.svg' />
                  </Nav.Link>
                  <Nav.Link className='d-none d-lg-block' href="#action4">
                     <Image src='/assets/img/interface_user_square_alternate.svg' />
                  </Nav.Link>
               </div>
            </Navbar.Collapse>
            <div className='mbo_lef d-flex align-items-center'>
               {/* <Button type="button" className='customSiteBtn d-block d-lg-none me-3 me-md-4'>Book a demo <i className="fa-solid fa-angle-right"></i></Button> */}
               <Navbar.Toggle aria-controls="navbarScroll" />
            </div>
         </Container>
      </Navbar>
   </header>
   <div className='main pdpMain w-100 mt-2'>
      <section className='turboBnr porezid'>
         <Container>
            <Row>
               <Col lg={6}>
               <div className='cycleImg'>
                  <img src="assets/img/img_Como-SL-1.svg" alt="img" className='img-fluid' />
               </div>
               <div className='thumbnailSlide'>
                     <div className='thumbImg current'>
                        <img src="assets/img/img_Como-SL-1.svg" alt="img" className='img-fluid' />
                     </div>
                     <div className='thumbImg'>
                        <img src="assets/img/img_Como-SL-1.svg" alt="img" className='img-fluid' />
                     </div>
                     <div className='thumbImg'>
                        <img src="assets/img/img_Como-SL-1.svg" alt="img" className='img-fluid' />
                     </div>
                 
               </div>
               <p className='interction'>Images are for illustration only. Please see product description and specifications for details of this model build.</p>
               </Col>
               <Col lg={6}>
               <div className='cycleDetail'>
                  <img src="assets/img/ic_spz-logo1.svg" alt="img" className='img-fluid brandLogo' />
                  <h3>Turbo Como SL 5.0</h3>
                  <div className='priceDetailoffer'>
                     <span>SRP €4,5000.00</span> 
                     <p className='cyclePrice'>Cycle to Work price <b>€2,875.00</b></p>
                     <p className='payEmi'>Pay only €89.06 per month</p>
                     <p className='saveupto'>Save €1,625.00 (28.75%)</p>
                  </div>
                  <div className='cycleColor'>
                     <b>Colour:</b> Brassy Yellow / Transparent
                     <div className='colorPalette'>
                        <Button type='button' className='color1 activebtn'></Button>
                        <Button type='button' className='color2'></Button>
                     </div>
                  </div>
                  <div className='chooseSize row'>
                     <div className='form-field col-md-6 mb-4 mb-md-0'>
                        <label>Choose size</label>
                        <select>
                           <option selected disabled>Select your size</option>
                           <option>S - In stock now</option>
                           <option>M - In stock now</option>
                           <option>L - In stock now</option>
                           <option>XL - In stock now</option>
                           <option>XXL - In stock now</option>
                        </select>
                     </div>
                     <div className='form-field col-md-6 mb-4 mb-md-0'>
                        <label>What is my size?</label>
                        <select>
                           <option selected disabled>Enter your height</option>
                           <option>M - In stock now</option>
                           <option>L - In stock now</option>
                           <option>XL - In stock now</option>
                           <option>XXL - In stock now</option>
                        </select>
                     </div>
                  </div>
                  <div className='inStockStatus'>
                     <p>In stock now</p>
                     <button type="button" className="customSiteBtn btn btn-primary px-4">Find me great offers <i className="fa-solid fa-angle-right"></i></button>
                  </div>
               </div>
               </Col>
            </Row>
         </Container>
      </section>
      <section className='schemeProvider mt-5 porezid'>
         <Container>
            <div className='workScheme'>
               <div className='d-flex align-items-center justify-content-between schemeHead'>
                  <h5>Save up to 47% with the Cycle to Work scheme</h5>
                  <img src="assets/img/ic_plus-Open.svg" alt="img" className='img-fluid' />
               </div>
               <div className='scmBodyamin'>
                  <Row>
                     <Col md={6} lg={7}>
                     <div className='schemeForm'>
                        <div className='inline-field'>
                           <label>Scheme provider</label>
                           <div className='bkrig'>
                              <select>
                                 <option>gogeta</option>
                                 <option>gogeta</option>
                                 <option>gogeta</option>
                                 <option>gogeta</option>
                              </select>
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Country</label>
                           <div className='bkrig'>
                              <select>
                                 <option selected disabled>Select country</option>
                                 <option>country</option>
                                 <option>country</option>
                                 <option>country</option>
                              </select>
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Salary</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Salary' />
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Repayment period</label>
                           <div className='bkrig'>
                              <select>
                                 <option selected disabled>Repayment period</option>
                                 <option>12 months</option>
                              </select>
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Effective product price</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Price' />
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Accessories</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Accessories' />
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Total savings</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Total savings' />
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Monthly salary sacrifice</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Monthly salary' />
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Saving percentage</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Saving percentage' />
                           </div>
                        </div>
                        <div className='inline-field'>
                           <label>Ownership transfer charge</label>
                           <div className='bkrig'>
                              <input type='text' name='name' placeholder='Ownership transfer' />
                           </div>
                        </div>
                     </div>
                     </Col>
                     <Col md={6} lg={5}>
                     <div className='scmRight'>
                        <div className='d-flex flex-column btngrpDt'>
                           <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i class="fa-solid fa-angle-right"></i></button>
                           <button type="button" className="customSiteBtn btn btn-primary px-4">Find the best dealer <i class="fa-solid fa-angle-right"></i></button>
                        </div>
                        <div className='totalSavingbx'>
                           <div className='bxts'>
                              <img src="assets/img/ic_saving-kit.svg" alt="img" className='img-fluid' />
                              <h5>Total savings</h5>
                              <h2>€620.00</h2>
                           </div>
                           <p>Use the options on the left to calculate your savings.</p>
                        </div>
                     </div>
                     </Col>
                  </Row>
               </div>
            </div>
         </Container>
      </section>
      <section className='keyFeatures porezid'>
         <Container>
            <h4 className='mdheading'>Key features</h4>
            <Row>
               <Col md="6" lg={4} className='mb-4 mb-lg-0'>
               <div className='singlekeyFeature'>
                  <img src="assets/img/Feature image-1.svg" alt="img" className='img-fluid' />
                  <h6>A ride for all seasons</h6>
                  <p>The Como Super Light isn’t slowed down by bad weather. Specialized designed this bike for all seasons.</p>
               </div>
               </Col>
               <Col md="6" lg={4} className='mb-4 mb-lg-0'>
               <div className='singlekeyFeature'>
                  <img src="assets/img/Feature image-2.svg" alt="img" className='img-fluid' />
                  <h6>More riding, less maintaining</h6>
                  <p>The Como Super Light isn’t slowed down by bad weather. Specialized designed this bike for all seasons.</p>
               </div>
               </Col>
               <Col md="6" lg={4} className='mb-4 mb-lg-0'>
               <div className='singlekeyFeature'>
                  <img src="assets/img/Feature image-3.svg" alt="img" className='img-fluid' />
                  <h6>Need more juice?</h6>
                  <p>The Como Super Light isn’t slowed down by bad weather. Specialized designed this bike for all seasons.</p>
               </div>
               </Col>
            </Row>
         </Container>
      </section>
      <section className='specification porezid'>
         <Container>
            <h4 className='commonInnheading'>Specifications</h4>
            <Row>
               <Col lg={6}>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               </Col>
               <Col lg={6}>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               <div className='d-flex specifiList'>
                  <span className='bullet'></span>
                  <p>Frame: E5 Aluminium, bottom bracket mount, integrated downtube battery</p>
               </div>
               </Col>
            </Row>
         </Container>
      </section>
      <section className='specializedOne porezid'>
         <Container>
            <Col md={6}>
            <div className='speciContbx'>
               <img src="assets/img/ic_spz-logo1.svg" alt="img" className='img-fluid brandLogo'/>
               <p>Specialized are one of the few global bike brands big enough to develop their own motor and transmission systems. That allows them to create brilliantly well integrated bikes that can offer particularly good value. Proper bike fit and ergonomics are their hallmarks, and their comprehensive range of bikes is matched by a vast range containing everything from cycle clothing to water bottles and tools.</p>
            </div>
            </Col>
         </Container>
      </section>
      <section className='mltSection  relatedProducts '>
         <Container className='porezid'>
            <h4 className='commonInnheading'>Related products</h4>
            <div className='relProdSlider'>
               <Slider {...settings}>
                  <div className='items'>
                      <div className='cardbx'>
                        <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                        <div className='cardBdy'>
                              <div className='d-flex align-items-center justify-content-between brandColor'>
                                 <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                                 <div className='d-flex align-items-center'>
                                 <span className='colorRoll black'></span>
                                 <span className='colorRoll orange'></span>
                                 <span className='colorRoll multi'></span>
                                 <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                                 </div>
                              </div>
                              <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                              <h6 className='srpRate'>SRP €3,400.00</h6>
                              <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                              <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                              <span className='discount'>Save €431.25 (28.75%)</span>
                        </div>
                        <p className='stockStatus text-uppercase'>In stock now</p>
                     </div>
                  </div>
                  <div className='items'>
                      <div className='cardbx'>
                        <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                        <div className='cardBdy'>
                              <div className='d-flex align-items-center justify-content-between brandColor'>
                                 <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                                 <div className='d-flex align-items-center'>
                                 <span className='colorRoll black'></span>
                                 <span className='colorRoll orange'></span>
                                 <span className='colorRoll multi'></span>
                                 <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                                 </div>
                              </div>
                              <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                              <h6 className='srpRate'>SRP €3,400.00</h6>
                              <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                              <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                              <span className='discount'>Save €431.25 (28.75%)</span>
                        </div>
                        <p className='stockStatus text-uppercase'>In stock now</p>
                     </div>
                  </div>
                   <div className='items'>
                      <div className='cardbx'>
                        <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                        <div className='cardBdy'>
                              <div className='d-flex align-items-center justify-content-between brandColor'>
                                 <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                                 <div className='d-flex align-items-center'>
                                 <span className='colorRoll black'></span>
                                 <span className='colorRoll orange'></span>
                                 <span className='colorRoll multi'></span>
                                 <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                                 </div>
                              </div>
                              <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                              <h6 className='srpRate'>SRP €3,400.00</h6>
                              <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                              <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                              <span className='discount'>Save €431.25 (28.75%)</span>
                        </div>
                        <p className='stockStatus text-uppercase'>In stock now</p>
                     </div>
                  </div>
                  <div className='items'>
                      <div className='cardbx'>
                        <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                        <div className='cardBdy'>
                              <div className='d-flex align-items-center justify-content-between brandColor'>
                                 <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                                 <div className='d-flex align-items-center'>
                                 <span className='colorRoll black'></span>
                                 <span className='colorRoll orange'></span>
                                 <span className='colorRoll multi'></span>
                                 <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                                 </div>
                              </div>
                              <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                              <h6 className='srpRate'>SRP €3,400.00</h6>
                              <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                              <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                              <span className='discount'>Save €431.25 (28.75%)</span>
                        </div>
                        <p className='stockStatus text-uppercase'>In stock now</p>
                     </div>
                  </div>
                  <div className='items'>
                      <div className='cardbx'>
                        <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                        <div className='cardBdy'>
                              <div className='d-flex align-items-center justify-content-between brandColor'>
                                 <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                                 <div className='d-flex align-items-center'>
                                 <span className='colorRoll black'></span>
                                 <span className='colorRoll orange'></span>
                                 <span className='colorRoll multi'></span>
                                 <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                                 </div>
                              </div>
                              <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                              <h6 className='srpRate'>SRP €3,400.00</h6>
                              <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                              <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                              <span className='discount'>Save €431.25 (28.75%)</span>
                        </div>
                        <p className='stockStatus text-uppercase'>In stock now</p>
                     </div>
                  </div>
                  
                  
               </Slider>
               {/* <Row>
                <Col md={6} lg={3}>
                    <div className='cardbx'>
                    <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                            </div>
                        </div>
                        <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                        <h6 className='srpRate'>SRP €3,400.00</h6>
                        <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                        <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                        <span className='discount'>Save €431.25 (28.75%)</span>
                    </div>
                    <p className='stockStatus text-uppercase'>In stock now</p>
                </div>
                </Col>
                 <Col md={6} lg={3}>
                    <div className='cardbx'>
                    <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                            </div>
                        </div>
                        <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                        <h6 className='srpRate'>SRP €3,400.00</h6>
                        <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                        <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                        <span className='discount'>Save €431.25 (28.75%)</span>
                    </div>
                    <p className='stockStatus text-uppercase'>In stock now</p>
                </div>
                </Col>
                 <Col md={6} lg={3}>
                    <div className='cardbx'>
                    <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                            </div>
                        </div>
                        <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                        <h6 className='srpRate'>SRP €3,400.00</h6>
                        <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                        <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                        <span className='discount'>Save €431.25 (28.75%)</span>
                    </div>
                    <p className='stockStatus text-uppercase'>In stock now</p>
                </div>
                </Col>
                 <Col md={6} lg={3}>
                    <div className='cardbx'>
                    <img src="assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
                            </div>
                        </div>
                        <h4 className='mb-2'>Powerfly 7 Equipped</h4>
                        <h6 className='srpRate'>SRP €3,400.00</h6>
                        <p className='wprice mt-4 mb-1'>Cycle to Work price <span>€2,968.75</span></p>
                        <p className='monthPayment mb-1'>Pay only €89.06 per month</p>
                        <span className='discount'>Save €431.25 (28.75%)</span>
                    </div>
                    <p className='stockStatus text-uppercase'>In stock now</p>
                </div>
                </Col>
               </Row> */}
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
                           <img src="assets/img/sm-instagram.svg" alt="img" className='img-fluid' /></a>
                        </li>
                        <li className="nav-endurance-ebike"><a href="mailto:hello@gogeta.bike"><img src="assets/img/sm-youtube.svg" alt="img" className='img-fluid' /></a></li>
                        <li className="nav-cargo-ebike"><a href="/">
                           <img src="assets/img/sm-strava.svg" alt="img" className='img-fluid' /></a>
                        </li>
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
);
}
export default Pdp;