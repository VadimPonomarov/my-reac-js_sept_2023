import * as React from "react";
import {FC, useContext, useEffect} from "react";

import styles from "./index.module.scss";
import {MyRegistrationForm} from "../../forms";
import {AuthContext} from "common/hocs/authContextProvider";

const LoginPage: FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)



    return (
        <div className={styles.loginPage}>
            <MyRegistrationForm props={{formLabel: "Regist"}}/>
        </div>
    );
};

export {LoginPage}