import React, { Component, createContext, useEffect, useState } from 'react'
import { useRouter, withRouter } from 'next/router';
import Fetch from '<prefix>/common/fetch';
export const MainContext = createContext({});
interface IProps {
    children: any;
}
function AppContext(props: IProps) {
    const router = useRouter()
    const [hostUrl, setHostUrl] = useState('')
    const [host, setHost] = useState('')
    const [profile, setProfile] = useState({})
    const [tenantDetail, setTenantDetail] = useState({})
    useEffect(() => {
        if (typeof window !== "undefined") {
            let host = window.location.host === 'collider.gogeta.bike' ? 'ukMarket' : process.env.NEXT_PUBLIC_APP_ENV
            fetchPortal(host)
        }
    }, [])
    useEffect(() => {
        const slug: any = router.query.companySlug || ''
        fetchTenant(slug)
    }, [router.query.companySlug])
    const fetchTenant = (slug: any) => {
        Fetch(`tenant/invitation-settings?accountNumber=${slug}`,null,{baseURL:1}).then(res => {
            if (res?.status) {
                setTenantDetail(res.data)
            }else{
                setTenantDetail({})
            }
        })
    }
    const fetchPortal = (host: any) => {
        Fetch(`portal/${window.location.host}`).then(res => {
            if (res?.status) {
                setHost(host)
                setHostUrl(window.location.host)
                setProfile({ ...res.data, ...res.data.portalDefaultCurrency })
            } else {
                setHost(host)
                setHostUrl(window.location.host)
                setProfile({
                    "currencyCode": "GBP",
                    "currencySymbol": "£",
                    portalLogo: "/go/assets/logo/gogeta_logo_blue.svg"
                })
            }
        })
    }
    return (
        <MainContext.Provider
            value={{
                host: host,
                hostUrl: hostUrl,
                profile: profile,
                tenantDetail:tenantDetail
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
}
export default AppContext;
export const withContext = (Components: any) => (props: any) => {
    return (
        <MainContext.Consumer>
            {(value) => <Components context={value} {...props} />}
        </MainContext.Consumer>
    )
}