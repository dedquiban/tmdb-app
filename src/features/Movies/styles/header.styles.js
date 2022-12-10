import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 36px;
  color: #fff;

  h2 {
    margin-left: 32px;
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 20px;
`;

export const Left = styled(FontAwesomeIcon)`
  margin-right: 8px;
  padding: 12px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    background: #1a1a1a;
  }
`;

export const Right = styled(FontAwesomeIcon)`
  padding: 12px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;

    background: #1a1a1a;
  }
`;
