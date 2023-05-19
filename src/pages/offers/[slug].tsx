import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import Image from '../../component/image';
import Toggle from '../../component/toggle';

import Applayout from '<prefix>/layout/applayout';
import StoreFinder from '<prefix>/component/storefinder';
import { useEffect, useState } from 'react';
import TransitionPage from '<prefix>/component/transition';
import { useRouter } from 'next/router';
import { priceCalculator } from '<prefix>/common/utilits';
import Calculate from '<prefix>/component/detailOfferCalculator';
export default function MyOffers({ partners, offers }: any) {
    const router = useRouter()
    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    const [isTransitionLoading, setTransitionLoading] = useState(true)
    const [data, setData] = useState<any>({})
    useEffect(() => {
        if (router.query?.salary?.length) {
            setData(priceCalculator(router.query?.salary, [offers])[0])
        } else {
            setData(offers)
        }
        offers?.colourway?.map((items: any) => {
            if (items.colourwayName === router.query?.color) {
                setselectColorProduct(items)
            }
        })
    }, [offers, router])
    useEffect(() => { setTimeout(() => { setTransitionLoading(false) }, 4000) })
    if (isTransitionLoading) {
        return <TransitionPage partners={partners} />
    }
    let price = `${'SRP ' + offers?.currencyProduct?.currency?.currencySymbol + offers?.currencyProduct?.unitSuggestedRetailPrice}`

    return <Applayout className='ebay-howWorks w-100 m-0 pt-0'>
        <div className='pt-5 pb-4'>
            <Container>
                <Button onClick={() => router.back()} className='backPage nav-link'><Image src='/assets/img/ic_left-Stroke.svg' className="img-fluid" /> Back to the bike</Button>
            </Container>
        </div>
        <section className='cycleOfferBanner poreZindex mb-5'>
            <Container>
                <div className='offerBanInner'>
                    <Row className='align-items-end'>
                        <Col md={12} lg={5} className='mb-4 mb-lg-0'>
                            <div className='coloffer'>
                                <Image width={123} height={41} alt='barnd_logo' src={data?.brandLogo} className="img-fluid brandLogo" />
                                <h3 className='mainHeadSub'>{data?.productName}</h3>
                                <div className='productSpeci mb-4'>
                                    <p className='labelText'>Colour:</p>
                                    <p><span className='colorRd' style={{backgroundColor:'#'+selectColorProduct?.colourway_primary_detail?.colourHue}}></span> {selectColorProduct?.colourwayName}</p>
                                </div>
                                <div className='productSpeci'>
                                    <p className='labelText'>Your size:</p>
                                    <p><span className='spcSize'>{offers?.selected_variant?.size}</span> Large</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mb-3 mb-sm-0'>
                            <div className='coloffer prdImg'>
                                <Image width={285} height={198} alt={data?.productName} src={selectColorProduct?.colourwayImage[0]} className="img-fluid" />
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className='coloffer productPriceoffers'>
                                <span>{price}</span>
                                {
                                    data?.context && Object.keys(data?.context)?.length ?
                                        <>
                                            <p>Cycle to Work price </p>
                                            <h4>{data.currencyProduct.currency.currencySymbol + (offers?.currencyProduct?.unitSuggestedRetailPrice - Number(data?.context?.total_savings))}</h4>
                                            <p>{data.currencyProduct.currency.currencySymbol + data?.context?.per_month} per month</p>
                                            <p className='saveOff'>Save {data.currencyProduct.currency.currencySymbol + data?.context?.total_savings} <span className='d-block'>({data?.context?.saving_percentage})</span></p>
                                        </>
                                        :
                                        null
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='schemeCost poreZindex mb-5'>
            <Calculate detail={{ ...data,bicycleAssisted:data?.listing_type, colorObj: {...selectColorProduct,size:{unitSuggestedRetailPrice:offers?.currencyProduct?.unitSuggestedRetailPrice}} }} />
        </section>
        <section className='inStockNow poreZindex pb-5'>
            <Container>
                <div className='heading_section'>
                    <h3 className='mainHeadSub'>In stock now <Image src='/assets/img/ic_instock-now.svg' className="img-fluid" /></h3>
                    <p>We checked with all of our bike shops. Here are your offers. Please remember that stock information is real-time and may change.</p>
                </div>
                <div className='retailStockBx'>
                    <Row>
                        <Col md={8} lg={7}>
                            <div className='retailerDetail'>
                                <div className='retImgCell'>
                                    <Image src='/assets/img/ic_Retailer-Logo.svg' className="img-fluid" />
                                </div>
                                <div className='detailCont'>
                                    <h4>Retailer name</h4>
                                    <p>123 Building, Street, City, County, AB1 2CD</p>
                                    <div className='d-flex flex-wrap bdgeGrp'>
                                        <span className='bedgeCell'>Click and Collect</span>
                                        <span className='bedgeCell'>Cycle to Work Scheme</span>
                                        <span className='bedgeCell'>Finance Available</span>
                                        <span className='bedgeCell'>Free Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} lg={5}>
                            <div className='rightCellStock'>
                                <p>In stock <Image src='/assets/img/ic_instock.svg' className="img-fluid" /></p>
                                <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='retailStockBx'>
                    <Row>
                        <Col md={8} lg={7}>
                            <div className='retailerDetail'>
                                <div className='retImgCell'>
                                    <Image src='/assets/img/ic_Retailer-Logo.svg' className="img-fluid" />
                                </div>
                                <div className='detailCont'>
                                    <h4>Retailer name</h4>
                                    <p>123 Building, Street, City, County, AB1 2CD</p>
                                    <div className='d-flex flex-wrap bdgeGrp'>
                                        <span className='bedgeCell'>Click and Collect</span>
                                        <span className='bedgeCell'>Cycle to Work Scheme</span>
                                        <span className='bedgeCell'>Finance Available</span>
                                        <span className='bedgeCell'>Free Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} lg={5}>
                            <div className='rightCellStock'>
                                <p>In stock <Image src='/assets/img/ic_instock.svg' className="img-fluid" /></p>
                                <button type="button" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='retailStockBx voucherCell'>
                    <Row>
                        <Col md={12}>
                            <div className='retailerDetail'>
                                <div className='detailCont'>
                                    <h4 className='mb-3'>Or get your voucher now, choose your bike later</h4>
                                    <p className='MB-3'>You don’t have to commit to a specific bike or shop right away. Apply for your voucher now. We’ll get it sorted and ready for you to use; for the bike you want, at the shop of your choice.</p>
                                    <button type="button" className="customSiteBtn btn btn-primary px-4">Apply for your voucher <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='mltSection   findlocalBike'>
            <Container>
                <div className='bikeFindMap poreZindex'>
                    <h3>Find your local bike shop</h3>
                    <div className='mapInner'>
                        <StoreFinder />
                    </div>
                </div>
            </Container>
        </section>
    </Applayout>
}
export async function getServerSideProps(context: any) {
    const { query } = context
    const baseURL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(baseURL + `loading?portalDomain=gogeta.dev`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const responseOffers = await fetch(baseURL + `dealers/${query.slug}/?portalDomain=gogeta.dev&colourway=${query.color}&size=${query.size}&model_year=${query.modelYear}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await response.json()
    let dataOffers = await responseOffers.json()
    return {
        props: {
            partners: { ...data },
            offers: { ...dataOffers }
        },
    }
}