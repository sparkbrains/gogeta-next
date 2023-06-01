import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { MainHead } from '../component/main-head';
import Applayout from '<prefix>/layout/applayout';
import Welcome from '<prefix>/component/home/welcome';
import SaveUp from '<prefix>/component/home/saveUp';
import TheProcess from '<prefix>/component/home/theProcess';
import HelpingHand from '<prefix>/component/home/helpingHand';
import SavingCalculate from '<prefix>/component/home/savingCalculate';
import { withContext } from '<prefix>/context/appContext';
import { homeList } from '<prefix>/json/pages'
import StoreFinder from '<prefix>/component/storefinder';
import UKCalculator from '<prefix>/component/calculateSchemePackage/ukCalculator';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { applyCalculator } from '<prefix>/common/utilits';
import { FormC } from '<prefix>/common/validate';
import { Form } from 'react-bootstrap';
function EbayLp({ context }: any) {
    const host: string = context.host
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
        // if (router.query?.params?.length) {
        //     const obj: any = JSON.parse(window.atob(`${router.query.params}`))
        //     let valPrice = applyCalculator(obj.bikeValue, +obj.annualSalary, obj.bikeType)
        //     let val = { ...state, ...obj, accessoriesValue: obj.accessoriesValue || 0, monthlyPayment: valPrice.per_month, initial_payment: valPrice.initial_payment }
        //     setState(val)
        // }
    }, [host])
    const handleCycleCalculate = (param: any) => {
        param = {
            ...param,
            totalPackageValue: Number(param.bikeValue) + Number(param.accessoriesValue)
        }
        let valPrice = applyCalculator(param)
        setState({ ...param, ...valPrice })
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let stateParam: any = { ...state }
        let obj = JSON.stringify(stateParam)
        let encoded = window.btoa(obj);
        // router.push(`/apply-now?params=${encoded}`)
    }
    const { errors, handleSubmit } = FormC({
        values: { bike_value: state.bikeValue, accessories_value: state.accessoriesValue, annual_salary: state.annualSalary },
        onSubmit
    })
    const { process, helpinghand, saveUpto } = host.includes('uk') ? homeList.uk : homeList.ebay
    
    return (
        <Applayout className='ebay w-100 m-0 pt-0'>
            <div className={`main-back ${host.includes('uk') ? 'mainBcLpafbf' : ''}`}>
                <Welcome host={host} />
                <SaveUp data={saveUpto} host={host}/>
                <TheProcess data={host.includes('Market') ?homeList.ebay.process: process} host={host}/>
                {helpinghand ? <HelpingHand /> : <section className='schemeCost poreZindex mb-5'>
                    <Container>
                        <div className='toggleSchemeCost calcCyclSchPack'>
                            <div className='workScheme'>
                                <div className="d-flex align-items-center justify-content-between schemeHead">
                                    <h5>Calculate your Cycling Scheme package</h5>
                                </div>
                                <div className='applyNow p-5'>
                                    <Form onSubmit={handleSubmit}>
                                        <UKCalculator errors={errors} state={state} onChange={onChange} />
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="customSiteBtn btn btn-primary px-4">Apply now <i className="fa-solid fa-angle-right"></i></button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>}
            </div>
            {host.includes('uk') ?
                <section className='mltSection findlocalBike'>
                    <Container>
                        <div className='bikeFindMap poreZindex'>
                            <h3>Find your local bike shop</h3>
                            <div className='mapInner'>
                                <StoreFinder type='uk' />
                            </div>
                        </div>
                    </Container>
                </section>
                : <div className='ebay-main'>
                    <SavingCalculate />
                    <div className='call-us'>
                        <Container>
                            <MainHead title="Call to action" />
                            <p>Call to action</p>
                            <div className='d-flex align-items-center'>
                                <Button type="button" className='customSiteBtn me-2'>Browse bikes <i className="fa-solid fa-angle-right"></i></Button>
                                <Button type="button" className='customSiteBtn transpBtn'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                            </div>
                        </Container>
                    </div>
                </div>}
        </Applayout>
    );
}

export default withContext(EbayLp);