import React from "react";

import {useQuery} from "@tanstack/react-query";

import css from "./index.module.scss";
import {ItemCard} from "./ItemCard/ItemCard";
import {usersService} from "../../services";

const UsersPage = () => {
    const {data: items, isLoading, isSuccess} = useQuery({
        queryFn: () => usersService.getAll(),
        queryKey: ["users", "all"],
    });

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <div className={css.container}>
            {(isSuccess && items.length) &&
                items.map(item =>
                    <ItemCard key={item.id} props={item}/>)}
        </div>
    );
};

export default UsersPage;