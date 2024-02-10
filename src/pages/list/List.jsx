import React, {useEffect, useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss"
import {UserCard} from "../../components/card/UserCard";
import {coreService} from "../../services";

const List = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        coreService.getAll().then(list => setUsers(list));
    }, []);

    return (
        <div className={css.div__container}>
            {users.length &&
                users.map(user =>
                    <UserCard key={v4()} props={user}/>
                )}
        </div>
    );
};

export {List};