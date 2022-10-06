import React from 'react';
import styled from 'styled-components';
import { useApp } from '../Context/appContext';
import VideoItem from './VideoItem';

interface StyledProps {
  frameColor?: string;
}

const Wrapper = styled.div<StyledProps>`
  position: relative;
  width: 800px;
  height: 700px;
  background-color: ${(props) =>
    props.frameColor === 'light' ? props.theme.colors.grey : '#000000'};
`;

const MainFrame: React.FC = () => {
  const { videos, currentTemplate, frameColor } = useApp();

  return (
    <Wrapper frameColor={frameColor}>
      {videos &&
        currentTemplate &&
        videos.map((v, idx) => (
          <VideoItem key={v} videoId={v} clip={currentTemplate.value[idx]} />
        ))}
    </Wrapper>
  );
};

export default MainFrame;
