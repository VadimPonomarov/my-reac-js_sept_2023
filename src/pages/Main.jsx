import React from 'react';
import {characters} from '../sources'
import {CardCharacter} from "../components";

const Main = () => {
    return (
        <div
            className="container-fluid"
            style={{
                height: "98vh",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                rowGap: "10px",
                columnGap: "10px",
                padding: "20px"
            }}>
            {
                characters.map(item => <CardCharacter key={item.id} props={item}/>)
            }
        </div>
    );
};

export {Main};