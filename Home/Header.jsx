import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className="text">
                <h1>get your <span>education</span> today!</h1>
            </div>
            <div className="container">
                <div className="container__item">
                    <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" />
                    <div className="text__item">
                        <h1>Online Courses</h1>
                        <p>VIEW MORE</p>
                    </div>
                </div>
                <div className="container__item">
                    <img src="https://preview.colorlib.com/theme/course/images/exam.svg" />
                    <div className="text__item">
                        <h1>Our Library</h1>
                        <p>VIEW MORE</p>
                    </div>
                </div>
                <div className="container__item">
                    <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" />
                    <div className="text__item">
                        <h1>Our Library</h1>
                        <p>VIEW MORE</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
