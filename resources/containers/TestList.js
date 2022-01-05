import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListAction } from "../actions/testList.action";
import TestList from "../js/page/TestList";

const QuestionContainer = () => {
    const dispatch = useDispatch();
    const testList = useSelector((state) => state.testListReducers.testList);
    useEffect(() => {
        dispatch(getListAction());
    }, [dispatch]);

    return <TestList testList={testList} />;
};
export default QuestionContainer;
