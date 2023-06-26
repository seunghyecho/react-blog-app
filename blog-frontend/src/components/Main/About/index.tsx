import styled from "styled-components";
import { FcEngineering, FcIdea, FcPodiumWithSpeaker } from "react-icons/fc";
import palette from "@/lib/styles/palette";

const AboutBlock = styled.div`
  > * {
    margin: 2rem 0;
  }

  strong{
    color:#202124;
  }
  
  h1 {
    padding: 2rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid ${palette.gray[1]};
  }

  h2 {
    margin: 2rem 0;
    color: ${palette.cyan[7]};
    font-weight: 600;
  }

  blockquote {
    margin: 2rem 0;
    padding: 1rem 1rem 1rem 2rem;
    border-left: 4px solid ${palette.cyan[7]};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #f8f9fa;
  }

  div > ul {
    margin: 2rem 0;

    li{
      margin: 2rem 0;
      &:before {
        padding: 0 0.25rem;
        content: '\\B7';
      }

      p{
        margin: 1rem 0;
        padding: 0 0.25rem;
        line-height: 1.5rem;
      }
    }
  }
`;

function About() {
  return (
    <AboutBlock>
      <div id="projects">
        <h1>About This</h1>
        <h2>Blog</h2>
        <blockquote>
          <p>
            <strong>(2022.08 ~ current)</strong>
          </p>
        </blockquote>

        <div>
          <FcEngineering/> 기술 스택 & 사용 툴
          <ul>
            <li>
                HTML, CSS, ReactJS(Next), TypeScript, React Query, MongoDB, Postman
            </li>
          </ul>
        </div>
        <div>
          <FcPodiumWithSpeaker/> 작업 환경
          <ul>
            <li>
                macOS 13.3.1, Node.js v19.5.0, VS Code
            </li>
          </ul>
        </div>
        {/* 
        <div>
          <FcIdea/> 작업 설명
          <ul>
            <li>
              리액트를 다루는 기술 서적을 참고한 건에 대하여
              <p>
                리액트를 기반으로 작업이 진행되어야 하는 순서나 방향성을 잡고 싶었다. 또한
                개인적으로 쌓아온 지식들을 바탕으로 크던 작던 나만의 프로젝트를 만들어 봐야 겠다고 계속 생각했었기 때문에 리액트에 대해서 발전하기 위함이었다.
              </p>
              <p>
                리액트 입문자로서 체계적인 목차가 마음에 들었다. 리덕스를 어떻게 쓰는지 궁금했는데 리덕스와 리덕스 미들웨어에 대한 설명과 
                이를 사용해 볼 수 있어서 좋았고, 또 코드를 개선해 나가는 과정으로 이렇게 개선해야하는 거구나라는 생각이 들었다. 이 책을 통해 가장 접해보고 싶었던 백엔드와 연동하는 파트는
                정말 재미있었다. MongoDB, Postman으로 간단하게 서버를 구현하면서 전반적인 웹 애플리케이션이 만들어 볼 수 있는게 좋았다.
              </p>
            </li>
            <li>
              React Query, TypeScript를 사용한 건에 대하여
              <p>
                책에서는 리액트와 리덕스를 사용하면서, 네트워크 요청 등의 비동기 작업은 리덕스 미들웨어로 관리했었다. 실무에서는 React Query로 
                API 요청 하는 방식으로 진행했었는데 React Query와 비교하자면 리덕스는 코드가 길고, 반복적인 코드가 있어 복잡한 느낌이 드는 것 같다. 하지만 리덕스 액션이
                디스패치 되는 과정은 리액트 useState에서 set설정자(setState)에서 동작하는 과정과 유사하다고 생각했다. 두 라이브러리 중 어떤 것을 선호하냐에 대해서는 취향 차이가 될 것 같다.
                그래서 리덕스로 요청 하는 부분을 내가 더 편하게 느껴졌던 React Query로 코드를 바꿔봄에 따라 TypeScript와 같이 다시 공부하면서 스킬 발전이 되기를 바랬다. 사실 더 공부하고 싶은 라이브러리를 선택함.
              </p>
            </li>
            <li>
              추가된/될 작업에 대하여
              <p>
                개발 블로그(velog)를 참고하면서 내가 뭘 할 수 있는지, 내가 해보면 좋을 것 같은 부분을 해당 사이트에서 착안하여
                페이지 레이아웃의 디자인과 구성을 내가 좋아하는 요소들로 꽉꽉 채워 가고 있다. 예를 들면, 검색 페이지에서의 검색 기능과 게시물 상세 페이지에서의 댓글 기능을 일단락 구현해 보았다. 
                기획력에 비해 실행력이 저조하지만 버킷 리스트처럼 하나하나 추가 되어 가고 있다. 프로젝트명은 웹기술다이어리/블로그가 될 것 같다.
              </p>
            </li>
          </ul>
        </div>
         */}
      </div>

      <div id="frontendEngineer">
        <h1>Work Experience</h1>
        <h2>FLES Inc</h2>
        <blockquote>
          <p>
            <strong>Web Publisher(2021.02 ~ 2022.02)</strong>
          </p>
          <br/>
          <p>
            <strong>Frontend Engineer(2022.02 ~ 2023.05)</strong>
          </p>

        </blockquote>

        <div>
          <FcEngineering/> 기술 스택 & 사용 툴
          <ul>
            <li>HTML, CSS, TypeScript, ReactJS(Next), React Query, MUI, Storybook, Git, Slack, Confluence, Jira</li>
          </ul>
        </div>

        <div>
          <FcPodiumWithSpeaker/> 작업 환경
          <ul>
            <li>
                macOSs, Node.js, WebStorm
            </li>
          </ul>
        </div>
      </div>
    </AboutBlock>
  );
}

export default About;
