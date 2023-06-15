import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function DealerList({ items,profile, handleApply, host = '' }: any) {
    return <div className='retailStockBx'>
        <Row>
            <Col md={8} lg={8}>
                <div className='retailerDetail'>
                    {!host.includes('uk') ? <div className='retImgCell'>
                        <Image width={130} height={130} alt='name' src='/assets/img/ic_Retailer-Logo.svg' className="img-fluid" />
                    </div> : null}
                    <div className={`detailCont ${host.includes('uk') ? 'detailContRetail' : ''}`}>
                        <h4>{items.dealerName}</h4>
                        <p>{items.dealerAddress}</p>
                        <div className='d-flex flex-wrap bdgeGrp'>
                            {
                                items?.capabilityType?.map((capability: any, index: number) => {
                                    return <span className='bedgeCell' key={index}>{capability?.capabilityTypeName}</span>
                                })
                            }
                        </div>
                    </div>
                    {host.includes('uk') ? <div className={`offerPrice ${!items.context?.C2W_price ? 'offerPriceC2W' : ''}`}>
                        {items.dealer_price?.saving ? <s>SRP {profile?.currencySymbol}{items.dealer_price.dealerPrice + items.dealer_price?.saving}</s> : <p>SRP £{items.dealer_price.dealerPrice}</p>}
                        {items.dealer_price?.saving ? <p><b>go</b>geta’s best price {profile?.currencySymbol}{items.dealer_price.dealerPrice}</p> : null}
                        {items.context?.C2W_price ? <><p className="primary-color">Salary sacrifice price {profile?.currencySymbol}{items.context?.C2W_price}</p>
                            <p>Just 12 monthly payments of {profile?.currencySymbol}{items?.context?.regular_gross} from your gross salary</p></> : null}
                    </div> : null}
                </div>
            </Col>
            <Col md={4} lg={4}>
                <div className='rightCellStock'>
                    <p className={host.includes('uk') ? "text-uppercase" : ''}>In stock <Image width={24} height={24} alt='name' src='/assets/img/ic_instock.svg' className="img-fluid" /></p>
                    <button type="button" onClick={() => handleApply(items)} className="customSiteBtn btn btn-primary px-4">{host.includes('uk') ? !items.context?.C2W_price ? 'View offer' : 'Apply for your voucher' : 'Choose this bike shop'} <i className="fa-solid fa-angle-right"></i></button>
                </div>
            </Col>
        </Row>
    </div>
}