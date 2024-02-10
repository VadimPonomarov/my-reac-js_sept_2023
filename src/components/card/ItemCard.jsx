import React, {useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss";


const ItemCard = ({props, setCurrent, setIsFormVisible}) => {
    const {id, brand, price, year} = props;
    const handleClick = () => {
        setCurrent(props);
        setIsFormVisible(true);
    };

    return (
        <button
            type={"button"}
            className={["button btn container", css.div__container].join(" ")}
            onClick={handleClick}
        >
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </button>
    );
};

export {ItemCard};