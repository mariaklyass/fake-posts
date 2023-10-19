import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  //to mimic api request
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicContactForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="space-y-5 grid mt-2"
    >
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        Email
      </label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={`shadow-sm bg-[#946b6f]/20 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-zinc-600 {errors.email && touched.email ? "border-red-600" : ""`}
      />
      {errors.email && touched.email && (
        <p className="text-red-700">{errors.email}</p>
      )}
      <label
        htmlFor="age"
        className="block mb-2 text-sm font-medium text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        Age
      </label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`shadow-sm bg-[#946b6f]/20 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-zinc-600 {errors.age ? && touched.age "border-red-600" : ""`}
      />
      {errors.age && touched.age && (
        <p className="text-red-700">{errors.age}</p>
      )}
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`shadow-sm bg-[#946b6f]/20 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-zinc-600 {errors.password ? && touched.password "border-red-600" : ""`}
      />
      {errors.password && touched.password && (
        <p className="text-red-700">{errors.password}</p>
      )}
      <label
        htmlFor="confirmPassword"
        className="block mb-2 text-sm font-medium text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`shadow-sm bg-[#946b6f]/20 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-zinc-600 {errors.confirmPassword && touched.confirmPassword ? "border-red-600" : ""`}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="text-red-700">{errors.confirmPassword}</p>
      )}
      <div className="flex justify-center ">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`py-3 px-5 text-sm font-medium text-center text-zinc-50 rounded-lg bg-[#946b6f]/40 sm:w-fit hover:bg-[#946b6f]/60 focus:ring-4 focus:outline-none focus:ring-primary-300 {disabled ? "opacity-30" : ""`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default BasicContactForm;
