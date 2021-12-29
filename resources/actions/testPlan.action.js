import axios from "axios";
import { testPlanURL } from "../constants/backend_url";
import { testPlanConstants } from "../constants/testPlan.contants";

const getPlanSuccess = (data) => {
    return {
        type: testPlanConstants.GET_PLAN_SUCCESS,
        data,
    };
};

const getPlanFail = () => {
    return {
        type: testPlanConstants.GET_PLAN_FAIL,
    };
};

export const getPlanAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(testPlanURL);
            if (response.status === 200) {
                dispatch(getPlanSuccess(response));
            }
        } catch (error) {
            dispatch(getPlanFail());
        }
    };
};
