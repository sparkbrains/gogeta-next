import Button from 'react-bootstrap/Button';
import { Container, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
// import Slider from "react-slick";
import Applayout from '<prefix>/layout/applayout';
import Image from 'next/image';
import ProductList from '<prefix>/component/product-list';
import { useRouter } from 'next/router';
import ColorWay from '<prefix>/component/product-list/colorway';
import { applyCalculator, handleChangeSalary, priceCalculator, queryParam, submitCalculator } from '<prefix>/common/utilits';
import Calculate from '<prefix>/component/detailOfferCalculator';
import MainSlider from '<prefix>/component/mainSilder';
import Fetch from '<prefix>/common/fetch';
import { withContext } from '<prefix>/context/appContext';
import UkFreesiteCalculate from '<prefix>/component/home/ukFreesiteCalculate';
var frequencydata: any = {
    MONTHLY: 12,
    WEEKLY: 52,
    FORTNIGHTLY: 26,
    FOUR_WEEKLY: 13
}
function Pdp({ detail, context }: any) {
    const { profile, host, tenantDetail } = context
    const router = useRouter()
    const [calculateRes, setCalculateRes] = useState<any>({})
    const [data, setData] = useState<any>({})
    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    const [selectedHeight, setselectedHeight] = useState('')
    const [heightList, setHeightList] = useState([])
    var settings = {
        infinite: false,
        autoPlay: true,
        speed: 500,
        padding: '15px',
        slidesToShow: 4,
        slidesToScroll: 4,
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
        setFetchData(detail, true)
    }, [router, detail, host])
    const setFetchData = (detail: any, firstTime: boolean = false) => {
        // let updateRes = priceCalculator(router?.query?.salary || 0, [detail], profile.currencyCode)[0]

        let list: any = []
        for (let item in detail?.heightDropdown) {
            list.push({
                label: item,
                value: detail?.heightDropdown[item]
            })
        }
        setHeightList(list)
        let colorWay = {}
        if (detail?.filter_size) {
            detail?.colourway_list?.map((d: any) => {
                if (d.colourwayName === detail?.filter_size?.colourway) {
                    colorWay = d
                }
            })
        } else if (firstTime) {
            detail?.colourway_list?.map((d: any) => {
                if (d.colourwayName === detail?.initProductDetails?.colourway) {
                    colorWay = d
                }
            })
        } else {
            colorWay = detail?.colourway[0]
        }
        handleColor(colorWay, detail)
    }
    const handleSize = (event: any) => {
        const { value }: any = event.target
        const val = JSON.parse(value)
        setselectColorProduct({
            ...selectColorProduct,
            size: val
        })
    }
    const handleColor = (item: any, data: any) => {
        let updateRes = data
        let sizeFilter = data?.filter_size && Object?.keys(data?.filter_size).length
        const name = sizeFilter ? data?.filter_size?.colourway : item.colourwayName
        let colorObj: any = {}
        if(item){
            if (Object.values(item.sizes).every((size: any) => size.stock_status !== 'In stock now')) {
                let val = sizeFilter ? item.sizes[data?.filter_size?.mapped] : Object.values(item.sizes)[0]
                colorObj = {
                    size: val,
                    ...item
                }
            } else {
                if (sizeFilter) {
                    colorObj = {
                        size: item.sizes[data?.filter_size?.mapped],
                        ...item
                    }
                } else {
                    Object.values(item.sizes)?.map((itemSize: any) => {
                        if (itemSize.stock_status === 'In stock now') {
                            colorObj = {
                                size: itemSize,
                                ...item
                            }
                        }
                    })
                }
            }
        }
        setselectColorProduct(colorObj)
        if (host?.includes('uk') && data?.bicycleAssisted?.length) {
            let context = applyCalculator({
                SRP_val: colorObj?.size?.unitSuggestedRetailPrice,
                bikeValue: colorObj?.size?.offer_price ? colorObj.size.offer_price : colorObj?.size?.unitSuggestedRetailPrice,
                accessoriesValue: 0,
                annualSalary: router?.query?.salary,
                frequency: frequencydata[tenantDetail?.paymentFrequency] || 12,
                sacrifice_repayment: tenantDetail?.salarySacrificeTerm || 12,
                totalPackageValue: colorObj?.size?.offer_price ? colorObj?.size?.offer_price : colorObj?.size?.unitSuggestedRetailPrice,
            })
            updateRes = {
                ...detail,
                context: context
            }
        } else {
            updateRes = priceCalculator(router?.query?.salary || 0, [detail], profile.currencyCode)[0]
        }
        if (router?.query?.salary?.length) {
            setData(updateRes)
        } else {
            setData(data)
        }
    }
    const handleHeight = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setselectedHeight(value)
        Fetch(`test-products/${router.query.slug}/?portalDomain=gogeta.dev&height=${value}`).then(res => {
            if (res?.status) {
                setFetchData(res.data)
            }
        })
    }
    const formSubmit = (val: any) => {
        setCalculateRes(val)
        router.push((router.query.companySlug ? '/' + router.query.companySlug : '') + `/offers/${router?.query?.slug}?${queryParam({
            color: selectColorProduct?.colourwayName,
            salary: calculateRes?.salary?.length ? calculateRes?.salary : router?.query?.salary,
            accessories: calculateRes?.accessories_val,
            size: selectColorProduct?.size?.mapped,
            modelYear: data?.productYear
        })?.replace('&', '')}`)
    }
    let price = `${'SRP ' + detail?.currencyProduct?.currency?.currencySymbol + selectColorProduct?.size?.unitSuggestedRetailPrice}`
    let calObj: any = {
        SRP_val: selectColorProduct?.size?.unitSuggestedRetailPrice,
        frequency: frequencydata[tenantDetail?.paymentFrequency] || 12,
        paymentFrequency: tenantDetail?.paymentFrequency,
        sacrifice_repayment: tenantDetail?.salarySacrificeTerm || 12,
        bikeValue: Math.round(selectColorProduct?.size?.offer_price ? selectColorProduct?.size?.offer_price : selectColorProduct?.size?.unitSuggestedRetailPrice),
    }
    calObj = router?.query?.salary ? {
        ...calObj,
        annualSalary: router?.query?.salary,
        totalPackageValue: selectColorProduct?.size?.unitSuggestedRetailPrice,
    } : calObj
    return (
        <Applayout className='pdpMain w-100 mt-2'>
            <div className='pb-4'>
                <Container>
                    <Button onClick={() => router.back()} className='backPage nav-link'><Image width={7} height={12} src='/go/assets/img/ic_left-Stroke.svg' className="img-fluid" alt='back' /> Back to the bikes</Button>
                </Container>
            </div>
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
                                    {
                                        data?.context && Object.keys(data?.context)?.length ?
                                            host.includes('uk') ?
                                                <>
                                                    <span>{price}</span>
                                                    {selectColorProduct.size?.offer_price ? <p className='payEmi'>retailer&apos;s best price {profile.currencySymbol + handleChangeSalary(selectColorProduct.size?.offer_price)}</p> : null}
                                                    <p className='cyclePrice primary-color'>Salary sacrifice price <b>{profile.currencySymbol + handleChangeSalary(data?.context?.C2W_price)}</b></p>
                                                    <p className='payEmi'>Save {profile.currencySymbol + handleChangeSalary(data?.context?.saving_C2W)} ({data?.context?.saving_C2W_percentage + '%'})</p>
                                                </>
                                                :
                                                <>
                                                    <span>{price}</span>
                                                    <p className='cyclePrice'>Cycle to Work price <b>{profile.currencySymbol + handleChangeSalary(Math.round(selectColorProduct?.size?.unitSuggestedRetailPrice - Number(data?.context?.total_savings)))}</b></p>
                                                    <p className='payEmi'>Pay only {profile.currencySymbol + handleChangeSalary(data?.context?.per_month)} per month</p>
                                                    <p className='saveupto'>Save {profile.currencySymbol + handleChangeSalary(data?.context?.total_savings)} ({data?.context?.saving_percentage})</p>
                                                </>
                                            : <>
                                                {selectColorProduct.size?.offer_price ? <s className="price-current">{price}</s> : <p className="price-current">{price}</p>}
                                                {selectColorProduct.size?.offer_price ?
                                                    <>
                                                        <p className='price-best'><span>Best price </span>{profile.currencySymbol + selectColorProduct.size.offer_price}</p>
                                                        <p className='price-best'>Save <span>{profile.currencySymbol + selectColorProduct.size.saving}</span></p>
                                                    </> : null}
                                            </>
                                    }

                                </div>
                                <div className='cycleColor'>
                                    <b>Colour:</b> {selectColorProduct?.colourwayName}
                                    <div className='colorPalette'>
                                        <ColorWay setselectColorProduct={(val: any) => { handleColor(val, data) }} selectColorProduct={selectColorProduct} item={data} />
                                    </div>
                                </div>
                                <div className='chooseSize row'>
                                    <div className='form-field col-md-6 mb-4 mb-md-0'>
                                        <label>Choose size</label>
                                        <select onChange={handleSize} value={JSON.stringify(selectColorProduct.size)}>
                                            <option selected disabled>Select your size</option>
                                            {
                                                selectColorProduct?.sizes && Object.values(selectColorProduct?.sizes)?.map((item: any, key: number) => {
                                                    return <option key={key} value={JSON.stringify(item)}>{item.mapped} - {item.stock_status}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='form-field col-md-6 mb-4 mb-md-0'>
                                        <label>Need help finding your size?</label>
                                        <select name='height' onChange={handleHeight} value={selectedHeight}>
                                            <option value='' selected disabled>Enter your height</option>
                                            {
                                                heightList?.map((item: any, key: number) => <option key={key} value={item.value}>{item.label}</option>)
                                            }
                                        </select>
                                        {selectedHeight ? <p>Size recommendation: <b>{selectColorProduct.size?.mapped}</b></p> : ''}
                                    </div>
                                </div>
                                <div className='inStockStatus'>
                                    {
                                        selectColorProduct?.size?.stock_status === "Out of stock" ?
                                            <>
                                                <p>This bike is currently unavailable in your choosen size/colour.</p>
                                                <p>You can still apply for your Cycle to Work voucher now, and use it for any bike at any shop</p>
                                                <button type="button" className="customSiteBtn btn btn-primary px-4">Apply now <i className="fa-solid fa-angle-right"></i></button>
                                            </>
                                            :
                                            <>
                                                <p>{selectColorProduct?.size?.stock_status}</p>
                                                <button type="button" onClick={() => router.push((router.query.companySlug ? '/' + router.query.companySlug : '') + `/offers/${router?.query?.slug}?${queryParam({
                                                    color: selectColorProduct?.colourwayName,
                                                    salary: calculateRes?.salary?.length ? calculateRes?.salary : router?.query?.salary,
                                                    accessories: calculateRes?.accessories_val,
                                                    size: selectColorProduct?.size?.mapped,
                                                    modelYear: data?.productYear
                                                })?.replace('&', '')}`)} className="customSiteBtn btn btn-primary px-4">Find me great offers <i className="fa-solid fa-angle-right"></i></button>
                                            </>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mt-5'>
                {
                    host.includes('uk') ?
                        <div className='applyNow pt-0'>
                            <Container>
                                {/* data={{salary:router.query.salary || ''}} */}
                                <UkFreesiteCalculate srp={true} data={calObj} submit={true} formSubmit={formSubmit} />
                            </Container>
                        </div>
                        :
                        <Calculate detail={{ ...data, colorObj: selectColorProduct }} handleCalculator={(val: any) => setCalculateRes(val)} />
                }
            </section>
            {data?.feature?.length ? <section className='keyFeatures porezid'>
                <Container>
                    <h4 className='mdheading'>Key features</h4>
                    <MainSlider setting={{
                        ...settings,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false
                    }}>
                        {
                            data?.feature?.map((item: any, key: number) => <div key={key} className='singlekeyFeature px-3'>
                                <Image src={item.featureImage[0]} width={409} height={400} alt="img" className='img-fluid' />
                                <h6>{item.featureName}</h6>
                                <p>{item.featureContent}</p>
                            </div>
                            )
                        }
                    </MainSlider>
                </Container>
            </section> : null}
            {detail.productSpecificationContent?.length ? <section className='specification porezid'>
                <Container>
                    <h4 className='commonInnheading'>Specifications</h4>
                    <div className='specifiList' dangerouslySetInnerHTML={{ __html: detail.productSpecificationContent }}></div>
                </Container>
            </section> : null}
            <section className='specializedOne porezid' style={{ background: `url(${detail.brandBackground})`, backgroundSize: 'cover' }}>
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
                        <MainSlider setting={{ ...settings }}>
                            {
                                detail?.related_products?.map((item: any, key: number) => {
                                    return <div className='items' key={key}>
                                        <div onClick={() => router.push((router.query.companySlug ? '/' + router.query.companySlug : '') + `/detail/${item.brandName.toLowerCase() + '-' + item.productNameSlug}${router.query.salary ? '?salary=' + router.query.salary : ''}`)} className='btn-trans w-100 text-start h-100'>
                                            <ProductList item={item} newDesign={true} profile={profile} />
                                        </div>
                                    </div>
                                })
                            }
                        </MainSlider>
                    </div>
                </Container>
            </section>
        </Applayout>
    );
}
export async function getServerSideProps(context: any) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL
    let host = context.req.headers.host
    host = host === 'gogeta.dev' ? host : null
    const response = await fetch(baseURL + `test-products/${context.query.slug}/${host ? `?portalDomain=${host}` : ''}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await response?.json()
    return {
        props: {
            detail: { ...data },
        },
    }
}
export default withContext(Pdp);