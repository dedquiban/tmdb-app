import styled, { css } from 'styled-components';

const tooltipGrey = '#1a1a1a';

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(
        to right bottom,
        #c441c4,
        #de379f,
        #e73f7d,
        #e45160,
        #d9654c,
        #d36c46,
        #cc7342,
        #c5793f,
        #c7763f,
        #c8743f,
        #ca713f,
        #cb6e3f
      )
      border-box;
  opacity: 0.95;
  border-radius: 8px;
  border: 2px solid transparent;
`;

export const MoviesDiv = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  h1 {
    color: rgb(87, 87, 87);
    position: absolute;
    top: 120px;
    left: 30%;
  }
`;

export const Group = styled.div`
  position: relative;
  padding: 0 14px;

  img {
    object-fit: cover;
    width: 240px;
    height: 350px;
    border-radius: 4px;
  }
`;

// const fullHeight = css`
//   height: 100%;
// `;

// const position = css`
//   top: 304px;
// `;

export const Overview = styled.div`
  ${gradientBorder};
  text-align: left;
  padding: 32px 22px;
  height: 50%;

  #overview {
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  #playlist-div {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  #playlists {
    font-weight: bold;
    font-size: 14px;
    padding: 2px 0;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;

    transition: 0.3s all ease;
    &:hover {
      cursor: pointer;
      color: rgb(160, 160, 160);
    }
  }
`;
export const Options = styled.div`
  max-width: 160px;
  position: absolute;
  top: 154px;
  left: 36px;
  font-size: 18px;
  background: #1a1a1a;
  padding: 12px;
  margin-left: 4px;
  z-index: 1;

  #add {
    cursor: pointer;
  }
  #added {
    cursor: pointer;
    color: red;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 200px;
  left: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
  padding: 12px 0 12px 2px;
  // border: 1px solid #fff;
  background: transparent;

  transform: translateY(0);
  opacity: 1;

  p {
    color: linear-gradient(to right bottom, #697f85, #516d75, #516d75, #697f85);
    font-size: 12px;
    font-family: 'Ubuntu', sans-serif;
    background: linear-gradient(
      to left top,
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
    // background: rgba(18, 18, 18, 1);

    font-weight: bold;
    border-radius: 4px;
    padding: 6px 17px;
  }

  #star {
    margin-right: 4px;
    color: #e4a300;
  }
  #vote {
    display: flex;
    top: 48px;
  }
`;

export const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  background-color: ${tooltipGrey};
  color: #fff;
  border-radius: 4px;
  padding: 24px 20px;

  position: absolute;
  top: 0;
  left: 14px;
  width: 240px;
  height: 350px;

  h3 {
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
  }

  ${Overview} {
    transition: 0.6s height ease;
  }

  ${Options} {
  }

  transition: 0.3s all ease;
  &:hover {
    opacity: 0.95;
  }
`;
