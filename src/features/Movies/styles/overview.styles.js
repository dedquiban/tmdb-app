import styled, { css } from 'styled-components';

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(to right bottom, #697f85, #516d75, #516d75, #697f85)
      border-box;
  opacity: 0.95;
  border-radius: 8px;
  border: 2px solid transparent;
`;

const fullHeight = css`
  height: 100%;
`;

export const OverviewContainer = styled.div`
  ${gradientBorder};
  text-align: left;
  padding: 32px 22px;
  height: 50%;
  position: relative;

  transition: 0.6s height ease;
  ${({ active }) => active && fullHeight}
`;

export const MovieOverview = styled.p`
  height: 100%;
  overflow-y: scroll;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
`;
