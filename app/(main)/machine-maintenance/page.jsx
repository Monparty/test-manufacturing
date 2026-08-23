/* eslint-disable react-hooks/immutability */
"use client";
import UseButton from "@/app/components/inputs/UseButton";
import CardMachine from "./components/CardMachine";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import apiClient from "@/app/services/api";
import UseModal from "@/app/components/utility/UseModal";
import Form from "./form";

function Page() {
    const [isModalOpen, setIsModalOpen] = useState({ open: false, data: null });
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
            <div className="grid grid-cols-2 gap-4">
                {dataSource.length > 0 &&
                    dataSource.map((item, index) => <CardMachine key={index} handleDeleteItem={handleDeleteItem} data={item} />)}
            </div>
            <UseModal modal={isModalOpen.open} setModal={setIsModalOpen} title="เพิ่มเครื่องจักร">
                <Form modal={isModalOpen} setModal={setIsModalOpen} getDataList={getDataList} />
            </UseModal>
        </main>
    );
}

export default Page;
