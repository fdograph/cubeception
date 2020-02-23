import styled, { keyframes } from 'styled-components';

const bgAnim = keyframes`
  0% {
    background-color: #0f0;
  }
  16.6% {
    background-color: #ff0;
  }
  33% {
    background-color: #f00;
  }
  49.9% {
    background-color: #f0f;
  }
  66.5% {
    background-color: #00f;
  }
  83.1% {
    background-color: #0ff;
  }
  100% {
    background-color: #0f0;
  }
`;

const Color = styled.div`
  background-color: #0f0;

  width: 100%;
  height: 100%;

  animation-name: ${bgAnim};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default Color;
