import React from 'react';
import styled, { css } from 'styled-components';
import Color from './Color';

const delayedAnimation = () => {
  let str = '';

  for (let i = 1; i <= 25; i++) {
    str += `
      &:nth-child(${i}) {
        animation-delay: -${i * 100}ms;
      }
    `;
  }

  return css`
    ${str}
  `;
};

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1vmin;

  .gradient-item {
    box-shadow: 0 0 40px;
    ${delayedAnimation()}
  }
`;

const GradientGrid: React.FC<{ className?: string }> = ({ className }) => {
  const gridItems = [...Array(25).keys()].map(i => (
    <Color key={i} className="gradient-item" />
  ));
  return <Grid className={className}>{gridItems}</Grid>;
};

export default GradientGrid;
