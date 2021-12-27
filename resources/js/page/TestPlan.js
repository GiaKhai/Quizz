import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        align: "center",
        width: 120,
    },
    {
        title: "Title",
        dataIndex: "tile",
        key: "title",
        align: "center",
    },
    {
        title: "Schedule",
        dataIndex: "schedule",
        key: "schedule",
        align: "center",
    },
    {
        title: "Test date",
        dataIndex: "testDate",
        key: "testDate",
        align: "center",
    },
    {
        title: "Test ID",
        dataIndex: "testID",
        key: "testID",
        align: "center",
    },

    {
        title: "Action",
        key: "action",
        render: (_, record) => {
            return <Button danger>Delete</Button>;
        },
        width: 30,
        align: "center",
    },
];

const dataSource = [
    {
        id: "1",
        tile: "Test Math",
        schedule: "Test in home",
        testDate: "10-10-2021",
        testID: "1111",
    },
    {
        id: "2",
        tile: "Test English",
        schedule: "Test in class",
        testDate: "10-10-2021",
        testID: "2222",
    },
    {
        id: "1",
        tile: "Test Education",
        schedule: "Test in class",
        testDate: "10-10-2021",
        testID: "3333",
    },
    {
        id: "1",
        tile: "Test IT",
        schedule: "Test in home",
        testDate: "10-10-2021",
        testID: "4444",
    },
];

function TestPlan() {
    return (
        <div className="content-page">
            <div className="title">Test Plan</div>
            <Button
                className="add-user"
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                size="large"
                // onClick={showModal}
            >
                Add Test
            </Button>

            <Table columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default TestPlan;
