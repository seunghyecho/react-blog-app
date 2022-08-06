import useAsync from "@/hooks/useAsync";
import axios from "axios";
interface StateT {
  loading: any;
  data: DataT;
  error: any;
}
interface DataT {
  username: string;
  email: string;
}

async function getUser(id) {
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
}

function User({ id }: any) {
  const [state] = useAsync(() => getUser(id), [id]); //id값 바뀔때마다 호출
  const { loading, data: user, error } = state as StateT;

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
