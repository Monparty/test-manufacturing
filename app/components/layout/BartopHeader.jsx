"use client";
import { PoweroffOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import React from "react";

function BartopHeader({ label }) {
    const router = useRouter();
    return (
        <div className="px-4 py-2 border border-x rounded mb-4 flex justify-between items-center">
            <h3>{label}</h3>
            <button
                type="button"
                onClick={() => router.push("/")}
                className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70"
            >
                <PoweroffOutlined className="text-sm" />
            </button>
        </div>
    );
}

export default BartopHeader;
