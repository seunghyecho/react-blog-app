import axios from "axios";
import useAsync from "@/hooks/useAsync";
import { useState } from "react";
import User from "./user";
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

async function getUsers() {
  const res = await axios.get("http://jsonplaceholder.typicode.com/users/");
  return res.data;
}
function Users() {
  const [state, refetch] = useAsync(getUsers, [], false);
  const [userId, setUserId] = useState(null);
  const { loading, data: users, error } = state as StateT;

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!users) return null;

  return (
    <>
      <button onClick={() => refetch}>fetch Button</button>
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
