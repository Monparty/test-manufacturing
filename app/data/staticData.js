import { BarChartOutlined, FormOutlined, InboxOutlined, PaperClipOutlined, RobotOutlined } from "@ant-design/icons";

export const pathMap = {
    "/dashboard": (
        <div className="flex gap-2">
            <BarChartOutlined /> Dashboard สรุปภาพรวม
        </div>
    ),
    "/machine-maintenance": (
        <div className="flex gap-2">
            <RobotOutlined /> ดูสถานะเครื่องจักร แจ้งซ่อม
        </div>
    ),
    "/inventory": (
        <div className="flex gap-2">
            <InboxOutlined /> จัดการสินค้าใน Stock
        </div>
    ),
    "/production-record": (
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
        icon: <RobotOutlined />,
    },
    {
        href: "/inventory",
        title: "จัดการสินค้าใน Stock",
        icon: <InboxOutlined />,
    },
    {
        href: "/production-record",
        title: "บันทึกผลการผลิต",
        icon: <FormOutlined />,
    },
    {
        href: "/production-order",
        title: "สร้างใบสั่งผลิต",
        icon: <PaperClipOutlined />,
    },
];

export const taskStatusOptions = [
    {
        value: "PENDING",
        label: "รอผลิต",
    },
    {
        value: "IN_PROGRESS",
        label: "กำลังผลิต",
    },
    {
        value: "COMPLETED",
        label: "เสร็จสิ้น",
    },
];

export const stockLevelOptions = [
    {
        value: "LOW",
        label: "ต่ำมาก",
    },
    {
        value: "NORMAL",
        label: "ปกติ",
    },
    {
        value: "OUT_OF_STOCK",
        label: "สินค้าหมด",
    },
];

export const machineStatusOptions = [
    {
        value: "NORMAL",
        label: "ปกติ",
    },
    {
        value: "PENDING",
        label: "รอดำเนินการ",
    },
    {
        value: "ERROR",
        label: "เกิดข้อผิดพลาด",
    },
];

export const machineStatusMap = {
    NORMAL: { bg1: "bg-blue-100", bg2: "bg-blue-500" },
    PENDING: { bg1: "bg-yellow-100", bg2: "bg-yellow-500" },
    ERROR: { bg1: "bg-red-100", bg2: "bg-red-500" },
};
