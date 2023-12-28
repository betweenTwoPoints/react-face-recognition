import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ onButtonSubmit, onInputChange }) {
  return (
    <>
      <p className="f3">
        {
          "This tool will detect faces in your pictures. Paste a URL below and hit the button."
        }
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            onChange={onInputChange}
            className="f4 pa2 w-70 center"
            type="text"
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-green"
          >
            Detect
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageLinkForm;
