import React from "react";

import { Table, Tag, Space } from "antd";
const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        align: "center",
        width: 120,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        align: "center",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        align: "center",
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
        align: "center",
    },
];

const data = [
    {
        id: "1",
        name: "John Brown",
        email: "test@gmail.com",
        role: "Admin",
    },
    {
        id: "2",
        name: "John Brown",
        email: "test@gmail.com",
        role: "Admin",
    },
    {
        id: "3",
        name: "John Brown",
        email: "test@gmail.com",
        role: "Admin",
    },
];

const User = () => {
    return <Table columns={columns} dataSource={data} />;
};

export default User;
