import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Table, Switch, message as Message } from "antd";
import { getPlanAction } from "../../actions/testPlan.action";
import { testPlanURL } from "../../constants/backend_url";

function TestPlan({ planList }) {
    console.log(planList);

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
            dataIndex: "title",
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
            dataIndex: "test_date",
            key: "test_date",
            align: "center",
        },
        {
            title: "Test ID",
            dataIndex: "test_id",
            key: "test_id",
            align: "center",
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            align: "center",
            render: (value, row, index) => {
                console.log(value);
                return (
                    <Switch
                        checkedChildren="Public"
                        unCheckedChildren="Private"
                        checked={value === 1 ? true : false}
                        // onChange={() => updateUser(value, row.id)}
                    />
                );
            },
            width: 130,
        },

        {
            title: "Action",
            key: "action",
            render: (_, record) => {
                return (
                    <Button
                        onClick={async () => {
                            const res = await axios.delete(
                                `${testPlanURL}/${record.id}`
                            );
                            if (res.status === 200) {
                                Message.success("Successful delete");
                                dispatch(getPlanAction());
                            }
                        }}
                        danger
                    >
                        Delete
                    </Button>
                );
            },
            width: 30,
            align: "center",
        },
    ];
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

            <Table columns={columns} dataSource={planList} />
        </div>
    );
}

export default TestPlan;
