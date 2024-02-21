import {createTheme, Theme} from "@mui/material";

export const myThemeComponents = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                sx: {padding: 1},
            }
        },

        MuiStack: {
            defaultProps: {
                spacing: 1
            }
        },

        MuiPaper: {
            defaultProps: {
                sx: {padding: 2},
                elevation: 2,

            }
        },

        MuiTextField: {
            defaultProps: {
                size: "small",
            }
        },
    },
});