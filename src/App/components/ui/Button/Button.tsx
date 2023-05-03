import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
export interface IPropsButton{
  onClick:Function;
  backgroundColor?:string;
  children:string |React.ReactElement| Array<React.ReactElement|string>;
  style?:{};
  type?: 'button'|'submit'|'reset'|undefined
}
const Button: React.FC<IPropsButton> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  //
  useEffect(() => {
    let descripteurTimeout:any;
    if (isClicked) {
      descripteurTimeout=setTimeout(() => {
        console.log('descente de state');
        setIsClicked(false);
      }, 2000);
    }
     return () => {
        if(descripteurTimeout){
          clearTimeout(descripteurTimeout);
        }
     };
  }, [isClicked]);
  return (
    <button type={props.type}
      style={{ ...props.style, backgroundColor: props.backgroundColor }}
      className={
        isClicked ? styles.Button + " " + styles.clicked : styles.Button
      }
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
  type: PropTypes.oneOf(['button','submit','reset',undefined])
};
Button.defaultProps = {
  children: "Hello",
  onClick: () => {},
  backgroundColor: "skyblue",
  type: 'button',
};
export default Button;
