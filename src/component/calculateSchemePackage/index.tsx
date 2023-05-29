import { calculatEbikePrice, handleChangeSalary } from "<prefix>/common/utilits";
import Image from "next/image";
import { useEffect, useState,ChangeEvent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MainHead } from "../main-head";

export default function CalculateSchemePackage(){
    const [state, setState] = useState({
        bike_val: 1500,
        accessories_val: 100,
        salary: 30000,
        type:'ebike'
    })
    const [context,setContext] = useState<any>({})
    useEffect(()=>{
        handleCycleCalculate({...state})
    },[])
    const handleCycleCalculate = ({ bike_val = 0, accessories_val = 0, salary = 0, type = '' }) => {
        let bike_price = Number(bike_val) + Number(accessories_val)
        let val = calculatEbikePrice(bike_price, +salary, type)
        setContext(val)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const data ={
            ...state,
            [name]: value
        }
        setState(data)
        handleCycleCalculate({...data})
    }
    return<section className='works-calculate'>
    <Container>
        <div className='pt-1 pb-3'>
            <MainHead title="Calculate your Cycle Scheme package" />
        </div>
        <section className='cycling-saving mb-5'>
            <div className='cycling-saving'>
                <div className='cycling-saving-calclulate'>
                    <Row className='align-items-start align-items-md-center'>
                        <Col xs={6} md={12} lg={6} className='mb-md-4 mb-lg-0'>
                            <div className='d-flex flex-wrap align-items-center align-items-sm-start'>
                                <div className='calclulate-form pe-0 pe-lg-4'>
                                    <label>Bike value?</label>
                                    <div className='d-flex align-items-center form-price-input'>
                                        <div className='currency'>£</div>
                                        <input type='text' className='form-input' value={state.bike_val} name='bike_val' onChange={onChange}/>
                                    </div>
                                </div>
                                <div className='calclulate-form pe-0 pe-lg-4'>
                                    <label>Accessories value?</label>
                                    <div className='d-flex align-items-center form-price-input'>
                                        <div className='currency'>£</div>
                                        <input type='text' className='form-input' value={state.accessories_val} name='accessories_val' onChange={onChange}/>
                                    </div>
                                </div>
                                <div className='calclulate-form pe-0 pe-lg-4'>
                                    <label>Your annual salary?</label>
                                    <div className='d-flex align-items-center form-price-input'>
                                        <div className='currency'>£</div>
                                        <input type='text' className='form-input' value={state.salary} name='salary' onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={12} lg={6} className='d-flex justify-content-start justify-content-lg-end'>
                            <div className='calclulate-form pe-0 pe-md-4'>
                                <label>Bike type?</label>
                                <ul className='flex-wrap d-block d-md-flex'>
                                    <li className='mb-3 mb-md-0'>
                                        <input type="radio" className='d-none' id='transport' checked={state.type === 'ebike'} value='ebike' name='type' onChange={onChange}/>
                                        <label htmlFor='transport'>
                                            E-bike / Pedelec
                                        </label>
                                    </li>
                                    <li className='mb-3 mb-md-0'>
                                        <input type="radio" className='d-none' id='transportCargo' checked={state.type === 'Cargo'} value='Cargo' name='type' onChange={onChange}/>
                                        <label htmlFor='transportCargo'>
                                            Cargo / E-cargo bike
                                        </label>
                                    </li>
                                    <li className='mb-3 mb-md-0'>
                                        <input type="radio" className='d-none' id='transportOther' checked={state.type === 'other'} value='other' name='type' onChange={onChange}/>
                                        <label htmlFor='transportOther'>
                                            Other
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='cycling-saving-list'>
                {Object.keys(context)?.length ? <Row>
                        <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                            <div className='list listpack'>
                                <Image width={48} alt='ico' height={48} src="/assets/img/Money_cashier_price_tag_euro.svg" className="mb-4" />
                                <p>Total package value</p>
                                <h3>£{handleChangeSalary(context?.total_savings)}</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                            <div className='list listOnepay'>
                                <Image width={48} alt='ico' height={48} src="/assets/img/money_currency_euro_circle.svg" className="mb-4" />
                                <p>One-off initial payment</p>
                                <h3>£{handleChangeSalary(context?.initial_payment)}</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                            <div className='list listMonthPay'>
                                <Image width={48} alt='ico' height={48} src="/assets/img/interface_calendar_mark.svg" className="mb-4" />
                                <p>Your monthly payments</p>
                                <h3>£{handleChangeSalary(context?.per_month)}</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={6} lg={3} className='mb-4 mb-sm-3'>
                            <div className='list listEffSav'>
                                <Image width={48} alt='ico' height={48} src="/assets/img/shopping_store_discount_percent_bag.svg" className="mb-4" />
                                <p>Effective saving</p>
                                <h3>{context.saving_percentage}</h3>
                            </div>
                        </Col>
                    </Row>:null}
                </div>
            </div>
        </section>
    </Container>
</section>
}