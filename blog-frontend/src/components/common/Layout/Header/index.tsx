import Link from 'next/link';
import { BiEditAlt, BiSearchAlt, BiUser } from 'react-icons/Bi';
import { Position, Wrapper, Spacer, Title, Utils } from '@/components/common/Layout/Header/Header.styled';

function Header({ user }) {
  return (
    <>
      <Position>
        <Wrapper>
          <Title>
            <Link href={user ? '/' : '/login'}>
              
                {user ? (
                  <h1>{user.username} Blog</h1>
                ) : (
                  <h1>로그인 해주세요.</h1>
                )}
              
            </Link>
          </Title>

          <Utils>
            <li>
              <Link href='/search'>
                
                  <BiSearchAlt size={24} />
              </Link>
            </li>
            <li>
              <Link href='/posts/create'>
                  <BiEditAlt size={24} />
              </Link>
            </li>
            <li>
              <Link href={user ? '/accounts' : '/register'}>
                  <BiUser size={24} />
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
