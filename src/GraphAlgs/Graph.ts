import Graph from "graph-data-structure";

let classRoomGraph = Graph();

let rowPositions: number[] = [0, 60, 75, 105, 180, 275, 300, 375];
let colPositions: number[] = [
  0,
  80,
  160,
  190,
  225,
  295,
  430,
  500,
  530,
  560,
  650,
  665,
  730,
  1000
];
function addAutoEdges(firstNode: string, ...connectingNodes: string[]) {
  let r0: number = parseInt(firstNode.charAt(1), 10);
  let c0: number = parseInt(firstNode.charAt(2), 16);
  let r1: number;
  let c1: number;
  for (let c in connectingNodes) {
    r1 = parseInt(connectingNodes[c].charAt(1), 10);
    c1 = parseInt(connectingNodes[c].charAt(2), 16);
    classRoomGraph.addEdge(
      firstNode,
      connectingNodes[c],
      Math.sqrt(
        Math.pow(rowPositions[r1] - rowPositions[r0], 2) +
          Math.pow(colPositions[c1] - colPositions[c0], 2)
      )
    );
  }
  return classRoomGraph;
}

function addManualEdges(firstNode: string, ...otherNodes: [string, number][]) {
  for (let c in otherNodes) {
    classRoomGraph.addEdge(firstNode, otherNodes[c][0], otherNodes[c][1]);
  }
  return classRoomGraph;
}

function addClassroom(
  room: string,
  intersToRoom: string,
  intersFromRoom: string
) {
  let intersToRoomS = intersToRoom.split(",").map((e) => e.trim());
  let intersFromRoomS = intersFromRoom.split(",").map((e) => e.trim());
  for (let i in intersToRoomS) {
    classRoomGraph.addEdge(intersToRoomS[i], room, 2000);
  }
  for (let i in intersFromRoomS) {
    classRoomGraph.addEdge(room, intersFromRoomS[i], 2000);
  }
  //return classRoomGraph;
}
//#region Intersections
//#region Nodes
//#region Main Building First Row
classRoomGraph.addNode("M00");
classRoomGraph.addNode("M01");
classRoomGraph.addNode("M04");
classRoomGraph.addNode("M05");
classRoomGraph.addNode("M06");
classRoomGraph.addNode("M07");
classRoomGraph.addNode("M0A");
classRoomGraph.addNode("M0D");
classRoomGraph.addNode("M0E");
//#endregion
//#region Main Building Second Row
classRoomGraph.addNode("M12");
classRoomGraph.addNode("M14");
classRoomGraph.addNode("M17");
classRoomGraph.addNode("M19");
//#endregion
//#region Main Building Third Row
classRoomGraph.addNode("M25");
classRoomGraph.addNode("M26");
//#endregion
//#region Main Building Fourth Row
new Array<number>(11).map((e, i) => {
  classRoomGraph.addNode("M3" + i.toString(16));
  return null;
});
//#endregion
//#region Main Building Fifth Row
new Array<number>(14).map((e, i) => {
  classRoomGraph.addNode("M4" + i.toString(16));
  return null;
});
//#endregion
//#region Main Building Sixth Row
classRoomGraph.addNode("M5B");
classRoomGraph.addNode("M5C");
classRoomGraph.addNode("M5E");
//#endregion
//#region Main Building Seventh Row
classRoomGraph.addNode("M62");
classRoomGraph.addNode("M64");
classRoomGraph.addNode("M67");
classRoomGraph.addNode("M69");
//#endregion
//#region Main Building Eighth Row
classRoomGraph.addNode("M70");
classRoomGraph.addNode("M71");
classRoomGraph.addNode("M74");
classRoomGraph.addNode("M75");
classRoomGraph.addNode("M76");
classRoomGraph.addNode("M77");
classRoomGraph.addNode("M7C");
classRoomGraph.addNode("M7D");
classRoomGraph.addNode("M7E");
//#endregion
//#region K Building
classRoomGraph.addNode("KI0");
classRoomGraph.addNode("KI1");
//#endregion
//#region J Building
classRoomGraph.addNode("JL0");
classRoomGraph.addNode("JL1");
classRoomGraph.addNode("JL2");
classRoomGraph.addNode("JL3");
classRoomGraph.addNode("JU0");
classRoomGraph.addNode("JU1");
classRoomGraph.addNode("JU2");
classRoomGraph.addNode("JU3");
classRoomGraph.addNode("JU4");
classRoomGraph.addNode("JU5");
//#endregion
//#region AUX (F Building)
classRoomGraph.addNode("AX0");
classRoomGraph.addNode("AX1");
//#endregion
//#region Secondary Loop
new Array<number>(13).map((e, i) => {
  classRoomGraph.addNode("S" + i.toString(16));
  return null;
});
//#endregion
//#endregion
//#region Edges
addAutoEdges("M00", "M01", "M30");
addAutoEdges("M01", "M04", "M00", "M31");
addAutoEdges("M04", "M01", "M05", "M14");
addAutoEdges("M05", "M06", "M04", "M25");
addAutoEdges("M06", "M05", "M07", "M26");
addAutoEdges("M06", "M05", "M07");
addAutoEdges("M07", "M06", "M0A", "M17");
addAutoEdges("M0A", "M07", "M0D", "M3A");
addAutoEdges("M0D", "M0A", "M0E");
addAutoEdges("M0E", "M0D", "M5E");

