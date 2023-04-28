import Link from "next/link"

export default function Footer() {
    return <footer className="footer">
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-md-3 col-lg-2 footer-logo-col">
                        <img className="footer-logo" src="/assets/logo/gogeta-logo-rev.svg" alt="Gogeta" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="footer-col">
                            <h4 className="footer-col__header" data-id="mobile-ebikes">eBikes</h4>
                            <div className="hide-mobile" id="mobile-ebikes">
                                <ul>
                                    <li className="nav-leisure-ebike">
                                        <Link href="">Leisure eBikes</Link>
                                    </li>
                                    <li className="nav-endurance-ebike">
                                        <Link href="">Road eBikes</Link>
                                    </li>
                                    <li className="nav-cargo-ebike">
                                        <Link href="">Cargo eBikes</Link>
                                    </li>
                                    <li className="nav-commuting-ebike">
                                        <Link href="">Commuting eBikes</Link>
                                    </li>
                                    <li className="nav-gravel-ebike">
                                        <Link href="">Gravel eBikes</Link>
                                    </li>
                                    <li className="nav-mountain-ebike">
                                        <Link href="">Mountain eBikes</Link>
                                    </li>
                                    <li className="nav-mountain-ebike">
                                        <Link href="">Folding eBikes</Link>
                                    </li>
                                    <li><Link href="">Shop all</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="footer-col">
                            <h4 className="footer-col__header" data-id="mobile-bikes">Bikes</h4>
                            <div className="hide-mobile" id="mobile-bikes">
                                <ul>
                                    <li>
                                        <Link href="">Performance Road</Link>
                                    </li>
                                    <li>
                                        <Link href="">Endurance Road</Link>
                                    </li>
                                    <li>
                                        <Link href="">Aero Road</Link>
                                    </li>
                                    <li>
                                        <Link href="">Ultralight Road</Link>
                                    </li>
                                    <li>
                                        <Link href="">Gravel</Link>
                                    </li>
                                    <li><Link href="">Shop all</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="footer-col">
                            <h4 className="footer-col__header" data-id="mobile-resources">Resources</h4>
                            <div className="hide-mobile" id="mobile-resources">
                                <ul>
                                    <li><Link href="/blog/category/buyers-guides/">Buyer's guides</Link></li>
                                    <li><Link href="/blog/">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="footer-col">
                            <h4 className="footer-col__header" data-id="mobile-support">Support</h4>
                            <div className="hide-mobile" id="mobile-support">
                                <ul>
                                    <li><Link href="/faqs/">FAQs</Link></li>
                                    <li><Link href="mailto:hello@gogeta.bike">hello@gogeta.bike</Link></li>
                                    <li><Link href="/about-us/">About us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-end">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-md-4">
                        <ul>
                            <li><Link href="/cookie-policy/" target="_blank">Cookie policy</Link></li>
                            <li><Link href="/privacy-policy/" target="_blank">Privacy policy</Link></li>
                            <li><Link href="/terms-conditions/" target="_blank">Terms of use</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <p>Veleomatch Limited t/a Gogeta is a registered company in England and Wales as Velomatch Limited (No. 13403344), c/o Johnston Carmichael, Birchin Court, 20 Birchin Lane, London EC3V 9DU.  We are authorised and regulated by the Financial Conduct Authority under registration number 994240</p>
                    </div>
                    <div className="col-xs-12 col-md-2 text-lg-end">
                        <p>© 2023 Velomatch Ltd. t/a gogeta</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}