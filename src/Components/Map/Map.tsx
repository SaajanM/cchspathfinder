import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { PathArray } from "../../GraphAlgs/GenerateShortestPath";
import "./map.css";
import "../../GraphAlgs/GraphDisplay";
import getNodeCoords from "../../GraphAlgs/GraphDisplay";

type Props = {
  pathsToDraw: [PathArray, PathArray];
};

function drawAllPaths(
  ctx: CanvasRenderingContext2D,
  paths: [PathArray, PathArray]
) {
  ctx.globalAlpha = 1;
  ctx.font = "bold italic 36px Calibri";
  let colors = [
    "#fc7b03",
    "#ba03fc",
    "#90fc03",
    "#251575",
    "#9e6100",
    "#ff00bb",
    "#000",
    "#179900"
  ];
  ctx.fillStyle = "#fc7b03";
  ctx.lineWidth = 3;
  console.log(paths);
  for (let i = 0; i < 2; i++) {
    let currDay = paths[i];
    if (currDay.length === 0) break;
    for (let p in currDay) {
      let index = parseInt(p, 10);
      let currPath = currDay[p];
      let from = currPath.fromPeriod;
      let to = currPath.toPeriod;
      let pathData = currPath.path;
      let weight = pathData.weight as number;
      ctx.fillStyle = colors[i * currDay.length + index];

      ctx.fillText(
        `Period ${from} - ${to}: ~${Math.round(weight)} ft.`,
        20 + 360 * i,
        1020 + 32 + 65 * index
      );
      ctx.strokeStyle = colors[i * currDay.length + index];
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.lineJoin = "round";
      let [x, y] = getNodeCoords(currPath.path[0]);
      let offset = 2 * i * currDay.length + index - 8;
      ctx.moveTo(x + offset, y + offset);
      for (let j = 0; j < currPath.path.length - 1; j++) {
        let toNode = currPath.path[j + 1];
        [x, y] = getNodeCoords(toNode);
        ctx.lineTo(x + offset, y + offset);
      }
      ctx.stroke();
    }
  }
}

export default function (props: Props) {
  const [shouldInitZoom, setShouldInitZoom] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(0.5);
  useEffect(() => {
    if (shouldInitZoom) {
      window.addEventListener(
        "wheel",
        (e) => {
          if (e.ctrlKey) {
            e.preventDefault();
          }
        },
        { passive: false }
      );
      setShouldInitZoom(false);
    }
  }, [shouldInitZoom]);
  return (
    <div className={`print mapContainer ${isDragging ? "panning" : ""}`}>
      <TransformWrapper
        onZoomChange={(e: any) => {
          setScale(e.scale);
        }}
        doubleClick={{
          disabled: true
        }}
        defaultScale={0.5}
        defaultPositionX={0}
        defaultPositionY={window.innerHeight > window.innerWidth ? 150 : 1}
        wheel={{
          step: 70
        }}
        options={{
          limitToBounds: false,
          minScale: 0.25
        }}
        onPanning={() => {
          setIsDragging(true);
        }}
        onPanningStop={() => {
          setIsDragging(false);
        }}
      >
        <TransformComponent>
          <img
            src="/RotHallways.png"
            alt="One Way Hallways"
            style={{
              width: `100%`,
              height: `auto`,
              transform: "translate(40%,0)"
            }}
          ></img>
          <canvas
            ref={(canvasRef) => {
              if (!canvasRef) return;
              let rect = canvasRef.getBoundingClientRect();
              canvasRef.setAttribute("width", "" + rect?.width);
              canvasRef.setAttribute("height", "" + rect?.height);
              let ctx = canvasRef.getContext("2d") as CanvasRenderingContext2D;
              ctx.scale(rect.height / rect.width, rect.height / rect.width);
              ctx.scale(scale, scale);
              ctx.scale(window.innerWidth / 1366, window.innerWidth / 1366);
              drawAllPaths(ctx, props.pathsToDraw);
            }}
            style={{
              position: "fixed",
              width: `100%`,
              height: `100%`,
              transform: "translate(40%,0px)"
            }}
          ></canvas>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
