"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import UseTextField from "../../components/inputs/UseTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useState } from "react";
import UseButton from "@/app/components/inputs/UseButton";
// import { login } from "../../services/auth.service";

export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const handleLogin = async (values) => {
        router.push("/dashboard");
        return;
        setLoading(true);
        // const { data, error } = await login("test@test.com", "123456"); // ม่ายต้องพิมพ์
        // const { data, error } = await login(values.email, values.password);

        if (error) {
            return alert(error.message);
        }
        router.push("/dashboard");
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            className="h-screen w-full flex flex-col items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500"
        >
            <h2 className="text-2xl mb-3 text-white">Manufacturing system</h2>
            <div className="gap-6 flex flex-col items-center justify-center w-1/4 p-4 rounded-lg bg-white">
                <UseTextField control={control} name="email" label="ชื่อผู้ใช้งาน" />
                <UseTextField control={control} name="password" label="รหัสผ่าน" type="password" />
                <div className="w-full flex items-center justify-center ">
                    <UseButton label="เข้าสู่ระบบ" loading={loading} htmlType="submit" />
                </div>
            </div>
        </form>
    );
}
