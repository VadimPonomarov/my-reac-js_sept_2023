import * as yup from "yup";

const formSchema = yup.object({
    exampleName: yup.string().required(key => `Please provide ${key}`),
    // example: yup.object({
    //     complexName: yup.string()
    // })
});

export {formSchema};