addAutoEdges("M12", "M14");
addAutoEdges("M14", "M34");
addAutoEdges("M17", "M19");
addAutoEdges("M19", "M39");

addAutoEdges("M25", "M35");
addAutoEdges("M26", "M06", "M25");

addAutoEdges("M30", "M00", "M40");
addAutoEdges("M31", "M30", "M41");
addAutoEdges("M32", "M12", "M31");
addAutoEdges("M33", "M32", "M43");
addAutoEdges("M34", "M33");
addAutoEdges("M35", "M34", "M45");
addAutoEdges("M36", "M26");
addAutoEdges("M37", "M17", "M36");
addAutoEdges("M38", "M37", "M48");
addAutoEdges("M39", "M38", "M3A");
addAutoEdges("M3A", "M39", "M0A");

addAutoEdges("M40", "M30", "M70");
addAutoEdges("M41", "M40", "M42");
addAutoEdges("M42", "M43");
addAutoEdges("M43", "M44", "M33");
addAutoEdges("M44", "M64", "M45");
addAutoEdges("M45", "M75", "M46");
addAutoEdges("M46", "M36", "M47");
addAutoEdges("M47", "M48");
addAutoEdges("M48", "M38", "M49");
addAutoEdges("M49", "M4A", "M69");
addAutoEdges("M4A", "M3A", "M4B");
addAutoEdges("M4B", "M5B", "M4C");
addAutoEdges("M4C", "M4D", "M5C");
addAutoEdges("M4D", "M0D", "M5E");

addAutoEdges("M5B", "M7C");
addAutoEdges("M5C", "M5B");
addAutoEdges("M5E", "M0E", "M7E");

addAutoEdges("M62", "M42");
addAutoEdges("M64", "M62");
addAutoEdges("M67", "M47");
addAutoEdges("M69", "M67");

addAutoEdges("M70", "M40", "M71");
addAutoEdges("M71", "M70", "M74", "M41");
addAutoEdges("M74", "M71", "M75", "M64");
addAutoEdges("M75", "M74", "M76").addEdge("M75", "S0", 115);
addAutoEdges("M76", "M75", "M77", "M46");
addAutoEdges("M77", "M76", "M7C", "M67");
addAutoEdges("M7C", "M77", "M7D").addEdge("M7C", "S4", 95);
addAutoEdges("M7D", "M7C", "M7E");
addAutoEdges("M7E", "M7D", "M5E");

addManualEdges("S0", ["S1", 80], ["S9", 173], ["KI0", 65]);
addManualEdges("S1", ["S0", 80], ["S2", 65], ["M76", 120]);
addManualEdges("S2", ["S1", 65], ["S3", 65], ["KI1", 55], ["SA", 185]);
addManualEdges("S3", ["S2", 65], ["M77", 80], ["S4", 185]);
addManualEdges("S4", ["S3", 185], ["S5", 85], ["S8", 55]);
addManualEdges("S5", ["S4", 85], ["S6", 75]);
addManualEdges("S6", ["S5", 75], ["S7", 50], ["AX1", 60]);
addManualEdges("S7", ["S6", 50], ["SC", 170], ["M7E", 90]);
addManualEdges(
  "S8",
  ["S4", 55],
  ["SB", 150],
  ["JL1", 65],
  ["JL3", 90],
  ["AX0", 80],
  ["JU2", 120],
  ["JU5", 160]
);
addManualEdges("S9", ["S0", 173], ["SA", 140]);
addManualEdges("SA", ["S9", 140], ["S2", 185], ["SB", 265]);
addManualEdges("SB", ["SA", 265], ["SC", 210], ["S8", 150]);
addManualEdges("SC", ["SB", 210], ["S7", 170]);

addManualEdges("KI0", ["S0", 65], ["KI1", 95]);
addManualEdges("KI1", ["KI0", 95], ["S2", 55]);

addManualEdges("JL0", ["S3", 90]);
addManualEdges("JL1", ["JL0", 140], ["Jl3", 60]);
addManualEdges("JL2", ["JL0", 60]);
addManualEdges("JL3", ["JL2", 140]);

