import React from "react";

import PropTypes from "prop-types";

function KeyData({ image, title, value, unit }) {
  return (
    <div>
      <img src={image} alt={title} />
      <div className="textCount">
        <div>
          {value}
          {unit}
        </div>
        <p>{title}</p>
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
