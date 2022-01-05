import React, { useState, useEffect } from "react";
import { Typography, Radio } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionAction } from "../../actions/question.action";

const { Title } = Typography;

function Testing() {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    const questionList = useSelector(
        (state) => state.questionReducers.questionList
    );

    useEffect(() => {
        dispatch(getQuestionAction());
    }, [dispatch]);

    return (
        <div className="content-page">
            <div className="title">Câu hỏi</div>
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

export default Testing;
