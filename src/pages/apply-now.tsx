import Input from "<prefix>/common/input";
import { FormC } from "<prefix>/common/validate";
import ApplyNowEbay from "<prefix>/component/apply/ebay";
import ApplyNowUK from "<prefix>/component/apply/uk";
import { MainHead } from "<prefix>/component/main-head";
import { withContext } from "<prefix>/context/appContext";
import Applayout from "<prefix>/layout/applayout";
import { Container } from "react-bootstrap";
function ApplyNow({context:{host}}:any) {
    return <Applayout className='applyNow pt-0'>
        <Container>
            {
                host === 'uk' ? <ApplyNowUK/>:<ApplyNowEbay/>
            }
        </Container>
    </Applayout>
}
export default withContext(ApplyNow)