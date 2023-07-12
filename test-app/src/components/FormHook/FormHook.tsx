import React from "react";
import { useForm } from "react-hook-form";

interface FormFields {
  fullName: string;
  organisation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormFields>();

  const onSubmit = (data: FormFields) => console.log(data);

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="full_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Full name
        </label>
        <input
          type="text"
          placeholder="Full name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("fullName", { required: true, maxLength: 80 })}
        />
        {errors.fullName && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <label
          htmlFor="organisation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Organisation
        </label>
        <input
          type="text"
          placeholder="organisation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("organisation", { required: true, maxLength: 100 })}
        />
        {errors.organisation && <span>This field is required</span>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="organisation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email", { required: true, maxLength: 100 })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("password", {
            required: true,
            minLength: 4,
            maxLength: 100,
          })}
        />
        {errors.password && (
          <span>
            This field is required and must be at least 4 characters long
          </span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("confirmPassword", {
            required: true,
            minLength: 4,
            maxLength: 100,
            validate: (value) => value === password,
          })}
        />
        {errors.confirmPassword?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.confirmPassword?.type === "validate" && (
          <span>Passwords must match</span>
        )}
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

export default FormHook;
