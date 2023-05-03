import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const footerInitialState={};
const Footer = (props) => {
  const [state, setstate] = useState(footerInitialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <div className={styles.Footer} data-testid="Footer">
      Footer Component
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
