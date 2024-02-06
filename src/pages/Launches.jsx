import React, {useEffect, useState} from "react";
import {axiosPostService} from "../services";
import {LauncheCard} from "../components";
import css from "./index.module.css";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        axiosPostService.getLaunches()
            .then(data => data.filter(item => item.launch_year !== "2006"))
            .then(data => setLaunches(data));
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
                    <LauncheCard props={current} isInfo={true} handleClick={handleCurrent}/>
                </div> ||
                <div className={["container-flex", css.divContainer].join(" ")}>
                    {launches &&
                        launches.map(
                            item =>
                                <LauncheCard key={item.id} props={item} handleClick={handleCurrent}/>
                        )
                    }
                </div>
            }

        </>
    );
};

export {Launches};