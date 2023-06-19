import Fetch from "<prefix>/common/fetch"
import { handleChangeSalary, onKeyPress, queryParam, useMediaQuery } from "<prefix>/common/utilits"
import { useEffect, useState,ChangeEvent } from "react"
import Image from "next/image"
import { useRouter } from "next/router";
import { Col, Container, Form, Row } from "react-bootstrap"
import Button from "../button"
import { MainHead } from "../main-head";
import { Bus, Car, EntertainmentTicket, FoodBurger, FoodCandy, FoodDrink, FoodTakeway, NatureEco, Train } from "../svgIcon";
import { withContext } from "<prefix>/context/appContext";
interface Iprops {
    cal_burgers: number
    cal_calories: number
    cal_chocolate: number
    cal_cinema: number
    cal_co2: number
    cal_money: number
    cal_pints: number
    cal_takeaway: number
    cal_tree: number
}
function SavingCalculate({context}:any){
    const {profile,hostUrl} = context
    const isMobile = useMediaQuery(600)
    const [data, setData] = useState<Iprops>({
        cal_burgers: 0,
        cal_calories: 0,
        cal_chocolate: 0,
        cal_cinema: 0,
        cal_co2: 0,
        cal_money: 0,
        cal_pints: 0,
        cal_takeaway: 0,
        cal_tree: 0,
    })
    const [equivalentCount, setequivalentCount] = useState({
        emissions: { name: '', num: null },
        calories_burned: { name: '', num: null },
        money_saved: { name: '', num: null }
    })
    const [calclulateState, setCalclulateState] = useState({
        distance_miles: '5',
        time_period: 'period_annually',
        mode_of_transport: 'transport_car',
        portalDomain: ''
    })
    
    useEffect(() => {
        CalculatorData(null)
    }, [])
    useEffect(() => {
        setCalclulateState({
            ...calclulateState,
            portalDomain:hostUrl
        })
    }, [hostUrl])
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCalclulateState({
            ...calclulateState,
            [e.target.name]: e.target.value
        })
    }
    const CalculatorData = (e: any) => {
        e?.preventDefault();
        const val = queryParam({...calclulateState,portalDomain:hostUrl})?.replace('&', '?')
        Fetch(`calculate_health_data${val}`).then(d => {
            if (d.status) {
                setData(d.data)
                setequivalentCount({
                    emissions: { num: d.data.cal_tree, name: 'tree' },
                    calories_burned: { num: d.data.cal_burgers, name: 'burgers' },
                    money_saved: { num: d.data.cal_takeaway, name: 'takeaways' }
                })
            }
        })
    }
    const handleEquivalent = (name: string, item: any) => {
        setequivalentCount({
            ...equivalentCount,
            [name]: item
        })
    }
    return<Container>
    <div className='pt-5 pb-3'>
        <MainHead title="Switch to cycling and start saving" />
    </div>
    <section className='cycling-saving mb-5'>
        <div className='cycling-saving'>
            <div className='cycling-saving-calclulate'>
                <Form onSubmit={CalculatorData}>
                    <Row className='align-items-center'>
                        <Col lg={8}>
                            <div className='d-flex flex-wrap align-items-center align-items-sm-start justify-content-between'>
                                <div className='calclulate-form'>
                                    <label className='d-none d-lg-block'>Commute distance each way</label>
                                    <label className='d-block d-lg-none'>Commute distance</label>
                                    <div className='d-flex align-items-center'>
                                        <input type='text' maxLength={5} className='form-input text-center' onKeyPress={onKeyPress} value={calclulateState.distance_miles} name='distance_miles' onChange={onChange} />
                                        <p className='p-2 m-0'>miles</p>
                                    </div>
                                </div>
                                <div className='calclulate-form'>
                                    <label>Mode of transport</label>
                                    <ul>
                                        <li>
                                            <input type="radio" className='d-none' id='transport' name='mode_of_transport' onChange={onChange} value='transport_car' checked={calclulateState.mode_of_transport === 'transport_car'} />
                                            <label htmlFor='transport'>
                                                <Car />
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className='d-none' id='transportTrain' name='mode_of_transport' onChange={onChange} value='transport_train' checked={calclulateState.mode_of_transport === 'transport_train'} />
                                            <label htmlFor='transportTrain'>
                                                <Train />
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className='d-none' id='transportBus' name='mode_of_transport' onChange={onChange} value='transport_bus' checked={calclulateState.mode_of_transport === 'transport_bus'} />
                                            <label htmlFor='transportBus'>
                                                <Bus />
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='calclulate-form'>
                                    <label>Mode of transport</label>
                                    <ul>
                                        <li>
                                            <input type="radio" className='d-none' id='transportAnnual' name='time_period' onChange={onChange} value='period_annually' checked={calclulateState.time_period === 'period_annually'} />
                                            <label htmlFor='transportAnnual'>
                                                Annually
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className='d-none' id='transportMonth' name='time_period' onChange={onChange} value='period_monthly' checked={calclulateState.time_period === 'period_monthly'} />
                                            <label htmlFor='transportMonth'>
                                                Monthly
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className='d-none' id='transportWeek' name='time_period' onChange={onChange} value='period_weekly' checked={calclulateState.time_period === 'period_weekly'} />
                                            <label htmlFor='transportWeek'>
                                                Weekly
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <Button type="button" className='d-flex align-items-center d-sm-none customSiteBtn'>Caclulate savings <i className="fa-solid fa-angle-right"></i></Button>
                            </div>
                        </Col>
                        <Col lg={4} className='d-none d-sm-flex justify-content-start justify-content-lg-end mt-md-3'>
                            <Button type="submit" className='customSiteBtn'>Caclulate savings <i className="fa-solid fa-angle-right"></i></Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className='cycling-saving-list'>
                <Row>
                    <Col md={4} className='mb-4 mb-md-0'>
                        <div className='list listEmmi'>
                            {isMobile ? null : <Image width={66} height={66} alt='ico' src="/go/assets/img/nature_ecology_leaf.svg" className="mb-4" />}
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>CO2 emissions saved:</p>
                                    <h3>{handleChangeSalary(data.cal_co2)}<sub>kg</sub></h3>
                                </div>
                                {!isMobile ? null : <Image width={36} height={36} alt='ico' src="/go/assets/img/nature_ecology_leaf.svg" className="mb-4" />}
                            </div>
                            <div className='mobile-align'>
                                <div>
                                    <p className='pt-3'>Equivalent to:</p>
                                    <h4>{equivalentCount.emissions.num} trees</h4>
                                </div>
                                {!isMobile ? null : <TreesList handleEquivalent={handleEquivalent} data={data} />}
                            </div>
                            {isMobile ? null : <TreesList handleEquivalent={handleEquivalent} data={data} />}
                        </div>
                    </Col>
                    <Col md={4} className='mb-4 mb-md-0'>
                        <div className='list listBurned'>
                            {isMobile ? null : <Image width={66} height={66} alt='ico' src="/go/assets/img/health_medical_heart_rate.svg" className="mb-4" />}
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Calories burned</p>
                                    <h3>{handleChangeSalary(data.cal_calories)}<sub>kcal</sub></h3>
                                </div>
                                {!isMobile ? null : <Image width={36} alt='ico' height={36} src="/go/assets/img/health_medical_heart_rate.svg" className="mb-4" />}
                            </div>
                            <div className='mobile-align'>
                                <div>
                                    <p className='pt-3'>Equivalent to:</p>
                                    <h4>{equivalentCount.calories_burned.num} {equivalentCount.calories_burned.name}</h4>
                                </div>
                                {!isMobile ? null : <CaloriesBurned equivalentCount={equivalentCount} handleEquivalent={handleEquivalent} data={data} />}
                            </div>
                            {isMobile ? null : <CaloriesBurned equivalentCount={equivalentCount} handleEquivalent={handleEquivalent} data={data} />}
                        </div>
                    </Col>
                    <Col md={4} className='mb-4 mb-md-0'>
                        <div className='list listSaved'>
                            {isMobile ? null : <Image width={66} height={66} alt='ico' src="/go/assets/img/money_cash_bag_euro.svg" className="mb-4" />}
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Money saved:</p>
                                    <h3>{profile.currencySymbol}{handleChangeSalary(data.cal_money)}</h3>
                                </div>
                                {!isMobile ? null : <Image width={36} height={36} alt='ico' src="/go/assets/img/money_cash_bag_euro.svg" className="mb-4" />}
                            </div>
                            <div className='mobile-align'>
                                <div>
                                    <p className='pt-3'>Equivalent to:</p>
                                    <h4>{equivalentCount.money_saved.num} {equivalentCount.money_saved.name}</h4>
                                </div>
                                {!isMobile ? null : <MoneySaved equivalentCount={equivalentCount} handleEquivalent={handleEquivalent} data={data} />}
                            </div>
                            {isMobile ? null : <MoneySaved equivalentCount={equivalentCount} handleEquivalent={handleEquivalent} data={data} />}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </section>
