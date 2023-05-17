import Footer from "../component/footer";
import Header from "../component/header";

export default function Applayout({ children, className = '' }: any) {
    return <div className="gogetaMain ebay-header">
        <Header />
        <div className={`main ${className}`}>
            {children}
            <Footer />
        </div>
    </div>
}