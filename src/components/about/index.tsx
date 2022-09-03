import styled from "styled-components";

const Layout = styled.div`
  h2 {
    margin: 2rem 0;
    color: #619ffb;
    font-weight: 600;
  }
  blockquote {
    margin: 2rem 0;
    padding: 1rem 1rem 1rem 2rem;
    border-left: 4px solid #619ffb;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #f8f9fa;
  }
`;

function About() {
  return (
    <Layout>
      <div id="projects">
        <h1>Projects</h1>
        <h2>Blog</h2>
        <blockquote>
          <p>
            <strong>(2022.08 ~ current)</strong>
          </p>
        </blockquote>
      </div>
      <div id="frontendEngineer">
        <h1>Work Experience</h1>
        <h2>FLES Inc</h2>
        <blockquote>
          <p>
            <strong>Frontend Engineer(2021.02 ~ current)</strong>
          </p>
        </blockquote>
      </div>
    </Layout>
  );
}

export default About;
