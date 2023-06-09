import Home from '<prefix>/component/home';
import { withContext } from '<prefix>/context/appContext';
function EbayLp({ context }: any) {
    return <Home context={context}/>;
}

export default withContext(EbayLp);