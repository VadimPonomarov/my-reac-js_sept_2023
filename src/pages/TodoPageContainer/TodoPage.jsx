import React, {useEffect, useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss";
import {ItemCard} from "./ItemCard/ItemCard";
import {coreService} from "../../services";

const TodoPage = () => {
    const [todos, setTodos] = useState();
    useEffect(() => {
        coreService.getAll("todos")
            .then(todos => setTodos(todos));
    }, []);
    return (
        <div className={css.container}>
            {todos &&
                todos.map((item, i) =>
                    <ItemCard
                        key={v4()}
                        props={item}
                        custom={i}
                    />)}
        </div>
    );
};

export default TodoPage;