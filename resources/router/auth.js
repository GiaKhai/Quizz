import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "antd";

import Header from "../js/components/Header/index";
import HomePage from "../js/page/Homepage";
import UserContainer from "../containers/User";

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
                {/* <Route path="*">
                    <PageNotFound />
                </Route> */}
            </Switch>
        </Layout>
    );
};

export default Authed;
