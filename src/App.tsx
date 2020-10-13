import React, { useEffect, useState } from "react";
import Title from "./Components/Title/Title";
import Menu, { periods } from "./Components/Menu/Menu";
import Map from "./Components/Map/Map";
import "./styles.css";
import "./print.css";
import { BuildingCode, LocationInfo } from "./Components/TreeSingle/TreeItem";
import { PathArray } from "./GraphAlgs/GenerateShortestPath";

export default function App() {
  const [allowedPeriods, setAllowedPeriods] = useState({
    p0: false,
    p7: false
  });

  const [locationArr, setLocationArr] = useState({
    0: { building: "A", room: "1" },
    1: { building: "A", room: "1" },
    2: { building: "A", room: "1" },
    3: { building: "A", room: "1" },
    4: { building: "A", room: "1" },
    5: { building: "A", room: "1" },
    6: { building: "A", room: "1" },
    7: { building: "A", room: "1" }
  } as { [key in typeof periods[number]]: LocationInfo<BuildingCode> });
  const [paths, setPaths] = useState<[PathArray, PathArray]>([[], []]);
  return (
    <div className="App">
      <Title text="Pathfinder"></Title>
      <Map pathsToDraw={paths}></Map>
      <div className="copyright">&#169; Maslanka Brothers 2020</div>
      <Menu
        allowedPeriods={allowedPeriods}
        setAllowedPeriods={setAllowedPeriods}
        locationArr={locationArr}
        setLocationArr={setLocationArr}
        title="Options"
        drawPaths={(pathArray) => {
          setPaths(pathArray);
        }}
      ></Menu>
      <div className="disclaimer">
        The developer of the site is not responsible for any damages caused by
        the site's use
      </div>
    </div>
  );
}
