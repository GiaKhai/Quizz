import axios from "axios";
import { questionURL, answerURL } from "../constants/backend_url";
import { questionConstants } from "../constants/question.contants";
import { message as Message } from "antd";

const getQuestionSuccess = (data) => {
    return {
        type: questionConstants.GET_QUESTION_SUCCESS,
        data,
    };
};

const getQuestionFail = () => {
    return {
        type: questionConstants.GET_QUESTION_FAIL,
    };
};

export const getQuestionAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(questionURL);
            if (response.status === 200) {
                dispatch(getQuestionSuccess(response));
            }
        } catch (error) {
            dispatch(getQuestionFail());
        }
    };
};

export const postQuestionAction = async (body) => {
    try {
        const result = await axios.post(questionURL, body);
        if (result.status === 201) {
            Message.success("Add success");
            return { success: true };
        }
    } catch (error) {
        return { success: false };
    }
};

export const postAnswerAction = async (body) => {
    try {
        const result = await axios.post(answerURL, body);
        if (result.status === 201) {
            Message.success("Add success");
            return { success: true };
        }
    } catch (error) {
        return { success: false };
    }
};
