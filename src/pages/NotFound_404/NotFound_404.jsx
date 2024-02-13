import * as React from "react";


import {Link} from "react-router-dom";

import css from "./index.module.scss";

const NotFound404 = () => {
    return (
        <div className={["container", css.container].join(" ")}>
            <div>
                <h3>404 Not Found</h3>
                <Link to={"/"} style={{textDecoration: "none"}}>👉 Home</Link>
            </div>
        </div>
    );
};

export {NotFound404};