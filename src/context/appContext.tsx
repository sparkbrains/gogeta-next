import React, { Component, createContext } from 'react'
export const MainContext = createContext({});
interface IProps {
    children: any;
}
class AppContext extends Component<IProps> {
    constructor(props:IProps){
        super(props)
        this.state= {
            host:process.env.NEXT_PUBLIC_APP_ENV
        }
    }
    
    componentDidMount(): void {
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
export default AppContext;
export const withContext = (Components:any) => (props:IProps) => {
    return (
        <MainContext.Consumer>
            {(value) => <Components context={value} {...props} />}
        </MainContext.Consumer>
    )
}
