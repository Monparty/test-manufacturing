"use client";
import BartopHeader from "../components/layout/BartopHeader";
import Sitebar from "../components/layout/Sitebar";
import { pathMap } from "../data/staticData";
import "../globals.css";
import { usePathname } from "next/navigation";

function mapPathFunc(path) {
    return pathMap[path] || "";
}

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const mapPath = mapPathFunc(pathname);

    return (
        <div className="flex h-dvh gap-2 p-2">
            <div className="flex-1 p-4 rounded border bg-white shadow border-x">
                <Sitebar />
            </div>
            <div className="flex-5 p-4 rounded border bg-white shadow border-x">
                <BartopHeader label={mapPath} />
                <div className="p-4 border border-x rounded h-[86dvh] overflow-auto">{children}</div>
            </div>
        </div>
    );
}
