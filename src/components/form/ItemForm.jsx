import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm, FormProvider} from "react-hook-form";
import {v4} from "uuid";

import {fields} from "./fields";
import {FormField} from "./FormField";
import css from "./index.module.scss";
import {userFormSchema} from "./schemas";
import {coreService} from "../../services";


const ItemForm = ({switcher, current}) => {
    const {handleSubmit, getValues, ...methods} = useForm({
        resolver: yupResolver(userFormSchema),
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        if (data.id) {
            coreService.updatePartialOne(data).then(resp => switcher(resp));
        } else {
            coreService.createOne(data).then(resp => switcher(resp));
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        coreService.deleteOne(getValues().id).then(resp => switcher(resp));
    };

    const getPlaceHolder = (value) => {
        if (current) {
            return current[value];
        }
        return value.charAt(0).toUpperCase() + value.slice(1) + "...";
    };

    return (
        <FormProvider {...methods}>
            <div className={["container", css.form__container].join(" ")}>
                <form className={[css.form__box]} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <h2>Form</h2>
                    </label>
                    {fields.map(name =>
                        <FormField key={v4()} name={name} placeholder={getPlaceHolder(name)}/>)}
                    <span>
                        <button type="submit" className={"btn btn-outline-primary btn-sm m-1"}>
                            Submit
                        </button>
                        <button type="button" onClick={handleDelete} className={"btn btn-outline-danger btn-sm m-1"}>
                            Delete
                        </button>
                    </span>
                </form>
            </div>
        </FormProvider>
    );
};

export {ItemForm};