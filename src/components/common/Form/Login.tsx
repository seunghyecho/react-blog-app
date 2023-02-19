import { useForm } from 'react-hook-form';
import { Layout } from '@/components/common/Form/Login.styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  data?: any;
}

interface CreateProps {
  firstName: string;
  lastName: string;
  password: string;
}

function Login({ data }: Props) {
  const isUpdate = !!data;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProps>(data ? {
      defaultValues: {
        firstName: '',
        lastName: '',
        password: '',
      },
    } : {
      defaultValues: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        password: data?.password,
      },
    },
  );


  const sessionStorage = window.sessionStorage;

  const onSubmit = (data: CreateProps) => {
    alert(JSON.stringify(data));

    sessionStorage.setItem('firstName', data.firstName);
    sessionStorage.setItem('lastName', data.lastName);
    sessionStorage.setItem('password', data.password);

    router.push('/');
  };

  useEffect(() => {
    const firstName = data?.getItem('firstName');
    const lastName = data?.getItem('lastName');
    const password = data?.getItem('password');

    setValue('firstName', firstName);
    setValue('lastName', lastName);
    setValue('password', password);
  }, [data]);


  return (
    <Layout onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register('firstName', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.firstName && <p>This field is required, string</p>}

      <label>Last Name</label>
      <input {...register('lastName', {
        required: true,
        maxLength: 20,
        pattern: /^[A-Za-z]+$/i,
      })} />
      {errors.lastName && <p>This field is required, string</p>}

      <label>Password</label>
      <input {...register('password', { required: true })} />
      {errors.password && <p>This field is required</p>}

      <button type='submit'>{isUpdate ? '수정' : '로그인'}</button>
    </Layout>
  );
}

export default Login;
