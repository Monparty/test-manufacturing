/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/app/components/inputs/InputNumber";
import InputText from "@/app/components/inputs/InputText";
import UseButton from "@/app/components/inputs/UseButton";
import UseSelect from "@/app/components/inputs/UseSelect";
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
        console.log("value", value);
        try {
            const payload = {
                machineId: 1,
                productionOrderId: 2,
                passedCount: value.passedCount,
                failedCount: value.failedCount,
                remark: value.remark,
            };

            let res;
            if (modal?.data?.id) {
                // แก้ไข
                res = await apiClient.updateProductionRecord(modal.data.id, payload);
            } else {
                // เพิ่ม
                res = await apiClient.addProductionRecord(payload);
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
                <UseSelect control={control} name="machineId" label="เครื่องจักร" options={[{ label: 1, value: 1 }]} />
                <UseSelect
                    control={control}
                    name="productionOrderId"
                    label="ใบสั่งผลิต"
                    options={[{ label: 1, value: 1 }]}
                />
                <UseSelect
                    control={control}
                    name="inventoryId"
                    label="สินค้าใน Stock"
                    options={[{ label: 1, value: 1 }]}
                />
                <InputNumber control={control} name="quantity" label="จำนวน" />
                <InputNumber control={control} name="passedCount" label="จำนวนที่ผ่านมาตรฐาน" />
                <InputNumber control={control} name="failedCount" label="จำนวนที่ไม่ผ่านมาตรฐาน" />
            </div>
            <InputText control={control} name="remark" label="หมายเหตุ" />
            <div className="flex justify-center">
                <UseButton label="บันทึก" type="primary" htmlType="submit" />
            </div>
        </form>
    );
}

export default Form;
