import React, { useEffect } from "react";
import {
    getQuestionAction,
    postAnswerAction,
} from "../actions/question.action";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { message as Message } from "antd";
import { getPlanAction, postPlanAction } from "../actions/testPlan.action";
import ModalAddAnswer from "../js/components/Question/ModalAddAnswer";

const AddAnswer = ({ isModal, handleCancelAns, setIsModal }) => {
    const [form] = useForm();
    const dispatch = useDispatch();
    const questionList = useSelector(
        (state) => state.questionReducers.questionList
    );

    useEffect(() => {
        dispatch(getQuestionAction());
    }, [dispatch]);

    const handleSubmit = async () => {
        try {
            await form.validateFields();
            let body = form.getFieldsValue();
            const { success } = await postAnswerAction(body);
            if (success) {
                form.resetFields();
                dispatch(getQuestionAction());
                setIsModal(false);
            } else Message.error("Add error");
        } catch (error) {}
    };

    return (
        <ModalAddAnswer
            form={form}
            handleSubmit={handleSubmit}
            isModal={isModal}
            handleCancelAns={handleCancelAns}
            questionList={questionList}
        />
    );
};
export default AddAnswer;
