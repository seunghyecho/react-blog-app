import { useState } from "react";
import User from "./user";
import {
  getUsers,
  useUsersDispatch,
  useUsersState,
} from "@/hooks/usersContext";

interface StateT {
  loading: any;
  data: DataT[];
  error: any;
}
interface DataT {
  id: number;
  username: string;
  name: string;
}

function Users() {
  const [userId, setUserId] = useState(null);

  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, data: users, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!users) return null;

  return (
    <>
      <button onClick={() => fetchData}>fetch Button</button>
      <ul>
        {users.map(({ id, username, name }) => {
          return (
            <li key={id} onClick={() => setUserId(id)}>
              {username}({name})
            </li>
          );
        })}
      </ul>
      {userId && <User id={userId} />}
    </>
  );
}
export default Users;
