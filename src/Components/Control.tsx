import React from 'react';
import styled from 'styled-components';
import { useApp } from '../Context/appContext';

const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const LayoutBtns = styled.div`
  display: flex;
  gap: 8px;
`;

const LayoutBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const FrameColorBtns = styled.div`
  display: flex;
  gap: 8px;
`;

const FrameColorBtn = styled.button`
  width: 96px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SingleBtn = styled.button`
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <FrameColorBtns>
        <FrameColorBtn
          onClick={() => {
            changeFrameColor('#FFFFFF');
          }}
        >
          white
        </FrameColorBtn>
        <FrameColorBtn
          onClick={() => {
            changeFrameColor('#000000');
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
