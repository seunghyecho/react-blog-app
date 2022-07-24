import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateFormLayout, Login } from "../../styles/login.styled";

interface IFormInput {
  firstName: string;
  lastName: string;
  password: string;
  example: string;
}

function LoginForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sessionStorage = window.sessionStorage;

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    sessionStorage.setItem("firstName", data.firstName);
    sessionStorage.setItem("lastName", data.lastName);
    sessionStorage.setItem("password", data.password);

    console.log(JSON.stringify(data));

    router.push("/");
  };

  useEffect(() => {
    console.log(errors);
    console.log(watch("example"));
  }, [errors, watch]);

  return (
    <CreateFormLayout>
      <Login onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {/* {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )} */}
        <label>Last Name</label>
        <input
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        {/* {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )} */}
        <label>Password</label>

        <input
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          {...register("password", { required: true })}
        />
        {errors.password && <p>This field is required</p>}
        <input type="submit" />
      </Login>
    </CreateFormLayout>
  );
}

export default LoginForm;
