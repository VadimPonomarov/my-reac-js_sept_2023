import * as React from "react";

import styles from "./index.module.scss";
import {MyRegistrationForm} from "../../forms";

const RegistrationPage = () => {
    return (
        <div className={styles.registrationPage}>
            <MyRegistrationForm props={{formLabel: "Registration Form"}}/>
        </div>
    );
};

export {RegistrationPage}