import React, { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Typography, Radio } from "antd";
import AddQuestion from "../../containers/AddQuestion";
import AddAnswer from "../../containers/AddAnswer";

const { Title } = Typography;

function QuestionList({ questionList }) {
    const [value, setValue] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const showModalAns = () => {
        setIsModal(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleCancelAns = () => {
        setIsModal(false);
    };

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="content-page">
            <div className="title">Câu hỏi</div>
            <Button
                className="add-user"
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                size="large"
                onClick={showModalAns}
            >
                Thêm Câu Trả Lời
            </Button>
            <Button
                className="add-user"
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                size="large"
                onClick={showModal}
            >
                Thêm Câu Hỏi
            </Button>

            <AddQuestion
                setIsModalVisible={setIsModalVisible}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
            />

            <AddAnswer
                setIsModal={setIsModal}
                isModal={isModal}
                handleCancelAns={handleCancelAns}
            />

            {questionList?.map((ques, index) => (
                <div key={index} className="question">
                    <Title level={4}>
                        {index + 1}/ {ques.question}
                    </Title>
                    <div className="answers">
                        <Radio.Group onChange={onChange} value={value}>
                            {ques.answers?.map((ans) => (
                                <Radio value={ans.answer}>{ans.answer}</Radio>
                            ))}
                        </Radio.Group>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default QuestionList;