addManualEdges("JU0", ["JU1", 50]);
addManualEdges("JU1", ["S3", 190], ["JU2", 90]);
addManualEdges("JU2", ["JU5", 60]);
addManualEdges("JU3", ["JU0", 60]);
addManualEdges("JU4", ["JU3", 50], ["JU1", 60]);
addManualEdges("JU5", ["JU4", 90]);

addManualEdges("AX0", ["S5", 60], ["AX1", 75]);
addManualEdges("AX1", ["S7", 150]);
//#endregion
//#endregion
//#region Classrooms
addClassroom("_A_BOOKSTORE", "M25", "M25");
addClassroom("_A_1", "M25", "M25");
addClassroom("_A_COMP LAB A", "M35", "M45");
addClassroom("_A_2", "M35", "M45");
addClassroom("_A_3", "M14", "M34");
addClassroom("_A_4", "M14", "M34");
addClassroom("_A_5", "M04, M14", "M14");
addClassroom("_A_6", "M04, M14", "M14");
addClassroom("_A_7", "M12", "M14");
addClassroom("_A_8", "M12", "M14");
addClassroom("_A_9", "M12", "M12");
addClassroom("_A_10", "M12", "M12");
addClassroom("_A_11", "M12", "M12");
addClassroom("_A_12", "M12", "M12");
addClassroom("_A_CULINARY", "M01", "M31");
addClassroom("_A_14", "M01", "M31");
addClassroom("_A_15", "M01", "M31");
addClassroom("_A_16", "M31", "M30");
addClassroom("_A_17", "M31", "M30");
addClassroom("_A_18", "M31", "M41");
addClassroom("_A_19", "M32", "M32");
addClassroom("_A_20", "M33", "M33");
addClassroom("_A_21", "M34", "M34");
addClassroom("_A_22", "M34", "M34");
addClassroom("_A_23", "M44", "M44");
addClassroom("_A_24", "M44", "M44");
addClassroom("_A_25", "M43", "M43");
addClassroom("_A_26", "M42", "M42");
addClassroom("_A_27", "M31", "M41");
addClassroom("_A_28", "M41", "M40");
addClassroom("_A_29", "M41", "M40");
addClassroom("_A_30", "M41", "M40");
addClassroom("_A_31", "M41", "M40");
addClassroom("_A_32", "M71", "M41");
addClassroom("_A_33", "M71", "M41");
addClassroom("_A_34", "M71", "M41");
addClassroom("_A_35", "M71", "M41");
addClassroom("_A_36", "M71", "M41");
addClassroom("_A_37", "M71", "M41");
addClassroom("_A_STUDENT STORE", "M71", "M71");
addClassroom("_A_39", "M62", "M42");
addClassroom("_A_40", "M62", "M42");
addClassroom("_A_41", "M62", "M42");
addClassroom("_A_42", "M62", "M62");
addClassroom("_A_43", "M62", "M62");
addClassroom("_A_44", "M62", "M62");
addClassroom("_A_45", "M64", "M62");
addClassroom("_A_46", "M64", "M62");
addClassroom("_A_47", "M64,M74", "M64");
addClassroom("_A_48", "M64,M74", "M64");
addClassroom("_A_49", "M44", "M64");
addClassroom("_A_50", "M44", "M64");
addClassroom("_A_51", "M44", "M64");
addClassroom("_A_52", "M44", "M64");
addClassroom("_A_53", "M44", "M64");
addClassroom("_A_54", "M44", "M64");

addClassroom("_B_ADMIN", "M26", "M25");
addClassroom("_B_LIBRARY", "M26", "M25");
addClassroom("_B_COMP LAB 1", "M45", "M46");
addClassroom("_B_COMP LAB 2", "M45", "M46");
addClassroom("_B_COMP LAB 3", "M45", "M46");

addClassroom("_C_1", "M26", "M26");
addClassroom("_C_2", "M36", "M26");
addClassroom("_C_3", "M37", "M17");
addClassroom("_C_4", "M37", "M17");
addClassroom("_C_5", "M07,M17", "M17");
addClassroom("_C_6", "M07,M17", "M17");
addClassroom("_C_7", "M17", "M19");
addClassroom("_C_8", "M17", "M19");
addClassroom("_C_9", "M19", "M19");
addClassroom("_C_10", "M19", "M19");
addClassroom("_C_11", "M19", "M19");
addClassroom("_C_12", "M19", "M39");
addClassroom("_C_13", "M39", "M39");
addClassroom("_C_14", "M38", "M38");
addClassroom("_C_15", "M37", "M37");
addClassroom("_C_16", "M37", "M37");
addClassroom("_C_17", "M46", "M46");
addClassroom("_C_18", "M47", "M47");
addClassroom("_C_19", "M47", "M47");
addClassroom("_C_20", "M48", "M48");
addClassroom("_C_21", "M49", "M49");
addClassroom("_C_22", "M67", "M67");
addClassroom("_C_COMP LAB C", "M46", "M36");
addClassroom("_C_LAB 1", "M47", "M47");
addClassroom("_C_LAB 2", "M47", "M47");
addClassroom("_C_LAB 3", "M67", "M47");
addClassroom("_C_LAB 4", "M67", "M47");
addClassroom("_C_LAB 5", "M69", "M67");
addClassroom("_C_LAB 6", "M69", "M69");
addClassroom("_C_LAB 7", "M49", "M69");
addClassroom("_C_LAB 8", "M49", "M69");
addClassroom("_C_LAB 9", "M49", "M49");
addClassroom("_C_LAB 10", "M49", "M49");

