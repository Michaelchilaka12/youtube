import React, { useRef } from "react";
import { getYouTubeVideoId } from "../utils/getVideoId";

const PlayerGrid = ({ videoUrl, setShowPlayers }) => {
  const videoId = getYouTubeVideoId(videoUrl);
  const playersRef = useRef([]);

  if (!videoId) {
    return (
      <p className="text-danger text-center">
        Invalid YouTube link
      </p>
    );
  }

  const stopAll = () => {
    playersRef.current.forEach((iframe) => {
      if (iframe) iframe.src = iframe.src;
    });
    setShowPlayers(false);
  };


  // If video ID is invalid, show nothing
  if (!videoId) {
    return (
      <div className="text-center text-danger">
        Invalid YouTube link
      </div>
    );
  }

  return (
    <>
      <div className="row g-2">
        {[...Array(10)].map((_, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <iframe
              ref={(el) => (playersRef.current[index] = el)}
              width="100%"
              height="150"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={`YouTube player ${index + 1}`}
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        <button
          className="btn btn-danger btn-sm"
          onClick={stopAll}
        >
          End
        </button>
      </div>
    </>
  );
};

export default PlayerGrid;
