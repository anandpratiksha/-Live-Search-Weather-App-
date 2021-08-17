import React from 'react'
import "./css/style.css"

function Tempapp() {
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
                <h2 className="location"></h2>
            </div>
        </div>
    )
}

export default Tempapp
