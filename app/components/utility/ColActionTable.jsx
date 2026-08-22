import React from "react";
import UseButton from "../inputs/UseButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function ColActionTable({ onEdit, onDelete }) {
    return (
        <div className="flex justify-center gap-2">
            <UseButton label={<EditOutlined />} size="small" onClick={onEdit} />
            <UseButton label={<DeleteOutlined />} size="small" onClick={onDelete} color="red" />
        </div>
    );
}

export default ColActionTable;
