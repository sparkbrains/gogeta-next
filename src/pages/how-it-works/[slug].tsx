import { withContext } from '<prefix>/context/appContext';
import HowWorks from '<prefix>/component/how-works';
function HowItWorksUk({ context }: any) {
    return <HowWorks context={context}/>
}
export default withContext(HowItWorksUk)