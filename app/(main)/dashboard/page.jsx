/* eslint-disable react-hooks/immutability */
"use client";
import apiClient from "@/app/services/api";
import { FormOutlined, InboxOutlined, PaperClipOutlined, RobotOutlined, ToolOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";

function Page() {
    const [dashboardData, setDashboardData] = useState({
        productionOrderData: [],
        productionRecordData: [],
        inventoryData: [],
        machineData: [],
        maintenanceLogData: [],
    });
    const { productionOrderData, productionRecordData, inventoryData, machineData, maintenanceLogData } = dashboardData;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [productionOrder, productionRecord, inventory, machineData, maintenanceLog] = await Promise.all([
                apiClient.getProductionOrder(),
                apiClient.getProductionRecord(),
                apiClient.getInventory(),
                apiClient.getMachine(),
                apiClient.getMaintenanceLog(),
            ]);
            setDashboardData({
                productionOrderData: productionOrder,
                productionRecordData: productionRecord,
                inventoryData: inventory,
                machineData: machineData,
                maintenanceLogData: maintenanceLog,
            });
        } catch (error) {
            console.error("error", error);
        }
    };

    // const { productionOrderData, productionRecordData, inventoryData, machineData, maintenanceLogData } = dashboardData;

    return (
        <main className="grid gap-4">
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <div className="h-40 w-full border border-x rounded bg-blue-400 p-4">
                    <div className="border border-x p-2 rounded-full bg-white flex gap-2 items-center">
                        <div className="h-8 w-8 border border-x rounded-full flex items-center justify-center">
                            <PaperClipOutlined />
                        </div>
                        สร้างใบสั่งผลิต
                    </div>
                    <div className="text-4xl font-semibold flex justify-center py-2 mt-3 rounded border border-x bg-white">
                        {productionOrderData?.length}
                    </div>
                </div>
                <div className="h-40 w-full border border-x rounded bg-red-400 p-4">
                    <div className="border border-x p-2 rounded-full bg-white flex gap-2 items-center">
                        <div className="h-8 w-8 border border-x rounded-full flex items-center justify-center">
                            <FormOutlined />
                        </div>
                        บันทึกผลการผลิต
                    </div>
                    <div className="text-4xl font-semibold flex justify-center py-2 mt-3 rounded border border-x bg-white">
                        {productionRecordData?.length}
                    </div>
                </div>
                <div className="h-40 w-full border border-x rounded bg-green-400 p-4">
                    <div className="border border-x p-2 rounded-full bg-white flex gap-2 items-center">
                        <div className="h-8 w-8 border border-x rounded-full flex items-center justify-center">
                            <InboxOutlined />
                        </div>
                        จัดการสินค้าใน Stock
                    </div>
                    <div className="text-4xl font-semibold flex justify-center py-2 mt-3 rounded border border-x bg-white">
                        {inventoryData?.length}
                    </div>
                </div>
                <div className="h-40 w-full border border-x rounded bg-yellow-400 p-4">
                    <div className="border border-x p-2 rounded-full bg-white flex gap-2 items-center">
                        <div className="h-8 w-8 border border-x rounded-full flex items-center justify-center">
                            <RobotOutlined />
                        </div>
                        ดูสถานะเครื่องจักร แจ้งซ่อม
                    </div>
                    <div className="text-4xl font-semibold flex justify-center py-2 mt-3 rounded border border-x bg-white">
                        {machineData?.length}
                    </div>
                </div>
                <div className="h-40 w-full border border-x rounded bg-pink-400 p-4">
                    <div className="border border-x p-2 rounded-full bg-white flex gap-2 items-center">
                        <div className="h-8 w-8 border border-x rounded-full flex items-center justify-center">
                            <ToolOutlined />
                        </div>
                        ดูประวัติการแจ้งซ่อม
                    </div>
                    <div className="text-4xl font-semibold flex justify-center py-2 mt-3 rounded border border-x bg-white">
                        {maintenanceLogData?.length}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <div className="flex-2 border border-x rounded bg-blue-50">
                    <LineChart />
                </div>
                <div className="flex-1 border border-x rounded bg-blue-50">
                    <BarChart />
                </div>
            </div>
            <div className="border h-100 border-x rounded bg-blue-50">
                <PieChart />
            </div>
        </main>
    );
}

export default Page;
