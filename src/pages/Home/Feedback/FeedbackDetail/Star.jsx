import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BsStarFill } from "react-icons/bs";

const Star = ({ color }) => {
  const a = [1];
  return Array([
    <BsStarFill />,
    <BsStarFill />,
    <BsStarFill />,
    <BsStarFill />,
    <BsStarFill />,
  ]).fill(<BsStarFill style={{ color: "rgb(159, 151, 5)" }} />, 2);

  //   return <div>{starRating}</div>;
};

Star.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Star.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "rgb(159, 151, 5)",
    unfilled: "#DCDCDC",
  },
};

export default Star;
