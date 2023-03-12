import Link from 'next/link';
import { BiEditAlt, BiSearchAlt, BiUser } from 'react-icons/Bi';
import { Position, Wrapper, Spacer, Title, Utils } from './Header.styled';
import Button from '../../Button';

function Header({ user }) {
  return (
    <>
      <Position>
        <Wrapper>
          {user ? (
            <Title>
              <Link href='/'>
                <a>
                  <strong>{user.username}</strong>Blog
                </a>
              </Link>
              <Button label='로그아웃' />
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
            <li>
              <Link href={user ? '/login' : '/register'}>
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
