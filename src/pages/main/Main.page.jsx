import React, {useState} from "react";

import css from "./index.module.scss";
import {UserForm} from "../../components/form/UserForm";
import {List} from "../list/List";


const MainPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newItem, setnewItem] = useState(undefined);
    const handleSwitch = (newItem = undefined) => {
        if (newItem) setnewItem(newItem);
        console.log(newItem);
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
            {isFormVisible && <UserForm switcher={handleSwitch}/> || (newItem && <List newItem={newItem}/> || <List/>)}
        </div>
    );
};

export {MainPage};