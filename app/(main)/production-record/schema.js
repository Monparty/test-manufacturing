import * as yup from "yup";

export const schema = yup.object({
    machineId: yup.number().required("กรุณาระบุข้อมูล"),
    productionOrderId: yup.number().required("กรุณาระบุข้อมูล"),
    passedCount: yup.number().required("กรุณาระบุข้อมูล"),
    failedCount: yup.number().required("กรุณาระบุข้อมูล"),
    remark: yup.string().required("กรุณาระบุข้อมูล"),
});
