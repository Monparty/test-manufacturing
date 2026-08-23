import Image from "next/image";
import logo from "../../../public/logo.png";

function ImageLogo({ w = 64, h = 64 }) {
    return <Image src={logo} alt="logo" width={w} height={h} className="rounded" />;
}

export default ImageLogo;
