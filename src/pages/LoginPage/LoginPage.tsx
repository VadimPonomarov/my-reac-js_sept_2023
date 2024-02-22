import * as React from "react";
import {FC, useContext, useEffect} from "react";

import {AuthContext} from "common/hocs/authContextProvider";

import styles from "./index.module.scss";
import {LoginForm, MyRegistrationForm} from "../../forms";

const LoginPage: FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)



    return (
        <div className={styles.loginPage}>
            <LoginForm props={{formLabel: "Login Form"}}/>
        </div>
    );
};

export {LoginPage}