import { withContext } from "<prefix>/context/appContext";
import { useEffect, useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
interface IProps {
    children: any,
    className: string,
    context: any
}
function Applayout({ children, className = '', context }: IProps) {
    return <div className="gogetaMain ebay-header">
        <Header context={context} />
        <div className={`main ${className}`}>
            {children}
            <Footer context={context} />
        </div>
    </div>
}
export default withContext(Applayout)