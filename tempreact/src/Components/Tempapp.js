import React, { useEffect, useState } from 'react'
import "./css/style.css"

function Tempapp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cd90f511e9334b6a65414551ef73f99b`;
            const response = await fetch(url);
            // console.log(response)
            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson);
        }
        fetchApi();
    }, [setSearch])

    return (
        <div className="box">
            <div className="inputData">
                <input
                    type="search"
                    className="inputFeild"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
            </div>
            <div className="info">
                <h2 className="location">
                    <i className="fas fa-street-view">{search}</i>
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
