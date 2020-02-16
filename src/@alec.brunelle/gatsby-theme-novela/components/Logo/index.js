import React from "react";

import svgLogo from "./coffee.svg";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return <img src={svgLogo} width="100px" height="100px" />;
}
