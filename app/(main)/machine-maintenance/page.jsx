/* eslint-disable react-hooks/immutability */
"use client";
import UseButton from "@/app/components/inputs/UseButton";
import UseModal from "@/app/components/utility/UseModal";
import apiClient from "@/app/services/api";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import CardMachine from "./components/CardMachine";
import Form from "./form";
import FormMaintain from "./formMaintain";

function Page() {
    const [isModalOpen, setIsModalOpen] = useState({ open: false, data: null });
    const [isModalMaintainOpen, setIsModalMaintainOpen] = useState({ open: false, data: null });
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const res = await apiClient.getMachine();
            setDataSource(res);
        } catch (error) {
            console.error("error", error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            let result = confirm("คุณต้องการลบรายการนี้หรือไม่?");
            if (!result) return;
            await apiClient.deleteMachine(id);
            getDataList();
            alert("ลบข้อมูลสำเร็จ");
        } catch (error) {
            console.error("error", error);
        }
    };
    return (
        <main>
            <div className="flex justify-end mb-4">
                <UseButton
                    type="primary"
                    onClick={() => setIsModalOpen({ open: true, data: null })}
                    label={
                        <div className="flex gap-1 items-center">
                            <PlusOutlined />
                            เพิ่มเครื่องจักร
                        </div>
                    }
                />
            </div>
            {dataSource.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                    {dataSource.map((item, index) => (
                        <CardMachine
                            key={index}
                            handleDeleteItem={handleDeleteItem}
                            setIsModalOpen={setIsModalOpen}
                            setIsModalMaintainOpen={setIsModalMaintainOpen}
                            record={item}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center w-full h-40 bg-slate-100 text-slate-500 rounded">
                    ไม่พบเครื่องจักร
                </div>
            )}
            <UseModal modal={isModalOpen.open} setModal={setIsModalOpen} title="เพิ่มเครื่องจักร">
                <Form modal={isModalOpen} setModal={setIsModalOpen} getDataList={getDataList} />
            </UseModal>
            <UseModal modal={isModalMaintainOpen.open} setModal={setIsModalMaintainOpen} title="แจ้งซ่อม">
                <FormMaintain modal={isModalMaintainOpen} setModal={setIsModalMaintainOpen} getDataList={getDataList} />
            </UseModal>
        </main>
    );
}

export default Page;
