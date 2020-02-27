import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"

export default function CatalogFiltersVariants() {
  // const [checked, setChecked] = React.useState(true)

    return (
        <ul class="filters_wrapper-item_list">
        <li class="filters_wrapper-item_list-text">
          <Checkbox
            size="small"
            value="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
          <span>Струйный</span>
        </li>
        <li class="filters_wrapper-item_list-text">
        <Checkbox
            size="small"
            value="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
          <span>Лазерный</span>
        </li>
        <li class="filters_wrapper-item_list-text">
        <Checkbox
            size="small"
            value="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
          <span>Факс</span>
        </li>
        <li class="filters_wrapper-item_list-text">
        <Checkbox
            size="small"
            value="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
          <span>Название</span>
        </li>
      </ul>
    )
}
