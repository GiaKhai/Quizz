import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "antd";

import Header from "../js/components/Header/index";
import HomePage from "../js/page/Homepage";
import UserContainer from "../containers/User";
import QuestionContainer from "../containers/Question";
import TestList from "../containers/TestList";
import TestPlanContainer from "../containers/TestPlan";
import Testing from "../js/page/Testing";

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
                    <TestPlanContainer />
                </Route>
                <Route exact path="/question">
                    <QuestionContainer />
                </Route>
                <Route exact path="/test-list">
                    <TestList />
                </Route>
                <Route exact path="/testing">
                    <Testing />
                </Route>

                {/* <Route path="*">
                    <PageNotFound />
                </Route> */}
            </Switch>
        </Layout>
    );
};

export default Authed;
