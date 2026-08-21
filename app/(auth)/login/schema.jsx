import * as yup from "yup";

export const schema = yup.object({
    email: yup.string().email("กรุณาระบุ email ให้ถูกต้อง").required("กรุณาระบุ email"),
    password: yup
    .string()
    .required('กรุณาระบุ ระหัสผ่าน')
    .min(6, 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร'),
});
