import React from "react";
import { Form, Input, Row, Col, Modal, Select } from "antd";
const { Option } = Select;

const ModalAddUser = ({ form, handleSubmit, handleCancel, isModalVisible }) => {
    return (
        <div>
            <Modal
                title="Add User"
                visible={isModalVisible}
                onOk={handleSubmit}
                onCancel={handleCancel}
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
                                name="name"
                                id="name"
                                label="Name:"
                                rules={[
                                    {
                                        required: true,
                                        message: "Enter your name",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: "email",
                                        required: true,
                                        message: "The input is not valid Email",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                name="password"
                                label="Password"
                                // rules={[
                                //     {
                                //         required: true,
                                //         message: "Please input your password!",
                                //     },
                                //     {
                                //         validator: (_, value) => {
                                //             var regex = new RegExp(
                                //                 /^(?=.*[0-9])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                                //             );
                                //             if (value) {
                                //                 if (value.match(regex)) {
                                //                     return Promise.resolve();
                                //                 }
                                //                 return Promise.reject(
                                //                     "Minimum 8 characters, At least 1 UPPER CASE, 1 lower case, 1 number "
                                //                 );
                                //             }

                                //             return Promise.resolve();
                                //         },
                                //     },
                                // ]}
                                // hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                name="password2"
                                label="Confirm Password"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please confirm your password!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    "The two passwords that you entered do not match!"
                                                )
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }}>
                            <Form.Item
                                name="role"
                                label="Role:"
                                rules={[
                                    {
                                        required: true,
                                        message: "Select your role",
                                    },
                                ]}
                            >
                                <Select allowClear>
                                    <Option value="Admin">Admin</Option>
                                    <Option value="User">User</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default ModalAddUser;
