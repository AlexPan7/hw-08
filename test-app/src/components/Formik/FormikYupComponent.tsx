import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationScheme = Yup.object({
  fullName: Yup.string()
    .min(2, "Must be more than 2 symbols")
    .required("Required"),
  organisation: Yup.string()
    .min(2, "Must be more than 2 symbols")
    .required("Required"),
  email: Yup.string().email("Invalid value").required("Required"),
  password: Yup.string().min(4, "Minimum 4 symbols").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

interface FormValues {
  fullName: string;
  organisation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormikYupComponent = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        organisation: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationScheme}
      onSubmit={(values, { setSubmitting }) => {
        const formValues = values as FormValues;

        if (Object.values(formValues).some((val) => val.trim() === "")) {
          alert("Please fill in all fields");
          return;
        }

        setTimeout(() => {
          alert(JSON.stringify(formValues, null, 2));
          setSubmitting(false);
        }, 200);
      }}
    >
      <Form>
        <div className="mb-4">
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full name
          </label>
          <Field
            name="fullName"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="fullName" component={"p"} />
        </div>
        <div className="mb-4">
          <label
            htmlFor="organisation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Organisation
          </label>
          <Field
            name="organisation"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="organisation" component={"p"} />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <Field
            name="email"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="email" component={"p"} />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <Field
            name="password"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="password" component={"p"} />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <Field
            name="confirmPassword"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="confirmPassword" component={"p"} />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-slate-600 hover:bg-slate-800 transition-all text-white font-bold py-2 px-4 rounded-full"
          >
            Button
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormikYupComponent;
