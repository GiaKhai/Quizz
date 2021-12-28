import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

function TestList() {
    return (
        <div className="content-page">
            <div className="title">Test List</div>
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
        </div>
    );
}

export default TestList;
