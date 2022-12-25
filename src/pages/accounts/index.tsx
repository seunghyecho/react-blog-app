import { Layout } from "@/styles/login.styled";
import FormLogin from "@/components/common/Form/Login";

function Accounts() {
  const getSessionStorage = window.sessionStorage;

  return (
    <Layout>
      {getSessionStorage && <FormLogin data={getSessionStorage} />}
    </Layout>
  );
}

export default Accounts;
