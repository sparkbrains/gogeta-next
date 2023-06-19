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
function UKFreeSiteCalculate({ data, context, submit = false, formSubmit, srp }: any) {
    const { host, tenantDetail } = context
    const router = useRouter()
    const [state, setState] = useState<any>({
        bikeValue: '',
        accessoriesValue: '',
        totalPackageValue: '',
        annualSalary: '55000',
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
        const freq = data?.salarySacrificeTerm || data?.sacrifice_repayment
        const dParam = {
            ...state,
            ...data,
            ...tenantDetail,
            frequency: data?.paymentFrequency ? frequencydata[data?.paymentFrequency] : data?.frequency,
            sacrifice_repayment: freq,
            salarySacrificeTerm: freq
        }
        handleCycleCalculate(dParam)
    }, [data,tenantDetail])
    const handleCycleCalculate = (param: any) => {
        param = {
            ...param,
            totalPackageValue: Number(param.bikeValue) + Number(param.accessoriesValue)
        }
        let valPrice = applyCalculator(param)
        if (srp && +param.bikeValue > +param.SRP_val) {
            handleNewError({ bike_value: 'SRP Field that it cannot be less than cost of bike' })
            setState({ ...param })
        } else {
            handleNewError({})
            setState({ ...param, ...valPrice })
        }
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
        submit ? formSubmit(state) : router.push((router?.query?.companySlug?'/'+router?.query?.companySlug:'')+`/apply-now${host === 'uk' ? `/${router.query.slug}?params=${encoded}` : `?params=${encoded}`}`)
    }
    const { errors, handleSubmit, handleNewError } = FormC({
        values: { bike_value: state.bikeValue, annual_salary: state.annualSalary, sacrifice_repayment: state.sacrifice_repayment },
        onSubmit,
    })
    return <section className='schemeCost poreZindex mb-5'>
        <Container>
            <div className='toggleSchemeCost calcCyclSchPack'>
                <div className='workScheme'>
                    <div className="d-flex align-items-center justify-content-between schemeHead">
                        <h5>See your savings</h5>
                    </div>
                    <div className='applyNow p-5'>
                        <Form onSubmit={handleSubmit}>
                            <UKCalculator errors={errors} srp={srp} state={state} onChange={onChange} host={host} />
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="customSiteBtn btn btn-primary px-4">{submit ? 'Find me great offers':'Apply now'} <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
export default withContext(UKFreeSiteCalculate)