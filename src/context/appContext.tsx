import React, { Component, createContext } from 'react'
import { withRouter } from 'next/router';
import Fetch from '<prefix>/common/fetch';
export const MainContext = createContext({});
interface IProps {
    children: any;
}
class AppContext extends Component<any> {
    constructor(props: any) {
        super(props)
        this.state = {
            host: '',
            profile: {}
        }
    }

    componentDidMount(): void {
        if (typeof window !== "undefined") {
            let host = window.location.host === 'collider.gogeta.bike' ? 'ukMarket' : process.env.NEXT_PUBLIC_APP_ENV
            this.fetchPortal(host)
            
        }
    }
    fetchPortal = (host: any) => {
        Fetch(`portal/${window.location.host}`).then(res => {
            if (res?.status) {
                this.setState({
                    ...this.state,
                    host: host,
                    hostUrl: window.location.host,
                    profile: { ...res.data, ...res.data.portalDefaultCurrency }
                })
            } else {
                this.setState({
                    ...this.state,
                    host: host,
                    hostUrl: window.location.host,
                    profile: {
                        "currencyCode": "GBP",
                        "currencySymbol": "£",
                        portalLogo: host === 'uk' ? "/assets/logo/logo_without.svg" : '/assets/logo/squaretrade-logo.svg'
                    }
                })
            }
        })
    }
    render() {
        return (
            <MainContext.Provider
                value={{
                    ...this.state,
                }}
            >
                {this.props.children}
            </MainContext.Provider>
        )
    }
}
export default withRouter(AppContext);
export const withContext = (Components: any) => (props: any) => {
    return (
        <MainContext.Consumer>
            {(value) => <Components context={value} {...props} />}
        </MainContext.Consumer>
    )
}