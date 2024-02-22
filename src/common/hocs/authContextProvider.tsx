import React, {createContext, FC, useState} from 'react';

import {IAuthContext, IProps} from "./interfaces";


const AuthContext = createContext<IAuthContext>(null)

const AuthContextProvider: FC<IProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)


    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, theme: "light"}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthContextProvider};