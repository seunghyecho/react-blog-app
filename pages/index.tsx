import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import Home from "./home";

function Main() {
  return (
    <>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default Main;
