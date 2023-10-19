import { useFormik } from "formik";

const onSubmit = async (values, actions) => {
  //to mimic api request
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedContactForm = () => {
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
      username: "",
      message: "",
    },

    onSubmit,
  });
  return (
    <form
      autoComplete="off"
      className="space-y-5 grid mt-2"
      onSubmit={handleSubmit}
    >
      <input
        required
        value={values.username}
        onChange={handleChange}
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
        className="shadow-sm bg-[#946b6f]/20 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-zinc-600"
      />
      <textarea
        required
        value={values.message}
        name="message"
        onChange={handleChange}
        className="shadow-sm bg-[#946b6f]/20 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-zinc-600"
        placeholder="Here goes your message"
      ></textarea>
      <div className="flex justify-center">
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-zinc-50 rounded-lg bg-[#946b6f]/40 sm:w-fit hover:bg-[#946b6f]/60 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AdvancedContactForm;
