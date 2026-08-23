"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputText from "../../components/inputs/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useState } from "react";
import UseButton from "@/app/components/inputs/UseButton";
import ImageLogo from "@/app/components/utility/ImageLogo";
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
            className="h-dvh w-full flex bg-linear-to-r from-cyan-500 to-blue-500"
        >
            <div className="hidden lg:block flex-2"></div>
            <div className="flex-1">
                <div className="w-full h-full">
                    <div className="gap-4 flex flex-col items-center justify-center h-full px-8 bg-white">
                        <ImageLogo w={100} h={100} />
                        <h2 className="text-2xl font-semibold">Manufacturing system</h2>
                        <InputText control={control} name="email" label="ชื่อผู้ใช้งาน" />
                        <InputText control={control} name="password" label="รหัสผ่าน" type="password" />
                        <div className="w-full flex items-center justify-center ">
                            <UseButton label="เข้าสู่ระบบ" loading={loading} htmlType="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
