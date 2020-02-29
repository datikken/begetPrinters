import React from "react"
import ContactsTiming from "./contacts_timing"

const ContactsContent = () => {
  return (
    <div className="contacts">
      <div className="contacts_wrap">

        <div className="contacts_column">
          <div className="contacts_column-inner">
            <div className="contacts_wrap-inner">

              <div className="contacts_wrap-item">
                <div className="contacts_wrap-item_inner">
                  <div className="contacts_wrap-item_inner-location">
                    <img src={'/icons/location.svg'} alt="Location"/>
                  </div>
                </div>
                <div className="contacts_wrap-item_inner">
                  <div className="contacts_wrap-item_inner-item">
                    <span className="contacts_wrap-item_inner-item-text">Адрес:</span>
                  </div>
                  <div className="contacts_wrap-item_inner-item">
                    <span className="contacts_wrap-item_inner-item-desc">
                        115230 Россия, Москва, Варшавское шоссе, дом, 36, строение 8, 2-й подъезд, этаж 2, офис 1578
                    </span>
                  </div>
                </div>
              </div>

              <div className="contacts_wrap-item">
                <div className="contacts_wrap-item_inner">
                  <div className="contacts_wrap-item_inner-contacts">
                    <img src={'/header/contact.svg'} alt="Contacts"/>
                  </div>
                </div>
                <div className="contacts_wrap-item_inner">
                  <div className="contacts_wrap-item_inner-item">
                    <span className="contacts_wrap-item_inner-item-text">Контакты</span>
                  </div>
                  <div className="contacts_wrap-item_inner-item">
                        <span className="contacts_wrap-item_inner-item-tel">
                            +7 (495) 775-50-53
                        </span>
                    <span className="contacts_wrap-item_inner-item-mail">
                          kakayto_pochta@domen.com
                        </span>
                  </div>
                  <div className="contacts_wrap-item_socials">
                    <div className="contacts_wrap-item_socials-item">
                      <div className="telegram">
                        <img src={'/icons/telegram.svg'} alt="Telegram"/>
                      </div>
                    </div>
                    <div className="contacts_wrap-item_socials-item">
                      <div className="facebook">
                        <img src={'/icons/facebook.svg'} alt="Facebook"/>
                      </div>
                    </div>
                    <div className="contacts_wrap-item_socials-item">
                      <div className="vk">
                        <img src={'/icons/vk.svg'} alt="VK"/>
                      </div>
                    </div>
                    <div className="contacts_wrap-item_socials-item">
                      <div className="insta">
                        <img src={'/icons/instagram.svg'} alt="Instagramm"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="desktop-hide">
              <ContactsTiming/>
            </div>

            <div className="contacts_wrap-item contacts_feedback">
              <div className="contacts_wrap-item_inner">
                <div className="contacts_wrap-item_inner-feedback">
                    <img src={"/icons/feedback.svg"} alt="feedback" />
                </div>
              </div>
              <div className="contacts_wrap-item_inner">

                <div className="contacts_wrap-item_inner-item">
                  <span className="contacts_wrap-item_inner-item-text">Обратная связь</span>
                </div>

                <div className="contacts_wrap-item_inner-item">
                  <div className="contacts_wrap-item_inner-item_form">

                    <div className="contacts_wrap-item_inner-inputs-wrap">

                      <div className="contacts_wrap-item_inner-item_form_control-input">
                        <label htmlfor="feedback[name]" className="contacts_wrap-item_inner-item_form_control-input-label">Имя</label>
                        <input type="text" name="feedback[name]" placeholder="Имя"/>
                      </div>

                      <div className="contacts_wrap-item_inner-item_form_control-input">
                        <label htmlfor="feedback[lastname]"  className="contacts_wrap-item_inner-item_form_control-input-label">Фамилия</label>
                        <input type="text" name="feedback[lastname]" placeholder="Фамилия"/>
                      </div>
                    </div>

                    <div className="contacts_wrap-item_inner-item_form_control-heading">
                      <span className="contacts_wrap-item_inner-item_form_control-input-label">Тема обращения</span>
                    </div>

                    <div className="contacts_wrap-item_inner-item_form_control-options">
                      <div className="contacts_wrap-item_inner-item_form_control-options_item">
                        <span>Пожелания</span>
                      </div>
                      <div className="contacts_wrap-item_inner-item_form_control-options_item">
                        <span>Вопрос</span>
                      </div>
                      <div className="contacts_wrap-item_inner-item_form_control-options_item">
                        <span>Претензия</span>
                      </div>
                    </div>

                    <div className="contacts_wrap-item_inner-item_form_control-input">
                      <div className="contacts_wrap-item_inner-item_form_control-input_textarea">
                                <textarea type="text" name="feedback[text]"
                                          placeholder="Напишите свое обращения"></textarea>
                      </div>
                    </div>

                    <div className="contacts_wrap-item_inner-item_form_control-submit">
                      <div className="contacts_wrap-item_inner-item_form_control-submit_btn">
                        <span>
                            Отправить
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="mobile-hide">
            <ContactsTiming/>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ContactsContent
