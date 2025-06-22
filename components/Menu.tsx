import Link from "next/link";

export default function Menu() {
    return (
        <div>
            <Link href='/'>
                <i className="fa fa-home mr-2"></i>
                Home
            </Link>
            <Link href='/counter'>
                <i className="fa fa-file mr-2"></i>
                Counter
            </Link>
            <Link href='/about'>
                <i className="fa fa-user mr-2"></i>
                About
            </Link>
            <Link href='/product'>
                <i className="fa fa-box mr-2"></i>
                สินค้า
            </Link>
            <Link href='/use-component'>
                <i className="fa fa-list-alt mr-2"></i>
                Components
            </Link>
        </div>
    )
}