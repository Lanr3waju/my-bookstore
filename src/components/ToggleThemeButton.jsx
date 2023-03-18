import PropTypes from "prop-types";
import React from "react";
import moonIcon from "../images/moon.png";
import sunIcon from "../images/sun.png";

export default function ToggleThemeButton({ handleIsDark, isDark }) {
  return (
    <button
      type="button"
      name="toggle theme"
      data-testid="toggle theme"
      onClick={handleIsDark}
    >
      <img src={isDark ? sunIcon : moonIcon} alt="theme icon" />
    </button>
  );
}

ToggleThemeButton.propTypes = {
  isDark: PropTypes.bool.isRequired,
  handleIsDark: PropTypes.func.isRequired,
};
