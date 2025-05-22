import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({
  label = "Button",
  hasIconEnd = false,
  hasIconStart = false,
  variant,
  disabled = false,
  size,
  className,
  divClassName,
}) => {
  return (
    <button
      className={`button disabled-${disabled} ${variant} ${size} ${className}`}
    >
      <div
        className={`text-wrapper disabled-0-${disabled} variant-${variant} ${divClassName}`}
      >
        {label}
      </div>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "neutral", "subtle"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
};
