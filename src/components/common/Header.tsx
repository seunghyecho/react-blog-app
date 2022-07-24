/* eslint-disable import/no-unresolved */
import Link from "next/link";
import styled from "styled-components";
import { BiEditAlt, BiUser } from "react-icons/Bi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CreateHeaderWrapper = styled.header`
  padding: 0 15px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
`;
const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ul {
    display: flex;
    li {
      padding: 0 12px;
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

function Header() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const getSessionStorage = window.sessionStorage;

  useEffect(() => {
    if (getSessionStorage) {
      setUser(getSessionStorage.getItem("lastName"));
    } else {
      router.push("/login");
    }
  }, [getSessionStorage, router]);

  return (
    <CreateHeaderWrapper>
      <Position>
        <h1>
          <Link href="/">
            <a>{user}Blog</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="/posts">
              <a>
                <BiEditAlt size={24} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>
                <BiUser size={24} />
              </a>
            </Link>
          </li>
        </ul>
      </Position>
    </CreateHeaderWrapper>
  );
}
export default Header;
