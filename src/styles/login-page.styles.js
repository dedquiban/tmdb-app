import styled from 'styled-components';

const primaryGoldColor = '#e4a300';
const white = 'white';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  min-height: 100vh;
  align-items: center;

  p,
  h2 {
    color: ${white};
  }

  span {
    cursor: pointer;
    color: ${primaryGoldColor};
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const OtherAcctsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 24px;
  padding: 12px;
  color: #ffe39c;
`;
