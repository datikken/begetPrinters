import React from "react"
import CatalogFilterItem from "./catalog_filters_item"

export default function CatalogFilters() {
  const filters = [
    {
      title: "Тип принтера",
      values: ["Струйный", "Лазерный", "Факс"],
      tip: true
    },
    {
      title: "Бренд",
      values: ["Kawasaki", "Harley", "BMW"],
      tip: false
    },
    {
      title: "Модель",
      values: ["тип 1", "тип 2", "тип 3"],
      tip: false
    }
  ]

  return (
    <div className="filters">
      <div className="filters_wrapper">
        {filters.map(el => (
          <CatalogFilterItem 
              key={el.title}
              title={el.title} 
              values={el.values} 
              tip={el.tip} />
        ))}
      </div>
    </div>
  )
}
