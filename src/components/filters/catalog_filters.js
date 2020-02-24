import React from "react"
import Checkbox from "@material-ui/core/Checkbox"

export default function CatalogFilters() {
  const [checked, setChecked] = React.useState(true)

  return (
    <div class="filters">
      <div class="filters_wrapper">
        <div class="filters_wrapper-item">
          <div class="filters_wrapper-item_text">Тип принтера</div>
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
        </div>
        <div class="filters_wrapper-item">
          <div class="filters_wrapper-item_text">Бренд</div>
        </div>
        <div class="filters_wrapper-item">
          <div class="filters_wrapper-item_text">Модель</div>
        </div>
      </div>
    </div>
  )
}
