import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ loading }) {
  return (
    <>
      <div
        className="sweet-loading"
        style={{
          display: "flex",
          flexDirection: "column", // Stack spinner and text vertically
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: to make a semi-transparent background
        }}
      >
        <ClipLoader
          color="#802bd9"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h2 style={{ marginTop: "20px", color: "#802bd9", fontSize: "18px" }}>
          Rewards fetching...
        </h2>
      </div>
    </>
  );
}

export default Loader;