</Container>
}
export default withContext(SavingCalculate)
const TreesList = ({ handleEquivalent, data }: any) => {
    return <ul>
        <li className={'active'}>
            <Button onClick={() => handleEquivalent('emissions', { num: data.cal_tree, name: 'tree' })}><NatureEco /></Button>
        </li>
    </ul>
}
const CaloriesBurned = ({ equivalentCount, handleEquivalent, data }: any) => {
    return <ul>
        <li className={equivalentCount.calories_burned?.name === 'burgers' ? 'active' : ''}><Button onClick={() => handleEquivalent('calories_burned', { num: data.cal_burgers, name: 'burgers' })}><FoodBurger /></Button></li>
        <li className={equivalentCount.calories_burned?.name === 'pints' ? 'active' : ''}><Button onClick={() => handleEquivalent('calories_burned', { num: data.cal_pints, name: 'pints' })}><FoodDrink /></Button></li>
        <li className={equivalentCount.calories_burned?.name === 'chocolates' ? 'active' : ''}><Button onClick={() => handleEquivalent('calories_burned', { num: data.cal_chocolate, name: 'chocolates' })}><FoodCandy /></Button></li>
    </ul>
}
const MoneySaved = ({ equivalentCount, handleEquivalent, data }: any) => {
    return <ul>
        <li className={equivalentCount.money_saved?.name === 'takeaways' ? 'activeGreen' : ''}><Button onClick={() => handleEquivalent('money_saved', { num: data.cal_takeaway, name: 'takeaways' })}><FoodTakeway /></Button></li>
        <li className={equivalentCount.money_saved?.name === 'cinema tickets' ? 'activeGreen' : ''}><Button onClick={() => handleEquivalent('money_saved', { num: data.cal_cinema, name: 'cinema tickets' })}><EntertainmentTicket /></Button></li>
    </ul>
}