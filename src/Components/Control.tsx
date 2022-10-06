import React from 'react';
import styled from 'styled-components';
import { useApp } from '../Context/appContext';

const Wrapper = styled.div`
  width: 360px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  button {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  span {
    font-size: 48px;
  }
  p {
    font-size: 24px;
  }
  hr {
    width: 80%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 32px;
  text-transform: uppercase;
`;

const LayoutBtns = styled.div`
  display: flex;
  gap: 32px;
`;

const LayoutBtn = styled.button`
  width: 64px;
  height: 64px;
  font-size: 32px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.main};
  ${(props) => props.theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const FrameColorBtns = styled.div`
  display: flex;
  gap: 16px;
`;

const FrameColorBtn = styled.button`
  width: 120px;
  height: 64px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  ${(props) => props.theme.shadow};

  &:first-child {
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SingleBtn = styled.button`
  width: 258px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.main};
  ${(props) => props.theme.shadow};
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const Control: React.FC = () => {
  const {
    templates,
    changeTemplate,
    changeFrameColor,
    playState,
    changePlayState,
  } = useApp();

  return (
    <Wrapper>
      <Logo>
        <span>YOLO</span>
        <p>You Only Look Once</p>
        <hr />
      </Logo>
      <Title>
        <span>Layout</span>
      </Title>
      <LayoutBtns>
        {templates &&
          templates.map((template) => (
            <LayoutBtn
              key={template.no}
              onClick={() => {
                changeTemplate(template.no);
              }}
            >
              {template.no}
            </LayoutBtn>
          ))}
      </LayoutBtns>
      <Title>
        <span>Border</span>
        <span>Color</span>
      </Title>
      <FrameColorBtns>
        <FrameColorBtn
          onClick={() => {
            changeFrameColor('light');
          }}
        >
          light
        </FrameColorBtn>
        <FrameColorBtn
          onClick={() => {
            changeFrameColor('black');
          }}
        >
          black
        </FrameColorBtn>
      </FrameColorBtns>
      <SingleBtn
        onClick={() => {
          if (playState === 'play') {
            changePlayState('stop');
          } else {
            changePlayState('play');
          }
        }}
      >
        Play / Pause
      </SingleBtn>
    </Wrapper>
  );
};

export default Control;
