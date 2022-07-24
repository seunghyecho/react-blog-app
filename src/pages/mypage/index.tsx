import { CreateFormLayout, Login } from "@/styles/login.styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Mypage() {
  const router = useRouter();
  const getSessionStorage = window.sessionStorage;

  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
  });
  useEffect(() => {
    if (getSessionStorage) {
      setUser({
        lastName: getSessionStorage.getItem("lastName"),
        firstName: getSessionStorage.getItem("firstName"),
      });
    } else {
      router.push("/login");
    }
  }, [getSessionStorage, router]);

  const goHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <CreateFormLayout>
      <Login>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          defaultValue={user.lastName}
          disabled
        />
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          defaultValue={user.firstName}
          disabled
        />
        <button onClick={goHome}>메인으로</button>
      </Login>
    </CreateFormLayout>
  );
}
export default Mypage;
