import { useEffect, useState } from "react"
import Fetch from "../../common/fetch"
import { InputSelectDrop } from "../../common/inputSelectDrop"
import { queryParam, useMediaQuery } from "../../common/utilits"
import AccordianCard from "../accordian-card"
import Button from "../button"
import Card from "../card"
import { RadioInput } from "../form/inputs"
// import RangeSlider from "react-range-slider-input";
import {onKeyPress} from '../../common/utilits'
import { useRouter } from "next/router"
export default function Filter({ param, applyFilterSet }:any) {
    const isMobile = useMediaQuery(900)
    const router = useRouter()
    const [filterOpen, setfilterOpen] = useState(false)
    const[minMaxPrice,setMinMaxPrice] = useState([500,15000])
    const [filterData, setfilterData] = useState<any>([
        {
            name: 'Availability',
            order: 1,
            infoText: "See what's in stock from retailers across the country",
            selected: 'label',
            data: [],
            isAlwaysOpen: true,
            inputname: 'live_stock'
        },
        {
            name: 'Price',
            order: 2,
            data: []
        },
        {
            name: 'Size',
            order: 3,
            type: 'select',
            selected: 'cm_size',
            data: [],
            inputname: 'size'
        },
        {
            name: 'Category',
            selected: 'label',
            order: 4,
            data: [],
            inputname: 'category_type'
        },
        {
            name: 'Features',
            selected: 'label',
            order: 5,
            data: [],
            inputname: 'features'
        },
        {
            name: 'Brand',
            selected: 'brandCode',
            order: 6,
            inputname: 'brands',
            data: {
                title: 'POPULAR BRANDS',
            }
        },
        {
            name: 'Color',
            inputname: 'colour',
            selected: 'label',
            order: 2,
            data: []
        },
        {
            name: 'Security',
            inputname: 'security',
            selected: 'label',
            order: 2,
            data: []
        },
        {
            name: 'Wheel Size',
            inputname: 'wheel_size',
            selected: 'label',
            order: 2,
            data: []
        },
    ])
    const [stateParam, setStateParam] = useState(param)
    useEffect(() => {
        console.log(router);
        fetchFilterCount('')
        setStateParam({
            ...param,
        })
    }, [param])
    const fetchFilterCount = (val:string) => {
        Fetch(`get-filter-count/?listing_type=ebikes${val}&portalDomain=gogeta.dev`).then(d => {
            if (d.status) {
                const { data } = d
                let priceR = data?.price_range?.length && data?.price_range[0]
                setMinMaxPrice([priceR?.price_min?priceR?.price_min:500, priceR?.price_max?priceR?.price_max:15000])
                setfilterData([
                    {
                        name: 'Availability',
                        order: 1,
                        infoText: "See what's in stock from retailers across the country",
                        selected: 'label',
                        data: data.live_stock?.map((d:any) => { return { ...d, label: 'in_stock' } }),
                        isAlwaysOpen: true,
                        inputname: 'live_stock',
                    },
                    {
                        name: 'Price',
                        order: 2,
                        type: 'range',
                        inputname: 'price',
                        data: data.price_range
                    },
                    {
                        name: 'Size',
                        order: 3,
                        type: 'select',
                        selected: 'cm_size',
                        data: data.size,
                        inputname: 'size'
                    },
                    {
                        name: 'Category',
                        selected: 'label',
                        order: 4,
                        data: data.category_types,
                        inputname: 'category_type'
                    },
                    {
                        name: 'Features',
                        selected: 'label',
                        order: 5,
                        data: data.features,
                        inputname: 'features'
                    },
                    {
                        name: 'Brand',
                        selected: 'brandCode',
                        order: 6,
                        inputname: 'brands',
                        data: {
                            title: 'POPULAR BRANDS',
                            ...data.brands,
                        }
                    },
                    {
                        name: 'Color',
                        inputname: 'colour',
                        selected: 'label',
                        order: 2,
                        data: data.colour_filter_type
                    },
                    {
                        name: 'Security',
                        inputname: 'security',
                        selected: 'label',
                        order: 2,
                        data: data.security
                    },
                    {
                        name: 'Wheel Size',
                        inputname: 'wheel_size',
                        selected: 'label',
                        order: 2,
                        data: data.wheel_size
                    },
                ])
            }
        })
    }
    const onChange = (e:any) => {
        const { name, value, checked } = e.target
        if (name) {
            let data:any = [...stateParam[name]]
            if (checked) {
                data.push(value)
                data = new Set([...data])
            } else {
                data = data?.filter((d:any) => d !== value)
            }
            setStateParam({
                ...stateParam,
                [name]: [...data]
            })
        }
    }
    const onChangeSelect = (e:any) => {
        const { name, value } = e.target
        setStateParam({
            ...stateParam,
            [name]: [value.cm_size]
        })
    }
    const onChangeWork = (e:any) => {
        const { name, value } = e.target
        setStateParam({
            ...stateParam,
            [name]: value
        })
    }
    const applyFilter = () => {
        let paramupdate = {...stateParam}
        if(paramupdate.showCyclePrice === "off"){
            delete paramupdate.salary
        }else{
            paramupdate = {
                ...paramupdate,
                salary: '30000'
            }
        }
        const val = queryParam(paramupdate)
        fetchFilterCount(val)
        applyFilterSet(paramupdate)
        handleFilterMobile()
        router.replace(`/${val.replace('&', '?')}`);
    }
    const handleFilterMobile = () => {
        setfilterOpen(!filterOpen)
    }
    return <div className={`col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 filter`}>
        {isMobile ? <Button onClick={handleFilterMobile} className="filter-selectlist">Filters</Button> : null}
        <div className={isMobile ? `filter-mobile ${filterOpen ? 'show' : 'hide'}` : ''}>
            {isMobile ? <h3 className="pb-4 d-flex align-items-center justify-content-between">Filters <Button onClick={handleFilterMobile}>╳</Button></h3> : null}
            <div className="position-relative">
                {
                    filterData?.map((item:any, key:number) => {
                        return <>
                            {key === 1 ? <Card key={key + 'buy'} className='like-buy mb-3'>
                                <h5>How would you like to buy?</h5>
                                <div className='filter-list border-0'>
                                    <RadioInput title='Cash/Card' id='showCyclePrice' value='off' checked={stateParam.showCyclePrice === "off"} name='showCyclePrice' onChange={onChangeWork} />
                                    <RadioInput title='Cycle to Work scheme' id='showCyclePrice_work' checked={stateParam.showCyclePrice === "on"} value='on' name='showCyclePrice' onChange={onChangeWork} />
                                    {stateParam.showCyclePrice === 'on' ? <div>
                                        <div className="form-group">
                                            <label className="form-label">Salary</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">€</span>
                                                <input onKeyPress={onKeyPress} type="text" id="salary" className="form-control" data-name="salary" defaultValue="30000" name="salary" onChange={onChangeWork} />
                                            </div>
                                            <small id="salaryError" className="text-danger d-none">Salary should be greater than or equal to 12570</small>
                                        </div>
                                    </div> : null}
                                </div>
                            </Card> : null}
                            <AccordianCard title={item.name} key={key} toggleOpen={item.isAlwaysOpen}>
                                {item.infoText?.length ? <div className='badge'>
                                    <span className='badge-text'>{item.infoText}</span>
                                </div> : null}
                                <div className='filter-list'>
                                    {
                                        item.type === 'range' ?
                                            <div className='slider-range'>
                                                <div className="text-center pb-3">
                                                    <img className="graph" src="/assets/graph.png" style={{ width: '100%' }} alt="Graph" />
                                                </div>
                                                {/* <RangeSlider min={minMaxPrice[0]} max={minMaxPrice[1]} value={stateParam[item.inputname]?.length ? stateParam[item.inputname]:minMaxPrice} onInput={(val:any) => setStateParam({
                                                    ...stateParam,
                                                    [item.inputname]: val
                                                })} /> */}
                                                <div className="d-flex align-item-center justify-content-between pt-2"><div>£{minMaxPrice[0]}</div><div>{minMaxPrice[1]}</div></div>
                                                <div className="d-flex align-item-center justify-content-between pt-3">
                                                    <div className="d-flex align-item-center"><label>From</label>  <div className="slider-range-input">{'£' + (stateParam[item.inputname]?.length ? stateParam[item.inputname][0]:minMaxPrice[0])}</div></div>
                                                    <div className="d-flex align-item-center"><label>to</label> <div className="slider-range-input">{'£' + (stateParam[item.inputname]?.length ? stateParam[item.inputname][1]:minMaxPrice[1])}</div></div>
                                                </div>
                                            </div>
                                            :
                                            item.type === 'select' ?
                                                <InputSelectDrop placeholder='Select your height' defaultValue={stateParam[item.inputname] ? stateParam[item.inputname][0] : ''} selectParam={item.selected} name={item.inputname} onChangeSelect={onChangeSelect} searchCustom={true} data={item.data?.map((items:any, i:number) => { return { ...items, name: items.label } })} />
                                                :
                                                item.data?.length && Array.isArray(item.data) ?
                                                    item.data?.map((items:any, i:number) => items?.count ?<RadioInput key={i} checked={stateParam[item.inputname]?.includes(items[item.selected])} value={items[item.selected]} name={item.inputname} title={items.label === 'in_stock' ? 'In stock now' : items.label} onChange={onChange} count={items.count} id={items.label} />:null)
                                                    : <>
                                                        <span className='badge-text badge-text-small pb-3 d-block'>POPULAR BRANDS</span>
                                                        {item.data?.popular_brands?.map((items:any, i:number) => items?.count ?<RadioInput key={i} checked={stateParam[item.inputname]?.includes(items[item.selected])} value={items[item.selected]} name={item.inputname} onChange={onChange} title={items.label} count={items.count} id={items.label} />:null)}
                                                        {/* <hr size="3" width="100%" color="black" /> */}
                                                        {item.data?.other_brands?.map((items:any, i:number) => items?.count ?<RadioInput key={i} checked={stateParam[item.inputname]?.includes(items[item.selected])} value={items[item.selected]} name={item.inputname} onChange={onChange} title={items.label} count={items.count} id={items.label} />:null)}
                                                    </>
                                    }
                                </div>
                            </AccordianCard>
                        </>
                    })
                }
                <Button type='button' onClick={() => applyFilter()} className='btn btn-secondary apply_btn'>Apply</Button>
            </div>
        </div>
    </div>
}