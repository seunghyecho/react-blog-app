import Header from 'blog-frontend/src/components/common/Layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/user';

function HeaderContainer() {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
}

export default HeaderContainer;