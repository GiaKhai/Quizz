import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "antd";

import Header from "../js/components/Header/index";
import HomePage from "../js/page/Homepage";
import UserContainer from "../containers/User";
import TestPlan from "../js/page/TestPlan";
import QuestionList from "../js/page/QuestionList";
import QuestionContainer from "../containers/Question";
import TestList from "../js/page/TestList";

const { Content } = Layout;

const Authed = () => {
    return (
        <Layout>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/user">
                    <UserContainer />
                </Route>
                <Route exact path="/test-plan">
                    <TestPlan />
                </Route>
                <Route exact path="/question">
                    <QuestionContainer />
                </Route>
                <Route exact path="/test-list">
                    <TestList />
                </Route>
                {/* <Route path="*">
                    <PageNotFound />
                </Route> */}
            </Switch>
        </Layout>
    );
};

export default Authed;
