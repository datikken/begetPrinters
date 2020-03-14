import React from "react"
import Checkbox from "@material-ui/core/Checkbox"

export default function CatalogFiltersVariants({values}) {
  return (
    <ul className="filters_wrapper-item_list">
      {values.map((el) => (
        <li className="filters_wrapper-item_list-text" key={el}>
        <Checkbox
          size="small"
          color="yellow"
          value="small"
          inputProps={{ "aria-label": "checkbox with small size" }}
        />
        <span>{el}</span>
        </li>
      ))}
    </ul>
  )
}