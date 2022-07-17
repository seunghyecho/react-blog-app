import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CreateFormLayout, Login } from "./login.styled";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  example: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
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
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Last Name</label>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Password</label>
        <input {...register("password", { required: true })} />
        {errors.password && <p>This field is required</p>}
        <input type="submit" />
      </Login>
    </CreateFormLayout>
  );
}

export default LoginForm;
