import React, {FC} from 'react';

import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {Box} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import {iconButtonMenuProps} from "./constants";
import css from "./myAppBar.module.scss"
import {MyToolbarMenu} from "./MyToolbarMenu";


const MyToolBar: FC = () => {
    const [anchorEl, setAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Toolbar className={css.myToolBar}>
            <IconButton {...iconButtonMenuProps}>
                <MenuIcon/>
            </IconButton>
            <Box>
                <IconButton
                    {...iconButtonMenuProps}
                    aria-haspopup="true"
                    onClick={handleMenu}
                >
                    <AccountCircle/>
                </IconButton>
                <MyToolbarMenu props={{anchorEl, setAnchorEl}}/>
            </Box>
        </Toolbar>
    );
};

export {MyToolBar};