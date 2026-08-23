import UseTable from "@/app/components/utility/UseTable";
import { formatDatefromDB } from "@/app/hooks/useFormatDatefromDB";

function TableMaintainLog({ dataSource }) {
    const columns = [
        {
            title: "รหัส",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "ปัญหา",
            dataIndex: "issue",
            key: "issue",
            render: (value) => {
                return value === "" ? "[ได้รับการแก้ไขแล้ว]" : value;
            },
        },
        {
            title: "วันที่แจ้ง",
            dataIndex: "repairedAt",
            key: "repairedAt",
            render: (value) => {
                return <div className="flex justify-center">{formatDatefromDB(value)}</div>;
            },
        },
    ];
    return <UseTable dataSource={dataSource} columns={columns} />;
}

export default TableMaintainLog;
