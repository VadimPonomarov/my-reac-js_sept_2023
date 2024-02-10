import React, {useEffect, useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss";
import {ItemCard} from "../../components/card/ItemCard";
import {coreService} from "../../services";

const List = ({newItem}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (newItem) {
            coreService.getAll().then(list => setItems([...list, newItem]));
        } else {
            coreService.getAll().then(list => setItems(list));
        }
    }, [newItem]);

    return (
        <div className={css.div__container}>
            {items.length &&
                items.map(item =>
                    <ItemCard key={v4()} props={item}/>
                )}

        </div>
    );
};

export {List};