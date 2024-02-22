import * as React from "react";
import {FC} from "react";


import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, Container, FormLabel, Paper, Stack} from "@mui/material";
import {myFormAnimateDefaultProps} from "common/constants/myFormAnimateDefaultProps";
import {useContainerWidthResponsive} from "common/hooks/useContainerWidthResponsive";
import {FormProvider, useForm} from "react-hook-form";
import {v4} from "uuid";

import {FormField} from "./FormField";
import {formFields} from "./formFields";
import {formSchema} from "./formSchema";
import {formInputType, IProps} from "./formTypes";
import css from "./index.module.scss";


export const TemplateName: FC<IProps> = ({props}) => {
    const {formLabel = "Form", animate = true} = props;
    const [maxWidth] = useContainerWidthResponsive({});

    const {...methods} =
        useForm<formInputType>({
            resolver: yupResolver(formSchema),
            mode: "onChange"
        });
    const onSubmit = (data: formInputType) => {
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
                                </Stack>
                                <Button
                                    type={"submit"}
                                    variant={"text"}
                                    disabled={!methods.formState.isValid}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Container>
                </Container>
            </Box>
        </FormProvider>
    );
};