import React from "react"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ProductDetailsCarousel() {
    return (
        <Carousel>
            <div>
                <img src={'/unnecessary/product_detail1.png'} alt="product" />
            </div>
            <div>
                <img src={'/unnecessary/product_detail2.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail3.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail1.png'} alt="product" />
            </div>
            <div>
                <img src={'/unnecessary/product_detail2.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail3.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail1.png'} alt="product" />
            </div>
            <div>
                <img src={'/unnecessary/product_detail2.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail3.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail1.png'} alt="product" />
            </div>
            <div>
                <img src={'/unnecessary/product_detail2.png'} alt="product"  />
            </div>
            <div>
                <img src={'/unnecessary/product_detail3.png'} alt="product"  />
            </div>
        </Carousel>
    );
}
