import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import { Container } from "react-bootstrap";
function Error404() {
    return (
        <Applayout className='w-100 mt-0 bookAdemo'>
           <div className='main w-100 mt-0 pt-0 pb-5'>
                <Container>
                    <div className='errorPage pb-5'>
                        {/* <Image src="/assets/img/404errorimg.png" width={} alt="404" className='img-fluid' /> */}
                        <div className="error-content text-center">
                            <h2 className="text-center">Oops!</h2>
                            <p className="error-inner-content">Page not found</p>
                            <p className="mt-2">The page you looking for might have been removed
                                had is named changed or temporarily unavailable. </p>
                            <a href="/" className="btn-error">Go to Homepage</a>
                        </div>
                    </div>
                </Container>
            </div>
        </Applayout>
    );
}
export default Error404;