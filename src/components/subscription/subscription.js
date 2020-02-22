import React from 'react'

export default function Subscriptions() {
    return (
        <div className="subscription">
            <div className="subscription_wrapper">
                <div className="subscription_wrapper-item">
                    <span className="subscription_wrapper-item_heading">Хотите быть в курсе новостей из мира картриджей?</span>
                </div>
                <div className="subscription_wrapper-item">
                    <input type="text" name="text" placeholder="Введите свою почту" />
        
                    <div className="subscription_wrapper-item_button">
                        <span>Отправить</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
