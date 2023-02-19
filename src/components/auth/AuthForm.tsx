import { AuthFormBlock, Footer, StyledInput } from '@/components/auth/AuthForm.styled';
import Link from 'next/link';
import Button from '@/components/common/Button';

interface Props {
  type: string;
  form: any;
  onChange: any;
  onSubmit: any;
}

const textMap = {
  login: '로그인',
  register: '회원가입',
  accounts: '회원정보'
};

function AuthForm({ type, form, onChange, onSubmit }: Props) {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <label>User Name</label>
        <StyledInput
          name='username'
          value={form.username}
          onChange={onChange}
        />

        <label>Password</label>
        <StyledInput
          type='password'
          name='password'
          value={form.password}
          onChange={onChange}
        />

        {type === 'register' && (
          <>
            <label>Password Check</label>
            <StyledInput
              type='password'
              name='passwordConfirm'
              value={form.passwordConfirm}
              onChange={onChange}
            />
          </>
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
