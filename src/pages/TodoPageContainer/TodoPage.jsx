import React, {useEffect, useState} from "react";

import css from "./index.module.scss";
import {ItemCard} from "./ItemCard/ItemCard";
import {coreService$, todosService} from "../../services";

const TodoPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const sub = coreService$.subscribe(setItems);
        coreService$.next(() => todosService.getAll());
        return () => sub.unsubscribe();
    }, []);

    return (
        <div className={css.container}>
            {items.length &&
                items.map(item =>
                    <ItemCard key={item.id} props={item}/>)}
        </div>

    );
};

export default TodoPage;