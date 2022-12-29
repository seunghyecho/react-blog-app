import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiEditAlt, BiSearchAlt, BiUser } from 'react-icons/Bi';
import { Layout, Position } from '@/components/common/Layout/Header/Header.styled';

function Header() {
  const router = useRouter();
  const [user, setUser] = useState({
    lastName: '',
  });
  const getSessionStorage = window.sessionStorage;

  useEffect(() => {
    if (getSessionStorage) {
      setUser({ lastName: getSessionStorage.getItem('lastName') });
    } else {
      router.push('/login');
    }
  }, [getSessionStorage, router]);

  return (
    <Layout>
      <Position>
        <h1>
          <Link href='/src/pages'>
            <a>
              <span className='userName'>{user.lastName}</span>Blog
            </a>
          </Link>
        </h1>
        <ul>
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
        </ul>
      </Position>
    </Layout>
  );
}

export default Header;
