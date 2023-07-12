import { useState } from "react";

interface FormFields {
  fullName: string;
  organisation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Form = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    fullName: "",
    organisation: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<FormFields>({
    fullName: "",
    organisation: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = (fields: FormFields) => {
    const errors: FormFields = {
      fullName: "",
      organisation: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!fields.fullName) errors.fullName = "First Name is required";
    if (!fields.organisation) errors.organisation = "Organisation is required";
    if (!fields.email) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(fields.email))
      errors.email = "Email is Invalid";
    if (!fields.password) errors.password = "Password is required";
    else if (fields.password.length < 5)
      errors.password = "Password is to short";
    if (!fields.confirmPassword)
      errors.confirmPassword = "Confirmed Password is required";
    else if (fields.password !== fields.confirmPassword)
      errors.confirmPassword = "Confirmed Password not the same";

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
    console.log(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formFields);
    setFormErrors(errors);

    if (Object.values(errors).every((x) => x === "")) {
      console.log("Form Successed:", formFields);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="full_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Full name
        </label>
        <input
          name="fullName"
          type="text"
          id="full_name"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Wick"
        />
        {formErrors.fullName}
      </div>
      <div className="mb-4">
        <label
          htmlFor="organisation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Organisation
        </label>
        <input
          name="organisation"
          type="text"
          id="organisation"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Twitter co."
        />
        {formErrors.organisation}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          name="email"
          type="text"
          id="email"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email@gmail.com"
        />
        {formErrors.email}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          name="password"
          type="password"
          id="password"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0000"
        />
        {formErrors.password}
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm Password
        </label>
        <input
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0000"
        />
        {formErrors.confirmPassword}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-slate-600 hover:bg-slate-800 transition-all text-white font-bold py-2 px-4 rounded-full"
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default Form;
