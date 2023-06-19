import Input from "<prefix>/common/input";
import { FormC } from "<prefix>/common/validate";
import { MainHead } from "<prefix>/component/main-head";
import Toggle from "<prefix>/component/toggle";
import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { calculatEbikePrice, onKeyPress } from '../../common/utilits'
export default function ApplyNowEbay() {
    const router = useRouter()
    const [state, setState] = useState({
        bikeValue: '',
        accessoriesValue: '',
        annualSalary: '',
        monthlyPayment: '',
        bikeType: 'ebike/pedelec',
        totalPackageValue: '',
        initial_payment: ''
    })
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        const param = {
            ...state,
            [name]: value
        }
        handleCycleCalculate(param)
    }
    useEffect(() => {
        if (router.query?.params?.length) {
            const obj: any = JSON.parse(window.atob(`${router.query.params}`))
            let valPrice = calculatEbikePrice(obj.bikeValue, +obj.annualSalary, obj.bikeType)
            let val = { ...state, ...obj, accessoriesValue: obj.accessoriesValue || 0, monthlyPayment: valPrice.per_month, initial_payment: valPrice.initial_payment }
            setState(val)
        }
    }, [router])
    const handleCycleCalculate = (param: any) => {
        const { bikeValue = 0, accessoriesValue = 0, annualSalary = 0, bikeType = '' } = param
        let bike_price = Number(bikeValue) + Number(accessoriesValue)
        let valPrice = calculatEbikePrice(bike_price, +annualSalary, bikeType)
        let val = { ...param, totalPackageValue: bike_price }
        if (annualSalary?.length) {
            val = { ...val, monthlyPayment: valPrice.per_month, initial_payment: valPrice.initial_payment }
        } else {
            val = { ...val, monthlyPayment: '', initial_payment: '' }
        }
        setState(val)
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let stateParam: any = { ...state }
        delete stateParam.initial_payment
        let obj = JSON.stringify(stateParam)
        let encoded = window.btoa(obj);
        window.location.href = `https://ebay.gogeta.bike/portal/sal-sac-form?params=${encoded}`
    }
    const { errors, handleSubmit } = FormC({
        values: { bike_value: state.bikeValue, accessories_value: state.accessoriesValue, annual_salary: state.annualSalary },
        onSubmit
    })
    return <>
            <div className="text-center applyNow-des">
                <MainHead title='Apply for your Cycle to Work voucher now' />
                <p className="pt-3">We make it easy to find your perfect match, in stock at the best retailers across Ireland. But if you’d prefer to simply head in to your local bike shop with a voucher, that’s easy too!</p>
                <p className="pt-2 pb-5">Just fill out the form below and we’ll get things rolling. We’ll ask your employer to set up the salary sacrifice arrangement, and then we’ll send you a voucher that you can redeem in any of your local bike shops, for whatever bike you choose.</p>
                <Image src='/go/ctw-bike-image.png' width={841} height={376} alt='Bikes' />
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="toggle-card mb-5">
                    <div className="p-5 toggle-body">
                        <p className="pb-4">Please select how much you would like to request for your gogeta Cycle Scheme package</p>
                        <div className="calclulate-form ">
                            <span className="pb-2">Bike type?</span>
                            <ul className='flex-wrap d-block d-md-flex'>
                                <li className='mb-3 mb-md-0'>
                                    <input type="radio" className='d-none' id='transport' checked={state.bikeType === 'ebike/pedelec'} value='ebike/pedelec' name='bikeType' onChange={onChange} />
                                    <label htmlFor='transport'>
                                        E-bike / Pedelec
                                    </label>
                                </li>
                                <li className='mb-3 mb-md-0'>
                                    <input type="radio" className='d-none' id='transportCargo' checked={state.bikeType === 'cargo/e-cargo bike'} value='cargo/e-cargo bike' name='bikeType' onChange={onChange} />
                                    <label htmlFor='transportCargo'>
                                        Cargo / E-cargo bike
                                    </label>
                                </li>
                                <li className='mb-3 mb-md-0'>
                                    <input type="radio" className='d-none' id='transportOther' checked={state.bikeType === 'other'} value='other' name='bikeType' onChange={onChange} />
                                    <label htmlFor='transportOther'>
                                        Other
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="calclulate-form pe-0 pe-lg-4">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <span className="pb-2">Cost of bike:</span>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <Input errorText={errors.bike_value} type="text" className="form-input" name="bikeValue" value={state.bikeValue} onKeyPress={onKeyPress} onChange={onChange} />
                                </Col>
                            </Row>
                        </div>
                        <div className="calclulate-form pe-0 pe-lg-4">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <span className="pb-2">Cost of accessories:</span>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <Input errorText={errors.accessories_value} type="text" className="form-input" name="accessoriesValue" value={state.accessoriesValue} onKeyPress={onKeyPress} onChange={onChange} />
                                </Col>
                            </Row>
                        </div>
                        <div className="calclulate-form pe-0 pe-lg-4">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <span className="pb-2">What is your annual salary?</span>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <Input errorText={errors.annual_salary} type="text" className="form-input" name="annualSalary" value={state.annualSalary} onKeyPress={onKeyPress} onChange={onChange} />
                                </Col>
                            </Row>
                        </div>
                        <div className="calclulate-form pe-0 pe-lg-4">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <span className="pb-2">Total Package Value</span>
                                </Col>
                                <Col xs={12} sm={8}>

                                    <div className="d-flex align-items-center form-price-input">
                                        <div className="currency">£</div>
                                        <input type="text" className="form-input" value={state.totalPackageValue} disabled />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="calclulate-form pe-0 pe-lg-4">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <span className="pb-2">Your monthly payments</span>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className="d-flex align-items-center form-price-input">
                                        <div className="currency">£</div>
                                        <input type="text" className="form-input" disabled value={state.monthlyPayment} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="calclulate-form pe-0 pe-lg-4">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <span className="pb-2">One-off initial payment of:</span>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className="d-flex align-items-center form-price-input">
                                        <div className="currency">£</div>
                                        <input type="text" className="form-input" disabled value={state.initial_payment} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="pb-4 pt-4">
                            <p>Have you forgotten anything?</p>
                            <p>A good lock is important - we recommend spending 10% of the value of bike.</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mb-5">
                <button type="submit" className="customSiteBtn btn btn-primary px-4">Submit <i className="fa-solid fa-angle-right"></i></button>
                </div>
            </Form>
        </>
}