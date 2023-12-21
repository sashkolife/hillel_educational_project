import * as YUP from 'yup';

const password: RegExp = /(?=.*?[a-z])/

export const formikSchema = YUP.object().shape({
    email: YUP.string().email().required("Must be not empty"),
    age: YUP.number().positive().integer().required(),
    password: YUP.string().matches(password),
    confirmPassword: YUP.string().required().oneOf([YUP.ref('password')])
})