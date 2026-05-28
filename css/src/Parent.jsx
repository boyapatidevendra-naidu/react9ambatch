import React from 'react'
// import "./index.css"

import Tom from "./parent.module.css";

const Parent = () => {
  return (
    <div>
        <p className={Tom.tag}>I am a parent Component</p>
        <p>hello</p>
    </div>
  )
}

export default Parent