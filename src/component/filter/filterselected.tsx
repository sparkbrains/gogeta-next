import { useEffect, useState } from "react"
import { queryParam } from "../../common/utilits"
import Button from "../button"
import Image from "next/image"
import { useRouter } from "next/router"

export default function FilterSelected({ param, applyFilterSet }:any) {
    const router = useRouter()
    const [stateParam, setStateParam] = useState<any>({})
    useEffect(() => {
        setStateParam(param)
    }, [param])
    const [open, setOpen] = useState([])
    const listFilter = (param:any) => {
        let data = []
        for (let item in param) {
            if (param[item]?.length) {
                if(param[item] !== 'ebikes' && param[item] !== 'bikes' && param[item] !== 'off' && item.replaceAll('_', ' ') !== 'salary'){
                data.push({
                    name: item,
                    label: item === 'live_stock' ? 'in stock' : item === 'category_type' ? 'category' : item?.replaceAll('_', ' '),
                    data: param[item]
                })
            }
            }
        }
        return data
    }
    const handleOpen = (id:any) => {
        let data:any = [...open]
        if (data.some((d:any, key:number) => key === id)) {
            data?.map((d:any, key:number) => {
                if (key === id) {
                    data[id] = data[id] ? false : true
                } else {
                    data[key] = false
                }
            })
        } else {
            data[id] = !data[id]
        }
        setOpen(data)
    }
    const removeFilter = (key:any, name:any) => {
        var dataParam:any = []
        if(name === "showCyclePrice"){
            dataParam = 'off'
        }else if(name === "price"){
            dataParam = []
        }else{
        dataParam = [...stateParam[name]]
        dataParam = dataParam?.filter((d:any, i:number) => i !== key)
        }
        let updateParam = {
            ...stateParam,
            [name]: dataParam
        }
        if(updateParam.showCyclePrice === "off"){
            delete updateParam.salary
        }else{
            updateParam = {
                ...updateParam,
                salary: '30000'
            }
        }
        setStateParam(updateParam)
        const val = queryParam(updateParam)
        applyFilterSet(updateParam)
        router.replace(`${router.pathname}${val.replace('&', '?')}`)
    }
    const clearAllFilter = () => {
        applyFilterSet({})
        setStateParam({})
        const slug:any = router.query.companySlug || ''
        router.replace(router.pathname.replace('[companySlug]', slug))
    }
    return listFilter(stateParam)?.length ? <div className="filter-dropdown">
        <div className="d-flex">
            {
                listFilter(stateParam)?.map((item, key) => {
                    return <Button key={key} onClick={() => handleOpen(key)}>
                        {item.label === 'showCyclePrice' ? 'Cycle to Work' :item.name === 'listing_type' ? 'Electric assistance' : item.label}
                        {
                            !open[key] ?
                                <Image src='/go/Icon-Expand.svg' alt='' width={13} height={13} />
                                :
                                <Image src='/go/Icon-Collapse.svg' alt='' width={13} height={12} />
                        }
                        {open[key] ? <div className="filter-dropdown-menu">
                            <ul>
                                {
                                        item.name === "listing_type" ? 
                                        <li><Button onClick={() => removeFilter(null, 'listing_type')}>{item.data} <Image className='close' src='/go/assets/plus.svg' alt='' width={13} height={13} /></Button></li>
                                        :
                                        item.label === 'showCyclePrice' ? 
                                        <li><Button onClick={() => removeFilter(null, 'showCyclePrice')}>Cycle to Work <Image className='close' src='/go/assets/plus.svg' alt='' width={13} height={13} /></Button></li>
                                        :
                                        item.label === "price" ? 
                                        <li><Button onClick={() => removeFilter(null, 'price')}>{item?.data.join(' - ')} <Image className='close' src='/go/assets/plus.svg' alt='' width={13} height={13} /></Button></li>
                                        :
                                    item?.data?.map((items:any, i:number) => {
                                        return <li key={i} ><Button onClick={() => removeFilter(i, item.name)}>{items === 'in_stock' ? 'In Stock' : items} <Image className='close' src='/go/assets/plus.svg' alt='' width={13} height={13} /></Button></li>
                                    })
                                }
                            </ul>
                        </div> : null}
                    </Button>
                })
            }
            <Button type='button' className='clearAll' onClick={clearAllFilter}>Clear all filters</Button>
        </div>

    </div> : null
}