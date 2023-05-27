import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { BiEditAlt, BiSearchAlt, BiUser } from 'react-icons/Bi';
import Modal from '@/components/common/Modal';
import { Position, Wrapper, Spacer, Title, Utils } from '@/components/common/Layout/Header/Header.styled';
import palette from '@/lib/styles/palette';

function Header({ user }) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const onCreate = ()=>{
    setModal(true);
  }

  const onCancel = ()=>{
    setModal(false);
  }
  
  const onConfirm = ()=>{
    setModal(false);
    router.push('/create');
  }
  return (
    <>
      <Position>
        <Wrapper>          
          <Title>
            <Link href='/'>
              {user? user.username : ''} Blog
            </Link>
          </Title>

          <Utils>
            {user && (
                <li>
                  <Link href='#' onClick={onCreate}>
                    <BiEditAlt size={24} color={palette.cyan[5]}/>
                  </Link>
                </li>
              )}

            <li>
              <Link href='/search'>
                  <BiSearchAlt size={24} />
              </Link>
            </li>
            <li>
              <Link href={user ? '/accounts' : '/login'}>
                  <BiUser size={24} />
              </Link>
            </li>
          </Utils>

          <Modal 
              visible={modal} 
              title='포스트 등록' 
              description='포스트를 등록하시겠습니까?'
              confirmText='등록'
              onConfirm={onConfirm} 
              onCancel={onCancel} 
          />
        </Wrapper>
      </Position>
      <Spacer />
    </>
  );
}

export default Header;
