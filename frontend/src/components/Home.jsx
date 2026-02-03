import React, { useRef } from "react";

const Home = ({ setVideoUrl, setShowPlayers }) => {
  const inputRef = useRef();

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    inputRef.current.value = text;
  };

  const handleGenerate = () => {
    setVideoUrl(inputRef.current.value);
    setShowPlayers(true);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h6 className="text-danger mb-3">YouTube Multi Player</h6>

      <input
        ref={inputRef}
        className="form-control mb-3"
        style={{ maxWidth: "400px", fontSize: "12px" }}
        placeholder="Paste YouTube link here"
      />

      <div>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={handlePaste}
        >
          Paste
        </button>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Home;
