import styled, { keyframes } from 'styled-components';

const bgAnim = keyframes`
  0% {
    background-color: hsla(0, 100%, 50%, 1);
  }
  16.6% {
    background-color: hsla(60, 100%, 50%, 0.8);
  }
  33% {
    background-color: hsla(120, 100%, 50%, 0.6);
  }
  49.9% {
    background-color: hsla(180, 100%, 50%, 0.4);
  }
  66.5% {
    background-color: hsla(240, 100%, 50%, 0.6);
  }
  83.1% {
    background-color: hsla(300, 100%, 50%, 0.8);
  }
  100% {
    background-color: hsla(360, 100%, 50%, 1);
  }
`;

const Color = styled.div`
  background-color: #0f0;

  width: 100%;
  height: 100%;

  animation-name: ${bgAnim};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export default Color;
