import { periods } from "../Components/Menu/Menu";
import { BuildingCode, LocationInfo } from "../Components/TreeSingle/TreeItem";
import { getShortestPath } from "./Graph";

export type PathArray = {
  fromPeriod: number;
  toPeriod: number;
  path: string[] & { weight?: number | undefined };
}[];

export default function generatePath(
  allowablePeriods: { p0: boolean; p7: boolean },
  locationArr: { [key in typeof periods[number]]: LocationInfo<BuildingCode> }
) {
  let validPeriods = Object.values(locationArr)
    .map((e, i) => {
      return { ...e, period: i };
    })
    .filter((e, i) => {
      return !(
        (!allowablePeriods.p0 && i === 0) ||
        (!allowablePeriods.p7 && i === 7)
      );
    });
  let res: [PathArray, PathArray] = [[], []];
  //Even or Odd
  for (let i = 0; i < 2; i++) {
    //If you have 0 hour
    if (validPeriods[0].period === 0) {
      //Add path from 0 to 1st/2nd hour
      res[i].push({
        fromPeriod: 0,
        toPeriod: i + 1,
        path: getShortestPath(
          `_${validPeriods[0].building}_${validPeriods[0].room}`,
          `_${validPeriods[i + 1].building}_${validPeriods[i + 1].room}`
        )
      });
      //Deal with paths from other classes up to 6th hour
      for (let p = i + 1; p <= 4; p += 2) {
        res[i].push({
          fromPeriod: p,
          toPeriod: p + 2,
          path: getShortestPath(
            `_${validPeriods[p].building}_${validPeriods[p].room}`,
            `_${validPeriods[p + 2].building}_${validPeriods[p + 2].room}`
          )
        });
      }
    } else {
      //No 0 hour
      for (let p = i; p <= 3; p += 2) {
        res[i].push({
          fromPeriod: p + 1,
          toPeriod: p + 3,
          path: getShortestPath(
            `_${validPeriods[p].building}_${validPeriods[p].room}`,
            `_${validPeriods[p + 2].building}_${validPeriods[p + 2].room}`
          )
        });
      }
    }
    if (validPeriods[validPeriods.length - 1].period === 7) {
      res[i].push({
        fromPeriod: 5 + i,
        toPeriod: 7,
        path: getShortestPath(
          `_${validPeriods[5 + i].building}_${validPeriods[5 + i].room}`,
          `_${validPeriods[7].building}_${validPeriods[7].room}`
        )
      });
    }
  }
  return res;
}
