import React from "react";
import {
    getQuestionAction,
    postQuestionAction,
} from "../actions/question.action";
import { message as Message } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useDispatch } from "react-redux";
import ModalAddQuestion from "../js/components/Question/ModalAddQuestion";

const AddQuestion = ({ isModalVisible, handleCancel, setIsModalVisible }) => {
    const [form] = useForm();
    const dispatch = useDispatch();
    const handleSubmit = async () => {
        console.log(form.getFieldsValue());
        try {
            await form.validateFields();
            let body = form.getFieldsValue();
            const { success } = await postQuestionAction(body);
            if (success) {
                form.resetFields();
                dispatch(getQuestionAction());
                setIsModalVisible(false);
            } else Message.error("Add error");
        } catch (error) {}
    };

    return (
        <ModalAddQuestion
            form={form}
            handleSubmit={handleSubmit}
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
        />
    );
};
export default AddQuestion;
