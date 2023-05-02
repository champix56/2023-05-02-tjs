import React from "react";
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  console.log(props);
  return <button style={{...props.style,backgroundColor:props.backgroundColor}} className={styles.Button} onClick={(evt)=>{
    console.log(evt);
    props.onClick('le roi albert');
  }}>{props.children}</button>;
};
Button.propTypes={
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
};
Button.defaultProps={
  children:'Hello',
  onClick: ()=>{},
  backgroundColor: 'skyblue'
}
export default Button;
