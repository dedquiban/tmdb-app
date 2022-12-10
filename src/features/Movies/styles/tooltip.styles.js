import styled from 'styled-components';

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  background: #1a1a1a;
  color: #fff;
  border-radius: 4px;
  padding: 24px 20px;

  position: absolute;
  width: 240px;
  height: 350px;

  transition: 0.3s all ease;
  &:hover {
    opacity: 0.95;
  }
`;

export const Header = styled.h3`
  max-width: 160px;
  position: absolute;
  top: 4px;
  left: 36px;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #1a1a1a;
  padding: 12px;
  z-index: 1;
`;
