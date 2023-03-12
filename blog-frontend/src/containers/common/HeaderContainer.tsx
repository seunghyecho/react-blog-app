import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Layout/Header';

function HeaderContainer() {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  return <Header user={user} />;
}

export default HeaderContainer;