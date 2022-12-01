import styled from 'styled-components';

export const BannerContainer = styled.div`
  padding: 28px 36px;
  min-height: 80vh;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom right,
      rgb(0, 0, 0, 1),
      rgba(20, 20, 20, 0.25),
      rgba(44, 44, 44, 0.1)
    ),
    url('https://image.tmdb.org/t/p/original/${({ movie }) =>
      movie ? movie?.backdrop_path : 'no pics'}');

  @media (max-width: 480px) {
    min-height: 60vh;

    box-shadow: inset 0px -68px 58px -35px rgba(0, 0, 0, 1);
  }
`;

export const Description = styled.div`
  h1 {
    color: rgb(87, 87, 87);
    margin-bottom: 6px;
  }

  p {
    width: 75%;
    max-width: 700px;
    color: rgb(87, 87, 87);
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }
  }
`;
