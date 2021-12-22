import React, { useState, useEffect } from "react";

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

const User = () => {
    const [data, setData] = useState();

    useEffect(async () => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                    "http://127.0.0.1:8000/api/user"
                );
                setData(result.data);
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="content-page">
            <div className="title">User</div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default User;
