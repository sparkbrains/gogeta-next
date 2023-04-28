import { useState } from "react";
import { useMediaQuery } from "../../common/utilits";
import Button from "../button";
import Image from "next/image"
export default function Header() {
    const isMobile = useMediaQuery(900)
    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)
    const handleSearch = () => {
        setSearch(!search)
    }
    const handleMenu = () => {
        setMenu(!menu)
    }
    return <header className={`d-flex align-items-center ${search ? 'search-header' : ''}`}>
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <div className="logo">
                    <Image width={189} height={56} src="/assets/logo/gogeta-logo.svg" alt="Gogeta Logo" />
                    {/* <Image width={300} height={89} src="/static/gogeta/img/gogeta-logo-rev.svg" alt="Gogeta Logo" /> */}
                </div>
                <nav className="main-navigation d-flex align-items-center">
                    {
                         isMobile ?
                         menu &&
                            <Menu isMobile={isMobile} />
                            :
                            <Menu isMobile={false} />
                    }
                    {
                        isMobile ?
                            <>
                                <Button type='button' onClick={handleSearch} className={"search-toggle"}>
                                    <Image src='/assets/header/icon-search-black.svg' width={20} height={20} alt='icon-search-white' />
                                </Button>
                                <div className={`menu-toggle ${menu?'active':''}`}>
                                    <button className={`hamburger hamburger--slider ${menu? 'is-active is-open':'is-closed'}`} type="button" onClick={handleMenu}>
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </>

                            : <Button type='button' onClick={handleSearch} className={"search-toggle-desktop"}>
                                <Image src='/assets/header/icon-search-white.svg' width={20} height={20} alt='icon-search-white' />
                            </Button>
                    }
                </nav>
            </div>
        </div>
    </header>
}
const Menu = ({ isMobile = false }) => {
    return <ul className={`d-lg-flex align-items-center ${isMobile ? 'main-navigation-mobile' : ''}`}>
        <li className="has-dropdown show-ebikes-dropmenu">
            <a href="#">Find eBikes {isMobile ? <span className="nav-count">3,253</span> : null}</a>
        </li>
        <li className="has-dropdown show-bikes-dropmenu">
            <a href="#">Find bikes {isMobile ? <span className="nav-count">1,151</span> : null}</a>
        </li>
        <li className="has-dropdown show-resources-dropmenu">
            <a href="#">Resources</a>
        </li>
        <li>
            <a href="">Retailer</a>
        </li>
        <li className="login">
            <a href="" title="Refresh">
                <Image src="/assets/header/account-with-helmet.svg" width={18} height={20} alt='account-with-helmet' />
            </a>
        </li>
    </ul>
}