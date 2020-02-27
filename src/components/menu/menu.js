import { Link } from "gatsby"
import React, { useState } from "react"

const Menu = () => {
  const [showed, setShowed] = useState(false)

  return (
    <div className="menu">
      <div className="menu_wrapper">
        <div className="menu_wrapper-item">
          <div className="menu_wrapper-item_hamburger">
            <img src={"/menu/hamburger.svg"} alt="hamburger" />
          </div>
          <div className="menu_wrapper-item_secondary">
            <div className="menu_Wrapper-item_secondary-item">
              <ul className="menu_Wrapper-item_secondary-item_list">
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <Link to="/catalog">
                    <span className="menu_Wrapper-item_secondary-item_list-item-text">
                      Каталог
                    </span>
                  </Link>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    Акции
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    О нас
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    Блог
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <Link to="/contacts">
                    <span className="menu_Wrapper-item_secondary-item_list-item-text">
                      Контакты
                    </span>
                  </Link>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <Link to="/information">
                    <span className="menu_Wrapper-item_secondary-item_list-item-text">
                      Информация
                    </span>
                  </Link>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    Хит - парад принтеров
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    Трекинг заказа
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    Личный кабинет
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    Корзина
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    <span className="menu_Wrapper-item_secondary-item_list-item-text_inner">
                      <span>+7 (495) 775 50 53</span>
                      <span>пн-пт 10:00 - 19:00</span>
                    </span>
                  </span>
                </li>
                <li className="menu_Wrapper-item_secondary-item_list-item">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    kakayatopochta@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu_wrapper-item_menuText">
            <img
              src={"/icons/menu_decor.svg"}
              className="menu_wrapper-item_menuText-decor"
              alt="decor"
            />

            <div className="menu_wrapper-item_menuText-header">
              <div>МЕНЮ</div>
              {showed && (
                <ul className="menu_wrapper-item-main_menu-item-text_secondary">
                  <li className="menu_wrapper-item-main_menu-item-text_secondary-text">
                    <span>Оплата</span>
                  </li>
                  <li className="menu_wrapper-item-main_menu-item-text_secondary-text">
                    <span>Доставка</span>
                  </li>
                  <li className="menu_wrapper-item-main_menu-item-text_secondary-text">
                    <span>Гарантия</span>
                  </li>
                </ul>
              )}

              <ul className="menu_wrapper-item-main_menu">
                <li className="menu_wrapper-item-main_menu-item">
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/catalog">Каталог</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
                <li className="menu_wrapper-item-main_menu-item">
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/about">О нас</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
                <li className="menu_wrapper-item-main_menu-item">
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/hits">Хит парад принтеров</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
                <li className="menu_wrapper-item-main_menu-item">
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/hits">Акции</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
                <li className="menu_wrapper-item-main_menu-item">
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/blog">Блог</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
                <li
                  className="menu_wrapper-item-main_menu-item"
                  onMouseLeave={() => setShowed(false)}
                  onMouseOver={() => setShowed(true)}
                >
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/information">Информация</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
                <li className="menu_wrapper-item-main_menu-item">
                  <span className="menu_wrapper-item-main_menu-item-text">
                    <Link to="/contacts">Контакты</Link>
                    <img src={"/icons/arrow_right.svg"} alt="arrow" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu_wrapper-item">
          <div className="menu_wrapper-item_search">
            <div className="menu_wrapper-item_search_input">
              <input
                type="search"
                name=""
                placeholder="Введите модель принтера или артикул картриджа"
              />
            </div>
            <div className="menu_wrapper-item_search_button">
              <img src={"/menu/zoomin.svg"} alt="icon" />
            </div>
          </div>
        </div>
        <div className="menu_wrapper-item">
          <Link to="/tracking" className="menu_wrapper-item_tracking">
            <div className="menu_wrapper-item_tracking_icon">
              <img src={"/menu/tracking.svg"} alt="icon" />
            </div>
            <div className="menu_wrapper-item_tracking_text">
              <span>Трекинг заказа</span>
            </div>
          </Link>
        </div>
        <div className="menu_wrapper-item">
          <Link to="/cabinet" className="menu_wrapper-item_personal">
            <div className="menu_wrapper-item_personal_icon">
              <img src={"/menu/login.svg"} alt="" />
            </div>
            <div className="menu_wrapper-item_personal_text">
              <span>Личный кабинет</span>
              <img
                src={"/icons/menu_decor.svg"}
                className="menu_wrapper-item_menuText-decor"
              />
            </div>
          </Link>
        </div>
        <div className="menu_wrapper-item">
          <div className="menu_wrapper-item_cart">
            <Link to="/cart">
              <div className="menu_wrapper-item_cart_icon">
                <img src={"/menu/cart.svg"} alt="" />
                <span className="menu_wrapper-item_cart_icon-amount">88</span>
              </div>
              <div className="menu_wrapper-item_cart_value">56834</div>
              <div className="menu_wrapper-item_cart_currency">
                <img src={"/menu/rub.svg"} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
