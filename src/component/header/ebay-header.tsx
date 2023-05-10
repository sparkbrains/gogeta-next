import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from '../image';
export default function EbayHeader(){
    return<header className="header border-0">
    <Navbar expand="lg">
        <Container className='mob_re_non'>
            <Link href="/ebay"><img src="assets/logo/eBay_logo.svg" alt="Gogeta Logo" /></Link>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto ms-lg-5 my-2 my-lg-0"
                    navbarScroll
                >   
                <div className='d-flex align-items-center d-block d-lg-none'>
                    <Nav.Link href="#action4"><Image width="" height="" className="" alt="" src='/assets/img/interface_search_square.svg'/></Nav.Link>
                    <Nav.Link href="#action4"><Image width="" height="" className="" alt="" src='/assets/img/interface_user_square_alternate.svg'/></Nav.Link>
                    </div>
                    <Nav.Link className='d-block d-lg-none' href="#action4">Find Bikes <i className="fa-solid fa-angle-right"></i></Nav.Link>
                    <Nav.Link className='d-block d-lg-none' href="#action4">Help <i className="fa-solid fa-angle-right"></i></Nav.Link>
                </Nav>
                <div className=" align-items-center navbar-nav d-none d-lg-flex">
                    <Nav.Link className='d-none d-lg-block' href="#action4">Find Bikes <i className="fa-solid fa-angle-right"></i></Nav.Link>
                    <Nav.Link className='d-none d-lg-block' href="#action4">Help <i className="fa-solid fa-angle-right"></i></Nav.Link>
                    <Nav.Link className='d-none d-lg-block' href="#action4"><Image src='/assets/img/interface_search_square.svg'/></Nav.Link>
                    <Nav.Link className='d-none d-lg-block' href="#action4"><Image src='/assets/img/interface_user_square_alternate.svg'/></Nav.Link>
                </div>
            </Navbar.Collapse>
            <div className='mbo_lef d-flex align-items-center'>
                {/* <Button type="button" className='customSiteBtn d-block d-lg-none me-3 me-md-4'>Book a demo <i className="fa-solid fa-angle-right"></i></Button> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
            </div>
        </Container>
    </Navbar>
</header>
}