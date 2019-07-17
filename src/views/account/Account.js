import React from 'react';
import TabBar from "../../components/common/TabBar";
import AccountLogin from "../../components/account/AccountLogin";

export default class Account extends React.Component {
    render() {
        return (
            <div>
                <AccountLogin></AccountLogin>
                <TabBar></TabBar>
            </div>
        )
    }
}

