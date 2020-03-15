import React from 'react'

export default function Lenta() {
    return (
        <div className="lenta">
            <div className="lenta_wrap">
                <img className="lenta_wrap-image" src={'/landing/lenta.svg'} alt="Image"/>
                <img className="lenta_wrap-logo" src={'/landing/logo.svg'} alt="Logo"/>
            </div>
        </div>
    )
}