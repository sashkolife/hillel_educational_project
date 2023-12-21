import {useFormik} from "formik";
import {formikSchema} from "./validationSchema.ts";

const FormikForm = () => {

    const formik = useFormik(
        {
            initialValues: {
                email: "sashko.life@gmail.com",
                age: 0,
                password: '',
                confirmPassword: ''
            },
            onSubmit: (values) => {console.log(values)},
            validationSchema: formikSchema
        });

    console.log(formik.errors.age, formik.touched.age );
    return (
        <form onSubmit={formik.handleSubmit}>
            <input type='email' placeholder='Email' id='email' value={formik.values.email} onChange={formik.handleChange}></input>
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <input type='number' placeholder='Age' id='age' value={formik.values.age} onChange={formik.handleChange}></input>
            {formik.errors.age && formik.touched.age && <p>{formik.errors.age}</p>}
            <input type='password' placeholder='Password' id='password' value={formik.values.password} onChange={formik.handleChange}></input>
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            <input type='password' placeholder='Confirm password' id='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange}></input>
            {formik.errors.confirmPassword && formik.touched.confirmPassword && <p>{formik.errors.confirmPassword}</p>}
            <button type='submit'>Submit</button>
        </form>);
}

export default FormikForm;