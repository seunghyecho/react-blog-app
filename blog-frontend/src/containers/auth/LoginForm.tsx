import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import { useRouter } from 'next/router';
import { check } from '../../modules/user';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({
      form: 'login',
      key: name,
      value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  // 컴포넌트 처음 렌더링 시 form 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('로그인 실패!');
      console.log(authError);
      setError('로그인 실패!');
      return;
    }
    if (auth) {
      console.log('로그인 성공!');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      router.push('/');
      try {
        window.localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('login, localStorage is not working');
      }
    }
  }, [router, user]);

  return (
    <AuthForm
      type='login'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};
export default LoginForm;