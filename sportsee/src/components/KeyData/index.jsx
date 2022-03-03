import React from "react";

import PropTypes from "prop-types";

import "../../styles/keyData.css";

function KeyData({ image, title, value, unit }) {
  return (
    <div className="keyDataContainer">
      <div className="keyDataBoxes">
      <img src={image} alt={title} />
      <div className="keyDataText">
        <div>
          {value}
          {unit}
        </div>
        <p>{title}</p>
      </div>
      </div>
    </div>
  );
}
KeyData.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.number,
};
export default KeyData;
