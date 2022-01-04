import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values.username);
      const userLog = {
        username: values.username,
        password: values.password,
      };
      fetch("http://localhost:5000/auth/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLog),
      });
    },
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username && <p>{formik.errors.username}</p>}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password && <p>{formik.errors.password}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
