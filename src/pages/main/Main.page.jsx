import React, {useState} from "react";

import css from "./index.module.scss";
import {UserForm} from "../../components/form/UserForm";
import {List} from "../list/List";


const MainPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newUser, setNewUser] = useState(undefined);
    const handleSwitch = (newUser = undefined) => {
        if (newUser) setNewUser(newUser);
        console.log(newUser);
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className={["container", css.div__container].join(" ")}>
            <button

                className={["btn btn-primary", css.button_switcher].join(" ")}
                onClick={handleSwitch}
            >
                {isFormVisible && "List" || "Form"}
            </button>
            {isFormVisible && <UserForm switcher={handleSwitch}/> || (newUser && <List newUser={newUser}/> || <List/>)}
        </div>
    );
};

export {MainPage};