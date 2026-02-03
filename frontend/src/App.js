import React, { useState } from "react";
import Home from "./components/Home";
import PlayerGrid from "./components/PlayerGrid";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showPlayers, setShowPlayers] = useState(false);

  return (
    <div className="container-fluid p-3">
      {!showPlayers ? (
        <Home
          setVideoUrl={setVideoUrl}
          setShowPlayers={setShowPlayers}
        />
      ) : (
        <PlayerGrid
          videoUrl={videoUrl}
          setShowPlayers={setShowPlayers}
        />
      )}
    </div>
  );
}

export default App;
