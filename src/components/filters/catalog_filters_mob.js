import React, {useState} from 'react'
import Checkbox from "@material-ui/core/Checkbox"

export default function CatalogFiltersMob() {
    // const data = ['Лазерные', 'Струйные'];
    const [show, setShowed] = useState(false);

    return (
        <div class="desktop-hide">

            <div class="mfilters">
                <div class="mfilters_wrap">
                    <div class="mfilters_wrap-item" onClick={() => {setShowed(!show)}}>
                        <div className="mfilters_wrap-item_inner">
                            <span>Тип принтера</span>
                            <img src={'/icons/arrow_right.svg'} alt="icon" className="mfilters_wrap-item_arrow" />
                        </div>


                    </div>
                    <div class="mfilters_wrap-item" onClick={() => {setShowed(!show)}}>
                        <div className="mfilters_wrap-item_inner">
                            <span>Тип принтера</span>
                            <img src={'/icons/arrow_right.svg'} alt="icon" className="mfilters_wrap-item_arrow" />
                        </div>


                    </div>
                    <div class="mfilters_wrap-item" onClick={() => {setShowed(!show)}}>
                        <div className="mfilters_wrap-item_inner">
                            <span>Тип принтера</span>
                            <img src={'/icons/arrow_right.svg'} alt="icon" className="mfilters_wrap-item_arrow" />
                        </div>


                    </div>
                </div>


            {show && (
                   <div className="mfilters_variants">
                        <div className="mfilters_variants-item">
                                <Checkbox
                                    size="small"
                                    value="small"
                                    inputProps={{ "aria-label": "checkbox with small size" }}
                                />
                                Лазерные            
                        </div>
                        <div className="mfilters_variants-item">
                                <Checkbox
                                    size="small"
                                    value="small"
                                    inputProps={{ "aria-label": "checkbox with small size" }}
                                />
                                Струйные            
                        </div>
                    </div>
            )}
         





          </div>
        </div>
    )
}
