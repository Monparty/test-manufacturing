"use client";
import { menuList } from "@/app/data/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageLogo from "../utility/ImageLogo";

function Sitebar() {
    const pathname = usePathname();
    return (
        <div>
            <div className="mb-4 flex pb-4 border-b border-b-x gap-2 items-center">
                <ImageLogo />
                <h2 className="text-xl font-semibold">
                    Manufacturing
                    <br />
                    system
                </h2>
            </div>
            <ul className="grid gap-4 w-full">
                {menuList.map((item, index) => (
                    <>
                        <Link href={item.href}>
                            <li
                                className={`flex gap-2 border border-x pl-4 py-2 w-full rounded hover:border-l-6 transition-all ${pathname === item.href ? "bg-slate-100 border-l-6" : ""}`}
                                key={index}
                            >
                                {item.icon}
                                {item.title}
                            </li>
                        </Link>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default Sitebar;
