// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useState, useContext } from "react";

export const ClimateContext = createContext();

export default function useConsumeClimate() {
  return useContext(ClimateContext);
}

export const ClimateProvider = (props) => {
  const [temp, setTemp] = useState(50);

  return (
    <ClimateContext.Provider value={{ temp, setTemp }}>
      {props.children}
    </ClimateContext.Provider>
  );
};
