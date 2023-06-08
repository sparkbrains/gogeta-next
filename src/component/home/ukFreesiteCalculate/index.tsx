import { applyCalculator } from "<prefix>/common/utilits";
import { FormC } from "<prefix>/common/validate";
import UKCalculator from "<prefix>/component/calculateSchemePackage/ukCalculator";
import { withContext } from "<prefix>/context/appContext";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent } from "react";
import { Container, Form } from "react-bootstrap";
var frequencydata: any = {
    MONTHLY: 12,
    WEEKLY: 52,
    FORTNIGHTLY: 26,
    FOUR_WEEKLY: 13
}
function UKFreeSiteCalculate({ data, context,submit=false,formSubmit,srp }: any) {
    const { host, profile } = context
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
        const dParam = {
            ...state,
            ...data,
            frequency: host === 'uk' ? frequencydata[data.paymentFrequency] : data?.frequency,
            sacrifice_repayment: data?.salarySacrificeTerm, salarySacrificeTerm: data?.salarySacrificeTerm
        }
        handleCycleCalculate(dParam)
    }, [data])
    const handleCycleCalculate = (param: any) => {
        param = {
            ...param,
            totalPackageValue: Number(param.bikeValue) + Number(param.accessoriesValue)
        }
        let valPrice = applyCalculator(param)
        // console.log({ ...param, ...valPrice },'valPrice===');
        
        setState({ ...param, ...valPrice })
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let stateParam: any = { ...state }
        if (host === 'uk') {
            delete stateParam.frequency
            delete stateParam.sacrifice_repayment
        }
        let obj = JSON.stringify(stateParam)
        let encoded = window.btoa(obj);
        submit ?formSubmit(state):router.push(`/apply-now?params=${encoded}`)
    }
    const { errors, handleSubmit } = FormC({
        values: { bike_value: state.bikeValue, accessories_value: state.accessoriesValue, annual_salary: state.annualSalary, sacrifice_repayment: state.sacrifice_repayment },
        onSubmit
    })
    return <section className='schemeCost poreZindex mb-5'>
        <Container>
            <div className='toggleSchemeCost calcCyclSchPack'>
                <div className='workScheme'>
                    <div className="d-flex align-items-center justify-content-between schemeHead">
                        <h5>Calculate your Cycling Scheme package</h5>
                    </div>
                    <div className='applyNow p-5'>
                        <Form onSubmit={handleSubmit}>
                            <UKCalculator errors={errors} srp={srp} state={state} onChange={onChange} host={host} />
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="customSiteBtn btn btn-primary px-4">Apply now <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
export default withContext(UKFreeSiteCalculate)