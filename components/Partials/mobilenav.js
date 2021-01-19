import Link from 'next/link'

export default function MobileNav() {
    return (
        <div className="mobilenav">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}
