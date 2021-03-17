import React from "react";
import "./dataCard.css";
import { connect } from "react-redux";

const DataCard = ({ info, title, icon, highLow, selectedCoin }) => {
  return (
    <div className="dataCard">
      <div
        className={`dataCard-header ${
          highLow === "green"
            ? "dataCard-high"
            : highLow === "red"
            ? "dataCard-low"
            : null
        }`}
      >
        {title}
      </div>
      {selectedCoin.isPending || selectedCoin.searchedCoin === undefined ? (
        <div className="loading">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      ) : (
        <div className="dataCard-info-container">
          {icon}
          <div
            className={`dataCard-info ${
              highLow === "green"
                ? "dataCard-high"
                : highLow === "red"
                ? "dataCard-low"
                : null
            }`}
          >
            {info}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCard;
