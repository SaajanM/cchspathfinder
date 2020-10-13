type Vector = [number, number];

let displayMap = new Map<string, Vector>();

function addDisplayPoint(name: string, x: number, y: number) {
  displayMap.set(name, [x, y]);
  return;
}

addDisplayPoint("_A_1", 565, 263);
addDisplayPoint("_A_BOOKSTORE", 565, 256);
addDisplayPoint("_A_COMP LAB A", 565, 315);
addDisplayPoint("_A_2", 567, 391);
addDisplayPoint("_A_3", 466, 263);
addDisplayPoint("_A_4", 466, 255);
addDisplayPoint("_A_5", 466, 218);
addDisplayPoint("_A_6", 446, 220);
addDisplayPoint("_A_7", 403, 237);
addDisplayPoint("_A_8", 395, 237);
addDisplayPoint("_A_9", 338, 220);
addDisplayPoint("_A_10", 330, 222);
addDisplayPoint("_A_11", 330, 227);
addDisplayPoint("_A_12", 330, 263);
addDisplayPoint("_A_CULINARY", 212, 270);
addDisplayPoint("_A_14", 232, 257);
addDisplayPoint("_A_15", 233, 253);
addDisplayPoint("_A_16", 161, 313);
addDisplayPoint("_A_17", 169, 313);
addDisplayPoint("_A_18", 234, 351);
addDisplayPoint("_A_19", 333, 313);
addDisplayPoint("_A_20", 387, 316);
addDisplayPoint("_A_21", 458, 313);
addDisplayPoint("_A_22", 468, 313);
addDisplayPoint("_A_23", 468, 391);
addDisplayPoint("_A_24", 458, 391);
addDisplayPoint("_A_25", 385, 392);
addDisplayPoint("_A_26", 334, 394);
addDisplayPoint("_A_27", 234, 358);
addDisplayPoint("_A_28", 171, 394);
addDisplayPoint("_A_29", 160, 394);
addDisplayPoint("_A_30", 162, 410);
addDisplayPoint("_A_31", 170, 410);
addDisplayPoint("_A_32", 234, 447);
addDisplayPoint("_A_33", 234, 453);
addDisplayPoint("_A_34", 213, 489);
addDisplayPoint("_A_35", 214, 495);
addDisplayPoint("_A_36", 235, 516);
addDisplayPoint("_A_37", 212, 533);
addDisplayPoint("_A_STUDENT STORE", 121, 559);
addDisplayPoint("_A_39", 331, 412);
addDisplayPoint("_A_40", 352, 446);
addDisplayPoint("_A_41", 352, 454);
addDisplayPoint("_A_42", 332, 494);
addDisplayPoint("_A_43", 331, 548);
addDisplayPoint("_A_44", 339, 548);
addDisplayPoint("_A_45", 393, 531);
addDisplayPoint("_A_46", 400, 531);
addDisplayPoint("_A_47", 446, 550);
addDisplayPoint("_A_48", 466, 550);
addDisplayPoint("_A_49", 466, 511);
addDisplayPoint("_A_50", 466, 504);
addDisplayPoint("_A_51", 466, 465);
addDisplayPoint("_A_52", 446, 454);
addDisplayPoint("_A_53", 446, 446);
addDisplayPoint("_A_54", 466, 446);

addDisplayPoint("_B_ADMIN", 680, 248);
addDisplayPoint("_B_LIBRARY", 640, 267);
addDisplayPoint("_B_COMP LAB 1", 646, 381);
addDisplayPoint("_B_COMP LAB 2", 653, 381);
addDisplayPoint("_B_COMP LAB 3", 720, 381);

addDisplayPoint("_C_1", 800, 260);
addDisplayPoint("_C_2", 801, 267);
addDisplayPoint("_C_3", 898, 262);
addDisplayPoint("_C_4", 898, 254);
addDisplayPoint("_C_5", 897, 218);
addDisplayPoint("_C_6", 919, 216);
addDisplayPoint("_C_7", 962, 233);
addDisplayPoint("_C_8", 971, 235);
addDisplayPoint("_C_9", 1025, 219);
addDisplayPoint("_C_10", 1033, 220);
addDisplayPoint("_C_11", 1033, 224);
addDisplayPoint("_C_12", 1035, 259);
addDisplayPoint("_C_13", 1035, 311);
addDisplayPoint("_C_14", 978, 314);
addDisplayPoint("_C_15", 908, 312);
addDisplayPoint("_C_16", 898, 312);
addDisplayPoint("_C_17", 801, 390);
addDisplayPoint("_C_18", 899, 392);
addDisplayPoint("_C_19", 905, 392);
addDisplayPoint("_C_20", 978, 390);
addDisplayPoint("_C_21", 1033, 392);
addDisplayPoint("_C_22", 897, 549);
addDisplayPoint("_C_COMP LAB C", 801, 366);
addDisplayPoint("_C_LAB 1", 898, 411);
addDisplayPoint("_C_LAB 2", 919, 411);
addDisplayPoint("_C_LAB 3", 879, 493);
addDisplayPoint("_C_LAB 4", 918, 484);
addDisplayPoint("_C_LAB 5", 982, 546);
addDisplayPoint("_C_LAB 6", 1020, 545);
addDisplayPoint("_C_LAB 7", 1034, 542);
addDisplayPoint("_C_LAB 8", 1011, 484);
addDisplayPoint("_C_LAB 9", 1033, 412);
addDisplayPoint("_C_LAB 10", 1013, 411);

