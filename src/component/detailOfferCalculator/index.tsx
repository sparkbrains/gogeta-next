import { onKeyPress, submitCalculator } from '<prefix>/common/utilits';
import { useRouter } from 'next/router';
import { useState, ChangeEvent, useEffect } from 'react';
import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import Toggle from '../toggle';
export default function Calculate({ detail,handleCalculator }: any) {
    const router = useRouter()
    const [calculateRes, setCalculateRes] = useState<any>({})
    const [calculateState, setcalculateState] = useState({
        cost_bike: 0,
        accessories_val: router?.query?.accessories || 0,
        total_val: 0,
        initial_payment: 0,
        salary: router?.query?.salary || 30000,
        total_salary_amt: 0,
        monthly_salary_amt: 0,
        total_savings_annual: 0,
        salary_period: 12,
        categories: '',
        bicycleAssisted: ''
    })
    useEffect(() => {
        const { colorObj, context } = detail
        const stateParam = {
            ...calculateState,
            cost_bike: colorObj.size?.unitSuggestedRetailPrice,
            accessories_val:calculateState.accessories_val,
            total_val: Number(colorObj.size?.unitSuggestedRetailPrice) + (Number(router?.query?.accessories) || +calculateState.accessories_val),
            salary: calculateState.salary,
            monthly_salary_amt: context?.per_month,
            total_salary_amt: context?.limit,
            initial_payment: context?.initial_payment,
            categories: detail?.categories,
            bicycleAssisted: detail?.bicycleAssisted,
            total_savings_annual: context?.total_savings_annual
        }
        let res: any = submitCalculator(stateParam)
        setcalculateState({
            ...stateParam,
            monthly_salary_amt: res?.per_month,
            total_salary_amt: res?.limit,
            initial_payment: res?.initial_payment,
            total_savings_annual: res?.total_savings_annual
        })
        setCalculateRes(res)
    }, [detail])
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        let stateParam = {
            ...calculateState,
            [name]: value
        }
        if (name === 'cost_bike' || name === 'accessories_val') {
            stateParam = {
                ...stateParam,
                total_val: Number(stateParam.cost_bike) + Number(stateParam.accessories_val)
            }
        }
        handleCalculator && handleCalculator({...stateParam})
        setcalculateState(stateParam)

    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        const stateRes =submitCalculator(calculateState)
        setCalculateRes(stateRes)
        handleCalculator && handleCalculator({...stateRes,...calculateState})
    }
    return <section className='schemeCost poreZindex mb-5'>
        <Container>
            <div className='toggleSchemeCost'>
                <Toggle title='Cycle to Work Scheme costs & savings' open={router?.query?.salary?.length}>
                    <div className='workScheme'>
                        <div className='scmBodyamin'>
                            <Row>
                                <Col md={7} lg={8}>
                                    <Form onSubmit={onSubmit}>
                                        <div className='schemeForm'>
                                            <div className='inline-field'>
                                                <label>Cost of bike:</label>
                                                <div className='bkrig'>
                                                    <input type='text' name='cost_bike' onChange={onChange} onKeyPress={onKeyPress} value={calculateState.cost_bike} />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Cost of accessories:</label>
                                                <div className='bkrig'>
                                                    <input type='text' name='accessories_val' onChange={onChange} onKeyPress={onKeyPress} value={calculateState.accessories_val} />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Total bike + accessories:</label>
                                                <div className='bkrig'>
                                                    <input type='text' name='total_val' value={calculateState.total_val} disabled />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Initial one-off payment:</label>
                                                <div className='bkrig'>
                                                    <input type='text' value={calculateState.initial_payment} disabled />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Your salary before tax:</label>
                                                <div className='bkrig'>
                                                    <input type='text' name='salary' onChange={onChange} value={calculateState.salary} onKeyPress={onKeyPress} />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Salary period:</label>
                                                <div className='bkrig'>
                                                    <select defaultValue={calculateState.salary_period} disabled>
                                                        <option value={12}>12 months</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Total salary sacrifice:</label>
                                                <div className='bkrig'>
                                                    <input type='text' value={calculateState.total_savings_annual} disabled />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label>Monthly salary sacrifice:</label>
                                                <div className='bkrig'>
                                                    <input type='text' value={calculateState.monthly_salary_amt} disabled />
                                                </div>
                                            </div>
                                            <div className='inline-field'>
                                                <label></label>
                                                <div className='bkrig'>
                                                    <button type="submit" className="customSiteBtn btn btn-primary px-4">Recalculate savings <i className="fa-solid fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </Col>
                                <Col md={5} lg={4}>
                                    <div className='scmRight'>
                                        <div className='singleSaving'>
                                            <img src="/assets/img/ic_saving-kit.svg" alt="img" className='img-fluid' />
                                            <div className='savingSrc'>
                                                <div className='bxts'>
                                                    <p>Income tax saving</p>
                                                    <h4>{detail?.currencyProduct?.currency?.currencySymbol+calculateRes?.incometax}</h4>
                                                </div>
                                                <div className='bxts'>
                                                    <p>Employee PRSI saving</p>
                                                    <h4>{detail?.currencyProduct?.currency?.currencySymbol+calculateRes?.prsi}</h4>
                                                </div>
                                                <div className='bxts'>
                                                    <p>Employee USC saving</p>
                                                    <h4>{detail?.currencyProduct?.currency?.currencySymbol+calculateRes?.usc}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='singleSaving blueBx mt-3'>
                                            <img src="/assets/img/ic_saving-kit.svg" alt="img" className='img-fluid' />
                                            <div className='savingSrc'>
                                                <div className='bxts'>
                                                    <h5>Total savings</h5>
                                                    <h2>{detail?.currencyProduct?.currency?.currencySymbol+calculateRes?.total_savings_annual}</h2>
                                                </div>
                                                <div className='bxts'>
                                                    <h5>Total savings</h5>
                                                    <h2>{calculateRes?.saving_percentage}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='notScm'>
                                            Our savings calculator gives an indication of your approximate savings. Your individual circumstances may cause this to differ slightly.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Toggle>
            </div>
        </Container>
    </section>
}