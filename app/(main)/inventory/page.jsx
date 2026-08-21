"use client";
import UseButton from "@/app/components/inputs/UseButton";
import UseTable from "@/app/components/utility/UseTable";
import { useColumnSearch } from "@/app/hooks/useColumnSearch";
import { useForm } from "react-hook-form";

function Page() {
    const { columnSearch } = useColumnSearch();
    const { control, setValue } = useForm();
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
        {
            key: "3",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "ชื่อรายการ",
            dataIndex: "name",
            key: "name",
            ...columnSearch("name", control, setValue),
        },
        {
            title: "รหัส",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "หมวดหมู่",
            dataIndex: "age",
            key: "age",
            defaultSortOrder: "age",
        },
        {
            title: "คงเหลือ",
            dataIndex: "age",
            key: "age",
            defaultSortOrder: "age",
        },
        {
            title: "หน่วย",
            dataIndex: "age",
            key: "age",
            sorter: (a, b) => a.age - b.age,
            defaultSortOrder: "age",
        },
        {
            title: "สถานะ",
            dataIndex: "age",
            key: "age",
            sorter: (a, b) => a.age - b.age,
            defaultSortOrder: "age",
        },
        {
            title: "จัดการ",
            dataIndex: "action",
            key: "action",
            width: 160,
            render: (_, record) => {
                return (
                    <div>
                        <UseButton label="จัดการ" />
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            <UseTable dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Page;
