import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { MainHead } from '../component/main-head';
import Applayout from '<prefix>/layout/applayout';
import Welcome from '<prefix>/component/home/welcome';
import SaveUp from '<prefix>/component/home/saveUp';
import TheProcess from '<prefix>/component/home/theProcess';
import HelpingHand from '<prefix>/component/home/helpingHand';
import SavingCalculate from '<prefix>/component/home/savingCalculate';
import { withContext } from '<prefix>/context/appContext';
import { homeList } from '<prefix>/json/pages'
import StoreFinder from '<prefix>/component/storefinder';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { applyCalculator } from '<prefix>/common/utilits';
import { FormC } from '<prefix>/common/validate';
import { Form } from 'react-bootstrap';
import UKFreeSiteCalculate from '<prefix>/component/home/ukFreesiteCalculate';
function EbayLp({ context }: any) {
    const host: string = context.host
    const [data,setData]=useState({})
    const router = useRouter()
    const { process, helpinghand, saveUpto } = host.includes('uk') ? homeList.uk : homeList.ebay
    useEffect(() => {
        if (router.query?.params?.length) {
            const obj: any = JSON.parse(window.atob(`${router.query.params}`))
            setData(obj)
        }
    }, [router])
    return (
        <Applayout className='ebay w-100 m-0 pt-0'>
            <div className={`main-back ${host.includes('uk') ? 'mainBcLpafbf' : ''}`}>
                <Welcome host={host} data={data}/>
                <SaveUp data={saveUpto} host={host}/>
                <TheProcess data={host.includes('Market') ?homeList.ebay.process: process} host={host}/>
                {helpinghand ? <HelpingHand /> : <UKFreeSiteCalculate data={data}/>}
            </div>
            {host.includes('uk') ?
                <section className='mltSection findlocalBike'>
                    <Container>
                        <div className='bikeFindMap poreZindex'>
                            <h3>Find your local bike shop</h3>
                            <div className='mapInner'>
                                <StoreFinder type='uk' />
                            </div>
                        </div>
                    </Container>
                </section>
                : <div className='ebay-main'>
                    <SavingCalculate />
                    <div className='call-us'>
                        <Container>
                            <MainHead title="Call to action" />
                            <p>Call to action</p>
                            <div className='d-flex align-items-center'>
                                <Button type="button" className='customSiteBtn me-2'>Browse bikes <i className="fa-solid fa-angle-right"></i></Button>
                                <Button type="button" className='customSiteBtn transpBtn'>Speak to an expert <i className="fa-solid fa-angle-right"></i></Button>
                            </div>
                        </Container>
                    </div>
                </div>}
        </Applayout>
    );
}

export default withContext(EbayLp);