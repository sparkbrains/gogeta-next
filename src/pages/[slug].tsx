import Home from '<prefix>/component/home';
import { withContext } from '<prefix>/context/appContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
function EbayLp({ context,data }: any) {
    return <Home context={context} dataCal={data}/>;
}
export async function getServerSideProps(context: any) {
    const { query } = context
    const baseURL = process.env.NEXT_PUBLIC_API_URL_UK_Free
    const response = await fetch(baseURL + `tenant/invitation-settings?accountNumber=${query.slug}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await response.json()
    return {
        props: {
            data: { ...data },
        },
    }
}
export default withContext(EbayLp);