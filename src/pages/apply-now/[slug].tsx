import ApplyNowEbay from "<prefix>/component/apply/ebay";
import ApplyNowUK from "<prefix>/component/apply/uk";
import { withContext } from "<prefix>/context/appContext";
import Applayout from "<prefix>/layout/applayout";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
function ApplyNow({context:{host},data}:any) {
    const router = useRouter()
    return <Applayout className='applyNow pt-0'>
        <Container>
            {
                host.includes('uk') ? <ApplyNowUK data={data}/>:<ApplyNowEbay/>
            }
        </Container>
    </Applayout>
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
export default withContext(ApplyNow)