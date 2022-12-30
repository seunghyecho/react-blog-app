import styled from 'styled-components';

const Position = styled.div`
  width: 100%;
  height: 100%;
  background: #222748;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
const Layout = styled.form`
  position: absolute;
  min-width: 372px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }

  p {
    margin-top: 10px;
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  input {
    padding: 10px 20px;
    display: block;
    width: 100%;
    border-radius: 4px;
    box-sizing: border-box;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-weight: 200;
  }

  button {
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 10px 20px;
    width: 100%;
    display: block;
    background-color: #333;
    border: 1px solid #333;
    border-radius: 4px;
    color: #eee;
    text-transform: uppercase;
    appearance: none;
  }

  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    border: none;
    background-color: #619ffb;
    color: #ffffff;
  }

  button[type="submit"]:hover,
  input[type="submit"]:hover {
    background: #253752;
  }

  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
    color: #619ffb;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }



`;

export { Position, Layout };
