import * as yup from "yup";

export const schema = yup.object({
    itemName: yup.string().required("กรุณาระบุข้อมูล"),
    quantity: yup.number().required("กรุณาระบุข้อมูล"),
    minimumStock: yup.number().required("กรุณาระบุข้อมูล"),
    unit: yup.string().required("กรุณาระบุข้อมูล"),
    stockLevel: yup.string().required("กรุณาระบุข้อมูล"),
});