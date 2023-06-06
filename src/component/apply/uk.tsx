
import Input from "<prefix>/common/input";
import { InputDropDownList, InputSelectDrop } from "<prefix>/common/inputSelectDrop";
import { FormC } from "<prefix>/common/validate";
import { MainHead } from "<prefix>/component/main-head";
import Toggle from "<prefix>/component/toggle";
import { withContext } from "<prefix>/context/appContext";
import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { applyCalculator, onKeyPress } from '../../common/utilits'
import UKCalculator from "../calculateSchemePackage/ukCalculator";
var frequencydata:any = {
    MONTHLY:12,
    WEEKLY:52,
    FORTNIGHTLY:26,
    FOUR_WEEKLY:13
}
function ApplyNowUK({context}:any) {
    const {host} = context
    const router = useRouter()
    const [state, setState] = useState<any>({
        bikeValue: '',
        accessoriesValue: '',
        totalPackageValue: '',
        annualSalary: '',
        frequency: '',
        sacrifice_repayment: ''
    })
    const onChange = (e: any) => {
        const { value, name } = e.target
        const param = {
            ...state,
            [name]: typeof value === 'object' ? value.value : value
        }
        handleCycleCalculate(param)
    }
    useEffect(() => {
        if (router.query?.params?.length) {
            let obj: any = JSON.parse(window.atob(`${router.query.params}`))
            obj =host === 'uk'? {...obj,frequency: frequencydata[obj.paymentFrequency],
            sacrifice_repayment: obj?.salarySacrificeTerm}:obj
            console.log(obj,'obj===');
            
            setState(obj)
        }
    }, [router])
    const handleCycleCalculate = (param: any) => {
        param = {
            ...param,
            totalPackageValue:Number(param.bikeValue) + Number(param.accessoriesValue)
        }
        let valPrice = applyCalculator(param)
        setState({...param,...valPrice})
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let stateParam: any = { ...state }
        // stateParam ={
        //     ...stateParam
        // }
        let obj = JSON.stringify(stateParam)
        let encoded = window.btoa(obj);
        window.location.href = `https://gogeta.bike/portal/sal-sac-form?params=${encoded}`
    }
    const { errors, handleSubmit } = FormC({
        values: { bike_value: state.bikeValue, accessories_value: state.accessoriesValue, annual_salary: state.annualSalary,sacrifice_repayment:state.sacrifice_repayment },
        onSubmit
    })
    return <>
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
                    <UKCalculator errors={errors} state={state} onChange={onChange} host={host}/>
                </div>
            </div>
            <div className="d-flex justify-content-end mb-5">
                <button type="submit" className="customSiteBtn btn btn-primary px-4">Submit <i className="fa-solid fa-angle-right"></i></button>
            </div>
        </Form>
    </>
}
export default withContext(ApplyNowUK)