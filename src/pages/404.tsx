import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
function Error404() {
    return (
        <Applayout className='w-100 mt-0 bookAdemo'>
           <div className='main w-100 mt-0 pt-0 pb-5'>
                <Container>
                    <div className='errorPage pb-5'>
                        <div className="text-center mb-5">
                        <Image src="/go/assets/img/404errorimg.png" width={676} height={280} alt="404" className='img-fluid' />
                        </div>
                        <div className="error-content text-center">
                            <h2 className="text-center">Oops!</h2>
                            <p className="error-inner-content">Page not found</p>
                            <p className="mt-2">The page you looking for might have been removed
                                had is named changed or temporarily unavailable. </p>
                            <Link href="/" className="btn-error">Go to Homepage</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </Applayout>
    );
}
export default Error404;