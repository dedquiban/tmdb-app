import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  display: none;
  position: fixed;
  background: rgba(26, 26, 26, 0.5);

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  overflow-y: scroll;

  @media (max-width: 480px) {
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
  }

  ${({ preview }) => preview && visible}
`;
export const FrontCard = styled.div`
  display: flex;
  transform-style: preserve-3d;
`;

export const ReleaseInfo = styled.div`
  background-image: linear-gradient(
    to left top,
    #643446,
    #643446,
    #643446,
    #643446,
    #6d353f,
    #733937,
    #743b33,
    #753e30,
    #75412c,
    #74422c,
    #73432c,
    #72432c,
    #71442c
  );
  color: #b4aea1;
  font-weight: bold;

  padding: 8px 12px;
  width: fit-content;
  border-radius: 8px;

  margin-right: 8px;
`;

export const VoteInfo = styled(ReleaseInfo)`
  display: flex;
  align-items: center;

  background-image: radial-gradient(
    #74422c,
    #74422c,
    #74422c,
    #74422c,
    #74422c,
    #754131,
    #754037,
    #75403c,
    #724147,
    #6c4350,
    #644656,
    #5c495a
  );
`;

export const QualityInfo = styled(ReleaseInfo)`
  background-image: linear-gradient(
    to left top,
    #74422c,
    #74422c,
    #74422c,
    #74422c,
    #74422c,
    #754131,
    #754037,
    #75403c,
    #724147,
    #6c4350,
    #644656,
    #5c495a
  );
`;

export const FaStar = styled(FontAwesomeIcon)`
  margin-right: 4px;
  color: #e4a300;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const colorRed = css`
  color: #e22525;
`;

export const FaHeart = styled(FontAwesomeIcon)`
  padding: 8px;
  border-radius: 8px;
  font-size: 18px;

  color: gray;
  background: #382a36;

  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.05);
    background: #443241;
  }
  ${({ value }) => value && colorRed}

  @media (max-width: 480px) {
    margin-left: 24px;
  }
`;
export const Group = styled.div`
  display: flex;

  margin-bottom: 18px;

  @media (max-width: 480px) {
    padding: 0px 24px;
    font-size: 14px;
  }
`;
export const BackCard = styled.div`
  color: #fff;
  display: none;
  flex-direction: column;

  background: #1a1a1a;
  opacity: 0.95;
  border-radius: 16px;

  padding: 48px;
  transform-style: preserve-3d;

  h3 {
    font-size: 40px;
    margin-bottom: 18px;
  }
  img {
    display: none;
  }
`;

export const Overview = styled.p`
  @media (max-width: 480px) {
    padding: 0px 24px;
  }
`;

const scale = css`
  transform: scale(1.1);
`;

const visible = css`
  display: flex;
`;

const invisible = css`
  display: none;
`;
const rotate = css`
  transform: rotateY(180deg);
`;

const previewStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 60%;
  height: fit-content;
  max-width: 864px;
  max-height: 706px;

  -webkit-transform: translate(-50%, -50%) rotateY(180deg);

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    max-width: unset;
    max-height: unset;
  }
`;
export const MoviePreviewContainer = styled.div`
  display: flex;

  transition: 0.6s all ease;
  ${({ preview }) => preview && previewStyles}

  img {
    transition: 0.4s all ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  ${FrontCard} {
    transition: 2s all ease;
    ${({ preview }) => preview && invisible}
  }

  ${BackCard} {
    transition: 2s all ease;
    ${({ preview }) => preview && visible}
    ${({ preview }) => preview && rotate}


    @media (max-width: 480px) {
      background: rgba(26, 26, 26, 0.5);
      overflow-y: scroll;
      padding: 0px;
      padding-bottom: 72px;
      border-radius: unset;
      height: 100%;

      h3 {
        font-size: 24px;
        padding: 18px 24px 0px 24px;
      }

      img {
        display: flex;
        height: 60vh;

        &:hover {
          transform: unset;
        }
      }
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  margin-top: 56px;
  @media (max-width: 480px) {
    margin-top: 24px;
  }
`;
