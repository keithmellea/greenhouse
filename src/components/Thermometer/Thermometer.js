import ReactSlider from "react-slider";
import './Thermometer.css';
import useClimate from '../../context/ClimateContext';
import { useState, useEffect} from 'react';

function Thermometer() {
  console.log(useClimate());
  const { temp, setTemp } = useClimate();
  console.log(temp);
  const [desiredTemp, setDesiredTemp] = useState(temp);
  useEffect(() => {
  let timeout = setInterval(() => {
    if (temp > desiredTemp) {
       setTemp((prevTemp) => prevTemp - 1)
    }
     if (temp < desiredTemp) {
       setTemp((prevTemp) => prevTemp + 1);
     }
    }, 1000)
    console.log(timeout);
    //if (desiredTemp === temp) {
      return () => clearInterval(timeout);
   // }
  }, [desiredTemp, temp]);
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={(val) => setDesiredTemp(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;