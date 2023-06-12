import { Button, Container, Row, Col } from 'react-bootstrap';
import Applayout from '<prefix>/layout/applayout';
import StoreFinder from '<prefix>/component/storefinder';
import { useEffect, useState } from 'react';
import TransitionPage from '<prefix>/component/transition';
import { useRouter } from 'next/router';
import { applyCalculator, handleChangeSalary, priceCalculator } from '<prefix>/common/utilits';
import Calculate from '<prefix>/component/detailOfferCalculator';
import DealerList from '<prefix>/component/dealerList';
import Image from 'next/image';
import { withContext } from '<prefix>/context/appContext';
import UkFreesiteCalculate from '<prefix>/component/home/ukFreesiteCalculate';
let size: any = {
    s: 'Small',
    l: 'Large',
    m: 'Medium',
    xl: 'Extra Large',
}
function MyOffers({ partners, offers, context }: any) {
    const { profile, host } = context
    const router = useRouter()
    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    const [calculateRes, setCalculateRes] = useState<any>({})
    const [isTransitionLoading, setTransitionLoading] = useState(true)
    const [data, setData] = useState<any>({})
    useEffect(() => {
        if (router.query?.salary?.length) {
            if (host?.includes('uk')) {
                let dealers:any = []
                offers?.dealersList?.dealers_in_stock?.map((items:any)=>{
                    let context = applyCalculator({
                        SRP_val: items?.dealer_price?.dealerPrice,
                        bikeValue: items?.dealer_price?.dealerPrice,
                        accessoriesValue: 0,
                        annualSalary: router?.query?.salary || 30000,
                        frequency: 12,
                        sacrifice_repayment: 12,
                        totalPackageValue: items?.dealer_price?.dealerPrice,
                    })
                    dealers.push({
                        ...items,
                        context:context
                    })
                })
                setData({
                    ...offers,
                    dealersList:{
                        ...offers.dealersList,
                        dealers_in_stock:dealers
                    }
                })
            } else {
                setData(priceCalculator(router.query?.salary, [offers], profile.currencyCode)[0])
            }
        } else {
            setData(offers)
        }
        offers?.colourway?.map((items: any) => {
            if (items.colourwayName === router.query?.color) {
                setselectColorProduct(items)
            }
        })
    }, [offers, router, host])
    useEffect(() => { setTimeout(() => { setTransitionLoading(false) }, 4000) })
    if (isTransitionLoading) {
        return <TransitionPage partners={partners} />
    }
    const handleApply = (item: any = {}) => {
        let obj: any = host?.includes('uk')?{
            bikeValue: item?.dealer_price?.dealerPrice,
            accessoriesValue: router?.query?.accessories || 0 ,
            annualSalary: router?.query?.salary || 30000,
            sacrifice_repayment:12,
            frequency:12,
        }:{
            bikeValue: data?.currencyProduct?.unitSuggestedRetailPrice,
            accessoriesValue: calculateRes?.accessories_val || router?.query?.accessories,
            annualSalary: calculateRes?.salary || router?.query?.salary,
            salaryFrequency: 'monthly',
            monthlyPayment: data?.per_month,
            bikeType: data?.listing_type === "ebikes" ? data.categories.toLowerCase()?.includes('cargo') ? 'cargo/e-cargo bike' : 'ebike/pedelec' : 'other',
            productSKU: data.product_sku,
            retailerEmail: data.retailer_email,
            productTitle: data.productName,
            dealerEmail: item?.dealer_email_address
        }
        obj = {
            ...obj,
            showBack:true,
            totalPackageValue: Number(obj.bikeValue) + (Number(obj.accessoriesValue) || 0)
        }
        if (!item) {
            delete obj.dealerEmail
        }
        let encoded = window.btoa(JSON.stringify(obj));
        if(item.context?.C2W_price){
            router.push((router.query.companySlug ?'/'+router.query.companySlug:'') + `/apply-now?params=${encoded}`)
        }else{
            window.open(item.utm_url, '_blank');
        }
    }
    const formSubmit = (val: any) => { }
    let price = `${'SRP ' + offers?.currencyProduct?.currency?.currencySymbol + offers?.currencyProduct?.unitSuggestedRetailPrice}`
    // let calObj:any = {
    //     SRP_val: selectColorProduct?.size?.unitSuggestedRetailPrice,
    //     bikeValue: Math.round(selectColorProduct?.size?.offer_price?selectColorProduct?.size?.offer_price:selectColorProduct?.size?.unitSuggestedRetailPrice),
    // }
    // calObj = router?.query?.salary ? {
    //     ...calObj,
    //     annualSalary: router?.query?.salary,
    //     totalPackageValue: selectColorProduct?.size?.unitSuggestedRetailPrice,
    //     frequency: 12, salarySacrificeTerm: 12
    // } : calObj
    return <Applayout className='ebay-howWorks w-100 m-0 pt-0'>
        <div className='pt-5 pb-4'>
            <Container>
                <Button onClick={() => router.back()} className='backPage nav-link'><Image width={7} height={12} src='/assets/img/ic_left-Stroke.svg' className="img-fluid" alt='back' /> Back to the bike</Button>
            </Container>
        </div>
        <section className='cycleOfferBanner poreZindex mb-5'>
            <Container>
                <div className='offerBanInner'>
                    <Row className='align-items-end'>
                        <Col md={12} lg={host.includes('uk') ? 7 : 5} className='mb-4 mb-lg-0'>
                            <div className='coloffer'>
                                <Image width={123} height={41} alt='barnd_logo' src={data?.brandLogo} className="img-fluid brandLogo" />
                                <h3 className='mainHeadSub'>{data?.productName}</h3>
                                <div className='productSpeci mb-4'>
                                    <p className='labelText'>Colour:</p>
                                    <p><span className='colorRd' style={{ backgroundColor: '#' + selectColorProduct?.colourway_primary_detail?.colourHue }}></span> {selectColorProduct?.colourwayName}</p>
                                </div>
                                <div className='productSpeci'>
                                    <p className='labelText'>Your size:</p>
                                    <p><span className='spcSize'>{offers?.selected_variant?.size}</span> {size[offers?.selected_variant?.size?.toLowerCase()]}</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={host.includes('uk') ? 5 : 4} className='mb-3 mb-sm-0'>
                            <div className='coloffer prdImg'>
                                <Image width={285} height={198} alt={data?.productName} src={selectColorProduct?.colourwayImage[0]} className="img-fluid" />
                            </div>
                        </Col>
                        {
                            host.includes('uk') ?
                                null
                                :
                                <Col sm={6} lg={3}>
                                    <div className='coloffer productPriceDetail'>
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
                        }

                    </Row>
                </div>
            </Container>
        </section>
        {
            host.includes('uk') ?
                null
                // <div className='applyNow pt-0'>
                //     <Container>
                //         <UkFreesiteCalculate data={{}} submit={true} formSubmit={formSubmit} />
                //     </Container>
                // </div> 
                :
                <section className='schemeCost poreZindex mb-5'>
                    <Calculate handleCalculator={(val: any) => setCalculateRes(val)} detail={{ ...data, bicycleAssisted: data?.listing_type, colorObj: { ...selectColorProduct, size: { unitSuggestedRetailPrice: offers?.currencyProduct?.unitSuggestedRetailPrice } } }} />
                </section>
        }
        <section className='inStockNow poreZindex pb-5'>
            <Container>
                <div className='heading_section'>
                    <h3 className='mainHeadSub'>In stock now <Image width={39} height={44} alt='ok' src='/assets/img/ic_instock-now.svg' className="img-fluid" /></h3>
                    <p>{host.includes('uk') ?'The shops below all currently have stock of the bike you’re looking for. Please remember that stock information is real-time and may change.' :'We checked with all of our bike shops. Here are your offers. Please remember that stock information is real-time and may change.'}</p>
                </div>

                {
                    data?.dealersList?.dealers_in_stock?.map((items: any, key: number) => {
                        return <DealerList profile={profile} items={items} key={key} handleApply={handleApply} host={host}/>
                    })
                }
                {
                    host.includes('uk') ?
                        null
                        :
                        <div className='retailStockBx voucherCell'>
                            <Row>
                                <Col md={12}>
                                    <div className='retailerDetail'>
                                        <div className='detailCont'>
                                            <h4 className='mb-3'>Or get your voucher now, choose your bike later</h4>
                                            <p className='MB-3'>You don’t have to commit to a specific bike or shop right away. Apply for your voucher now. We’ll get it sorted and ready for you to use; for the bike you want, at the shop of your choice.</p>
                                            <button onClick={handleApply} type="button" className="customSiteBtn btn btn-primary px-4">Apply for your voucher <i className="fa-solid fa-angle-right"></i></button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                }
            </Container>
        </section>
        <section className='mltSection findlocalBike'>
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
    let host = context.req.headers.host
    host = host === 'gogeta.dev' ? host : null
    const response = await fetch(baseURL + `loading?portalDomain=gogeta.dev`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const responseOffers = await fetch(baseURL + `dealers/${query.slug}/?${host ? `?portalDomain=${host}` : ''}&colourway=${query.color}&size=${query.size}&model_year=${query.modelYear}`, {
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
export default withContext(MyOffers)