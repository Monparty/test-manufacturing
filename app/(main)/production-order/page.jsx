/* eslint-disable react-hooks/immutability */
"use client";
import UseButton from "@/app/components/inputs/UseButton";
import ColActionTable from "@/app/components/utility/ColActionTable";
import UseModal from "@/app/components/utility/UseModal";
import UseTable from "@/app/components/utility/UseTable";
import { useColumnSearch } from "@/app/hooks/useColumnSearch";
import { formatDatefromDB } from "@/app/hooks/useFormatDatefromDB";
import apiClient from "@/app/services/api";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./form";

function Page() {
    const { columnSearch } = useColumnSearch();
    const { control, setValue } = useForm();
    const [isModalOpen, setIsModalOpen] = useState({ open: false, data: null });
    const [dataSource, setDataSource] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);

    useEffect(() => {
        getDataList();
        getDataListInventory();
    }, []);

    const getDataList = async () => {
        try {
            const res = await apiClient.getProductionOrder();
            setDataSource(res);
        } catch (error) {
            console.error("error", error);
        }
    };

    const getDataListInventory = async () => {
        try {
            const res = await apiClient.getInventory();
            setInventoryData(res);
        } catch (error) {
            console.error("error", error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            let result = confirm("คุณต้องการลบรายการนี้หรือไม่?");
            if (!result) return;
            await apiClient.deleteProductionOrder(id);
            getDataList();
            alert("ลบข้อมูลสำเร็จ");
        } catch (error) {
            console.error("error", error);
        }
    };

    const columns = [
        {
            title: "ชื่อรายการ",
            dataIndex: "product",
            key: "product",
            ...columnSearch("product", control, setValue),
        },
        {
            title: "รหัส",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "จำนวน",
            dataIndex: "quantity",
            key: "quantity",
            sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: "สถานะ",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "วันกำหนดส่ง",
            dataIndex: "dueDate",
            key: "dueDate",
            render: (value) => {
                return <div className="flex justify-center">{formatDatefromDB(value)}</div>;
            },
            sorter: (a, b) => a.dueDate.localeCompare(b.dueDate),
        },
        {
            title: "วันที่สร้าง",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (value) => {
                return <div className="flex justify-center">{formatDatefromDB(value)}</div>;
            },
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
            defaultSortOrder: "createdAt",
        },
        {
            title: "จัดการ",
            dataIndex: "action",
            key: "action",
            width: 120,
            render: (_, record) => (
                <ColActionTable
                    onEdit={() => setIsModalOpen({ open: true, data: record })}
                    onDelete={() => handleDeleteItem(record.id)}
                />
            ),
        },
    ];

    return (
        <main>
            <div className="flex justify-end mb-4">
                <UseButton
                    type="primary"
                    onClick={() => setIsModalOpen({ open: true, data: null })}
                    label={
                        <div className="flex gap-1 items-center">
                            <PlusOutlined />
                            สร้างคำสั่งผลิต
                        </div>
                    }
                />
            </div>
            <UseTable dataSource={dataSource} columns={columns} />
            <UseModal modal={isModalOpen.open} setModal={setIsModalOpen} title="สร้างคำสั่งผลิต">
                <Form
                    modal={isModalOpen}
                    setModal={setIsModalOpen}
                    getDataList={getDataList}
                    inventoryData={inventoryData}
                />
            </UseModal>
        </main>
    );
}

export default Page;
