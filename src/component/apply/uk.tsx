
import { FormC } from "<prefix>/common/validate";
import { MainHead } from "<prefix>/component/main-head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import moment from 'moment'
import { applyCalculator } from '../../common/utilits'
import UKCalculator from "../calculateSchemePackage/ukCalculator";
import Error from "<prefix>/common/error";
var frequencydata: any = {
    MONTHLY: 12,
    WEEKLY: 52,
    FORTNIGHTLY: 26,
    FOUR_WEEKLY: 13
}
function ApplyNowUK({ context }: any) {
    const { host, tenantDetail } = context
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
        var obj: any = {}
        if (router.query?.params?.length) {
            obj = JSON.parse(window.atob(`${router.query?.params}`))
        }
        if (Object.keys(obj).length) {
            obj = {
                ...obj,
                ...tenantDetail
            }
            obj = host.includes('uk') ? {
                ...obj, frequency: frequencydata[obj.paymentFrequency],
                sacrifice_repayment: obj?.salarySacrificeTerm
            } : obj
            handleCycleCalculate(obj)
        }
    }, [router])
    const handleCycleCalculate = (param: any) => {
        param = {
            ...param,
            totalPackageValue: (Number(param.bikeValue) || 0) + (Number(param.accessoriesValue) || 0)
        }
        let valPrice = applyCalculator(param)

        setState({ ...param, ...valPrice })
    }


    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let stateParam: any = { ...state }
        const moment1: any = moment(state.certificateDatePeriodEndDate).format('yyyy-MM-DD')
        const moment2: any = moment().format('yyyy-MM-DD')
        if (!moment(moment1).isAfter(moment2)) {
            handleNewError({message:'Employer cannot accept the application now.'})
        }else if(stateParam.voucherLimit < stateParam.totalPackageValue){
            handleNewError({message:`This request cannot be processed as your employer has set scheme limit is ${stateParam.voucherLimit}.`})
        } else {
            handleNewError({})
            stateParam ={
                ...stateParam
            }
            delete stateParam?.showBack
            let obj = JSON.stringify(stateParam)
            let encoded = window.btoa(obj);
            window.location.href = `https://gogeta.bike/portal/sal-sac-form?params=${encoded}`
        }

    }
    const { errors, handleSubmit,handleNewError } = FormC({
        values: { bike_value: state.bikeValue, accessories_value: state.accessoriesValue, annual_salary: state.annualSalary, sacrifice_repayment: state.sacrifice_repayment },
        onSubmit
    })
    return <>
        {state?.showBack ? <Button onClick={() => router.back()} className='backPage nav-link mb-5'><Image width={7} height={12} src='/assets/img/ic_left-Stroke.svg' className="img-fluid" alt='back' /> Back to choose another retailer</Button> : null}
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
                    <UKCalculator errors={errors} state={state} onChange={onChange} host={host} />
                </div>
            </div>
            <div className="d-flex justify-content-end flex-column align-items-end mb-5">
                <div className="applyNow-errorMsg mb-3">
                <Error text={errors.message}/>
                </div>
                <button type="submit" className="customSiteBtn btn btn-primary px-4">Submit <i className="fa-solid fa-angle-right"></i></button>
            </div>
        </Form>
    </>
}
export default ApplyNowUK