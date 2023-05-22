import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function DealerList({ items }: any) {
    return <div className='retailStockBx'>
        <Row>
            <Col md={8} lg={7}>
                <div className='retailerDetail'>
                    <div className='retImgCell'>
                        <Image width={130} height={130} alt='name' src='/assets/img/ic_Retailer-Logo.svg' className="img-fluid" />
                    </div>
                    <div className='detailCont'>
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
                </div>
            </Col>
            <Col md={4} lg={5}>
                <div className='rightCellStock'>
                    <p>In stock <Image width={24} height={24} alt='name' src='/assets/img/ic_instock.svg' className="img-fluid" /></p>
                    <button type="button" className="customSiteBtn btn btn-primary px-4">Choose this bike shop<i className="fa-solid fa-angle-right"></i></button>
                </div>
            </Col>
        </Row>
    </div>
}