import React from "react";

const Button = (props) => {
  console.log(props);
  return <button className="Button" onClick={(evt)=>{
    console.log(evt);
    props.onClick('le roi albert');
  }}>{props.text}</button>;
};
export default Button;
