import styled from 'styled-components';

export const LeftPaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-top: 5px;
  font-size: 14px;
  min-width: 152px;

  @media (max-width: 682px) {
    font-size: 16px;
  }

  @media (max-width: 582px) {
    flex-direction: unset;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    padding-top: 0px;
    min-width: 82px;

  }

  @media(max-width: 502px) {
   
    flex-direction: unset;

    display: flex;
    width: 100%;
 

    flex-wrap: wrap;

    height: fit-content;
    padding-top: 0px;
`;
