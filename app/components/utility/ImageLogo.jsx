import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

function ImageLogo({ w = 64, h = 64 }) {
    return (
        <Link href="/dashboard">
            <Image src={logo} alt="logo" width={w} height={h} className="rounded" />
        </Link>
    );
}

export default ImageLogo;
