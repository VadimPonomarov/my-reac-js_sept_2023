import React, {useEffect, useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss";
import {UserCard} from "../../components/card/UserCard";
import {coreService} from "../../services";

const List = ({newUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (newUser) {
            coreService.getAll().then(list => setUsers([...list, newUser]));
        } else {
            coreService.getAll().then(list => setUsers(list));
        }
    }, [newUser]);

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