/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/app/components/inputs/InputNumber";
import InputText from "@/app/components/inputs/InputText";
import UseButton from "@/app/components/inputs/UseButton";
import UseDatePicker from "@/app/components/inputs/UseDatePicker";
import UseSelect from "@/app/components/inputs/UseSelect";
import { taskStatusOptions } from "@/app/data/staticData";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

function Form({ modal, setModal, getDataList }) {
    const { handleSubmit, reset, control } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    useEffect(() => {
        if (modal.data) {
            // แก้ไข
            reset(modal.data);
        } else {
            // เพิ่ม
            reset({});
        }
    }, [modal]);

    const onSubmit = async (value) => {
        try {
            const payload = {
                product: value.product,
                quantity: value.quantity,
                status: value.status,
                dueDate: value.dueDate,
                customer: value.customer,
            };

            let resp;
            if (modal?.data?.id) {
                // แก้ไข
                resp = await axios.put(`/api/productionOrder/${modal.data.id}`, payload);
            } else {
                // เพิ่ม
                resp = await axios.post("/api/productionOrder", payload);
            }
            if (resp.status === 200) {
                alert("บันทึกสำเร็จ");
                reset({});
                getDataList();
                setModal({ open: false, data: null });
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <InputText control={control} name="product" label="ชื่อสินค้า" />
                <InputNumber control={control} name="quantity" label="จำนวน (หน่วย)" />
                <UseDatePicker control={control} name="dueDate" label="วันกำหนดส่ง" />
                <InputText control={control} name="customer" label="ลูกค้า" />
                <UseSelect control={control} name="status" label="สถานะ" options={taskStatusOptions} />
            </div>
            <div className="flex justify-center">
                <UseButton label="บันทึก" type="primary" htmlType="submit" />
            </div>
        </form>
    );
}

export default Form;
