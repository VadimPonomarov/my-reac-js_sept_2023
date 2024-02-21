import * as React from "react";
import {FC, FormEvent} from "react";

import {Box, Button, Container, FormGroup, FormLabel, Paper, Stack} from "@mui/material";

import {yupResolver} from "@hookform/resolvers/yup";

import {myFormAnimateDefaultProps} from "common/constants/myFormAnimateDefaultProps";
import {useContainerWidthResponsive} from "common/hooks/useContainerWidthResponsive";
import {FormProvider, useForm} from "react-hook-form";
import {v4} from "uuid";

import {FormField} from "./FormField";
import {formFields} from "./formFields";
import {formSchema} from "./formSchema";
import {IProps} from "./formTypes";
import css from "./index.module.scss";


const MyRegistrationForm: FC<IProps> = ({props}) => {
    const {formLabel = "Form", animate = true} = props;
    const [maxWidth] = useContainerWidthResponsive({});

    const methods =
        useForm({
            resolver: yupResolver(formSchema),
            mode: "onBlur"
        });
    const onSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
    };


    return (
        <FormProvider {...methods}>
            <Box style={css} {...animate && {...myFormAnimateDefaultProps}}>
                <Container>
                    <Container maxWidth={maxWidth}>
                        <Paper>
                            <FormGroup onSubmit={methods.handleSubmit(() => onSubmit)}>
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
                                    <Button>Submit</Button>
                                </Stack>
                            </FormGroup>
                        </Paper>
                    </Container>
                </Container>
            </Box>
        </FormProvider>
    );
};

export {MyRegistrationForm}