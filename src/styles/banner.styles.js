import styled, { css } from 'styled-components';

export const BannerContainer = styled.div`
  padding: 28px 36px;
  min-height: 80vh;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

  box-shadow: inset 5px 220px 100px 10px rgba(0, 0, 0, 0.75);
  background-image: url('https://image.tmdb.org/t/p/original/${({ movie }) =>
    movie ? movie?.backdrop_path : 'no pics'}');

  // linear-gradient(
  //   to bottom right,
  //   rgb(0, 0, 0, 1),
  //   rgba(20, 20, 20, 0.25),
  //   rgba(44, 44, 44, 0.1)
  // ),

  @media (max-width: 480px) {
    min-height: 60vh;
    box-shadow: inset -30px 180px 100px 10px rgba(0, 0, 0, 0.75);
  }
`;
const fullHeight = css`
  height: 100%;
`;

export const Description = styled.div`
  overflow: hidden;

  h1 {
    color: rgb(175, 175, 175);
    margin-bottom: 6px;
  }

  p {
    color: rgb(175, 175, 175);
    font-family: 'Inter', sans-serif;

    width: 75%;

    ${({ expand }) => expand && fullHeight}
  }

  @media (max-width: 682px) {
    p {
      height: 32px;

      ${({ expand }) => expand && fullHeight}
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
      margin-bottom: 2px;
    }

    p {
      font-size: 10px;

      height: 28px;

      ${({ expand }) => expand && fullHeight}
    }
  }
`;

export const ExpandBtn = styled.div`
  display: none;
  font-weight: bold;
  font-size: 10px;
  color: rgb(175, 175, 175);
  border: 1px solid rgb(175, 175, 175);

  border-radius: 9999px;
  width: fit-content;
  padding: 4px 12px;
  margin-top: 6px;

  @media (max-width: 682px) {
    display: block;
    font-size: 10px;
    padding: 4px 12px;
  }

  @media (max-width: 480px) {
    display: block;
    font-size: 8px;
    padding: 4px 8px;
  }
`;
