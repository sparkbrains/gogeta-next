import ApplyNowEbay from "<prefix>/component/apply/ebay";
import ApplyNowUK from "<prefix>/component/apply/uk";
import { withContext } from "<prefix>/context/appContext";
import Applayout from "<prefix>/layout/applayout";
import { Container } from "react-bootstrap";
function ApplyNowForm({ context}: any) {
    const {host} = context
    
    return <Applayout className='applyNow pt-0'>
        <Container>
            {
                host.includes('uk') ? <ApplyNowUK context={context}/> : <ApplyNowEbay/>
            }
        </Container>
    </Applayout>
}
export default withContext(ApplyNowForm)