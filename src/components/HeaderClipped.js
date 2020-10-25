import React from "react";
import PropTypes from "prop-types";
import Header from "~components/Header";

const HeaderClipped = ({ color }) => {
  return (
    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-30 clipped overflow-hidden pointer-events-none">
      <Header clipped color={color} />
    </div>
  );
};

HeaderClipped.defaultProps = {
  color: `black`
};

HeaderClipped.propTypes = {
  color: PropTypes.string
};

export default HeaderClipped;
