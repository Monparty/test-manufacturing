import UseTable from "@/app/components/utility/UseTable";

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
        },
        {
            title: "วันที่แจ้ง",
            dataIndex: "repairedAt",
            key: "repairedAt",
        },
    ];
    return <UseTable dataSource={dataSource} columns={columns} />;
}

export default TableMaintainLog;
