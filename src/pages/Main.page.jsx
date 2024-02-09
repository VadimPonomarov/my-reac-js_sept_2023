import React, {useEffect, useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss";
import {ItemCard} from "../components";
import {coreService} from "../services";

const MainPage = () => {
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        coreService.getAll()
            .then(data => data.filter(item => item.launch_year !== "2006"))
            .then(data => setItems(data));
    }, []);

    const handleCurrent = (item) => {
        if (current) {
            setCurrent(undefined);
        } else {
            setCurrent(item);
        }
    };
    return (
        <>
            {current &&
                <div className={css.info__div}>
                    <ItemCard props={current} isInfo={true} handleClick={handleCurrent}/>
                </div> ||
                <div className={["container-flex", css.divContainer].join(" ")}>
                    {items &&
                        items.map(
                            item =>
                                <ItemCard key={v4()} props={item} handleClick={handleCurrent}/>
                        )
                    }
                </div>
            }

        </>
    );
};

export {MainPage};