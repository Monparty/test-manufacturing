"use client";
import { menuList } from "@/app/data/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sitebar() {
    const pathname = usePathname();
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 pb-4 border-b border-b-x">Manufacturing system</h2>
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
