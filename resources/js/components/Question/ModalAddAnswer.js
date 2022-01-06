import React from "react";
import { Form, Input, Row, Col, Modal, Select } from "antd";
const { Option } = Select;

const ModalAddAnswer = ({
    form,
    handleSubmit,
    handleCancelAns,
    isModal,
    questionList,
}) => {
    console.log(questionList);
    return (
        <div>
            <Modal
                title="Thêm Câu Trả Lời"
                visible={isModal}
                onOk={handleSubmit}
                onCancel={handleCancelAns}
            >
                <Form
                    form={form}
                    className="form-modal"
                    wrapperCol={{ span: 20 }}
                    layout="vertical"
                    name="nest-messages"
                >
                    <Row>
                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                label="Chọn câu hỏi"
                                name="question_id"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn câu hỏi",
                                    },
                                ]}
                            >
                                <Select
                                    style={{ width: 200 }}
                                    onSelect={onselect}
                                >
                                    {questionList?.length > 0 &&
                                        questionList?.map((list) => {
                                            return (
                                                <Option
                                                    value={list.id}
                                                    key={list.id}
                                                >
                                                    {list.question}
                                                </Option>
                                            );
                                        })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                name="answer"
                                id="answer"
                                label="Đáp án"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập đáp án",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                label="Chọn kết quả"
                                name="correct"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn kết quả",
                                    },
                                ]}
                            >
                                <Select
                                    style={{ width: 200 }}
                                    onSelect={onselect}
                                >
                                    <Option value="1" key="1">
                                        Đúng
                                    </Option>
                                    <Option value="0" key="0">
                                        Sai
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default ModalAddAnswer;
