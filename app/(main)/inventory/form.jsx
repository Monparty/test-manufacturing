/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/app/components/inputs/InputNumber";
import InputText from "@/app/components/inputs/InputText";
import UseButton from "@/app/components/inputs/UseButton";
import UseSelect from "@/app/components/inputs/UseSelect";
import { stockLevelOptions } from "@/app/data/staticData";
import apiClient from "@/app/services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
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
                itemName: value.itemName,
                quantity: value.quantity,
                minimumStock: value.minimumStock,
                unit: value.unit,
                stockLevel: value.stockLevel,
            };

            let res;
            if (modal?.data?.id) {
                // แก้ไข
                res = await apiClient.updateInventory(modal.data.id, payload);
            } else {
                // เพิ่ม
                res = await apiClient.addInventory(payload);
            }
            if (res.success) {
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
                <InputText control={control} name="itemName" label="ชื่อสินค้า" />
                <InputText control={control} name="unit" label="หน่วย" />
                <InputNumber control={control} name="quantity" label="ปริมาณ" />
                <InputNumber control={control} name="minimumStock" label="ปริมาณต่ำสุด" />
                <UseSelect control={control} name="stockLevel" label="สถานะ" options={stockLevelOptions} />
            </div>
            <div className="flex justify-center">
                <UseButton label="บันทึก" type="primary" htmlType="submit" />
            </div>
        </form>
    );
}

export default Form;
