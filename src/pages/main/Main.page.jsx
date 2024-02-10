import React, {useState} from "react";

import css from "./index.module.scss";
import {UserForm} from "../../components/form/UserForm";
import {List} from "../list/List";


const MainPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleSwitch = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className={["container", css.div__container, css.button_switcher].join(" ")}>
            <button
                className={"btn btn-primary"}
                onClick={handleSwitch}
            >
                {isFormVisible && "List" || "Form"}
            </button>
            {isFormVisible && <UserForm switcher={handleSwitch}/> || <List/>}
        </div>
    );
};

export {MainPage};