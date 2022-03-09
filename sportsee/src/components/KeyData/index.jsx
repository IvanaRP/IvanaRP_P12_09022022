import React from "react";
import PropTypes from "prop-types";

import "../../styles/keyData.css";

/**
 * This function display the different keys data of the user's profile
 * @returns the component KeyData
 */


function KeyData({ image, title, value, unit }) {
  return (
    <div className="keyDataContainer">
      <div className="keyDataBoxes">
      <img src={image} alt={title} />
      <div className="keyDataText">
        <div className="keyDataTextValue">
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
