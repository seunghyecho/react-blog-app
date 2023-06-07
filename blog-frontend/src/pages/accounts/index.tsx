import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AuthTemplate from '@/components/auth/AuthTemplate';
import Button from '@/components/common/Button';
import { logout } from '@/modules/user';

const HeadStyled = styled.h1`
  margin: 1rem 0;
  position: relative;
  display: inline-flex;
  font-weight: 600;
  text-align: center;
  font-size:1.5rem;
  color:#202124;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    box-shadow: inset 0 -10px 0 rgb(137 134 255 / 40%);
  }
`;

function Accounts() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onLogout = () => {
    const check = window.confirm('로그아웃 하시겠습니까?');
    if (check) {
      dispatch(logout());
    }
  };

  const { username } = user || '';
  return (
    <AuthTemplate>
      <HeadStyled>{username} 님</HeadStyled>
      <Button label='로그아웃' onClick={onLogout} fullWidth />
    </AuthTemplate>
  );
}

export default Accounts;
