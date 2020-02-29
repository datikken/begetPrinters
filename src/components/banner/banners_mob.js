import React from 'react';

const BannersMob = () => {
    return (
        <div className="banners">
            <div className="banners_wrap">

                <div className="banners_wrap-item">
                    <div className="banners_wrap-item_inner">
                        <div className="banners_wrap-item_inner_title">
                            <span>Картридж</span>
                            <span>Т2</span>
                        </div>
                        <div className="banners_wrap-item_inner_img">
                            <img src={"/unnecessary/product_mob.png"} alt="banner"/>
                        </div>
                    </div>

                    <div className="banners_wrap-item_inner">

                        <div className="banners_wrap-item_inner_text">
                            <div className="banners_wrap-item_inner_text-item"></div>
                            <div className="banners_wrap-item_inner_text-btn">
                                <span>Cмотреть все <br/>картриджи Т2</span>
                                <img src={"/icons/details_btn.svg"} alt="details"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banners_wrap-item">
                    <div className="banners_wrap-item_inner">
                        <div className="banners_wrap-item_inner_title">
                            <span>Картридж</span>
                            <span>EASYPRINT</span>
                        </div>
                        <div className="banners_wrap-item_inner_img banners_wrap-item_inner_img2">
                            <img src={"/unnecessary/product_mob2.png"} alt="banner"/>
                        </div>
                    </div>

                    <div className="banners_wrap-item_inner">

                        <div className="banners_wrap-item_inner_text">
                            <div className="banners_wrap-item_inner_text-item"></div>
                            <div className="banners_wrap-item_inner_text-btn">
                                <span>Cмотреть все <br/>картриджи <span
                                    className="banners_wrap-item_inner_text-btn-title">EASYPRINT</span></span>
                                <img src={"/icons/details_btn.svg"} alt="details"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BannersMob;