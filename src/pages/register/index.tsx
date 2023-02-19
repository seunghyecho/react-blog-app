import AuthForm from '@/components/auth/AuthForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthTemplate from '@/components/auth/AuthTemplate';

function Register() {
  const router = useRouter();
  const getSessionStorage = window.sessionStorage;

  useEffect(() => {
    if (getSessionStorage.length === 1) {
      alert('로그인 해주세요');

      router.push('/login');
    }
  }, [getSessionStorage, router]);

  return (
    <AuthTemplate>
      {getSessionStorage && <AuthForm data={getSessionStorage} type='register'/>}
    </AuthTemplate>
  );
}

export default Register;
