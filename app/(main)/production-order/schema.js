import * as yup from "yup";

export const schema = yup.object({
    product: yup.string().required("กรุณาระบุข้อมูล"),
    quantity: yup.number().required("กรุณาระบุข้อมูล"),
    status: yup.string().required("กรุณาระบุข้อมูล"),
    dueDate: yup.string().required("กรุณาระบุข้อมูล"),
    customer: yup.string().required("กรุณาระบุข้อมูล"),
});
