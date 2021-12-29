import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanAction } from "../actions/testPlan.action";
import TestPlan from "../js/page/TestPlan";

const TestPlanContainer = () => {
    const dispatch = useDispatch();
    const planList = useSelector((state) => state.planReducers.planList);

    useEffect(() => {
        dispatch(getPlanAction());
    }, [dispatch]);

    return <TestPlan planList={planList} />;
};
export default TestPlanContainer;
