import styled from "styled-components";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const Section = styled.section`
  padding: 100px 0;
  video {
    max-width: 100%;
  }
`;

const VideoPlayWrappper = styled.div`
  font-size: 30px;
`;

const Inner = styled.div`
  display: flex;
  gap: 100px;
  width: 1200px;
  margin: 0 auto;
`;

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

const P = styled.h2`
  font-size: 15px;
`;

const MainMovie = ({ DEFAULT_CONTENTS }) => {
  const video = useRef(null);
  return (
    <Section>
      <Inner>
        <Div>
          <video
            src={process.env.PUBLICK_URL + "/assets/movie.mp4"}
            ref={video}
          ></video>
        </Div>
        <Div>
          <H2>{DEFAULT_CONTENTS[0].title}</H2>
          <P>{DEFAULT_CONTENTS[0].description}</P>
          <VideoPlayWrappper>
            <BsFillPlayFill onClick={() => video.current.play()} />
            <BsFillPauseFill onClick={() => video.current.pause()} />
          </VideoPlayWrappper>
        </Div>
      </Inner>
    </Section>
  );
};

export default MainMovie;
