import React from "react"

export default function TextBtn({ text, classVal }) {
  return (
    <div className={`action_btn ${classVal}`}>
      <div className="action_btn-item">{text}</div>
    </div>
  )
}