import React, {useState} from "react";

import css from "./index.module.scss";
import {ItemForm} from "../../components/form/ItemForm";
import {List} from "../list/List";


const MainPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newItem, setNewItem] = useState(undefined);
    const [current, setCurrent] = useState(undefined);
    const handleSwitch = (newItem = undefined) => {
        if (newItem) setNewItem(newItem);
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
            {isFormVisible && <ItemForm current={current} switcher={handleSwitch}/> || (newItem &&
                <List setCurrent={setCurrent} setIsFormVisible={setIsFormVisible} newItem={newItem}/> ||
                <List setCurrent={setCurrent} setIsFormVisible={setIsFormVisible}/>)}
        </div>
    );
};

export {MainPage};