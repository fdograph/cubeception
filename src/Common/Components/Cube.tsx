import React from 'react';
import styled, { keyframes } from 'styled-components';
import GradientGrid from './GradientGrid';

type CubeProps = {
  className?: string;
  cubeSize: CSSStyleDeclaration['width'];
};

const rotateAnim = keyframes`
  from {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  to {
    transform: rotate3d(1, 1, 1, 360deg);
  }
`;

const CubeWrapper = styled.div<CubeProps>`
  position: relative;
  display: flex;
  width: ${({ cubeSize }) => cubeSize};
  height: ${({ cubeSize }) => cubeSize};
  transform-style: preserve-3d;
  backface-visibility: visible;

  animation-name: ${rotateAnim};
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const CubeSide = styled.div<CubeProps>`
  display: flex;
  align-content: stretch;
  justify-content: stretch;
  position: absolute;
  width: ${({ cubeSize }) => cubeSize};
  height: ${({ cubeSize }) => cubeSize};
  backface-visibility: visible;

  &.front {
    transform: rotateY(0deg) translateZ(calc(${({ cubeSize }) => cubeSize} / 2));
  }
  &.back {
    transform: rotateY(180deg)
      translateZ(calc(${({ cubeSize }) => cubeSize} / 2));
  }
  &.right {
    transform: rotateY(90deg)
      translateZ(calc(${({ cubeSize }) => cubeSize} / 2));
  }
  &.left {
    transform: rotateY(-90deg)
      translateZ(calc(${({ cubeSize }) => cubeSize} / 2));
  }
  &.top {
    transform: rotateX(90deg)
      translateZ(calc(${({ cubeSize }) => cubeSize} / 2));
  }
  &.bottom {
    transform: rotateX(-90deg)
      translateZ(calc(${({ cubeSize }) => cubeSize} / 2));
  }
`;

const Cube: React.FC<CubeProps> = ({ className, cubeSize }) => {
  return (
    <CubeWrapper className={`cude ${className}`} cubeSize={cubeSize}>
      <CubeSide className="front" cubeSize={cubeSize}>
        <GradientGrid className="gradient" />
      </CubeSide>
      <CubeSide className="back" cubeSize={cubeSize}>
        <GradientGrid className="gradient" />
      </CubeSide>
      <CubeSide className="right" cubeSize={cubeSize}>
        <GradientGrid className="gradient" />
      </CubeSide>
      <CubeSide className="left" cubeSize={cubeSize}>
        <GradientGrid className="gradient" />
      </CubeSide>
      <CubeSide className="top" cubeSize={cubeSize}>
        <GradientGrid className="gradient" />
      </CubeSide>
      <CubeSide className="bottom" cubeSize={cubeSize}>
        <GradientGrid className="gradient" />
      </CubeSide>
    </CubeWrapper>
  );
};

export default Cube;
