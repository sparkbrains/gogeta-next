import Input from "<prefix>/common/input";
import { InputSelectDrop } from "<prefix>/common/inputSelectDrop";
import { handleChangeSalary, onKeyPress } from "<prefix>/common/utilits";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ToolTip from "../info";

export default function UKCalculator({errors,state,onChange}:any){
    return<Row>
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
                <div className="NoCurr form-price-input">
                <input type="text" className="form-input" value={state.paymentFrequency} disabled/>
                </div>
                    {/* <InputSelectDrop
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
                        ]} /> */}
                </Col>
            </Row>
        </div>
        <div className="calclulate-form pe-0 pe-lg-4">
            <Row>
                <Col xs={12} sm={4}>
                    <span className="pb-2">Salary sacrifice repayment term:</span>
                </Col>
                <Col xs={12} sm={8}>
                <div className="form-price-input NoCurr">
                    <input type="text" className="form-input" value={state.sacrifice_repayment} disabled/>
                    </div>
                    {/* <InputSelectDrop
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
                        ]} /> */}
                </Col>
            </Row>
        </div>
    </Col>
    <Col xs={12} sm={6}>
        <div className="price-calculate">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="d-flex align-items-center">Regular gross salary sacrifice <ToolTip className='ms-2' des='This is the amount of take-home pay that you will sacrifice from each pay packet for the duration of your Cycle to Work agreement'/></p>
                <Image src='/assets/calculation/calendar_date_month.svg' width={36} height={36} alt='cal' />
            </div>
            <h4>£{state.regular_gross ?  handleChangeSalary(state.regular_gross):0}</h4>
        </div>
        <div className="price-calculate">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="d-flex align-items-center">Net regular amount <ToolTip className='ms-2' des='This is the amount that you will pay (eg, monthly) after the tax savings.'/></p>
                <Image src='/assets/calculation/pound.svg' width={36} height={36} alt='cal' />
            </div>
            <h4>£{state.net_regular ?handleChangeSalary(state.net_regular):0}</h4>
        </div>
        <div className="price-calculate">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="d-flex align-items-center">Net total amount <ToolTip className='ms-2' des='This is the total amount that you will pay for your bike and accessories over the duration of your Cycle to Work agreement'/></p>
                <Image src='/assets/calculation/pound.svg' width={36} height={36} alt='cal' />
            </div>
            <h4>£{state.net_total_amount? handleChangeSalary(state.net_total_amount):0}</h4>
        </div>
        <div className="price-calculate secondBlue">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="d-flex align-items-center">Total savings <ToolTip className='ms-2' des='The amount you will save on the bike and accessories after tax savings'/></p>
                <Image src='/assets/calculation/percent.svg' width={36} height={36} alt='cal' />
            </div>
            <h4>£{state.total_savings? handleChangeSalary(state.total_savings):0} <sub>({state.total_savings_percentage?.length ? state.total_savings_percentage:'0%'})</sub></h4>
        </div>
    </Col>
</Row>
}