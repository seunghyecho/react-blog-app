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
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}
export default Users;
