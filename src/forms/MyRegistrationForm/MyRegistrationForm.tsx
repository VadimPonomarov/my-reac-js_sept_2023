import * as React from "react";
import {FC, useContext} from "react";


import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, Container, FormGroup, FormLabel, Paper, Stack} from "@mui/material";
import {myFormAnimateDefaultProps} from "common/constants/myFormAnimateDefaultProps";
import {AuthContext} from "common/hocs/authContextProvider";
import {useContainerWidthResponsive} from "common/hooks/useContainerWidthResponsive";
import {FormProvider, useForm} from "react-hook-form";
import {Form, useNavigate} from "react-router-dom";
import {v4} from "uuid";

import {FormField} from "./FormField";
import {formFields} from "./formFields";
import {formSchema} from "./formSchema";
import {formInputType, IProps} from "./formTypes";
import css from "./index.module.scss";


const MyRegistrationForm: FC<IProps> = ({props}) => {
    const {formLabel = "Form", animate = true} = props;
    const [maxWidth] = useContainerWidthResponsive({});
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const {...methods} =
        useForm<formInputType>({
            resolver: yupResolver(formSchema),
            mode: "onBlur"
        });
    const onSubmit = (data: formInputType) => {
        console.log(data)
        setIsAuth(true)
        navigate("/")
    };


    return (
        <FormProvider {...methods}>
            <Box style={css} {...animate && {...myFormAnimateDefaultProps}}>
                <Container>
                    <Container maxWidth={maxWidth}>
                        <Paper>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <Stack direction={"column"}>
                                    <FormLabel>{formLabel}</FormLabel>
                                    {formFields &&
                                        Object.keys(formFields).map(
                                            item =>
                                                <FormField
                                                    key={v4()}
                                                    name={item}
                                                    extraProps={formFields[item].props}
                                                />
                                        )
                                    }
                                    <Button
                                        type={"submit"}
                                        variant={"text"}
                                        disabled={!methods.formState.isValid}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Container>
                </Container>
            </Box>
        </FormProvider>
    );
};

export {MyRegistrationForm}