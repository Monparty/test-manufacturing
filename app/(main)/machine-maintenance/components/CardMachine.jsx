import UseButton from "@/app/components/inputs/UseButton";
import { ClusterOutlined, DashboardOutlined, DeleteOutlined, HistoryOutlined, ToolOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
dayjs.extend(duration);

function CardMachine({ data, handleDeleteItem }) {
    const [time, setTime] = useState(dayjs(data?.time).diff(dayjs(), "second"));
    useEffect(() => {
        const timer = setInterval(() => setTime((t) => t - 1), 1000);
        return () => clearInterval(timer);
    }, []);
    const formatTime = dayjs.duration(time, "seconds").format("HH:mm:ss");

    return (
        <div className="w-full border border-x rounded bg-blue-50 p-4 grid gap-3 shadow">
            <div className="text-xs font-semibold text-slate-500">UNIT-{data?.id}</div>
            <div className="flex justify-between items-center">
                <div className="text-lg">{data.name}</div>
                <div className="py-1 px-3 bg-blue-400 text-white rounded-full flex items-center justify-between gap-3">
                    <span class="relative flex size-3">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex size-3 rounded-full bg-white"></span>
                    </span>
                    {data?.status}
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
                        {data?.temp && (
                            <>
                                {data.temp}
                                <sup className="leading-7 text-xs font-bold">o</sup>C
                            </>
                        )}
                    </div>
                </div>
                <div className="h-26 w-full border border-x rounded bg-white p-3">
                    <div className="flex gap-2 items-center">
                        <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                            <ClusterOutlined />
                        </div>
                        Load
                    </div>
                    <div className="text-2xl flex justify-end">{data?.load && `${data?.load}%`}</div>
                </div>
                <div className="h-26 w-full border border-x rounded bg-white p-3">
                    <div className="flex gap-2 items-center">
                        <div className="border border-x w-8 h-8 rounded-full flex justify-center items-center bg-slate-50 cursor-pointer hover:opacity-70">
                            <HistoryOutlined />
                        </div>
                        Time
                    </div>
                    <div className="text-2xl flex justify-end">{formatTime}</div>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <UseButton
                    onClick={() => handleDeleteItem(data?.id)}
                    label={
                        <div className="flex gap-1 items-center">
                            <DeleteOutlined />
                        </div>
                    }
                />
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
    );
}

export default CardMachine;
