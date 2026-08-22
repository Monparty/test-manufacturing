/* eslint-disable react-hooks/immutability */
"use client";
import UseButton from "@/app/components/inputs/UseButton";
import UseModal from "@/app/components/utility/UseModal";
import UseTable from "@/app/components/utility/UseTable";
import { useColumnSearch } from "@/app/hooks/useColumnSearch";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./form";
import axios from "axios";
import { formatDatefromDB } from "@/app/hooks/useFormatDatefromDB";

function Page() {
    const { columnSearch } = useColumnSearch();
    const { control, setValue } = useForm();
    const [isModalOpen, setIsModalOpen] = useState({ open: false, data: null });
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const resp = await axios.get("/api/productionOrder");
            if (resp.status === 200) {
                setDataSource(resp.data);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            let result = confirm("คุณต้องการลบรายการนี้หรือไม่?");
            if (!result) return;
            await axios.delete(`/api/productionOrder/${id}`);
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
            ...columnSearch("name", control, setValue),
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
            render: (_, record) => {
                return (
                    <div className="flex justify-center gap-2">
                        <UseButton
                            label={<EditOutlined />}
                            size="small"
                            onClick={() => setIsModalOpen({ open: true, data: record })}
                        />
                        <UseButton
                            label={<DeleteOutlined />}
                            size="small"
                            onClick={() => handleDeleteItem(record.id)}
                        />
                    </div>
                );
            },
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
                <Form modal={isModalOpen} setModal={setIsModalOpen} getDataList={getDataList} />
            </UseModal>
        </main>
    );
}

export default Page;
