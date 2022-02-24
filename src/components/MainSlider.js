import React, { useEffect, useRef, useState } from "react";
import Box from "@material-ui/core/Box";

const MainSlider = ({ getSliderHeight }) => {
  const video = useRef();
  const video2 = useRef();
  const [videoHeight, setVideoHeight] = useState();

  useEffect(() => {
    video.current.muted = true;
    video.current.play();
    video2.current.muted = true;
    video2.current.play();
    getSliderHeight(video.current.offsetHeight - 100);
    setVideoHeight(video.current.offsetHeight);
  }, [videoHeight]);

  return (
    <>
      <Box className="mSlider-pc">
        <video
          style={{ width: "100%", height: "auto" }}
          preload="metadata"
          ref={video}
          /*  controls */
          autoPlay
          muted
          loop
          playsInline
          id="videoBg"
        >
          <source src="media/mainSliderMovie.mp4" type="video/mp4"></source>
        </video>
      </Box>
      <Box className="mSlider-mobile">
        <video
          style={{ width: "100%", height: "auto" }}
          preload="metadata"
          ref={video2}
          /* controls */
          autoPlay
          muted
          loop
          playsInline
          id="videoBg"
        >
          <source
            src="media/mainSliderMovieMobile.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Box>
    </>
  );
};

export default MainSlider;
