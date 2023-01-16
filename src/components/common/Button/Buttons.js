import React from 'react'
import './Button.css'

export default function Button(text, outline) {
  return (
    <div className={outline ? "Btn-out":"Btn"}>
      {text}
    </div>
  )
}
