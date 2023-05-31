import React, { Component, createContext } from 'react'
import { withRouter } from 'next/router';
export const MainContext = createContext({});
interface IProps {
    children: any;
}
class AppContext extends Component<any> {
    constructor(props: any) {
        super(props)
        this.state = {
            host: process.env.NEXT_PUBLIC_APP_ENV
        }
    }

    componentDidMount(): void {
        if (typeof window !== "undefined") {
            this.setState({
                ...this.state,
                host: window.location.host === 'collider.gogeta.bike' ? 'ukMarket' : process.env.NEXT_PUBLIC_APP_ENV
            })
        }
    }

    render() {
        console.log(this.state, 'state===');
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
