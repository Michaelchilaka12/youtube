import { useState } from "react";
import Home from "./components/Home.jsx";
import PlayerGrid from "./components/PlayerGrid.jsx";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showPlayers, setShowPlayers] = useState(false);

  return (
    <div className="container-fluid">
      {!showPlayers ? (
        <Home setVideoUrl={setVideoUrl} setShowPlayers={setShowPlayers} />
      ) : (
        <PlayerGrid videoUrl={videoUrl} setShowPlayers={setShowPlayers} />
      )}
    </div>
  );
}

export default App;
