import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required("กรุณาระบุข้อมูล"),
    temp: yup.number().required("กรุณาระบุข้อมูล"),
    load: yup.number().required("กรุณาระบุข้อมูล"),
    time: yup.string().required("กรุณาระบุข้อมูล"),
    status: yup.string().required("กรุณาระบุข้อมูล"),
});
