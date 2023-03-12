import Header from 'blog-frontend/src/components/common/Layout/Header';
import { useSelector } from 'react-redux';

function HeaderContainer() {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <Header user={user} />;
}

export default HeaderContainer;