import React from 'react'
import { useSelector } from 'react-redux';
import MemeForm from './MemeForm';
import PropTypes from 'prop-types'
export default function StoredMemeForm(props){
    const images=useSelector(storeState=>{return storeState.ressources.images});
    return <MemeForm {...props} images={images}/>
  }
  StoredMemeForm.propTypes={
    meme:PropTypes.object.isRequired,
    onMemeChange: PropTypes.func.isRequired
  }