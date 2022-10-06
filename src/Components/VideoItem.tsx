import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import { useApp } from '../Context/appContext';

interface StyledProps {
  clip?: string;
}

const Wrapper = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  clip-path: ${(props) => props.clip};
  transition: clip-path cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
`;

const IframeWrapper = styled.div`
  width: auto;
  height: 150%;
  position: absolute;
  display: flex;
  justify-content: center;
  aspect-ratio: 16/9;
  & > div {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  videoId: string;
  clip: string;
}

const VideoItem: React.FC<Props> = ({ videoId, clip }) => {
  const { playState } = useApp();
  const videoRef = useRef<Youtube>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoPlayer = videoRef.current.getInternalPlayer();
      if (videoPlayer) {
        videoPlayer.mute();
        if (playState === 'play') {
          videoPlayer.playVideo();
        } else if (playState === 'stop') {
          videoPlayer.pauseVideo();
        }
      }
    }
  }, [playState]);

  return (
    <Wrapper clip={clip}>
      <IframeWrapper>
        <Youtube
          ref={videoRef}
          videoId={videoId}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              muted: 1,
              autoplay: 1, // 자동재생 O
              rel: 0, // 관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
        />
        {/* <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        /> */}
      </IframeWrapper>
    </Wrapper>
  );
};

export default VideoItem;
