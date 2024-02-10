import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm, FormProvider} from "react-hook-form";
import {v4} from "uuid";

import {fields} from "./constants/fields";
import {FormField} from "./FormField";
import css from "./index.module.scss";
import {userFormSchema} from "./schemas";
import {coreService} from "../../services";


const UserForm = ({switcher}) => {
    const {handleSubmit, ...methods} = useForm({
        resolver: yupResolver(userFormSchema),
        mode: "onBlur"
    });
    const onSubmit = async (data) => {
        console.log(data)
        const resp = await coreService.createOne(data);
        await switcher(resp);
    };
    const getPlaceHolder = (value) =>
        value.charAt(0).toUpperCase() + value.slice(1) + "...";

    return (
        <FormProvider {...methods}>
            <div className={["container", css.form__container].join(" ")}>
                <form className={[css.form__box]} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <h2>Form</h2>
                    </label>
                    {fields.map(name =>
                        <FormField
                            key={v4()}
                            name={name}
                            placeholder={getPlaceHolder(name)}
                        />)}
                    <span>
                        <button
                            type="submit"
                            className={
                                "btn btn-outline-primary btn-sm m-1"
                            }
                        >
                            Submit
                        </button>
                    </span>
                </form>
            </div>
        </FormProvider>
    );
};

export {UserForm};