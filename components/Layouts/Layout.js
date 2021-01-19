import { Fragment } from "react";
import Footer from "../Partials/footer";
import MobileNav from "../Partials/mobilenav";
import Navbar from "../Partials/navbar";
import { isMobile } from 'react-device-detect'

export default function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            {isMobile && <div style={{ height: "59px" }}></div>}
            {isMobile && <MobileNav />}
        </Fragment>
    )
}
