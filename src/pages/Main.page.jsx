import React, {useEffect, useState} from "react";

import css from "./index.module.scss";
import {ItemCard} from "../components";
import {coreService} from "../services";

const MainPage = () => {
    const [launches, setItems] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        coreService.getLaunches()
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
                    {launches &&
                        launches.map(
                            item =>
                                <ItemCard key={item.id} props={item} handleClick={handleCurrent}/>
                        )
                    }
                </div>
            }

        </>
    );
};

export {MainPage};