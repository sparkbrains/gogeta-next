import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Slider from "react-slick";
import Applayout from '<prefix>/layout/applayout';

function Pdp() {
   var settings = {
      dots: true,
      infinite: true,
      autoPlay: true,
      speed: 500,
      padding: '15px',
      slidesToShow: 4,
      slidesToScroll: 1,
      nav: false,
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
      <Applayout className='pdpMain w-100 mt-2'>
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
                     <img src="assets/img/ic_spz-logo1.svg" alt="img" className='img-fluid brandLogo' />
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
                                    <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid' /></span>
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
                                    <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid' /></span>
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
                                    <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid' /></span>
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
                                    <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid' /></span>
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
                                    <span className='colorRoll add'><img src='assets/img/ic_add-plus.svg' alt='icon' className='img-fluid' /></span>
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
      </Applayout>
   );
}
export default Pdp;