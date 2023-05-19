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
import { priceCalculator, submitCalculator } from '<prefix>/common/utilits';
import Calculate from '<prefix>/component/detailOfferCalculator';
import MainSlider from '<prefix>/component/mainSilder';

function Pdp({ detail }: any) {
    const router = useRouter()
    const [data, setData] = useState<any>({})
    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    const [heightList, setHeightList] = useState([])
    var settings = {
        infinite: true,
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
        let updateRes = priceCalculator(router?.query?.salary || 0, [detail])[0]
        if (router?.query?.salary?.length) {
            setData(updateRes)
        } else {
            setData(detail)
        }
        let list: any = []
        for (let item in detail?.heightDropdown) {
            list.push({
                label: item,
                value: detail?.heightDropdown[item]
            })
        }
        setHeightList(list)
        handleColor(detail?.colourway[0], updateRes)

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
    const handleColor = (item: any, data: any) => {
        if (data.colourwaySizes[item.colourwayName]) {
            if (Object.values(data.colourwaySizes[item.colourwayName]).every((size:any)=>size.stock_status !== 'In stock now')) {
                let colorObj = {
                    size: Object.values(data.colourwaySizes[item.colourwayName])[0],
                    ...item
                }
                setselectColorProduct(colorObj)
            } else {
                Object.values(data.colourwaySizes[item.colourwayName])?.map((itemSize: any) => {
                    if (itemSize.stock_status === 'In stock now') {
                        let colorObj = {
                            size: itemSize,
                            ...item
                        }
                        setselectColorProduct(colorObj)
                    }
                })
            }
        }
    }
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
                                        <ColorWay setselectColorProduct={(val: any) => { handleColor(val, data) }} selectColorProduct={selectColorProduct} item={data} />
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
                                        </select>
                                    </div>
                                    <div className='form-field col-md-6 mb-4 mb-md-0'>
                                        <label>What is my height?</label>
                                        <select>
                                            <option selected disabled>Enter your height</option>
                                            {
                                                heightList?.map((item: any, key: number) => <option key={key} value={item.value}>{item.label}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='inStockStatus'>
                                    {
                                        selectColorProduct?.size?.stock_status === "Out of stock" ?
                                            <>
                                                <p>The bike is currently unavailable in you choosen size/colour.</p>
                                                <p>You can still apply for your Cycle to Work voucher now, and use it for any bike at any shop</p>
                                                <button type="button" className="customSiteBtn btn btn-primary px-4">Apply now <i className="fa-solid fa-angle-right"></i></button>
                                            </>
                                            :
                                            <>
                                                <p>{selectColorProduct?.size?.stock_status}</p>
                                                <button type="button" onClick={() => router.push(`/offers/${router?.query?.slug}?color=${selectColorProduct?.colourwayName}${router?.query?.salary?.length ? `&salary=${router?.query?.salary}` : ''}`)} className="customSiteBtn btn btn-primary px-4">Find me great offers <i className="fa-solid fa-angle-right"></i></button>
                                            </>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mt-5'>
                <Calculate detail={{ ...data, colorObj: selectColorProduct }} />
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
                            data?.feature?.map((item: any, key: number) => <div className='singlekeyFeature px-3'>
                                <Image src={item.featureImage[0]} width={409} height={400} alt="img" className='img-fluid' />
                                <h6>{item.featureName}</h6>
                                <p>{item.featureContent}</p>
                            </div>
                            )
                        }
                    </MainSlider>
                </Container>
            </section> : null}
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
                        <MainSlider setting={{ ...settings }}>
                            {
                                detail?.related_products?.map((item: any, key: number) => {
                                    return <div className='items' key={key}>
                                        <div onClick={() => router.push(`/detail/${item.brandName.toLowerCase() + '-' + item.productNameSlug}`)} className='btn-trans w-100 text-start h-100'>
                                            <ProductList item={item} newDesign={true} />
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