import React, {useEffect, useState} from "react";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {commentsService, coreService$} from "../../services";

const CommentsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const sub = coreService$.subscribe(setItems);
        coreService$.next(() => commentsService.getAll());
        return () => sub.unsubscribe();
    }, []);
    return (
        <div className={css.container}>
            {items.length && items.map(item => <ItemCard key={item.id} props={item}/>)}
        </div>
    );
};

export default CommentsPage;