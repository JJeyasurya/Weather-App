import { useState } from "react";
import "./App.css";
import { FcSearch } from "react-icons/fc";
import { IoRainy } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import { MdOutlineWindPower } from "react-icons/md";
import { FaWind } from "react-icons/fa6";
import { IoCloudSharp } from "react-icons/io5";
import { FaCloudSun } from "react-icons/fa";
import { FaSmog } from "react-icons/fa6";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState("chennai");
  const [apiData, setApiData] = useState(null);

  const store = (event) => {
    setData(event.target.value);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=416c3f13499bc9f54e29f8a85c214fd8`
    ).then((item) => item.json())
      .then((abc) => setApiData(abc));
  };
  console.log(apiData);

  return (
    <>
      <div className="overall">
        <div className="card">
          <div>
            <h1> Check Weather</h1>
            <p> In your city </p>
          </div>

          <div className="inputBox">
            <input
              onChange={store}
              type="text"
              placeholder="Enter your city name"
              name="city"
            />
            <span onClick={getApiData}>
              {" "}
              <FcSearch />{" "}
            </span>
          </div>
          <h1 className="cityName"> {apiData && apiData.name} </h1>
          <div className="conditionBox">
            <span>
              {apiData && (apiData.weather[0].main === "Rain" ? (
                <IoRainy />
              ) : apiData.weather[0].main === "Mist" ? (
                <FaSmog />
              ) : (
                <FaCloudSun />
              ))}
            </span>
            <p> {apiData && apiData.weather[0].main} </p>
          </div>

          <div className="overallBottomBox">
            <div className="bottomBox">
              <span>
                <FaDroplet />
              </span>
              <p> Humidity </p>
            </div>

            <div className="bottomBox">
              <span>
                <FaWind />
              </span>
              <p> Wind speed </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;











// import { useState } from 'react'
// import './App.css';
// import { IoRainy } from "react-icons/io5";
// import { FaSearchLocation } from "react-icons/fa";
// import { WiHumidity } from "react-icons/wi";
// import { FiWind } from "react-icons/fi";
// import { useEffect } from "react";


// function App() {
//   return (
//     <div className='overall'>
//       <div className='card'>
//         <h1 style={{ fontStyle: "initial" }}>Weather App</h1>
//         <input type="text" placeholder='Enter Your City Name...'/>
//         <button><FaSearchLocation />
//         </button>
//         <h2>Tirunelveli</h2>
//         <h2><IoRainy style={{ fontSize: "50px" }} /></h2>
//         <h2>Mist</h2>          
//         <div className='box'>
//           <div className='box1'>
//             <h3><WiHumidity style={{ fontSize: "40px" }} /></h3>
//             <h2>Humidity</h2>
//             <h4>50%</h4>
//           </div>
//           <div className='box2'>
//             <h5><FiWind style={{ fontSize: "38px" }} /></h5>
//             <h2>Wind speed </h2>
//             <h4>30.44</h4>

//           </div>

//         </div>


//       </div>
//     </div>
//   )
// }

// export default App
