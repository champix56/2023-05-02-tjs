import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(props);
  return (
    <button
      style={{ ...props.style, backgroundColor: props.backgroundColor }}
      className={isClicked?styles.Button+' '+styles.clicked:styles.Button}
      onClick={(evt) => {
        setIsClicked(true);
        console.log(evt);
        props.onClick("le roi albert");
      }}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
};
Button.defaultProps = {
  children: "Hello",
  onClick: () => {},
  backgroundColor: "skyblue",
};
export default Button;
