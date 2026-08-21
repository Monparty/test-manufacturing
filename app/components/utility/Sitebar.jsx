"use client";
import { BarChartOutlined, CarryOutOutlined, FormOutlined, InboxOutlined, PaperClipOutlined } from "@ant-design/icons";
import Link from "next/link";

const menuList = [
    {
        href: "/dashboard",
        title: "Dashboard สรุปภาพรวม",
        icon: <BarChartOutlined />,
    },
    {
        href: "/machine-maintenance",
        title: "ดูสถานะเครื่องจักร แจ้งซ่อม",
        icon: <CarryOutOutlined />,
    },
    {
        href: "/inventory",
        title: "สินค้าใน Stock",
        icon: <InboxOutlined />,
    },
    {
        href: "/production-tracking",
        title: "บันทึกผลการผลิต",
        icon: <FormOutlined />,
    },
    {
        href: "/production-order",
        title: "สร้างใบสั่งผลิต",
        icon: <PaperClipOutlined />,
    },
];

function Sitebar() {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 pb-4 border-b border-b-x">Manufacturing system</h2>
            <ul className="grid gap-4 w-full">
                {menuList.map((item, index) => (
                    <li
                        className="flex gap-2 border border-x pl-4 p-1 w-full rounded hover:border-l-6 transition-all"
                        key={index}
                    >
                        {item.icon}
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sitebar;
