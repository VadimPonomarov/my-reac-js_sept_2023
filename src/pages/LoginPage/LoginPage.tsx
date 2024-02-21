import * as React from "react";
import {FC} from "react";

import styles from "./index.module.scss";
import {MyRegistrationForm} from "../../forms";

const LoginPage: FC = () => {
    return (
        <div className={styles.loginPage}>
            <MyRegistrationForm props={{formLabel: "Regist"}}/>
        </div>
    );
};

export {LoginPage}