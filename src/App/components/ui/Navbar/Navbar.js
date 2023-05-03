import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const navbarInitialState={};
const Navbar = (props) => {
  const [state, setstate] = useState(navbarInitialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
