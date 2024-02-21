import * as React from "react";
import {FC} from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

import styles from "./myAppBar.module.scss";
import {MyToolBar} from "./MyToolBar";

const MyAppBar: FC = () => {
    const [auth, setAuth] = React.useState(true);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };


    return (
        <div className={styles.myAppBar}>
            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? "Logout" : "Login"}
                    />
                </FormGroup>
                <AppBar position="static">
                    <MyToolBar props={{auth}}/>
                </AppBar>
            </Box>
        </div>
    );
};

export {MyAppBar}