import Link from 'next/link'
import { isMobile } from 'react-device-detect'
export default function Navbar() {
    return (

        <div className="nav stickynav">
            <Link href="/"><h1>OUTLINE JUTES</h1></Link>
            {!isMobile && (
                <>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </>
            )}
        </div>
    )
}
