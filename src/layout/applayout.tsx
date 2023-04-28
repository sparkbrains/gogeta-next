import Footer from "../component/footer";
import Header from "../component/header";

export default function Applayout({children}:any) {
    return <>
        <Header />
        <div className="main">
            {children}
        </div>
        <Footer/>
    </>
}