import React from "react"

const ContactsTiming = () => {
  return (
    <div className="contacts_wrap-item">
      <div className="contacts_wrap-item_inner">
        <div className="contacts_wrap-item_inner-timing">
          <img src={'/icons/timing.svg'} alt="Timing"/>
        </div>
      </div>
      <div className="contacts_wrap-item_inner">
        <div className="contacts_wrap-item_inner-item-day">
          <span className="contacts_wrap-item_inner-item-text">Режим работы</span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Понедельник
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Вторник
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Среда
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Четверг
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Пятница
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Суббота
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
        <div className="contacts_wrap-item_inner-item-day">
            <span className="contacts_wrap-item_inner-item-day-item">
                Воскресенье
            </span>
          <span className="contacts_wrap-item_inner-item-day-time">
                09:00 - 19:00
            </span>
        </div>
      </div>
    </div>
  )
}
export default ContactsTiming
