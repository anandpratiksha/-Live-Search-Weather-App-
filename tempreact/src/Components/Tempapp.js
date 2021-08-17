import React, { useState } from 'react'
import "./css/style.css"

function Tempapp() {

    const [city, setCity] = useState(null);
    return (
        <div className="box">
            <div className="inputData">
                <input
                    type="search"
                    className="inputFeild"
                    onClick={(event) => {

                    }}
                />
            </div>
            <div className="info">
                <h2 className="location">
                    <i class="fas fa-street-view">{city}</i>
                </h2>
                <h1 className="temp">

                </h1>
                <h3 className="tempmin_max">
                    Min : 5.25C
                </h3>
            </div>
            <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
        </div>
    )
}

export default Tempapp
