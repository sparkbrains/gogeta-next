import { useState } from "react";
import { useMediaQuery } from "../../common/utilits";
import Button from "../button";
import Image from "next/image"
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import { withContext } from "<prefix>/context/appContext";
import { useRouter } from "next/router";
const logo: any = {
    uk: '/go/assets/logo/logo_without.svg',
    ukMarket: '/go/assets/logo/logo_without.svg',
    ebay: '/go/assets/logo/eBay_logo.svg'
}
function Header({ context }: any) {
    // const {context} = props
    const { host, profile,tenantDetail } = context
    const router = useRouter()
    const isMobile = useMediaQuery(900)
    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)
    const handleSearch = () => {
        setSearch(!search)
    }
    const handleMenu = () => {
        setMenu(!menu)
    }
    return <header className="header border-0">
        <Navbar expand="lg">
            <Container className='mob_re_non'>
                <Link href={`/${router.query.companySlug ?router.query.companySlug:''}`} className='header-logo'>
                    {
                        tenantDetail?.companyKnownAs ? tenantDetail?.companyKnownAs:
                    <Image width={145} height={60} className='logo-nav' src={profile?.portalLogo} alt="Gogeta Logo" />
                    }
                </Link>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className={`me-auto ms-lg-5 my-2 my-lg-0 ${host.includes('uk') ? 'd-flex align-item-center justify-content-between w-100' : ''}`}
                        navbarScroll
                    >
                        {
                            host.includes('uk') ?
                                <>
                                    <Link className='nav-link' href={(router.query.companySlug ?'/'+router.query.companySlug:'') + `/how-it-works/`}>How it works </Link>
                                    <div className="d-flex align-item-center">
                                        {
                                            host.includes('Market') ?
                                                <>
                                                    {/* <Link className='nav-link' href="/">Apply now </Link> */}
                                                    {/* ${host.includes('Market') ? 'off' : 'on'} */}
                                                    <Button type="button" className='customSiteBtn text-white' onClick={() => router.push((router.query.companySlug ?'/'+router.query.companySlug:'') + `/bikes?listing_type=ebikes&showCyclePrice=on`)}>Browse bikes <i className="fa-solid fa-angle-right"></i></Button>
                                                </>
                                                :
                                                <Button type="button" className='customSiteBtn text-white' onClick={() => router.push((router.query.companySlug ?'/'+router.query.companySlug:'') + `/apply-now/`)}>Apply now <i className="fa-solid fa-angle-right"></i></Button>
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <div className='d-flex align-items-center d-block d-lg-none'>
                                        <Nav.Link href="#action4"><Image width={45} height={44} alt="search_ico" src='/go/assets/img/interface_search_square.svg' /></Nav.Link>
                                        <Nav.Link href="#action4"><Image width={45} height={44} alt="profile_ico" src='/go/assets/img/interface_user_square_alternate.svg' /></Nav.Link>
                                    </div>
                                    <Link className='d-block d-lg-none nav-link' href={`/bikes?listing_type=ebikes&showCyclePrice=${host === 'ukMarket' ? 'off' : 'on'}`}>Find Bikes <i className="fa-solid fa-angle-right"></i></Link>
                                    <Link className='d-block d-lg-none nav-link' href="">Help <i className="fa-solid fa-angle-right"></i></Link>
                                    <Link className='d-block d-lg-none nav-link' href={host === 'ukMarket' ? "" : "/apply-now"}>Apply for your voucher now <i className="fa-solid fa-angle-right"></i></Link>
                                </>
                        }
                    </Nav>
                    {
                        !host.includes('uk') ? <div className=" align-items-center navbar-nav d-none d-lg-flex">
                            <Link className='d-none d-lg-block nav-link' href={`/bikes?listing_type=ebikes&showCyclePrice=${host === 'ukMarket' ? 'off' : 'on'}`}>Find Bikes <i className="fa-solid fa-angle-right"></i></Link>
                            <Link className='d-none d-lg-block nav-link' href="">Help <i className="fa-solid fa-angle-right"></i></Link>
                            <Link className='d-none d-lg-block nav-link' href={host === 'ukMarket' ? "" : "/apply-now"}>Apply for your voucher now <i className="fa-solid fa-angle-right"></i></Link>
                            <Nav.Link className='d-none d-lg-block' href="#action4"><Image width={45} height={44} alt="search_ico" src='/go/assets/img/interface_search_square.svg' /></Nav.Link>
                            <Nav.Link className='d-none d-lg-block' href="#action4"><Image width={45} height={44} alt="profile_ico" src='/go/assets/img/interface_user_square_alternate.svg' /></Nav.Link>
                        </div> : null}
                </Navbar.Collapse>
                <div className='mbo_lef d-flex align-items-center'>
                    {/* <Button type="button" className='customSiteBtn d-block d-lg-none me-3 me-md-4'>Book a demo <i className="fa-solid fa-angle-right"></i></Button> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </div>
            </Container>
        </Navbar>
    </header>
}
export default Header