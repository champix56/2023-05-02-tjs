import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const footerInitialState={};
const Footer = (props) => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      DESORBAIX / orsys &copy; 2023
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
