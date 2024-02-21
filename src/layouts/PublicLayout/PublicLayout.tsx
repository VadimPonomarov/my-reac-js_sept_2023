import * as React from "react";
import {FC} from "react";

import {Outlet} from "react-router-dom";

import styles from "./index.module.scss";

const PublicLayout: FC = () => {
    return (
        <div style={styles}>
            <Outlet/>
        </div>
    );
};

export {PublicLayout};