addClassroom("_D_GYM", "M4A", "M3A");
addClassroom("_D_DRAMA", "M0A,M3A", "M0A,M3A");
addClassroom("_D_BAND", "M0A,M3A", "M0A,M3A");
addClassroom("_D_BOYS LOCKER", "M4B", "M4C");
addClassroom("_D_GIRLS LOCKER", "M4C", "M4D");
addClassroom("_D_CHOIR", "M4A", "M4A");
addClassroom("_D_WEIGHT", "M5B", "M5B");
addClassroom("_D_JH DANCE", "M5B", "M7C");
addClassroom("_D_COLLEGE", "M4B", "M5B");
addClassroom("_D_1", "M4B", "M5B");
addClassroom("_D_2", "M5C", "M5B");
addClassroom("_D_3", "M5C", "M5C");
addClassroom("_D_4", "M4C", "M5C");
addClassroom("_D_EQUIPMENT", "M4C", "M4C");

addClassroom("_E_ORCHESTRA", "M4D", "M0D");
addClassroom("_E_DANCE", "M4D", "M0D");
addClassroom("_E_PAC", "M4D", "M5E");

addClassroom("_F_BOYS LOCKER", "AX0", "S5");
addClassroom("_F_GIRLS LOCKER", "S6", "AX1");
addClassroom("_F_WRESTLING", "AX0", "AX0");
addClassroom("_F_WEIGHT", "AX1", "AX1");
addClassroom("_F_AUX GYM", "AX1", "AX1");

addClassroom("_J_101", "JL0", "JL0");
addClassroom("_J_102", "JL2", "JL0");
addClassroom("_J_103", "JL2", "JL2");
addClassroom("_J_104", "JL2", "JL2");
addClassroom("_J_105", "JL2", "JL2");
addClassroom("_J_106", "JL2", "JL2");
addClassroom("_J_107", "JL3", "JL2");
addClassroom("_J_108", "JL3", "JL2");
addClassroom("_J_109", "JL3", "JL2");
addClassroom("_J_110", "JL3", "JL2");
addClassroom("_J_111", "JL3", "JL2");
addClassroom("_J_112", "JL3", "JL3");
addClassroom("_J_113", "JL3", "JL3");
addClassroom("_J_114", "JL1", "JL0");
addClassroom("_J_115", "JL1", "JL0");
addClassroom("_J_116", "JL1", "JL0");
addClassroom("_J_117", "JL1", "JL0");
addClassroom("_J_118", "JL1", "JL0");
addClassroom("_J_119", "JL0", "JL0");
addClassroom("_J_120", "JL0", "JL0");
addClassroom("_J_COUNSELOR", "S8", "JL1");

addClassroom("_J_201", "JU0", "JU0");
addClassroom("_J_202", "JU0", "JU0");
addClassroom("_J_203", "JU3", "JU0");
addClassroom("_J_204", "JU3", "JU0");
addClassroom("_J_205", "JU3", "JU0");
addClassroom("_J_206", "JU3", "JU3");
addClassroom("_J_207", "JU3", "JU3");
addClassroom("_J_208", "JU3", "JU3");
addClassroom("_J_209", "JU4", "JU4");
addClassroom("_J_210", "JU5", "JU4");
addClassroom("_J_211", "JU5", "JU4");
addClassroom("_J_212", "JU5", "JU4");
addClassroom("_J_213", "JU5", "JU5");
addClassroom("_J_214", "JU2", "JU2");
addClassroom("_J_215", "JU2", "JU2");
addClassroom("_J_216", "JU1", "JU2");
addClassroom("_J_217", "JU1", "JU2");

addClassroom("_K_BOYS LOCKER", "KI0", "KI0");
addClassroom("_K_GIRLS LOCKER", "KI1", "KI1");
addClassroom("_K_1", "S0", "S0");
addClassroom("_K_2", "S0", "S0");
addClassroom("_K_K GYM", "S9", "S9");
//#endregion
export function getShortestPath(class1: string, class2: string) {
  let shortest = classRoomGraph.shortestPath(class1, class2);
  shortest.weight = shortest.weight ? shortest.weight - 4000 : 0;
  return shortest;
}
