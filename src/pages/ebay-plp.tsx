import { useState } from 'react';
import { useEffect } from 'react';
import Fetch from '../common/fetch';
import { priceCalculator, queryParam } from '../common/utilits';
import ProductList from '../component/product-list';
import CircularProgress from '../component/progress';
import Applayout from '../layout/applayout';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from "next/router";
import Filter from '../component/filter/filter_newdesign';
import Filterselected from '../component/filter/filterselected';
function EbayPLP({ user }: any) {    
    const router = useRouter()
    const [productList, setProductList] = useState<any>({})
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [sortBy, setSortBy] = useState('')
    const [param, setParam] = useState({
        live_stock: [],
        size: [],
        category_type: [],
        colour: [],
        features: [],
        brands: [],
        security: [],
        price: [],
        wheel_size: [],
        showCyclePrice: 'off',
        listing_type:'ebikes',
        salary: ''
    })
    useEffect(() => {
        const val: any = router.query
        const data = {
            live_stock: val?.live_stock?.split(',') || [],
            size: val?.size?.split(',') || [],
            category_type: val?.category_type?.split(',') || [],
            colour: val?.colour?.split(',') || [],
            features: val?.features?.split(',') || [],
            brands: val?.brands?.split(',') || [],
            security: val?.security?.split(',') || [],
            wheel_size: val?.wheel_size?.split(',') || [],
            price: val?.price?.split('-') || [],
            showCyclePrice: val?.showCyclePrice?.length ?val?.showCyclePrice : "off",
            listing_type: val?.listing_type?.length ?val?.listing_type : "ebikes",
            salary: val?.salary || "",
        }
        setSortBy(val?.sort_by || '')
        setParam(data)
        setResult(user,page, data)
    }, [router.query])
    const fetchAllData = (page: number, search = '') => {
        let searchParams: any = new URLSearchParams(search)
        const val = Object.fromEntries([...searchParams])
        setIsLoading(true)
        Fetch(`products/?page=${page}&portalDomain=gogeta.dev&${!search?.includes('listing_type')?search+`listing_type=ebikes`:search}`).then(d => {
            if (d?.status) {
                setIsLoading(false)
                setResult(d.data,page, val)
            } else {
                setIsLoading(false)
            }
        })
    }    
    const setResult = (d: any,page:number, val: any) => {
        let result = d?.results
        if (Object.keys(val)?.length && val?.showCyclePrice === "on" && val?.salary?.length) {
            result = priceCalculator(val?.salary, d?.results)
        }
        const data = {
            ...d,
            results: page > 1 ? [
                ...productList?.results,
                ...result,
            ] : result
        }
        setProductList(data)
    }    
    const applyFilter = (stateParam: any) => {
        const val = queryParam(stateParam)
        setParam(Object.keys(stateParam)?.length ? stateParam : {
            live_stock: [],
            size: [],
            category_type: [],
            colour: [],
            features: [],
            brands: [],
            price: [],
            security: [],
            wheel_size: [],
            showCyclePrice: "off",
            salary: "",
        })
        fetchAllData(1, val)
    }
    const scrollEnd = () => {
        if (!productList?.next) {
            setHasMore(false)
            return;
        }
        const i = page + 1
        setPage(i)
        const val = queryParam(param)
        fetchAllData(i, val)
    } 
    const onChangeSort = (e: any) => {
        const { name, value } = e.target
        setSortBy(value)
        const val = queryParam({ ...param, [name]: value?.length ? [value] : [] })
        router.replace(`/ebay-plp${val.replace('&', '?')}`)
        fetchAllData(1, val)
    }    
    return (
        <Applayout ebay={true} className='m-0 plp-back'>
            <div className='container ebay-plp'>
                <div className='row'>
                    <Filter applyFilterSet={applyFilter} param={param} newDesign={true}/>
                    <div className='col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 album-right'>
                        <div className='d-flex align-items-center justify-content-between product-sort'>
                            <p>{productList?.count || 0} models found</p>
                            <div className='product-sort-list'>Sort By:<select value={sortBy} onChange={onChangeSort} name='sort_by'>
                                <option value=''>Availability</option>
                                <option value='low_to_high'>Price Low to High</option>
                                <option value='high_to_low'>Price High to Low</option>
                            </select></div>
                        </div>
                        <Filterselected param={param} applyFilterSet={applyFilter} newDesign={true}/>
                        <InfiniteScroll
                            dataLength={productList?.results?.length || 0}
                            next={scrollEnd}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                            loader={isLoading ? <div className="text-center pt-2"><CircularProgress /></div> : ''}
                            inverse={false} //
                            className='row pt-1'
                            hasMore={hasMore}
                            scrollableTarget="scrollableDiv"
                        >
                            {
                                productList?.results?.map((item: any, key: number) => <div className='col-md-4 col-12 mb-4' key={key}><ProductList item={item} newDesign={true}/></div>)
                            }
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </Applayout>
    );
}
export async function getServerSideProps(context: any) {
    const search = context?.resolvedUrl.replace('/?', '&')
    const baseURL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(baseURL + `products/?page=${1}&portalDomain=gogeta.dev&listing_type=ebikes${search?.includes('showCyclePrice')?search:'&showCyclePrice=off'}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let data = await response.json()
    return {
        props: {
            user: { ...data },
        },
    }
}

export default EbayPLP;