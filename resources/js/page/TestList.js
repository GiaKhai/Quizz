import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { testListURL } from "../../constants/backend_url";
function TestList({ testList }) {
    console.log(testList);

    const columns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            align: "center",
            width: 200,
        },
        {
            title: "Tiêu đề",
            dataIndex: "title",
            key: "title",
            align: "center",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => {
                return (
                    <Button
                        onClick={async () => {
                            const res = await axios.delete(
                                `${testListURL}/${record.id}`
                            );
                            if (res.status === 200) {
                                Message.success("Xóa thành công");
                                dispatch(getPlanAction());
                            }
                        }}
                        danger
                    >
                        Xóa
                    </Button>
                );
            },
            width: 150,
            align: "center",
        },
    ];
    return (
        <div className="content-page">
            <div className="title">Danh sách bài kiểm tra</div>
            <Button
                className="add-user"
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                size="large"
                // onClick={showModal}
            >
                Thêm bài kiểm tra
            </Button>
            <Table columns={columns} dataSource={testList} />
        </div>
    );
}

export default TestList;
