import { Position } from '@/components/common/Form/Login.styled';
import Form from '@/components/common/Form/Login';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Accounts() {
  const router = useRouter();
  const getSessionStorage = window.sessionStorage;

  useEffect(() => {
    if (getSessionStorage.length === 1) {
      alert('로그인 해주세요');

      router.push('/login');
    }
  }, [getSessionStorage, router]);

  return (
    <Position>
      {getSessionStorage && <Form data={getSessionStorage} />}
    </Position>
  );
}

export default Accounts;
