import Error from "<prefix>/common/error";
import Input from "<prefix>/common/input";
import { InputSelectDrop } from "<prefix>/common/inputSelectDrop";
import { handleChangeSalary, onKeyPress } from "<prefix>/common/utilits";
import { withContext } from "<prefix>/context/appContext";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ToolTip from "../info";
import { MainHeadSub } from "../main-head/sub-main";

function UKCalculator({ errors, state, onChange, host,srp }: any) {
    return <Row>
        <Col xs={12} sm={6}>
            {/* {srp ? <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 align-items-start">SRP:
                        </span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.SRP_val} maxLength={10} type="text" className="form-input" name="SRP_val" value={state.SRP_val} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>:null} */}
            {srp ? <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 d-block"><ToolTip position='right' className='ms-1 calInfo' des='Please enter an amount for accessories (such as a lock, helmet and lights). We suggest 10% of the voucher amount.'/> Additional accessories: </span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.accessories_value} maxLength={10} type="text" className="form-input" name="accessoriesValue" value={state.accessoriesValue} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>:<div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 align-items-start"><ToolTip position='right' className='me-1 calInfo' des='We recommend spending around 10% of the voucher amount on items like a good lock, helmet and lights. Like the bike, you get the salary sacrifice tax savings, and pay for them over 12 months.'/> Bike and accessories total: </span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.bike_value} maxLength={10} type="text" className="form-input" name="bikeValue" value={state.bikeValue} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>}
            
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 align-items-start"><ToolTip position='right' className='me-1 calInfo' des='<p>The platform fee of 4% allows gogeta to maintain our marketplace, finding you the widest range of bikes and the best deals, as well as running our support teams.</p><p>The platform fee is applied to your salary sacrifice amount, which means the net effective cost is just 2.3% for a higher rate taxpayer and 2.7% for a basic rate taxpayer.</p>'/> Platform fee: </span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input maxLength={10} type="text" className="form-input" name="bikeValue" value={state.gogeta_Fee} disabled onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            
            {/* <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 d-block">Total bike + accessories <ToolTip position='right' className='ms-1' des='This is the amount of the Cycle to Work voucher you will get. It represents the amount of the bike (including available discounts) and accessories.'/></span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <div className="d-flex align-items-center form-price-input">
                            <div className="currency">£</div>
                            <input type="text" className="form-input" maxLength={10} value={state.totalPackageValue} disabled />
                        </div>
                        <div className="helpText">The maximum voucher value you can apply for is £{handleChangeSalary(state.voucherLimit)}</div>
                    </Col>
                </Row>
            </div> */}
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 align-items-start"><ToolTip position='right' className='me-1 calInfo' des='The total value of the bike, accessories and platform fee.You will sacrifice this amount over your gross (pre-tax) salary, giving you a substantial tax saving.'/> Total salary sacrifice:</span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input disabled maxLength={10} type="text" className="form-input" name="salary_sacrifice_amount" value={state.salary_sacrifice_amount} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            <div>
                <MainHeadSub title='Your salary' des='Your savings are made by paying for the bike with your salary before it is taxed. To calculate your potential savings it’s necessary to know your salary. This information will never be disclosed to a third party.'/>
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 align-items-start"><ToolTip position='right' className='me-1 calInfo' des='Your gross base salary, not including any bonus, before any tax is deducted.'/> Annual salary:</span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.annual_salary} maxLength={10} type="text" className="form-input" name="annualSalary" value={state.annualSalary} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            {/* <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2">Pay frequency:</span>
                    </Col>
                    <Col xs={12} sm={7}>
                        {
                            host.includes('uk') ?
                                <div className="NoCurr form-price-input">
                                    <input type="text" className="form-input" value={state.paymentFrequency} disabled />
                                </div>
                                :
                                <InputSelectDrop
                                    placeholder='Select an option'
                                    defaultValue={state.frequency}
                                    selectParam={'value'}
                                    className='box-select-calclulate'
                                    name={'frequency'}
                                    onChangeSelect={onChange}
                                    searchCustom={true}
                                    data={[
                                        { value: 12, label: 'Monthly' },
                                        { value: 13, label: '4 weekly' },
                                        { value: 52, label: 'Weekly' },
                                        { value: 26, label: 'Fortnightly' },
                                    ]} />
                        }
                    </Col>
                </Row>
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2">Salary sacrifice repayment term:</span>
                    </Col>
                    <Col xs={12} sm={7}>
                        {
                            host.includes('uk') ?
                                <div className="form-price-input NoCurr">
                                    <input type="text" className="form-input" value={state.sacrifice_repayment} disabled />
                                </div>
                                :
                                <InputSelectDrop
                                    placeholder='Select an option'
                                    defaultValue={state.sacrifice_repayment}
                                    className='box-select-calclulate'
                                    selectParam={'value'}
                                    name={'sacrifice_repayment'}
                                    onChangeSelect={onChange}
                                    searchCustom={true}
                                    data={[
                                        { value: 12, label: '12' },
                                        { value: 18, label: '18' },
                                        { value: 24, label: '24' },
                                    ]} />
                        }
                    </Col>
                </Row>
            </div> */}
        </Col>
        <Col xs={12} sm={6}>
            {/* <div className="price-calculate">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Regular gross salary sacrifice <ToolTip className='ms-2' des='This is the amount of take-home pay that you will sacrifice from each pay packet for the duration of your Cycle to Work agreement' /></p>
                    <Image src='/go/assets/calculation/calendar_date_month.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.regular_gross ? handleChangeSalary(state.regular_gross) : 0}</h4>
            </div> */}
            <div className="price-calculate">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Monthly take home pay reduced by 
                    {/* <ToolTip className='ms-2' des='This is the amount that you will pay (eg, monthly) after the tax savings.' /> */}
                    </p>
                    <Image src='/go/assets/calculation/coin.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.net_regular ? handleChangeSalary(state.net_regular) : 0} <sub>(for {state.salarySacrificeTerm} months)</sub></h4>
            </div>
            <div className="price-calculate">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Effective cost
                    {/* <ToolTip className='ms-2' des='This is the total amount that you will pay for your bike and accessories over the duration of your Cycle to Work agreement' /> */}
                    </p>
                    <Image src='/go/assets/calculation/price_tag_percent.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.net_total_amount ? handleChangeSalary(state.net_total_amount) : 0} <sub><s>{srp ?  state.SRP_val ? `(£${handleChangeSalary(state.SRP_val)})`:null : state.bikeValue ? `(£${handleChangeSalary(state.bikeValue)})`:null}</s></sub></h4>
            </div>
            <div className="price-calculate secondBlue">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Total savings 
                    {/* <ToolTip className='ms-2' des='The amount you will save on the bike and accessories after tax savings' /> */}
                    </p>
                    <Image src='/go/assets/calculation/hand_gesture.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.saving_C2W ? handleChangeSalary(state.saving_C2W) : 0} <sub>({state.saving_C2W_percentage?.toString()?.length ? state.saving_C2W_percentage+'%' : '0%'})</sub></h4>
            </div>
        </Col>
    </Row>
}
export default UKCalculator