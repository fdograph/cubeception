import styled, { keyframes } from 'styled-components';

const bgAnim = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Gradient = styled.div`
  background: linear-gradient(-30deg, #0f0, #ff0, #f00, #f0f, #00f, #0ff, #0f0);
  background-size: 1400% 1400%;

  width: 100%;
  height: 100%;

  animation-name: ${bgAnim};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default Gradient;
