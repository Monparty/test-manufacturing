/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/app/components/inputs/InputNumber";
import InputText from "@/app/components/inputs/InputText";
import UseButton from "@/app/components/inputs/UseButton";
import UseDatePicker from "@/app/components/inputs/UseDatePicker";
import UseSelect from "@/app/components/inputs/UseSelect";
import { machineStatusOptions } from "@/app/data/staticData";
import apiClient from "@/app/services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import TableMaintainLog from "./components/TableMaintainLog";

function FormMaintain({ modal, setModal, getDataList }) {
    const [dataSource, setDataSource] = useState([]);
    const { handleSubmit, reset, setValue, control } = useForm({
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
        onGetMachineUnique();
    }, [modal]);

    const onGetMachineUnique = async () => {
        try {
            const res = await apiClient.getMachineUnique(modal?.data?.id);
            const maintenanceLogData = res?.maintenance;
            const lastItem = maintenanceLogData.at(-1);
            setValue("issue", lastItem?.issue);
            setDataSource(maintenanceLogData);
        } catch (error) {
            console.error("error", error);
        }
    };

    const onSubmit = async (value) => {
        try {
            const payload = {
                machineId: modal?.data?.id,
                issue: value.issue,
            };

            const payloadMachine = {
                name: value.name,
                status: value.issue ? "ERROR" : "NORMAL",
                temp: value.temp,
                load: value.load,
                time: value.time,
            };

            const res = await apiClient.addMaintenanceLog(payload);
            await apiClient.updateMachine(modal.data.id, payloadMachine);

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
            <InputText control={control} name="issue" label="รายงานปัญหา" />
            <div className="grid grid-cols-2 gap-4">
                <InputText control={control} name="name" label="ชื่อเครื่องจักร" disabled />
                <UseDatePicker control={control} name="time" label="ระยะเวลาการทำงาน" disabled />
                <InputNumber control={control} name="temp" label="อุนภูมิ" disabled />
                <InputNumber control={control} name="load" label="ภาระงาน (%)" disabled />
                <UseSelect control={control} name="status" label="สถานะ" options={machineStatusOptions} disabled />
            </div>
            <TableMaintainLog dataSource={dataSource} />
            <div className="flex justify-center">
                <UseButton label="บันทึก" type="primary" htmlType="submit" />
            </div>
        </form>
    );
}

export default FormMaintain;
