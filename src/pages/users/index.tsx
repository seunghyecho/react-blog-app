import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true);
      const res = await axios.get("http://jsonplaceholder.typicode.com/users/");
      setUsers(res.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!users) return null;

  return (
    <>
      <button onClick={() => fetchUsers()}>fetch Button</button>
      <ul>
        {users.map(({ id, username, name }) => {
          return (
            <li key={id}>
              {username}({name})
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Users;
