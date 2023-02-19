import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthFormBlock, Footer, StyledInput } from '@/components/auth/AuthForm.styled';
import Link from 'next/link';
import Button from '@/components/common/Button';

interface Props {
  data?: any;
  type?: string;
}

interface CreateProps {
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
}

const textMap = {
  login: '로그인',
  register: '회원가입',
  accounts: '회원정보'
};

function AuthForm({ data, type }: Props) {
  const text = textMap[type];
  const isUpdate = !!data;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CreateProps>(data ? {
      defaultValues: {
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: ''
      }
    } : {
      defaultValues: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        password: data?.password,
        passwordConfirm: data?.password
      }
    }
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
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <StyledInput
          {...register('firstName', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        {errors.firstName && <p>This field is required, string</p>}

        <label>Last Name</label>
        <StyledInput {...register('lastName', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })} />
        {errors.lastName && <p>This field is required, string</p>}

        <label>Password</label>
        <StyledInput {...register('password', { required: true })} />
        {errors.password && <p>This field is required</p>}

        {type === 'register' && (
          <>
            <label>Password Check</label>
            <StyledInput {...register('passwordConfirm', { required: true })} />
            {errors.passwordConfirm && <p>This field is required</p>}
          </>
        )}

        <Button fullWidth cyan type='submit' label={isUpdate ? '저장' : `${text}`} />
      </form>

      <Footer>
        {type === 'login' ? (
          <Link href='/register'>
            <a href='/register'>회원가입</a>
          </Link>
        ) : (
          <Link href='/login'>
            <a href='/login'>로그인</a>
          </Link>
        )}

      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
