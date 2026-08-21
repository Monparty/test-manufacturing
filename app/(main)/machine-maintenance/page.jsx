"use client";

import UseButton from "@/app/components/inputs/UseButton";
import { ClusterOutlined, DashboardOutlined, HistoryOutlined, ToolOutlined } from "@ant-design/icons";

function Page() {
    return (
        <main className="grid grid-cols-2 gap-4">
            <div className="w-full border border-x rounded bg-blue-50 p-4 grid gap-3 shadow">
                <div className="text-xs font-semibold text-slate-500">UNIT-A1</div>
                <div className="flex justify-between items-center">
                    <div className="text-lg">เครื่องกรึง</div>
                    <div className="py-1 px-3 bg-blue-400 text-white rounded-full flex items-center justify-between gap-3">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-white"></span>
                        </span>
                        ปกติ
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <DashboardOutlined />
                            </div>
                            Temp
                        </div>
                        <div className="text-2xl flex justify-end">
                            20 <sup className="leading-7 text-xs font-bold">o</sup>C
                        </div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <ClusterOutlined />
                            </div>
                            Load
                        </div>
                        <div className="text-2xl flex justify-end">58%</div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <HistoryOutlined />
                            </div>
                            Time
                        </div>
                        <div className="text-2xl flex justify-end">10:12:40</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <UseButton
                        label={
                            <div className="flex gap-1 items-center">
                                <ToolOutlined />
                                แจ้งซ่อม
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="w-full border border-x rounded bg-blue-50 p-4 grid gap-3 shadow">
                <div className="text-xs font-semibold text-slate-500">UNIT-A1</div>
                <div className="flex justify-between items-center">
                    <div className="text-lg">เครื่องกรึง</div>
                    <div className="py-1 px-3 bg-blue-400 text-white rounded-full flex items-center justify-between gap-3">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-white"></span>
                        </span>
                        ปกติ
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <DashboardOutlined />
                            </div>
                            Temp
                        </div>
                        <div className="text-2xl flex justify-end">
                            20 <sup className="leading-7 text-xs font-bold">o</sup>C
                        </div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <ClusterOutlined />
                            </div>
                            Load
                        </div>
                        <div className="text-2xl flex justify-end">58%</div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <HistoryOutlined />
                            </div>
                            Time
                        </div>
                        <div className="text-2xl flex justify-end">10:12:40</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <UseButton
                        label={
                            <div className="flex gap-1 items-center">
                                <ToolOutlined />
                                แจ้งซ่อม
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="w-full border border-x rounded bg-blue-50 p-4 grid gap-3 shadow">
                <div className="text-xs font-semibold text-slate-500">UNIT-A1</div>
                <div className="flex justify-between items-center">
                    <div className="text-lg">เครื่องกรึง</div>
                    <div className="py-1 px-3 bg-blue-400 text-white rounded-full flex items-center justify-between gap-3">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-white"></span>
                        </span>
                        ปกติ
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <DashboardOutlined />
                            </div>
                            Temp
                        </div>
                        <div className="text-2xl flex justify-end">
                            20 <sup className="leading-7 text-xs font-bold">o</sup>C
                        </div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <ClusterOutlined />
                            </div>
                            Load
                        </div>
                        <div className="text-2xl flex justify-end">58%</div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <HistoryOutlined />
                            </div>
                            Time
                        </div>
                        <div className="text-2xl flex justify-end">10:12:40</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <UseButton
                        label={
                            <div className="flex gap-1 items-center">
                                <ToolOutlined />
                                แจ้งซ่อม
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="w-full border border-x rounded bg-blue-50 p-4 grid gap-3 shadow">
                <div className="text-xs font-semibold text-slate-500">UNIT-A1</div>
                <div className="flex justify-between items-center">
                    <div className="text-lg">เครื่องกรึง</div>
                    <div className="py-1 px-3 bg-blue-400 text-white rounded-full flex items-center justify-between gap-3">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-white"></span>
                        </span>
                        ปกติ
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <DashboardOutlined />
                            </div>
                            Temp
                        </div>
                        <div className="text-2xl flex justify-end">
                            20 <sup className="leading-7 text-xs font-bold">o</sup>C
                        </div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <ClusterOutlined />
                            </div>
                            Load
                        </div>
                        <div className="text-2xl flex justify-end">58%</div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <HistoryOutlined />
                            </div>
                            Time
                        </div>
                        <div className="text-2xl flex justify-end">10:12:40</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <UseButton
                        label={
                            <div className="flex gap-1 items-center">
                                <ToolOutlined />
                                แจ้งซ่อม
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="w-full border border-x rounded bg-blue-50 p-4 grid gap-3 shadow">
                <div className="text-xs font-semibold text-slate-500">UNIT-A1</div>
                <div className="flex justify-between items-center">
                    <div className="text-lg">เครื่องกรึง</div>
                    <div className="py-1 px-3 bg-blue-400 text-white rounded-full flex items-center justify-between gap-3">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-white"></span>
                        </span>
                        ปกติ
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <DashboardOutlined />
                            </div>
                            Temp
                        </div>
                        <div className="text-2xl flex justify-end">
                            20 <sup className="leading-7 text-xs font-bold">o</sup>C
                        </div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <ClusterOutlined />
                            </div>
                            Load
                        </div>
                        <div className="text-2xl flex justify-end">58%</div>
                    </div>
                    <div className="h-26 w-full border border-x rounded bg-white p-3">
                        <div className="flex gap-2 items-center">
                            <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                                <HistoryOutlined />
                            </div>
                            Time
                        </div>
                        <div className="text-2xl flex justify-end">10:12:40</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <UseButton
                        label={
                            <div className="flex gap-1 items-center">
                                <ToolOutlined />
                                แจ้งซ่อม
                            </div>
                        }
                    />
                </div>
            </div>
        </main>
    );
}

export default Page;
