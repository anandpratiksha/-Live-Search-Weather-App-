import React, { useEffect, useState } from 'react'
import "./css/style.css"

function Tempapp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cd90f511e9334b6a65414551ef73f99b`;
            const response = await fetch(url);
            // console.log(response)
            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <div className="box">
            <div className="inputData">
                <input
                    type="search"
                    className="inputFeild"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                    value={search}
                />
            </div>
            {!city ? (
                <p className="errorMsg">No Data Found</p>
            ) : (
                <div>
                    <div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view">{search}</i>
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">
                            Min : {city.temp_min}°Cel | Max : {city.temp_max}°C
                        </h3>
                    </div>
                    <div className="wave one"></div>
                    <div className="wave two"></div>
                    <div className="wave three"></div>
                </div>
            )
            }
        </div>
    )
}

export default Tempapp
