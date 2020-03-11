import React from "react"

export default function TextBtn({ text }) {
  return (
    <div className="action_btn">
      <div className="action_btn-item">{text}</div>
    </div>
  )
}