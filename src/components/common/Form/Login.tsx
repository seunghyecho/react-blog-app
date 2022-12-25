import { useForm, useFormState } from "react-hook-form";
import { Form } from "@/styles/login.styled";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props{
  data?: any;
}
interface CreateProps {
  firstName: string;
  lastName: string;
  password: string;
}

function FormLogin({data}:Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<CreateProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const sessionStorage = window.sessionStorage;

  const onSubmit = (data: CreateProps) => {
    alert(JSON.stringify(data));
    sessionStorage.setItem("firstName", data.firstName);
    sessionStorage.setItem("lastName", data.lastName);
    sessionStorage.setItem("password", data.password);

    router.push("/");
  };

  useEffect(() => {
    const firstName = data?.getItem("firstName");
    const lastName = data?.getItem("lastName");
    const password = data?.getItem("password");
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("password", password);
  }, [data]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {dirtyFields.firstName && <p>Field is dirty.</p>}

      <label>Last Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {dirtyFields.lastName && <p>Field is dirty.</p>}

      <label>Password</label>
      <input {...register("password", { required: true })} />
      {errors.password && <p>This field is required</p>}

      <button type="submit">저장</button>
    </Form>
  );
}

export default FormLogin;
