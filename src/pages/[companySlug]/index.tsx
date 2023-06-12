import Home from '<prefix>/component/home';
import { withContext } from '<prefix>/context/appContext';
function EbayLp({ context }: any) {
    return <Home context={context} dataCal={context.tenantDetail}/>;
}

export default withContext(EbayLp);