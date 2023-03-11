import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import { AuthFormBlock, Footer, StyledInput, ErrorMessage } from './AuthForm.styled';

interface Props {
  type: string;
  form: any;
  onChange: React.ChangeEventHandler;
  onSubmit: React.EventHandler<any>;
  error: string;
}

const textMap = {
  login: '로그인',
  register: '회원가입',
  accounts: '회원정보'
};

function AuthForm({ type, form, onChange, onSubmit, error }: Props) {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <label>User Name</label>
        <StyledInput
          name='username'
          placeholder='아이디'
          onChange={onChange}
          value={form.username}
        />

        <label>Password</label>
        <StyledInput
          type='password'
          name='password'
          placeholder='비밀번호'
          onChange={onChange}
          value={form.password}
        />

        {type === 'register' && (
          <>
            <label>Password Check</label>
            <StyledInput
              type='password'
              name='passwordConfirm'
              placeholder='비밀번호 확인'
              onChange={onChange}
              value={form.passwordConfirm}
            />
          </>
        )}

        {error && (
          <ErrorMessage>{error}</ErrorMessage>
        )}
        <Button fullWidth cyan type='submit' label={text} />
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
