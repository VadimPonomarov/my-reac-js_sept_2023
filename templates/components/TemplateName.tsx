import * as React from "react";
import {FC} from "react";

import styles from "./index.module.scss";


interface IProps {

}

const TemplateName: FC<IProps> = React.memo(() => {
    return (
        <div style={styles}>

        </div>
    );
});

export {TemplateName};