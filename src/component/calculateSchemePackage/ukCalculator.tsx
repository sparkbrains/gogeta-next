import Error from "<prefix>/common/error";
import Input from "<prefix>/common/input";
import { InputSelectDrop } from "<prefix>/common/inputSelectDrop";
import { handleChangeSalary, onKeyPress } from "<prefix>/common/utilits";
import { withContext } from "<prefix>/context/appContext";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ToolTip from "../info";

function UKCalculator({ errors, state, onChange, host,srp }: any) {
    return <Row>
        <Col xs={12} sm={6}>
            {srp ? <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 d-block">SRP: <ToolTip position='right' className='ms-1' des='This is the manufacturer’s Suggested Retail Price'/></span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.SRP_val} maxLength={10} type="text" className="form-input" name="SRP_val" value={state.SRP_val} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>:null}
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 d-block">{srp ?"Discounted price of bike through gogeta":'Cost of bike:'} <ToolTip position='right' className='ms-1' des='This is the price retailers are offering the bike through the <b>go</b>geta marketplace'/></span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.bike_value} maxLength={10} type="text" className="form-input" name="bikeValue" value={state.bikeValue} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 d-block">Accessories amount: <ToolTip position='right' className='ms-1' des='Please enter an amount for accessories (such as a lock, helmet and lights). We suggest 10% of the voucher amount.'/></span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.accessories_value} maxLength={10} type="text" className="form-input" name="accessoriesValue" value={state.accessoriesValue} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
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
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2 d-block">Salary sacrifice amount <ToolTip position='right' className='ms-1' des='This is the amount you will sacrifice out of your gross, not net, salary. It includes the gogeta 4% platform fee.'/></span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input disabled maxLength={10} type="text" className="form-input" name="salary_sacrifice_amount" value={state.salary_sacrifice_amount} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
                <Row>
                    <Col xs={12} sm={5}>
                        <span className="pb-2">Your salary before tax: <ToolTip position='right' className='ms-1' des='This is your annual gross pay before any bonus or other payments'/></span>
                    </Col>
                    <Col xs={12} sm={7}>
                        <Input errorText={errors.annual_salary} maxLength={10} type="text" className="form-input" name="annualSalary" value={state.annualSalary} onKeyPress={onKeyPress} onChange={onChange} />
                    </Col>
                </Row>
            </div>
            <div className="calclulate-form pe-0 pe-lg-4">
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
            </div>
        </Col>
        <Col xs={12} sm={6}>
            <div className="price-calculate">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Regular gross salary sacrifice <ToolTip className='ms-2' des='This is the amount of take-home pay that you will sacrifice from each pay packet for the duration of your Cycle to Work agreement' /></p>
                    <Image src='/go/assets/calculation/calendar_date_month.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.regular_gross ? handleChangeSalary(state.regular_gross) : 0}</h4>
            </div>
            <div className="price-calculate">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Net regular amount <ToolTip className='ms-2' des='This is the amount that you will pay (eg, monthly) after the tax savings.' /></p>
                    <Image src='/go/assets/calculation/pound.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.net_regular ? handleChangeSalary(state.net_regular) : 0}</h4>
            </div>
            <div className="price-calculate">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Net total amount <ToolTip className='ms-2' des='This is the total amount that you will pay for your bike and accessories over the duration of your Cycle to Work agreement' /></p>
                    <Image src='/go/assets/calculation/pound.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.net_total_amount ? handleChangeSalary(state.net_total_amount) : 0}</h4>
            </div>
            <div className="price-calculate secondBlue">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="d-flex align-items-center">Total savings <ToolTip className='ms-2' des='The amount you will save on the bike and accessories after tax savings' /></p>
                    <Image src='/go/assets/calculation/percent.svg' width={36} height={36} alt='cal' />
                </div>
                <h4>£{state.saving_C2W ? handleChangeSalary(state.saving_C2W) : 0} <sub>({state.saving_C2W_percentage?.toString()?.length ? state.saving_C2W_percentage+'%' : '0%'})</sub></h4>
            </div>
        </Col>
    </Row>
}
export default UKCalculator