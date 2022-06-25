import Header from "../components/Header";
import Layout from "../components/Layout";
import Home from "./home";

export default function Main() {
  return (
    <>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
