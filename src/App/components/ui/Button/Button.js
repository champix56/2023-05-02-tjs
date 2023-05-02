import React from "react";
import styles from './Button.module.css';

const Button = (props) => {
  console.log(props);
  return <button className={styles.Button} onClick={(evt)=>{
    console.log(evt);
    props.onClick('le roi albert');
  }}>{props.children}</button>;
};
export default Button;
