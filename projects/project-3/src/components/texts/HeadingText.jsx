import React from 'react'
import styles from './HeadingText.module.css'

const HeadingText = ({ text, style}) => {
  return (
    <>
    <h1 style={style}>{text}</h1>
    </>
  )
}

export default HeadingText
