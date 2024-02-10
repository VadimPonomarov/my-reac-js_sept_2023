import * as yup from "yup";

const schema = yup.object({
        name: yup.string().required(),
        username: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.object({
                street: yup.string().required("Please provide a street address"),
                suite: yup.string().required("Please provide a suite number"),
                city: yup.string().required("Please provide a city"),
                zipcode: yup.string().required("Please provide a zipcode"),
                geo: yup.object({
                        lat: yup.string().required("Please provide latitude"),
                        lng: yup.string().required("Please provide longitude"),
                }),
        }),
        phone: yup.string().required(),
        website: yup.string().required(),
        company: yup.object({
                name: yup.string().required("Please provide a company name"),
                catchPhrase: yup.string().required("Please provide a catch phrase"),
                bs: yup.string().required("Please provide a business strategy"),
        }),
});

export { schema };