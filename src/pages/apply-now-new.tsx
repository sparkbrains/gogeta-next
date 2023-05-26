import Input from "<prefix>/common/input";
import { InputDropDownList, InputSelectDrop } from "<prefix>/common/inputSelectDrop";
import { FormC } from "<prefix>/common/validate";
import { MainHead } from "<prefix>/component/main-head";
import Toggle from "<prefix>/component/toggle";
import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { applyCalculator, onKeyPress } from '../common/utilits'
export default function ApplyNow() {
    const router = useRouter()
    const [state, setState] = useState<any>({
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
        // if (router.query?.params?.length) {
        //     const obj: any = JSON.parse(window.atob(`${router.query.params}`))
        //     let valPrice = applyCalculator(obj.bikeValue, +obj.annualSalary, obj.bikeType)
        //     let val = { ...state, ...obj, accessoriesValue: obj.accessoriesValue || 0, monthlyPayment: valPrice.per_month, initial_payment: valPrice.initial_payment }
        //     setState(val)
        // }
    }, [router])
    const handleCycleCalculate = (param: any) => {
        // const { bikeValue = 0, accessoriesValue = 0, annualSalary = 0, bikeType = '' } = param
        // let bike_price = Number(bikeValue) + Number(accessoriesValue)
        // let valPrice = applyCalculator(bike_price, +annualSalary, bikeType)
        // let val = { ...param, totalPackageValue: bike_price }
        // if (annualSalary?.length) {
        //     val = { ...val}
        // } else {
        //     val = { ...val, monthlyPayment: '', initial_payment: '' }
        // }
        // setState(val)
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let stateParam: any = { ...state }
        delete stateParam.initial_payment
        delete stateParam.total_savings
        delete stateParam.total_savings_annual
        let obj = JSON.stringify(stateParam)
        let encoded = window.btoa(obj);
        window.location.href = `https://ebay.gogeta.bike/hr-portal/sal-sac-form?params=${encoded}`
    }
    const { errors, handleSubmit } = FormC({
        values: { bike_value: state.bikeValue, accessories_value: state.accessoriesValue, annual_salary: state.annualSalary },
        onSubmit
    })
    return <Applayout className='applyNow pt-0'>
        <Container>
            <ul className="applyNow-steps">
                <li>
                    <Image src='/assets/apply-steps/ic_package.svg' width={48} height={48} alt='Package' />
                    <p>Package</p>
                </li>
                <li>
                    <Image src='/assets/apply-steps/personal_details.svg' width={48} height={48} alt='Personal details' />
                    <p>Personal details</p>
                </li>
                <li>
                    <Image src='/assets/apply-steps/salary_sacrifice.svg' width={48} height={48} alt='Salary sacrifice' />
                    <p>Salary sacrifice</p>
                </li>
                <li>
                    <Image src='/assets/apply-steps/salary_sacrifice.svg' width={48} height={48} alt='Hire agreement' />
                    <p>Hire agreement</p>
                </li>
                <li>
                    <Image src='/assets/apply-steps/confirmation.svg' width={48} height={48} alt='Confirmation' />
                    <p>Confirmation</p>
                </li>
            </ul>
            <div className="pb-5">
                <MainHead title='Package details' />
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="toggle-card mb-5">
                    <div className="p-5 toggle-body">
                        <h4 className="head_apply"> <Image src='/assets/calculation/shopping_cart.svg' width={48} height={48} alt='cart' /> Your package</h4>
                        <Row>
                            <Col xs={12} sm={6}>
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
                                            <span className="pb-2">Total bike + accessories</span>
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
                                            <span className="pb-2">Your salary before tax:</span>
                                        </Col>
                                        <Col xs={12} sm={8}>
                                            <Input errorText={errors.annual_salary} type="text" className="form-input" name="annualSalary" value={state.annualSalary} onKeyPress={onKeyPress} onChange={onChange} />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="calclulate-form pe-0 pe-lg-4">
                                    <Row>
                                        <Col xs={12} sm={4}>
                                            <span className="pb-2">Pay frequency:</span>
                                        </Col>
                                        <Col xs={12} sm={8}>
                                            <InputSelectDrop
                                                placeholder='Select an option'
                                                defaultValue={state.frequency}
                                                selectParam={'value'}
                                                className='box-select-calclulate'
                                                name={'frequency'}
                                                onChangeSelect={onChange}
                                                searchCustom={true}
                                                data={[
                                                    { value: '12', label: 'Monthly' },
                                                    { value: '13', label: '4 weekly' },
                                                    { value: '52', label: 'Weekly' },
                                                    { value: '26', label: 'Fortnightly' },
                                                ]} />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="calclulate-form pe-0 pe-lg-4">
                                    <Row>
                                        <Col xs={12} sm={4}>
                                            <span className="pb-2">Salary sacrifice repayment term:</span>
                                        </Col>
                                        <Col xs={12} sm={8}>
                                            <InputSelectDrop
                                                placeholder='Select an option'
                                                defaultValue={state.frequency}
                                                className='box-select-calclulate'
                                                selectParam={'value'}
                                                name={'frequency'}
                                                onChangeSelect={onChange}
                                                searchCustom={true}
                                                data={[
                                                    { value: '12', label: '12' },
                                                    { value: '18', label: '18' },
                                                    { value: '24', label: '24' },
                                                ]} />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="price-calculate">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p>Regular gross salary sacrifice</p>
                                        <Image src='/assets/calculation/calendar_date_month.svg' width={36} height={36} alt='cal' />
                                    </div>
                                    <h4>£43.50</h4>
                                </div>
                                <div className="price-calculate">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p>Net regular amount</p>
                                        <Image src='/assets/calculation/pound.svg' width={36} height={36} alt='cal' />
                                    </div>
                                    <h4>£23.50</h4>
                                </div>
                                <div className="price-calculate secondBlue">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p>Total savings</p>
                                        <Image src='/assets/calculation/bag_GBP_pound.svg' width={36} height={36} alt='cal' />
                                    </div>
                                    <h4>£1,500.00</h4>
                                </div>
                                <div className="price-calculate green">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p>Total savings</p>
                                        <Image src='/assets/calculation/percent.svg' width={36} height={36} alt='cal' />
                                    </div>
                                    <h4>42%</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="d-flex justify-content-end mb-5">
                    <button type="submit" className="customSiteBtn btn btn-primary px-4">Submit <i className="fa-solid fa-angle-right"></i></button>
                </div>
            </Form>
        </Container>
    </Applayout>
}