import React, {FC, useContext} from 'react';

import {ThemeProvider as MyThemeProvider, createTheme, Theme} from "@mui/material";
import {myThemeComponents, myThemePalette} from 'common/themes';

import {AuthContext} from '.';
import {IProps} from './interfaces';

const ThemeProviderMain: FC<IProps> = ({children}) => {
    const {theme} = useContext(AuthContext)
    const themePalette: Theme = createTheme({
        palette: {
            mode: theme ? theme : "light",
        }
    });
    const myThemeMain: Theme = createTheme(
        myThemeComponents,
        {...myThemePalette, ...themePalette},
    );

    return (
        <MyThemeProvider theme={myThemeMain}>
            {children}
        </MyThemeProvider>
    );
};

export {ThemeProviderMain};