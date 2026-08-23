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
    const [productionOrderOptions, setProductionOrderOptions] = useState([]);
    const [machineOptions, setMachineOptions] = useState([]);

    useEffect(() => {
        getDataList();
        getDataListProductionOrder();
        getDataListMachine();
    }, []);

    const getDataList = async () => {
        try {
            const res = await apiClient.getProductionRecord();
            setDataSource(res);
        } catch (error) {
            console.error("error", error);
        }
    };

    const getDataListProductionOrder = async () => {
        try {
            const res = await apiClient.getProductionOrder();
            const formatData = res.map((item) => ({
                value: item.id,
                label: item.product,
            }));
            setProductionOrderOptions(formatData);
        } catch (error) {
            console.error("error", error);
        }
    };

    const getDataListMachine = async () => {
        try {
            const res = await apiClient.getMachine();
            const formatData = res.map((item) => ({
                value: item.id,
                label: item.name,
            }));
            setMachineOptions(formatData);
        } catch (error) {
            console.error("error", error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            let result = confirm("คุณต้องการลบรายการนี้หรือไม่?");
            if (!result) return;
            await apiClient.deleteProductionRecord(id);
            getDataList();
            alert("ลบข้อมูลสำเร็จ");
        } catch (error) {
            console.error("error", error);
        }
    };

    const columns = [
        {
            title: "เครื่องจักร",
            dataIndex: "machineId",
            key: "machineId",
            ...columnSearch("machineId", control, setValue),
            render: (value) => {
                return (
                    <div className="flex justify-center">
                        {machineOptions?.find((item) => item.value === value)?.label || ""}
                    </div>
                );
            },
        },
        {
            title: "ใบสั่งผลิต",
            dataIndex: "productionOrderId",
            key: "productionOrderId",
            ...columnSearch("productionOrderId", control, setValue),
            render: (value) => {
                return (
                    <div className="flex justify-center">
                        {productionOrderOptions?.find((item) => item.value === value)?.label || ""}
                    </div>
                );
            },
        },
        {
            title: "จำนวนที่ผ่านมาตรฐาน",
            dataIndex: "passedCount",
            key: "passedCount",
        },
        {
            title: "จำนวนที่ไม่ผ่านมาตรฐาน",
            dataIndex: "failedCount",
            key: "failedCount",
        },
        {
            title: "หมายเหตุ",
            dataIndex: "remark",
            key: "remark",
        },
        {
            title: "วันที่สร้าง",
            dataIndex: "producedAt",
            key: "producedAt",
            render: (value) => {
                return <div className="flex justify-center">{formatDatefromDB(value)}</div>;
            },
            sorter: (a, b) => a.producedAt.localeCompare(b.producedAt),
            defaultSortOrder: "producedAt",
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
                            บันทึกผลการผลิต
                        </div>
                    }
                />
            </div>
            <UseTable dataSource={dataSource} columns={columns} />
            <UseModal modal={isModalOpen.open} setModal={setIsModalOpen} title="บันทึกผลการผลิต">
                <Form
                    modal={isModalOpen}
                    setModal={setIsModalOpen}
                    getDataList={getDataList}
                    productionOrderOptions={productionOrderOptions}
                    machineOptions={machineOptions}
                />
            </UseModal>
        </main>
    );
}

export default Page;
