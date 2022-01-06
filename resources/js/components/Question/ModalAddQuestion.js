import React from "react";
import { Form, Input, Modal, Row, Col } from "antd";

const ModalAddQuestion = ({
    form,
    handleSubmit,
    handleCancel,
    isModalVisible,
}) => {
    return (
        <div>
            <Modal
                title="Thêm Kế Hoạch"
                visible={isModalVisible}
                onOk={handleSubmit}
                onCancel={handleCancel}
            >
                <Form
                    form={form}
                    className="form-modal"
                    autoComplete="off"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    layout="vertical"
                    name="nest-messages"
                >
                    <Row>
                        <Col xs={{ span: 24 }}>
                            <Form.Item
                                name="question"
                                id="question"
                                label="Nhập câu hỏi"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập câu hỏi",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default ModalAddQuestion;
