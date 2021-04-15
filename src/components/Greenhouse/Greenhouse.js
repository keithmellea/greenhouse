import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import { useTheme } from "../../context/ThemeContext";

import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  const themeImg = themeName === "day" ? dayImage : nightImage;
  console.log(themeImg);
  return (
    <section>
      <img className="greenhouse-img" src={themeImg} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
