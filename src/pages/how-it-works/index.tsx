import { withContext } from '<prefix>/context/appContext';
import HowWorks from '<prefix>/component/how-works';
function HowItWorks({ context }: any) {
    return <HowWorks context={context}/>
}
export default withContext(HowItWorks)