import Link from 'next/link'
import { isMobile } from 'react-device-detect'
export default function Footer() {
    return (
        <footer>
            {!isMobile && <div className="links">
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>}
            <div className="copyright">
                <p>Copyright © 2021 Outline Jutes. All rights reserved.</p>
            </div>
        </footer>
    )
}
