import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const grid = css`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #2c272c,
    #31262c,
    #352629,
    #392525,
    #3b2620,
    #3d2820,
    #3f2b1f,
    #402d1f,
    #453123,
    #493428,
    #4e382c,
    #523c31
  );
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 502px) {
    overflow-y: unset;
  }
`;

const scroll = css`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #2c272c,
    #31262c,
    #352629,
    #392525,
    #3b2620,
    #3d2820,
    #3f2b1f,
    #402d1f,
    #453123,
    #493428,
    #4e382c,
    #523c31
  );
  height: 100vh;
  overflow-x: scroll;
`;

export const MyListPageContainer = styled.div`
  ${({ value }) => (value === 'grid' ? grid : scroll)};
`;

//TABLE
const tableGrid = css`
  display: flex;
  background: rgba(26, 26, 26, 0.5);
  width: 100%;
  min-height: 526px;
  padding: 24px 26px;
  overflow: hidden;

  @media (max-width: 682px) {
    overflow-y: scroll;
    padding-bottom: 80px;
  }
`;

const tableScroll = css`
  display: flex;
  background: rgba(26, 26, 26, 0.5);
  width: 100%;

  height: 100vh;
  padding: 24px 26px;
  overflow-y: scroll;
`;
export const Table = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 4px 2px 4px,
    rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  ${({ value }) => (value === 'grid' ? tableGrid : tableScroll)};
`;

const showContentDiv = css`
  width: unset;
  padding-left: 0px;
  min-width: unset;

  background: rgba(20, 20, 20, 1);
  display: flex;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  padding: 24px 12px 68px 12px;
`;
//CONTENT--movies of playlist
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-left: 32px;
  min-width: 50%;

  @media (max-width: 502px) {
    display: none;
    ${({ show }) => show && showContentDiv}
  }
`;

const scrollView = css`
  position: relative;
  display: flex;
  // padding-top: 28px;
`;

const gridView = css`
  position: relative;
  overflow-y: scroll;
`;
export const Movies = styled.div`
  ${({ value }) => (value === 'grid' ? gridView : scrollView)}
`;

//ADD PLAYLIST MODAL

const visible = css`
  display: flex;
`;

const invisible = css`
  display: none;
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 682px) {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    padding: 24px 24px 84px 24px;

    background: linear-gradient(
      to right bottom,
      #2c272c,
      #31262c,
      #352629,
      #392525,
      #3b2620,
      #3d2820,
      #3f2b1f,
      #402d1f,
      #453123,
      #493428,
      #4e382c,
      #523c31
    );
    // min-height: 80vh;
    // height: fit-content;
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const BottomPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 16px;
  padding: 20px 22px;

  background: rgba(26, 26, 26, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 4px 2px 4px,
    rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  @media (max-width: 682px) {
    min-height: 148px;
    height: 100%;
  }
`;

export const TopPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 16px;

  padding: 0px 4px;

  @media (max-width: 480px) {
    min-height: 356px;
    max-height: 356px;
  }
`;

export const CreatePlaylist = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a295f;

  margin: 12px 4px 12px 16px;
  padding: 12px;

  border-radius: 8px;

  background: rgba(26, 26, 26, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 4px 2px 4px,
    rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const LikedMoviesBtn = styled(CreatePlaylist)`
  color: #712222;
  margin-left: 6px;
`;

export const BackBtn = styled(FontAwesomeIcon)`
  display: flex;
`;

export const BackBtnWrapper = styled.div`
  display: none;
  @media (max-width: 502px) {
    display: flex;
    color: rgb(160, 160, 160);
    background: rgba(42, 42, 42, 0.5);
    font-size: 12px;
    padding: 10px;
    border-radius: 8px;
    margin-right: 8px;
    width: fit-content;

    z-index: 2;
    position: absolute;
    top: 2%;
    left: 100%;
    transform: translate(-210%, -5%);

    transition: 0.2s ease;
    &:hover {
      background: rgb(50, 50, 50);
    }
  }
`;
