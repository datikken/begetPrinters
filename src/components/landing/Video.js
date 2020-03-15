import React from 'react'

export default function Video() {
    return (
        <div className="land_video">
            <div className="land_video-item">
                <img src={'/landing/video_poster.png'} alt="Video" />
                <img className="land_video-item_btn" src={'/landing/video_btn.svg'} alt="Button"/>
            </div>
            <div className="land_video-item">
                <div className="land_video-item_text">
                    <span>Мы производим совместимые картриджи для принтеров и многофункциональных устройств. Узнайте, почему наши картриджи лучше.</span>
                </div>
            </div>
        </div>
    )
}
