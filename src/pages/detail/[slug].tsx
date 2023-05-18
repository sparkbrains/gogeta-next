import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, ChangeEvent, useEffect } from "react";
import Slider from "react-slick";
import Applayout from '<prefix>/layout/applayout';
import Image from 'next/image';
import ProductList from '<prefix>/component/product-list';
import { useRouter } from 'next/router';
import ColorWay from '<prefix>/component/product-list/colorway';
import { priceCalculator } from '<prefix>/common/utilits';

function Pdp({ detail }: any) {
    const router = useRouter()
    const [data, setData] = useState<any>({})
    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    const [heightList,setHeightList] = useState([])
    const [calculateState,setcalculateState] = useState({
        cost_bike:0,
        accessories_val:0,
        total_val:0,
        initial_payment:0,
        salary:0,
        total_salary_amt:0,
        monthly_salary_amt:0,
    })
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
    useEffect(() => {
        let updateRes = priceCalculator(router?.query?.salary || 0, [detail])[0]
        if (router?.query?.salary?.length) {
            setData(updateRes)
        } else {
            setData(detail)
        }
        let list:any = []
        for(let item in detail?.heightDropdown){
            list.push({
                label:item,
                value:detail?.heightDropdown[item]
            })
        }
        setHeightList(list)
        detail.colourway?.map((item: any) => {
            handleColor(item,updateRes)
        })
    }, [router, detail])
    let price = `${'SRP ' + detail?.currencyProduct?.currency?.currencySymbol + selectColorProduct?.size?.unitSuggestedRetailPrice}`
    const handleSize = (event: any) => {
        const { value }: any = event.target
        const val = JSON.parse(value)
        setselectColorProduct({
            ...selectColorProduct,
            size: val
        })
    }
    const handleColor = (item: any,data:any) => {
        if (data.colourwaySizes[item.colourwayName]) {
            Object.values(data.colourwaySizes[item.colourwayName])?.map((itemSize: any) => {
                if (itemSize.stock_status === 'In stock now') {
                    let colorObj = {
                        size: itemSize,
                        ...item
                    }
                    setcalculateState({
                        ...calculateState,
                        cost_bike:colorObj.size?.unitSuggestedRetailPrice,
                        total_val:colorObj.size?.unitSuggestedRetailPrice + calculateState.accessories_val,
                        salary:Number(router?.query?.salary) || 0,
                        monthly_salary_amt:data?.context?.per_month,
                        total_salary_amt:data?.context?.limit,
                        initial_payment:data?.context?.initial_payment
                    })
                    setselectColorProduct(colorObj)
                }
            })

        }
    }
    console.log(data, 'detail==');

    return (
        <Applayout className='pdpMain w-100 mt-2'>
            <section className='turboBnr porezid'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='cycleImg'>
                                <Image src={selectColorProduct?.colourwayImage?.length && selectColorProduct?.colourwayImage[0]} width={576} height={370} alt={data?.productName} className='img-fluid' />
                            </div>
                            {selectColorProduct?.colourwayImage > 1 ? <div className='thumbnailSlide'>
                                {
                                    selectColorProduct?.colourwayImage?.map((item: string, index: number) => {
                                        // for selection image add 'current' class in main div
                                        return <div className={`thumbImg`} key={index}>
                                            <Image src={item} width={576} height={370} alt={data?.productName} className='img-fluid' />
                                        </div>
                                    })
                                }
                            </div> : null}
                            <p className='interction'>Images are for illustration only. Please see product description and specifications for details of this model build.</p>
                        </Col>
                        <Col lg={6}>
                            <div className='cycleDetail'>
                                <Image src={data.brandLogo} width={122} height={40} alt="img" className='img-fluid brandLogo' />
                                <h3>{data.productName}</h3>
                                <div className='priceDetailoffer'>
                                    <span>{price}</span>
                                    {
                                        data?.context && Object.keys(data?.context)?.length ?
                                            <>
                                                <p className='cyclePrice'>Cycle to Work price <b>{data.currencyProduct.currency.currencySymbol + (selectColorProduct?.size?.unitSuggestedRetailPrice - Number(data?.context?.total_savings))}</b></p>
                                                <p className='payEmi'>Pay only {data.currencyProduct.currency.currencySymbol + data?.context?.per_month} per month</p>
                                                <p className='saveupto'>Save {data.currencyProduct.currency.currencySymbol + data?.context?.total_savings} ({data?.context?.saving_percentage})</p>
                                            </>
                                            : null
                                    }

                                </div>
                                <div className='cycleColor'>
                                    <b>Colour:</b> {selectColorProduct?.colourwayName}
                                    <div className='colorPalette'>
                                        <ColorWay setselectColorProduct={(val: any) => { handleColor(val,data) }} selectColorProduct={selectColorProduct} item={data} />
                                        {/* <Button type='button' className='color1 activebtn'></Button>
                                        <Button type='button' className='color2'></Button> */}
                                    </div>
                                </div>
                                <div className='chooseSize row'>
                                    <div className='form-field col-md-6 mb-4 mb-md-0'>
                                        <label>Choose size</label>
                                        <select onChange={handleSize} value={JSON.stringify(selectColorProduct.size)}>
                                            <option selected disabled>Select your size</option>
                                            {
                                                data?.colourwaySizes && Object.values(data?.colourwaySizes[selectColorProduct?.colourwayName])?.map((item: any, key: number) => {
                                                    return <option key={key} value={JSON.stringify(item)}>{item.mapped} - {item.stock_status}</option>
                                                })
                                            }
                                            {/* <option>S - In stock now</option>
                                            <option>M - In stock now</option>
                                            <option>L - In stock now</option>
                                            <option>XL - In stock now</option>
                                            <option>XXL - In stock now</option> */}
                                        </select>
                                    </div>
                                    <div className='form-field col-md-6 mb-4 mb-md-0'>
                                        <label>What is my height?</label>
                                        <select>
                                            <option selected disabled>Enter your height</option>
                                            {
                                                heightList?.map((item:any,key:number)=><option key={key} value={item.value}>{item.label}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='inStockStatus'>
                                    <p>{selectColorProduct?.size?.stock_status}</p>
                                    <button type="button" onClick={() => router.push(`/offers/${router?.query?.slug}?color=${selectColorProduct?.colourwayName}${router?.query?.salary?.length ? `&salary=${router?.query?.salary}` : ''}`)} className="customSiteBtn btn btn-primary px-4">Find me great offers <i className="fa-solid fa-angle-right"></i></button>
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
                            <h5>Save up to 52% with the Cycle to Work scheme</h5>
                            <img src="/assets/img/ic_plus-Open.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className='scmBodyamin'>
                            <Row>
                                <Col md={6} lg={7}>
                                    <div className='schemeForm'>
                                        <div className='inline-field'>
                                            <label>Cost of bike</label>
                                            <div className='bkrig'>
                                                <input type='text' name='cost_bike' placeholder='Cost of bike' value={calculateState.cost_bike}/>
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Accessories amount</label>
                                            <div className='bkrig'>
                                                <input type='text' name='accessories_val' placeholder='Accessories amount' value={calculateState.accessories_val}/>
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Total Bike + Accessories</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' disabled value={calculateState.total_val}/>
                                            </div>
                                        </div>
                                        <div className='inline-field'>
                                            <label>Make initial payment one-off payment of</label>
                                            <div className='bkrig'>
                                                <input type='text' name='name' disabled value={calculateState.initial_payment}/>
                                            </div>
                                        </div>
                                        <div className='schemeForm_calculate'>
                                            <h5>Pay the balance of €{calculateState.total_salary_amt} via Salary Sacrifice</h5>
                                            <div>
                                                <h3>Calculate your repayments:</h3>
                                                <div className='inline-field'>
                                                    <label>My Salary before tax</label>
                                                    <div className='bkrig me-2'>
                                                        <input type='text' name='salary' placeholder='Salary' value={calculateState.salary}/>
                                                    </div>
                                                </div>
                                                <div className='inline-field'>
                                                    <label>Total Salary Sacrifice amount</label>
                                                    <div className='bkrig'>
                                                        <input type='text' name='name' placeholder='Salary' value={calculateState.total_salary_amt} disabled />
                                                    </div>
                                                </div>
                                                <div className='inline-field'>
                                                    <label>Monthly Salary Sacrifice amount</label>
                                                    <div className='bkrig'>
                                                        <input type='text' name='name' placeholder='Salary' value={calculateState.monthly_salary_amt} disabled />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center mt-5'>
                                        <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} lg={5}>
                                    <div className='scmRight'>
                                        <div className='totalSavingbx'>
                                            <div className='bxts'>
                                                <img src="/assets/img/ic_saving-kit.svg" alt="img" className='img-fluid' />
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
            {data?.feature?.length ?<section className='keyFeatures porezid'>
                <Container>
                    <h4 className='mdheading'>Key features</h4>
                    <Row>
                        {
                            data?.feature?.map((item:any,key:number)=> <Col key={key} md="6" lg={4} className='mb-4 mb-lg-0'>
                            <div className='singlekeyFeature'>
                                <Image src={item.featureImage[0]} width={409} height={400} alt="img" className='img-fluid' />
                                <h6>{item.featureName}</h6>
                                <p>{item.featureContent}</p>
                            </div>
                        </Col>)
                        }
                    </Row>
                </Container>
            </section>:null}
            <section className='specification porezid'>
                <Container>
                    <h4 className='commonInnheading'>Specifications</h4>
                    <div className='specifiList' dangerouslySetInnerHTML={{ __html: detail.productSpecificationContent }}></div>
                </Container>
            </section>
            <section className='specializedOne porezid' style={{ background: `url(${detail.brandBackground})` }}>
                <Container>
                    <Col md={6}>
                        <div className='speciContbx' >
                            <Image width={122} height={40} src={detail.brandLogo} alt="img" className='img-fluid brandLogo' />
                            <p>{detail?.brandDescription}</p>
                        </div>
                    </Col>
                </Container>
            </section>
            <section className='mltSection  relatedProducts '>
                <Container className='porezid'>
                    <h4 className='commonInnheading'>Related products</h4>
                    <div className='relProdSlider'>
                        <Slider {...settings}>
                            {
                                detail?.related_products?.map((item: any, key: number) => {
                                    return <div className='items' key={key}>
                                        <div onClick={() => router.push(`/detail/${item.brandName.toLowerCase() + '-' + item.productNameSlug}`)} className='btn-trans w-100 text-start h-100'>
                                            <ProductList item={item} newDesign={true} />
                                        </div>
                                    </div>
                                })
                            }
                        </Slider>
                        {/* <Row>
                <Col md={6} lg={3}>
                    <div className='cardbx'>
                    <img src="/assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="/assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='/assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
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
                    <img src="/assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="/assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='/assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
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
                    <img src="/assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="/assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='/assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
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
                    <img src="/assets/img/img_Product-image.svg" alt="Gogeta Logo" className='img-fluid productIMg' />
                    <div className='cardBdy'>
                        <div className='d-flex align-items-center justify-content-between brandColor'>
                            <img src="/assets/img/ic_logo_trek.svg" alt="Gogeta Logo" className='img-fluid' />
                            <div className='d-flex align-items-center'>
                            <span className='colorRoll black'></span>
                            <span className='colorRoll orange'></span>
                            <span className='colorRoll multi'></span>
                            <span className='colorRoll add'><img src='/assets/img/ic_add-plus.svg' alt='icon' className='img-fluid'  /></span>
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
export async function getServerSideProps(context: any) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(baseURL + `test-products/${context.query.slug}/?portalDomain=gogeta.dev`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await response.json()
    return {
        props: {
            detail: { ...data },
        },
    }
}
export default Pdp;