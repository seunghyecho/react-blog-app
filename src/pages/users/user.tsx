import { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "@/hooks/usersContext";
interface StateT {
  loading: any;
  data: DataT;
  error: any;
}
interface DataT {
  username: string;
  email: string;
}

function User({ id }: any) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  const { loading, data: user, error } = state.user;

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
