import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiEditAlt, BiSearchAlt, BiUser } from 'react-icons/Bi';
import { Layout, Position, Title, Utils } from '@/components/common/Layout/Header/Header.styled';

function Header() {
  const router = useRouter();
  const [user, setUser] = useState({
    lastName: '',
  });
  const getSessionStorage = window.sessionStorage;

  useEffect(() => {
    if (getSessionStorage.length > 1) {
      setUser({ lastName: getSessionStorage.getItem('lastName') });
    } else {
      router.push('/login');
    }
  }, [getSessionStorage, router]);

  return (
    <Layout>
      <Position>
        {user.lastName ? (
          <Title>
            <Link href='/'>
              <a>
                <strong>{user.lastName}</strong>Blog
              </a>
            </Link>
          </Title>
        ) : (
          <Title>
            <Link href='/login'>
              <a>
                <strong>로그인 해주세요.</strong>
              </a>
            </Link>
          </Title>
        )}


        <Utils>
          <li>
            <Link href='/search'>
              <a>
                <BiSearchAlt size={24} />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/posts/create'>
              <a>
                <BiEditAlt size={24} />
              </a>
            </Link>
          </li>

          {getSessionStorage.length === 0 && (
            <li>
              <Link href='/login'>
                <a>
                  <BiUser size={24} />
                </a>
              </Link>
            </li>
          )}

          {getSessionStorage.length !== 0 && (
            <li>
              <Link href='/accounts'>
                <a>
                  <BiUser size={24} />
                </a>
              </Link>
            </li>
          )}
        </Utils>
      </Position>
    </Layout>
  );
}

export default Header;
