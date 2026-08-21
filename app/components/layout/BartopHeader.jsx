import { PoweroffOutlined } from "@ant-design/icons";
import React from "react";

function BartopHeader({ label }) {
    return (
        <div className="p-3 border border-x rounded mb-4 flex justify-between items-center">
            <h3>{label}</h3>
            <button
                type="button"
                className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70"
            >
                <PoweroffOutlined className="text-sm" />
            </button>
        </div>
    );
}

export default BartopHeader;
