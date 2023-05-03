import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const headerInitialState = {};
const Header = (props) => {
  return (
    <div className={styles.Header} data-testid="Header">
      Meme<span className={styles.dot}>.</span>
      <span className={styles.js}>js</span>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
