import React from "react"
import Helmet from "react-helmet"
import ProductDetailsCarousel from './product_details_carousel'

export default function ProductDetails() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>

      <div class="details">
        <div class="details_wrapper">
          <div class="details_wrapper-item">
            <div class="details_wrapper-item_product">
              <div class="details_wrapper-item_product-item">
                <div class="details_Wrapper-item_product-item_images">
                    
                  <ProductDetailsCarousel />

                </div>
              </div>
              <div class="details_wrapper-item_product-item">
                <div class="details_wrapper-item_product-item_info">
                  <div class="details_wrapper-item_product-item_info-heading">
                    <span class="details_wrapper-item_product-item_info-heading-item">
                      Тонер-картридж TC-H85A
                    </span>
                  </div>
                  <div class="details_wrapper-item_product-item_info-subheading">
                    <span class="details_wrapper-item_product-item_info-subheading-item">
                      Чёрный тонер-картридж TC-H85A для принтеров и МФУ:
                    </span>
                  </div>

                  {/* slider */}

                  <div class="details_wrapper-item_product-item_info-props">
                    <div class="details_wrapper-item_product-item_info-props-color"></div>
                    <div class="details_wrapper-item_product-item_info-props-chip"></div>
                    <div class="details_wrapper-item_product-item_info-props-new"></div>
                    <div class="details_wrapper-item_product-item_info-props-standart"></div>
                  </div>
                  <div class="details_wrapper-item_product-item_info-desc">
                    <span class="details_wrapper-item_product-item_info-desc-item">
                      Фотобарабан Mitsubishi Chemical Corporation, тонер
                      Mitsubishi Chemical Corporation
                    </span>
                  </div>
                  <div class="details_wrapper-item_product-item_info-info">
                    <span class="details_wrapper-item_product-item_info-desc-item">
                      ОЕМ-номер: CE285A.
                    </span>
                  </div>
                  <div class="details_wrapper-item_product-item_info-text">
                    <span class="details_wrapper-item_product-item_info-text-item">
                      1 600 текстовых страниц А4 согласно ASTM F1856/STMC для
                      картриджей «Всё в одном».
                    </span>
                  </div>
                  <div class="details_wrapper-item_product-item_info-amount">
                    <div class="details_wrapper-item_product-item_info-amount-item">
                      <div class="details_wrapper-item_product-item_info-amount-item-text">
                        <span class="details_wrapper-item_product-item_info-amount-item-text_item">
                          Много
                        </span>
                      </div>
                      <div class="details_wrapper-item_product-item_info-amount-item-price">
                        <span class="details_wrapper-item_product-item_info-amount-item-price_item">
                          29900
                        </span>
                      </div>
                    </div>

                    <div class="details_wrapper-item_product-item_info-discount-item">
                      <div class="details_wrapper-item_product-item_info-discount-item-text">
                        <span class="details_wrapper-item_product-item_info-discount-item-text_item">
                          C купоном
                        </span>
                      </div>
                      <div class="details_wrapper-item_product-item_info-discount-item-price">
                        <span class="details_wrapper-item_product-item_info-discount-item-price_item">
                          25000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="details_wrapper-item_product-item_info-actions">
                    <div class="details_wrapper-item_product-item_info-actions-item">
                      <div class="details_wrapper-item_product-item_info-actions-item-text">
                        <span>количество (шт)</span>
                      </div>
                      <div class="details_wrapper-item_product-item_info-actions-item-button">
                        <div class="desktop-hide">
                          <div class="details_wrapper-item_product-item_info-actions-item-button-buttons-plus">
                            <span>-</span>
                          </div>
                        </div>
                        <span class="details_wrapper-item_product-item_info-actions-item-button-num">
                          25
                        </span>
                        <div class="details_wrapper-item_product-item_info-actions-item-button-buttons">
                          <div class="mobile-hide">
                            <div class="details_wrapper-item_product-item_info-actions-item-button-buttons-plus">
                              <span>-</span>
                            </div>
                          </div>
                          <div class="details_wrapper-item_product-item_info-actions-item-button-buttons-min">
                            <span>+</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="details_wrapper-item_product-item_info-actions-item">
                      <div class="details_wrapper-item_product-item_info-actions-item_text">
                        <span class="details_wrapper-item_product-item_info-actions-item_text-item">
                          в корзину
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="details_wrapper-item"></div>
          <div class="details_wrapper-item"></div>
        </div>
      </div>
    </>
  )
}