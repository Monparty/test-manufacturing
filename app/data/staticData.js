import { BarChartOutlined, CarryOutOutlined, FormOutlined, InboxOutlined, PaperClipOutlined } from "@ant-design/icons";

export const pathMap = {
    "/dashboard": (
        <div className="flex gap-2">
            <BarChartOutlined /> Dashboard สรุปภาพรวม
        </div>
    ),
    "/machine-maintenance": (
        <div className="flex gap-2">
            <CarryOutOutlined /> ดูสถานะเครื่องจักร แจ้งซ่อม
        </div>
    ),
    "/inventory": (
        <div className="flex gap-2">
            <InboxOutlined /> จัดการสินค้าใน Stock
        </div>
    ),
    "/production-tracking": (
        <div className="flex gap-2">
            <FormOutlined /> บันทึกผลการผลิต
        </div>
    ),
    "/production-order": (
        <div className="flex gap-2">
            <PaperClipOutlined /> สร้างใบสั่งผลิต
        </div>
    ),
};

export const menuList = [
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
        title: "จัดการสินค้าใน Stock",
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
