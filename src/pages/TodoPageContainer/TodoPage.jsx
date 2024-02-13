import React, {useEffect, useState} from "react";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {coreService} from "../../services";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        coreService.getAll("todos")
            .then(todos => setTodos(todos));
    }, []);
    return (
        <div className={css.container}>
            {todos && todos.map(item => <ItemCard props={item}/>)}
        </div>
    );
};

export default TodoPage;