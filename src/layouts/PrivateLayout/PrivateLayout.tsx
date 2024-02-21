import * as React from "react";
import {FC} from "react";

import {Outlet} from "react-router-dom";

import styles from "./index.module.scss";

const PrivateLayout: FC = () => {
    return (
        <div style={styles}>
            <Outlet/>
        </div>
    );
};

export {PrivateLayout};