import React from 'react'

export default function CatalogFiltersMob() {
    return (
        <div class="desktop-hide">
            <div class="mfilters">
                <div class="mfilters_wrap">
                    <div class="mfilters_wrap-item">
                        <div class="mfilters_wrap-item-holder"></div>
                        <select id="shmeear">
                            <option value="hide">Тип принтера</option>
                            <option value="2010">P1102</option>
                            <option value="2011">M1212nf</option>
                            <option value="2012">M1217nfw</option>
                            <option value="2013">P1102</option>
                            <option value="2014">M1212nf</option>
                            <option value="2015">M1212nf</option>
                        </select>
                    </div>
                    <div class="mfilters_wrap-item">
                        <select id="year">
                            <option value="hide">Бренд</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                        </select>
                    </div>
                    <div class="mfilters_wrap-item">
                        <select id="mounth">
                            <option value="hide">Модель</option>
                            <option value="Модель 1" rel="icon-temperature">Модель 1</option>
                            <option value="Модель 2">Модель 2</option>
                            <option value="Модель 3">Модель 3</option>
                            <option value="Модель 4">Модель 4</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
