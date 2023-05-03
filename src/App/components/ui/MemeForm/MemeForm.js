import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";

const memeFormInitialState={};
const MemeForm = (props) => {
  const [state, setstate] = useState(memeFormInitialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
