import React, { useState, useEffect } from "react";
import { UserAddOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal, Button, Table, message as Message } from "antd";
import { useDispatch } from "react-redux";
import AddUser from "../../containers/AddUser";
import { useForm } from "antd/lib/form/Form";
import { userURL } from "../../constants/backend_url";
import { getUserAction } from "../../actions/user.action";

const { confirm } = Modal;

function showConfirm(id) {
    confirm({
        title: "Do you want to delete?",
        icon: <ExclamationCircleOutlined />,
        async onOk() {
            const res = await axios.delete(`${userURL}/${id}`);
            console.log(res.status);
            if (res.status === 200) {
                Message.success("Successful delete");
                dispatch(getUserAction());
            }
        },
        onCancel() {
            console.log("Cancel");
        },
    });
}

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
    {
        title: "Action",
        key: "action",
        render: (_, record) => {
            return (
                <Button danger onClick={() => showConfirm(record.id)}>
                    Delete
                </Button>
            );
        },
        width: 30,
        align: "center",
    },
];

const User = ({ userList }) => {
    const [form] = useForm();
    const dispatch = useDispatch();

    const [data, setData] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        setData(userList);
    }, [userList]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="content-page">
            <div className="title">User</div>
            <Button
                className="add-user"
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                size="large"
                onClick={showModal}
            >
                Add User
            </Button>
            <AddUser
                setIsModalVisible={setIsModalVisible}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
                form={form}
            />

            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default User;
