/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/app/components/inputs/InputNumber";
import InputText from "@/app/components/inputs/InputText";
import UseButton from "@/app/components/inputs/UseButton";
import UseDatePicker from "@/app/components/inputs/UseDatePicker";
import UseSelect from "@/app/components/inputs/UseSelect";
import { machineStatusOptions } from "@/app/data/staticData";
import apiClient from "@/app/services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

function Form({ modal, setModal, getDataList }) {
    const { handleSubmit, reset, control } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: {
            status: "PENDING",
        },
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
                name: value.name,
                status: value.status,
                temp: value.temp,
                load: value.load,
                time: value.time,
            };

            let res;
            if (modal?.data?.id) {
                // แก้ไข
                res = await apiClient.updateMachine(modal.data.id, payload);
            } else {
                // เพิ่ม
                res = await apiClient.addMachine(payload);
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
                <InputText control={control} name="name" label="ชื่อเครื่องจักร" />
                <UseDatePicker control={control} name="time" label="ระยะเวลาการทำงาน" />
                <InputNumber control={control} name="temp" label="อุนภูมิ" />
                <InputNumber control={control} name="load" label="ภาระงาน (%)" />
                <UseSelect control={control} name="status" label="สถานะ" options={machineStatusOptions} />
            </div>
            <div className="flex justify-center">
                <UseButton label="บันทึก" type="primary" htmlType="submit" />
            </div>
        </form>
    );
}

export default Form;
