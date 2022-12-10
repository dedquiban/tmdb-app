import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 56px 0;
`;

export const MoviesWrapper = styled.div`
  background: rgba(87, 87, 87, 0.3);

  padding: 24px;
  margin: 12px 36px;
  border-radius: 8px;
`;

export const MoviesDiv = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  position: relative;
`;

export const Group = styled.div`
  &:last-child {
    padding-right: 0;
  }

  display: flex;
  scroll-behavior: smooth;
  padding-right: 28px;

  img {
    object-fit: cover;
    width: 240px;
    height: 350px;
    border-radius: 4px;
  }
`;
