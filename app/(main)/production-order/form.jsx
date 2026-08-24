/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/app/components/inputs/InputNumber";
import InputText from "@/app/components/inputs/InputText";
import UseButton from "@/app/components/inputs/UseButton";
import UseDatePicker from "@/app/components/inputs/UseDatePicker";
import UseSelect from "@/app/components/inputs/UseSelect";
import { taskStatusOptions } from "@/app/data/staticData";
import apiClient from "@/app/services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

function Form({ modal, setModal, getDataList, inventoryData, machineOptions }) {
    const { handleSubmit, reset, watch, getValues, control } = useForm({
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
                product: value.product,
                quantity: value.quantity,
                status: value.status,
                dueDate: value.dueDate,
                machineId: Number(value.machineId),
                customer: value.customer,
            };

            let res;
            if (modal?.data?.id) {
                // แก้ไข
                res = await apiClient.updateProductionOrder(modal.data.id, payload);
            } else {
                // เพิ่ม
                res = await apiClient.addProductionOrder(payload);
            }
            updateInventory();
            updateMachine();
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

    const updateInventory = async () => {
        try {
            const value = getValues();
            const result = inventoryData.map((item) => ({
                ...item,
                value: value[item.id] ?? 0,
            }));

            for (const [index, item] of result.entries()) {
                const payload = {
                    itemName: item.itemName,
                    quantity: Number(inventoryData[index]?.quantity) - Number(item.value),
                    minimumStock: item.minimumStock,
                    unit: item.unit,
                    stockLevel: item.stockLevel,
                };
                await apiClient.updateInventory(item.id, payload);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    const updateMachine = async () => {
        try {
            const value = getValues();
            const machineName = machineOptions?.find((item) => item.value === value.machineId)?.label || "";
            const payload = {
                name: machineName,
                status: "NORMAL",
                temp: 30,
                load: 10,
                time: value.dueDate,
            };
            await apiClient.updateMachine(value.machineId, payload);
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <InputText control={control} name="product" label="ชื่อรายการ" />
                <InputNumber control={control} name="quantity" label="จำนวน (หน่วย)" />
                <UseDatePicker control={control} name="dueDate" label="วันกำหนดส่ง" />
                <InputText control={control} name="customer" label="ลูกค้า" />
                <UseSelect control={control} name="machineId" label="เครื่องจักร" options={machineOptions} />
                <UseSelect control={control} name="status" label="สถานะ" options={taskStatusOptions} />
            </div>
            <div>
                <h2 className="mb-1">วัตถุดิบที่ใช้</h2>
                <div className="p-4 rounded border border-x grid gap-2">
                    {inventoryData?.map((item) => (
                        <div key={item.id} className="flex items-center border border-x rounded p-2 gap-4 border-l-6">
                            <div className="flex-1">
                                <div className="font-semibold">{item.itemName}</div>
                                <div>
                                    คงเหลือ {item.quantity} {item.unit}
                                </div>
                                <div
                                    className={`text-xs ${item.quantity - (watch(String(item.id)) || 0) < 0 ? "text-red-500" : "text-slate-500"}`}
                                >
                                    จะเหลือ {item.quantity - (watch(String(item.id)) || 0)} {item.unit}
                                </div>
                            </div>
                            <div className="flex-3">
                                <InputNumber control={control} name={String(item.id)} label="จำนวนที่ใช้" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <UseButton label="บันทึก" type="primary" htmlType="submit" />
            </div>
        </form>
    );
}

export default Form;
