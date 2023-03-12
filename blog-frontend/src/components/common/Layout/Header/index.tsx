import Link from 'next/link';
import { BiEditAlt, BiSearchAlt, BiUser } from 'react-icons/Bi';
import { Position, Wrapper, Spacer, Title, Utils } from './Header.styled';

function Header({ user }) {
  return (
    <>
      <Position>
        <Wrapper>
          <Title>
            <Link href={user ? '/' : '/login'}>
              <a>
                {user ? (
                  <h1>{user.username} Blog</h1>
                ) : (
                  <h1>로그인 해주세요.</h1>
                )}
              </a>
            </Link>
          </Title>

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
            <li>
              <Link href={user ? '/accounts' : '/register'}>
                <a>
                  <BiUser size={24} />
                </a>
              </Link>
            </li>
          </Utils>
        </Wrapper>
      </Position>
      <Spacer />
    </>
  );
}

export default Header;