addDisplayPoint("_D_GYM", 1100, 316);
addDisplayPoint("_D_DRAMA", 1106, 189);
addDisplayPoint("_D_BAND", 1100, 286);
addDisplayPoint("_D_BOYS LOCKER", 1313, 393);
addDisplayPoint("_D_GIRLS LOCKER", 1178, 393);
addDisplayPoint("_D_CHOIR", 1116, 409);
addDisplayPoint("_D_WEIGHT", 1142, 525);
addDisplayPoint("_D_JH DANCE", 1142, 567);
addDisplayPoint("_D_COLLEGE", 1167, 459);
addDisplayPoint("_D_1", 1166, 468);
addDisplayPoint("_D_2", 1201, 509);
addDisplayPoint("_D_3", 1242, 505);
addDisplayPoint("_D_4", 1241, 464);
addDisplayPoint("_D_EQUIPMENT", 1241, 414);

addDisplayPoint("_E_ORCHESTRA", 1397, 214);
addDisplayPoint("_E_DANCE", 1397, 321);
addDisplayPoint("_E_PAC", 1474, 359);

addDisplayPoint("_F_BOYS LOCKER", 1400, 772);
addDisplayPoint("_F_GIRL LOCKER", 1483, 770);
addDisplayPoint("_F_WRESTLING", 1365, 832);
addDisplayPoint("_F_WEIGHT", 1512, 825);
addDisplayPoint("_F_AUX GYM", 1492, 825);

addDisplayPoint("_J_101", 925, 800);
addDisplayPoint("_J_102", 925, 807);
addDisplayPoint("_J_103", 925, 891);
addDisplayPoint("_J_104", 926, 895);
addDisplayPoint("_J_105", 930, 896);
addDisplayPoint("_J_106", 948, 879);
addDisplayPoint("_J_107", 1031, 896);
addDisplayPoint("_J_108", 1042, 881);
addDisplayPoint("_J_109", 1041, 896);
addDisplayPoint("_J_110", 1051, 879);
addDisplayPoint("_J_111", 1099, 879);
addDisplayPoint("_J_112", 1139, 876);
addDisplayPoint("_J_113", 1147, 896);
addDisplayPoint("_J_114", 1100, 802);
addDisplayPoint("_J_115", 1046, 783);
addDisplayPoint("_J_116", 1050, 800);
addDisplayPoint("_J_117", 1037, 786);
addDisplayPoint("_J_118", 1041, 800);
addDisplayPoint("_J_119", 948, 784);
addDisplayPoint("_J_120", 948, 802);
addDisplayPoint("_J_COUNSELOR", 1165, 781);

addDisplayPoint("_J_201", 1044, 1049);
addDisplayPoint("_J_202", 982, 1048);
addDisplayPoint("_J_203", 1005, 1100);
addDisplayPoint("_J_204", 983, 1111);
addDisplayPoint("_J_205", 1005, 1109);
addDisplayPoint("_J_206", 982, 1156);
addDisplayPoint("_J_207", 982, 1163);
addDisplayPoint("_J_208", 992, 1160);
addDisplayPoint("_J_209", 1055, 1161);
addDisplayPoint("_J_210", 1095, 1144);
addDisplayPoint("_J_211", 1152, 1159);
addDisplayPoint("_J_212", 1161, 1143);
addDisplayPoint("_J_213", 1215, 1160);
addDisplayPoint("_J_214", 1219, 1048);
addDisplayPoint("_J_215", 1211, 1049);
addDisplayPoint("_J_216", 1151, 1065);
addDisplayPoint("_J_217", 1127, 1047);

addDisplayPoint("_K_BOYS LOCKER", 671, 776);
addDisplayPoint("_K_GIRLS LOCKER", 764, 775);
addDisplayPoint("_K_1", 607, 854);
addDisplayPoint("_K_2", 607, 848);
addDisplayPoint("_K_K GYM", 717, 866);

addDisplayPoint("S0", 581, 711);
addDisplayPoint("S1", 782, 706);
addDisplayPoint("S2", 870, 709);
addDisplayPoint("S3", 939, 709);
addDisplayPoint("S4", 1253, 711);
addDisplayPoint("S5", 1384, 706);
addDisplayPoint("S6", 1501, 710);
addDisplayPoint("S7", 1617, 708);
addDisplayPoint("S8", 1250, 792);
addDisplayPoint("S9", 581, 1266);
addDisplayPoint("SA", 868, 1266);
addDisplayPoint("SB", 1251, 1265);
addDisplayPoint("SC", 1618, 1266);
addDisplayPoint("KI0", 660, 786);
addDisplayPoint("KI1", 776, 787);
addDisplayPoint("JL0", 937, 789);
addDisplayPoint("JL1", 1148, 790);
addDisplayPoint("JL2", 934, 885);
addDisplayPoint("JL3", 1147, 888);
addDisplayPoint("JU0", 1000, 1052);
addDisplayPoint("JU1", 1058, 1058);
addDisplayPoint("JU2", 1200, 1057);
addDisplayPoint("JU3", 992, 1152);
addDisplayPoint("JU4", 1054, 1152);
addDisplayPoint("JU5", 1209, 1148);
addDisplayPoint("AX0", 1380, 817);
addDisplayPoint("AX1", 1505, 816);

let mXArr: number[] = [
  47,
  224,
  339,
  397,
  455,
  575,
  790,
  910,
  965,
  1022,
  1093,
  1155,
  1230,
  1380,
  1725
];
let mYArr: number[] = [115, 230, 255, 305, 400, 500, 540, 680];
function getMainDisplayNode(name: string): Vector {
  let id = name.charAt(0);
  if (id !== "M") return [-1, -1];
  let xindex = parseInt(name.charAt(2), 16);
  let yindex = parseInt(name.charAt(1), 16);
  return [mXArr[xindex], mYArr[yindex]];
}
export default function getNodeCoords(name: string): Vector {
  if (name.charAt(0) === "M") {
    return getMainDisplayNode(name);
  }
  return displayMap.get(name) as Vector;
}
