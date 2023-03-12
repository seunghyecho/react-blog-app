import styled from 'styled-components';
import Link from 'next/link';
import palette from '../../lib/styles/palette';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${palette.gray[2]};
`;

const WhiteBox = styled.div`
  .logo-area {
    padding-bottom: 2rem;
    display: block;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }

  padding: 2rem;
  width: 50%;
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  background-color: ${palette.gray[0]};
  text-align: center;
`;


const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className='logo-area'>
          <Link href='/'>
            <a>BLOG</a>
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};
export default AuthTemplate;
