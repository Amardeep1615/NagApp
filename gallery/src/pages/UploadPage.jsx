import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload!");
      return;
    }
    setMessage(`✅ File "${file.name}" uploaded successfully!`);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          background: "white",
          color: "#333",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2>📤 Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ margin: "20px 0" }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2575fc",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Upload
          </button>
        </form>
        {message && <p style={{ marginTop: "20px" }}>{message}</p>}
      </div>
    </div>
  );
};

export default UploadForm;
