interface Root {
  /** ID of the talent tree */
  [key: number]: {
    /** ID of the talent */
    [key: number]: TalentData
  }
}

export const specNames = {
  10: "Arms",
  11: "Fury",
  12: "Protection",
  20: "Holy",
  21: "Protection",
  22: "Retribution",
  30: "Beast Mastery",
  31: "Marksmanship",
  32: "Survival",
  40: "Assassination",
  41: "Combat",
  42: "Subtlety",
  50: "Discipline",
  51: "Holy",
  52: "Shadow",
  60: "Elemental",
  61: "Enhancement",
  62: "Restoration",
  70: "Arcane",
  71: "Fire",
  72: "Frost",
  80: "Affliction",
  81: "Demonology",
  82: "Destruction",
  90: "Balance",
  91: "Feral Combat",
  92: "Restoration", 
}

export const talentsBySpec: Root = {
10: {
    1000: {
      "id": 1000,
      "row": 0,
      "col": 0,
      "icon": "icon_1000",
      "ranks": [10001,10002,10003],
      "requires": []
    },
    1001: {
      "id": 1001,
      "row": 0,
      "col": 1,
      "icon": "icon_1001",
      "ranks": [10011,10012],
      "requires": []
    },
    1002: {
      "id": 1002,
      "row": 0,
      "col": 2,
      "icon": "icon_1002",
      "ranks": [10021,10022,10023],
      "requires": []
    },
    1003: {
      "id": 1003,
      "row": 0,
      "col": 3,
      "icon": "icon_1003",
      "ranks": [10031,10032],
      "requires": []
    },
    1010: {
      "id": 1010,
      "row": 1,
      "col": 0,
      "icon": "icon_1010",
      "ranks": [10101,10102,10103],
      "requires": []
    },
    1011: {
      "id": 1011,
      "row": 1,
      "col": 1,
      "icon": "icon_1011",
      "ranks": [10111,10112],
      "requires": []
    },
    1012: {
      "id": 1012,
      "row": 1,
      "col": 2,
      "icon": "icon_1012",
      "ranks": [10121,10122,10123],
      "requires": []
    },
    1013: {
      "id": 1013,
      "row": 1,
      "col": 3,
      "icon": "icon_1013",
      "ranks": [10131,10132],
      "requires": []
    },
    1020: {
      "id": 1020,
      "row": 2,
      "col": 0,
      "icon": "icon_1020",
      "ranks": [10201,10202,10203],
      "requires": []
    },
    1021: {
      "id": 1021,
      "row": 2,
      "col": 1,
      "icon": "icon_1021",
      "ranks": [10211],
      "requires": []
    },
    1022: {
      "id": 1022,
      "row": 2,
      "col": 2,
      "icon": "icon_1022",
      "ranks": [10221],
      "requires": []
    },
    1023: {
      "id": 1023,
      "row": 2,
      "col": 3,
      "icon": "icon_1023",
      "ranks": [10231,10232],
      "requires": []
    },
    1030: {
      "id": 1030,
      "row": 3,
      "col": 0,
      "icon": "icon_1030",
      "ranks": [10301,10302,10303],
      "requires": []
    },
    1031: {
      "id": 1031,
      "row": 3,
      "col": 1,
      "icon": "icon_1031",
      "ranks": [10311,10312],
      "requires": []
    },
    1032: {
      "id": 1032,
      "row": 3,
      "col": 2,
      "icon": "icon_1032",
      "ranks": [10321,10322,10323],
      "requires": []
    },
    1033: {
      "id": 1033,
      "row": 3,
      "col": 3,
      "icon": "icon_1033",
      "ranks": [10331,10332],
      "requires": []
    },
    1040: {
      "id": 1040,
      "row": 4,
      "col": 0,
      "icon": "icon_1040",
      "ranks": [10401,10402,10403],
      "requires": []
    },
    1041: {
      "id": 1041,
      "row": 4,
      "col": 1,
      "icon": "icon_1041",
      "ranks": [10411],
      "requires": []
    },
    1042: {
      "id": 1042,
      "row": 4,
      "col": 2,
      "icon": "icon_1042",
      "ranks": [10421],
      "requires": []
    },
    1043: {
      "id": 1043,
      "row": 4,
      "col": 3,
      "icon": "icon_1043",
      "ranks": [10431,10432],
      "requires": []
    },
    1051: {
      "id": 1051,
      "row": 5,
      "col": 1,
      "icon": "icon_1051",
      "ranks": [10511,10512],
      "requires": []
    },
    1052: {
      "id": 1052,
      "row": 5,
      "col": 2,
      "icon": "icon_1052",
      "ranks": [10521,10522,10523],
      "requires": []
    },
    1061: {
      "id": 1061,
      "row": 6,
      "col": 1,
      "icon": "icon_1061",
      "ranks": [10611],
      "requires": []
    },
    1062: {
      "id": 1062,
      "row": 6,
      "col": 2,
      "icon": "icon_1062",
      "ranks": [10621],
      "requires": []
    }
  },
  11: {
    1100: {
      "id": 1100,
      "row": 0,
      "col": 0,
      "icon": "icon_1100",
      "ranks": [11001,11002,11003],
      "requires": []
    },
    1101: {
      "id": 1101,
      "row": 0,
      "col": 1,
      "icon": "icon_1101",
      "ranks": [11011,11012],
      "requires": []
    },
    1102: {
      "id": 1102,
      "row": 0,
      "col": 2,
      "icon": "icon_1102",
      "ranks": [11021,11022,11023],
      "requires": []
    },
    1103: {
      "id": 1103,
      "row": 0,
      "col": 3,
      "icon": "icon_1103",
      "ranks": [11031,11032],
      "requires": []
    },
    1110: {
      "id": 1110,
      "row": 1,
      "col": 0,
      "icon": "icon_1110",
      "ranks": [11101,11102,11103],
      "requires": []
    },
    1111: {
      "id": 1111,
      "row": 1,
      "col": 1,
      "icon": "icon_1111",
      "ranks": [11111,11112],
      "requires": []
    },
    1112: {
      "id": 1112,
      "row": 1,
      "col": 2,
      "icon": "icon_1112",
      "ranks": [11121,11122,11123],
      "requires": []
    },
    1113: {
      "id": 1113,
      "row": 1,
      "col": 3,
      "icon": "icon_1113",
      "ranks": [11131,11132],
      "requires": []
    },
    1120: {
      "id": 1120,
      "row": 2,
      "col": 0,
      "icon": "icon_1120",
      "ranks": [11201,11202,11203],
      "requires": []
    },
    1121: {
      "id": 1121,
      "row": 2,
      "col": 1,
      "icon": "icon_1121",
      "ranks": [11211],
      "requires": []
    },
    1122: {
      "id": 1122,
      "row": 2,
      "col": 2,
      "icon": "icon_1122",
      "ranks": [11221],
      "requires": []
    },
    1123: {
      "id": 1123,
      "row": 2,
      "col": 3,
      "icon": "icon_1123",
      "ranks": [11231,11232],
      "requires": []
    },
    1130: {
      "id": 1130,
      "row": 3,
      "col": 0,
      "icon": "icon_1130",
      "ranks": [11301,11302,11303],
      "requires": []
    },
    1131: {
      "id": 1131,
      "row": 3,
      "col": 1,
      "icon": "icon_1131",
      "ranks": [11311,11312],
      "requires": []
    },
    1132: {
      "id": 1132,
      "row": 3,
      "col": 2,
      "icon": "icon_1132",
      "ranks": [11321,11322,11323],
      "requires": []
    },
    1133: {
      "id": 1133,
      "row": 3,
      "col": 3,
      "icon": "icon_1133",
      "ranks": [11331,11332],
      "requires": []
    },
    1140: {
      "id": 1140,
      "row": 4,
      "col": 0,
      "icon": "icon_1140",
      "ranks": [11401,11402,11403],
      "requires": []
    },
    1141: {
      "id": 1141,
      "row": 4,
      "col": 1,
      "icon": "icon_1141",
      "ranks": [11411],
      "requires": []
    },
    1142: {
      "id": 1142,
      "row": 4,
      "col": 2,
      "icon": "icon_1142",
      "ranks": [11421],
      "requires": []
    },
    1143: {
      "id": 1143,
      "row": 4,
      "col": 3,
      "icon": "icon_1143",
      "ranks": [11431,11432],
      "requires": []
    },
    1151: {
      "id": 1151,
      "row": 5,
      "col": 1,
      "icon": "icon_1151",
      "ranks": [11511,11512],
      "requires": []
    },
    1152: {
      "id": 1152,
      "row": 5,
      "col": 2,
      "icon": "icon_1152",
      "ranks": [11521,11522,11523],
      "requires": []
    },
    1161: {
      "id": 1161,
      "row": 6,
      "col": 1,
      "icon": "icon_1161",
      "ranks": [11611],
      "requires": []
    },
    1162: {
      "id": 1162,
      "row": 6,
      "col": 2,
      "icon": "icon_1162",
      "ranks": [11621],
      "requires": []
    }
  },
  12: {
    1200: {
      "id": 1200,
      "row": 0,
      "col": 0,
      "icon": "icon_1200",
      "ranks": [12001,12002,12003],
      "requires": []
    },
    1201: {
      "id": 1201,
      "row": 0,
      "col": 1,
      "icon": "icon_1201",
      "ranks": [12011,12012],
      "requires": []
    },
    1202: {
      "id": 1202,
      "row": 0,
      "col": 2,
      "icon": "icon_1202",
      "ranks": [12021,12022,12023],
      "requires": []
    },
    1203: {
      "id": 1203,
      "row": 0,
      "col": 3,
      "icon": "icon_1203",
      "ranks": [12031,12032],
      "requires": []
    },
    1210: {
      "id": 1210,
      "row": 1,
      "col": 0,
      "icon": "icon_1210",
      "ranks": [12101,12102,12103],
      "requires": []
    },
    1211: {
      "id": 1211,
      "row": 1,
      "col": 1,
      "icon": "icon_1211",
      "ranks": [12111,12112],
      "requires": []
    },
    1212: {
      "id": 1212,
      "row": 1,
      "col": 2,
      "icon": "icon_1212",
      "ranks": [12121,12122,12123],
      "requires": []
    },
    1213: {
      "id": 1213,
      "row": 1,
      "col": 3,
      "icon": "icon_1213",
      "ranks": [12131,12132],
      "requires": []
    },
    1220: {
      "id": 1220,
      "row": 2,
      "col": 0,
      "icon": "icon_1220",
      "ranks": [12201,12202,12203],
      "requires": []
    },
    1221: {
      "id": 1221,
      "row": 2,
      "col": 1,
      "icon": "icon_1221",
      "ranks": [12211],
      "requires": []
    },
    1222: {
      "id": 1222,
      "row": 2,
      "col": 2,
      "icon": "icon_1222",
      "ranks": [12221],
      "requires": []
    },
    1223: {
      "id": 1223,
      "row": 2,
      "col": 3,
      "icon": "icon_1223",
      "ranks": [12231,12232],
      "requires": []
    },
    1230: {
      "id": 1230,
      "row": 3,
      "col": 0,
      "icon": "icon_1230",
      "ranks": [12301,12302,12303],
      "requires": []
    },
    1231: {
      "id": 1231,
      "row": 3,
      "col": 1,
      "icon": "icon_1231",
      "ranks": [12311,12312],
      "requires": []
    },
    1232: {
      "id": 1232,
      "row": 3,
      "col": 2,
      "icon": "icon_1232",
      "ranks": [12321,12322,12323],
      "requires": []
    },
    1233: {
      "id": 1233,
      "row": 3,
      "col": 3,
      "icon": "icon_1233",
      "ranks": [12331,12332],
      "requires": []
    },
    1240: {
      "id": 1240,
      "row": 4,
      "col": 0,
      "icon": "icon_1240",
      "ranks": [12401,12402,12403],
      "requires": []
    },
    1241: {
      "id": 1241,
      "row": 4,
      "col": 1,
      "icon": "icon_1241",
      "ranks": [12411],
      "requires": []
    },
    1242: {
      "id": 1242,
      "row": 4,
      "col": 2,
      "icon": "icon_1242",
      "ranks": [12421],
      "requires": []
    },
    1243: {
      "id": 1243,
      "row": 4,
      "col": 3,
      "icon": "icon_1243",
      "ranks": [12431,12432],
      "requires": []
    },
    1251: {
      "id": 1251,
      "row": 5,
      "col": 1,
      "icon": "icon_1251",
      "ranks": [12511,12512],
      "requires": []
    },
    1252: {
      "id": 1252,
      "row": 5,
      "col": 2,
      "icon": "icon_1252",
      "ranks": [12521,12522,12523],
      "requires": []
    },
    1261: {
      "id": 1261,
      "row": 6,
      "col": 1,
      "icon": "icon_1261",
      "ranks": [12611],
      "requires": []
    },
    1262: {
      "id": 1262,
      "row": 6,
      "col": 2,
      "icon": "icon_1262",
      "ranks": [12621],
      "requires": []
    }
  },
  20: {
    2000: {
      "id": 2000,
      "row": 0,
      "col": 0,
      "icon": "icon_2000",
      "ranks": [20001,20002,20003],
      "requires": []
    },
    2001: {
      "id": 2001,
      "row": 0,
      "col": 1,
      "icon": "icon_2001",
      "ranks": [20011,20012],
      "requires": []
    },
    2002: {
      "id": 2002,
      "row": 0,
      "col": 2,
      "icon": "icon_2002",
      "ranks": [20021,20022,20023],
      "requires": []
    },
    2003: {
      "id": 2003,
      "row": 0,
      "col": 3,
      "icon": "icon_2003",
      "ranks": [20031,20032],
      "requires": []
    },
    2010: {
      "id": 2010,
      "row": 1,
      "col": 0,
      "icon": "icon_2010",
      "ranks": [20101,20102,20103],
      "requires": []
    },
    2011: {
      "id": 2011,
      "row": 1,
      "col": 1,
      "icon": "icon_2011",
      "ranks": [20111,20112],
      "requires": []
    },
    2012: {
      "id": 2012,
      "row": 1,
      "col": 2,
      "icon": "icon_2012",
      "ranks": [20121,20122,20123],
      "requires": []
    },
    2013: {
      "id": 2013,
      "row": 1,
      "col": 3,
      "icon": "icon_2013",
      "ranks": [20131,20132],
      "requires": []
    },
    2020: {
      "id": 2020,
      "row": 2,
      "col": 0,
      "icon": "icon_2020",
      "ranks": [20201,20202,20203],
      "requires": []
    },
    2021: {
      "id": 2021,
      "row": 2,
      "col": 1,
      "icon": "icon_2021",
      "ranks": [20211],
      "requires": []
    },
    2022: {
      "id": 2022,
      "row": 2,
      "col": 2,
      "icon": "icon_2022",
      "ranks": [20221],
      "requires": []
    },
    2023: {
      "id": 2023,
      "row": 2,
      "col": 3,
      "icon": "icon_2023",
      "ranks": [20231,20232],
      "requires": []
    },
    2030: {
      "id": 2030,
      "row": 3,
      "col": 0,
      "icon": "icon_2030",
      "ranks": [20301,20302,20303],
      "requires": []
    },
    2031: {
      "id": 2031,
      "row": 3,
      "col": 1,
      "icon": "icon_2031",
      "ranks": [20311,20312],
      "requires": []
    },
    2032: {
      "id": 2032,
      "row": 3,
      "col": 2,
      "icon": "icon_2032",
      "ranks": [20321,20322,20323],
      "requires": []
    },
    2033: {
      "id": 2033,
      "row": 3,
      "col": 3,
      "icon": "icon_2033",
      "ranks": [20331,20332],
      "requires": []
    },
    2040: {
      "id": 2040,
      "row": 4,
      "col": 0,
      "icon": "icon_2040",
      "ranks": [20401,20402,20403],
      "requires": []
    },
    2041: {
      "id": 2041,
      "row": 4,
      "col": 1,
      "icon": "icon_2041",
      "ranks": [20411],
      "requires": []
    },
    2042: {
      "id": 2042,
      "row": 4,
      "col": 2,
      "icon": "icon_2042",
      "ranks": [20421],
      "requires": []
    },
    2043: {
      "id": 2043,
      "row": 4,
      "col": 3,
      "icon": "icon_2043",
      "ranks": [20431,20432],
      "requires": []
    },
    2051: {
      "id": 2051,
      "row": 5,
      "col": 1,
      "icon": "icon_2051",
      "ranks": [20511,20512],
      "requires": []
    },
    2052: {
      "id": 2052,
      "row": 5,
      "col": 2,
      "icon": "icon_2052",
      "ranks": [20521,20522,20523],
      "requires": []
    },
    2061: {
      "id": 2061,
      "row": 6,
      "col": 1,
      "icon": "icon_2061",
      "ranks": [20611],
      "requires": []
    },
    2062: {
      "id": 2062,
      "row": 6,
      "col": 2,
      "icon": "icon_2062",
      "ranks": [20621],
      "requires": []
    }
  },
  21: {
    2100: {
      "id": 2100,
      "row": 0,
      "col": 0,
      "icon": "icon_2100",
      "ranks": [21001,21002,21003],
      "requires": []
    },
    2101: {
      "id": 2101,
      "row": 0,
      "col": 1,
      "icon": "icon_2101",
      "ranks": [21011,21012],
      "requires": []
    },
    2102: {
      "id": 2102,
      "row": 0,
      "col": 2,
      "icon": "icon_2102",
      "ranks": [21021,21022,21023],
      "requires": []
    },
    2103: {
      "id": 2103,
      "row": 0,
      "col": 3,
      "icon": "icon_2103",
      "ranks": [21031,21032],
      "requires": []
    },
    2110: {
      "id": 2110,
      "row": 1,
      "col": 0,
      "icon": "icon_2110",
      "ranks": [21101,21102,21103],
      "requires": []
    },
    2111: {
      "id": 2111,
      "row": 1,
      "col": 1,
      "icon": "icon_2111",
      "ranks": [21111,21112],
      "requires": []
    },
    2112: {
      "id": 2112,
      "row": 1,
      "col": 2,
      "icon": "icon_2112",
      "ranks": [21121,21122,21123],
      "requires": []
    },
    2113: {
      "id": 2113,
      "row": 1,
      "col": 3,
      "icon": "icon_2113",
      "ranks": [21131,21132],
      "requires": []
    },
    2120: {
      "id": 2120,
      "row": 2,
      "col": 0,
      "icon": "icon_2120",
      "ranks": [21201,21202,21203],
      "requires": []
    },
    2121: {
      "id": 2121,
      "row": 2,
      "col": 1,
      "icon": "icon_2121",
      "ranks": [21211],
      "requires": []
    },
    2122: {
      "id": 2122,
      "row": 2,
      "col": 2,
      "icon": "icon_2122",
      "ranks": [21221],
      "requires": []
    },
    2123: {
      "id": 2123,
      "row": 2,
      "col": 3,
      "icon": "icon_2123",
      "ranks": [21231,21232],
      "requires": []
    },
    2130: {
      "id": 2130,
      "row": 3,
      "col": 0,
      "icon": "icon_2130",
      "ranks": [21301,21302,21303],
      "requires": []
    },
    2131: {
      "id": 2131,
      "row": 3,
      "col": 1,
      "icon": "icon_2131",
      "ranks": [21311,21312],
      "requires": []
    },
    2132: {
      "id": 2132,
      "row": 3,
      "col": 2,
      "icon": "icon_2132",
      "ranks": [21321,21322,21323],
      "requires": []
    },
    2133: {
      "id": 2133,
      "row": 3,
      "col": 3,
      "icon": "icon_2133",
      "ranks": [21331,21332],
      "requires": []
    },
    2140: {
      "id": 2140,
      "row": 4,
      "col": 0,
      "icon": "icon_2140",
      "ranks": [21401,21402,21403],
      "requires": []
    },
    2141: {
      "id": 2141,
      "row": 4,
      "col": 1,
      "icon": "icon_2141",
      "ranks": [21411],
      "requires": []
    },
    2142: {
      "id": 2142,
      "row": 4,
      "col": 2,
      "icon": "icon_2142",
      "ranks": [21421],
      "requires": []
    },
    2143: {
      "id": 2143,
      "row": 4,
      "col": 3,
      "icon": "icon_2143",
      "ranks": [21431,21432],
      "requires": []
    },
    2151: {
      "id": 2151,
      "row": 5,
      "col": 1,
      "icon": "icon_2151",
      "ranks": [21511,21512],
      "requires": []
    },
    2152: {
      "id": 2152,
      "row": 5,
      "col": 2,
      "icon": "icon_2152",
      "ranks": [21521,21522,21523],
      "requires": []
    },
    2161: {
      "id": 2161,
      "row": 6,
      "col": 1,
      "icon": "icon_2161",
      "ranks": [21611],
      "requires": []
    },
    2162: {
      "id": 2162,
      "row": 6,
      "col": 2,
      "icon": "icon_2162",
      "ranks": [21621],
      "requires": []
    }
  },
  22: {
    2200: {
      "id": 2200,
      "row": 0,
      "col": 0,
      "icon": "icon_2200",
      "ranks": [22001,22002,22003],
      "requires": []
    },
    2201: {
      "id": 2201,
      "row": 0,
      "col": 1,
      "icon": "icon_2201",
      "ranks": [22011,22012],
      "requires": []
    },
    2202: {
      "id": 2202,
      "row": 0,
      "col": 2,
      "icon": "icon_2202",
      "ranks": [22021,22022,22023],
      "requires": []
    },
    2203: {
      "id": 2203,
      "row": 0,
      "col": 3,
      "icon": "icon_2203",
      "ranks": [22031,22032],
      "requires": []
    },
    2210: {
      "id": 2210,
      "row": 1,
      "col": 0,
      "icon": "icon_2210",
      "ranks": [22101,22102,22103],
      "requires": []
    },
    2211: {
      "id": 2211,
      "row": 1,
      "col": 1,
      "icon": "icon_2211",
      "ranks": [22111,22112],
      "requires": []
    },
    2212: {
      "id": 2212,
      "row": 1,
      "col": 2,
      "icon": "icon_2212",
      "ranks": [22121,22122,22123],
      "requires": []
    },
    2213: {
      "id": 2213,
      "row": 1,
      "col": 3,
      "icon": "icon_2213",
      "ranks": [22131,22132],
      "requires": []
    },
    2220: {
      "id": 2220,
      "row": 2,
      "col": 0,
      "icon": "icon_2220",
      "ranks": [22201,22202,22203],
      "requires": []
    },
    2221: {
      "id": 2221,
      "row": 2,
      "col": 1,
      "icon": "icon_2221",
      "ranks": [22211],
      "requires": []
    },
    2222: {
      "id": 2222,
      "row": 2,
      "col": 2,
      "icon": "icon_2222",
      "ranks": [22221],
      "requires": []
    },
    2223: {
      "id": 2223,
      "row": 2,
      "col": 3,
      "icon": "icon_2223",
      "ranks": [22231,22232],
      "requires": []
    },
    2230: {
      "id": 2230,
      "row": 3,
      "col": 0,
      "icon": "icon_2230",
      "ranks": [22301,22302,22303],
      "requires": []
    },
    2231: {
      "id": 2231,
      "row": 3,
      "col": 1,
      "icon": "icon_2231",
      "ranks": [22311,22312],
      "requires": []
    },
    2232: {
      "id": 2232,
      "row": 3,
      "col": 2,
      "icon": "icon_2232",
      "ranks": [22321,22322,22323],
      "requires": []
    },
    2233: {
      "id": 2233,
      "row": 3,
      "col": 3,
      "icon": "icon_2233",
      "ranks": [22331,22332],
      "requires": []
    },
    2240: {
      "id": 2240,
      "row": 4,
      "col": 0,
      "icon": "icon_2240",
      "ranks": [22401,22402,22403],
      "requires": []
    },
    2241: {
      "id": 2241,
      "row": 4,
      "col": 1,
      "icon": "icon_2241",
      "ranks": [22411],
      "requires": []
    },
    2242: {
      "id": 2242,
      "row": 4,
      "col": 2,
      "icon": "icon_2242",
      "ranks": [22421],
      "requires": []
    },
    2243: {
      "id": 2243,
      "row": 4,
      "col": 3,
      "icon": "icon_2243",
      "ranks": [22431,22432],
      "requires": []
    },
    2251: {
      "id": 2251,
      "row": 5,
      "col": 1,
      "icon": "icon_2251",
      "ranks": [22511,22512],
      "requires": []
    },
    2252: {
      "id": 2252,
      "row": 5,
      "col": 2,
      "icon": "icon_2252",
      "ranks": [22521,22522,22523],
      "requires": []
    },
    2261: {
      "id": 2261,
      "row": 6,
      "col": 1,
      "icon": "icon_2261",
      "ranks": [22611],
      "requires": []
    },
    2262: {
      "id": 2262,
      "row": 6,
      "col": 2,
      "icon": "icon_2262",
      "ranks": [22621],
      "requires": []
    }
  },
  30: {
    3000: {
      "id": 3000,
      "row": 0,
      "col": 0,
      "icon": "icon_3000",
      "ranks": [30001,30002,30003],
      "requires": []
    },
    3001: {
      "id": 3001,
      "row": 0,
      "col": 1,
      "icon": "icon_3001",
      "ranks": [30011,30012],
      "requires": []
    },
    3002: {
      "id": 3002,
      "row": 0,
      "col": 2,
      "icon": "icon_3002",
      "ranks": [30021,30022,30023],
      "requires": []
    },
    3003: {
      "id": 3003,
      "row": 0,
      "col": 3,
      "icon": "icon_3003",
      "ranks": [30031,30032],
      "requires": []
    },
    3010: {
      "id": 3010,
      "row": 1,
      "col": 0,
      "icon": "icon_3010",
      "ranks": [30101,30102,30103],
      "requires": []
    },
    3011: {
      "id": 3011,
      "row": 1,
      "col": 1,
      "icon": "icon_3011",
      "ranks": [30111,30112],
      "requires": []
    },
    3012: {
      "id": 3012,
      "row": 1,
      "col": 2,
      "icon": "icon_3012",
      "ranks": [30121,30122,30123],
      "requires": []
    },
    3013: {
      "id": 3013,
      "row": 1,
      "col": 3,
      "icon": "icon_3013",
      "ranks": [30131,30132],
      "requires": []
    },
    3020: {
      "id": 3020,
      "row": 2,
      "col": 0,
      "icon": "icon_3020",
      "ranks": [30201,30202,30203],
      "requires": []
    },
    3021: {
      "id": 3021,
      "row": 2,
      "col": 1,
      "icon": "icon_3021",
      "ranks": [30211],
      "requires": []
    },
    3022: {
      "id": 3022,
      "row": 2,
      "col": 2,
      "icon": "icon_3022",
      "ranks": [30221],
      "requires": []
    },
    3023: {
      "id": 3023,
      "row": 2,
      "col": 3,
      "icon": "icon_3023",
      "ranks": [30231,30232],
      "requires": []
    },
    3030: {
      "id": 3030,
      "row": 3,
      "col": 0,
      "icon": "icon_3030",
      "ranks": [30301,30302,30303],
      "requires": []
    },
    3031: {
      "id": 3031,
      "row": 3,
      "col": 1,
      "icon": "icon_3031",
      "ranks": [30311,30312],
      "requires": []
    },
    3032: {
      "id": 3032,
      "row": 3,
      "col": 2,
      "icon": "icon_3032",
      "ranks": [30321,30322,30323],
      "requires": []
    },
    3033: {
      "id": 3033,
      "row": 3,
      "col": 3,
      "icon": "icon_3033",
      "ranks": [30331,30332],
      "requires": []
    },
    3040: {
      "id": 3040,
      "row": 4,
      "col": 0,
      "icon": "icon_3040",
      "ranks": [30401,30402,30403],
      "requires": []
    },
    3041: {
      "id": 3041,
      "row": 4,
      "col": 1,
      "icon": "icon_3041",
      "ranks": [30411],
      "requires": []
    },
    3042: {
      "id": 3042,
      "row": 4,
      "col": 2,
      "icon": "icon_3042",
      "ranks": [30421],
      "requires": []
    },
    3043: {
      "id": 3043,
      "row": 4,
      "col": 3,
      "icon": "icon_3043",
      "ranks": [30431,30432],
      "requires": []
    },
    3051: {
      "id": 3051,
      "row": 5,
      "col": 1,
      "icon": "icon_3051",
      "ranks": [30511,30512],
      "requires": []
    },
    3052: {
      "id": 3052,
      "row": 5,
      "col": 2,
      "icon": "icon_3052",
      "ranks": [30521,30522,30523],
      "requires": []
    },
    3061: {
      "id": 3061,
      "row": 6,
      "col": 1,
      "icon": "icon_3061",
      "ranks": [30611],
      "requires": []
    },
    3062: {
      "id": 3062,
      "row": 6,
      "col": 2,
      "icon": "icon_3062",
      "ranks": [30621],
      "requires": []
    }
  },
  31: {
    3100: {
      "id": 3100,
      "row": 0,
      "col": 0,
      "icon": "icon_3100",
      "ranks": [31001,31002,31003],
      "requires": []
    },
    3101: {
      "id": 3101,
      "row": 0,
      "col": 1,
      "icon": "icon_3101",
      "ranks": [31011,31012],
      "requires": []
    },
    3102: {
      "id": 3102,
      "row": 0,
      "col": 2,
      "icon": "icon_3102",
      "ranks": [31021,31022,31023],
      "requires": []
    },
    3103: {
      "id": 3103,
      "row": 0,
      "col": 3,
      "icon": "icon_3103",
      "ranks": [31031,31032],
      "requires": []
    },
    3110: {
      "id": 3110,
      "row": 1,
      "col": 0,
      "icon": "icon_3110",
      "ranks": [31101,31102,31103],
      "requires": []
    },
    3111: {
      "id": 3111,
      "row": 1,
      "col": 1,
      "icon": "icon_3111",
      "ranks": [31111,31112],
      "requires": []
    },
    3112: {
      "id": 3112,
      "row": 1,
      "col": 2,
      "icon": "icon_3112",
      "ranks": [31121,31122,31123],
      "requires": []
    },
    3113: {
      "id": 3113,
      "row": 1,
      "col": 3,
      "icon": "icon_3113",
      "ranks": [31131,31132],
      "requires": []
    },
    3120: {
      "id": 3120,
      "row": 2,
      "col": 0,
      "icon": "icon_3120",
      "ranks": [31201,31202,31203],
      "requires": []
    },
    3121: {
      "id": 3121,
      "row": 2,
      "col": 1,
      "icon": "icon_3121",
      "ranks": [31211],
      "requires": []
    },
    3122: {
      "id": 3122,
      "row": 2,
      "col": 2,
      "icon": "icon_3122",
      "ranks": [31221],
      "requires": []
    },
    3123: {
      "id": 3123,
      "row": 2,
      "col": 3,
      "icon": "icon_3123",
      "ranks": [31231,31232],
      "requires": []
    },
    3130: {
      "id": 3130,
      "row": 3,
      "col": 0,
      "icon": "icon_3130",
      "ranks": [31301,31302,31303],
      "requires": []
    },
    3131: {
      "id": 3131,
      "row": 3,
      "col": 1,
      "icon": "icon_3131",
      "ranks": [31311,31312],
      "requires": []
    },
    3132: {
      "id": 3132,
      "row": 3,
      "col": 2,
      "icon": "icon_3132",
      "ranks": [31321,31322,31323],
      "requires": []
    },
    3133: {
      "id": 3133,
      "row": 3,
      "col": 3,
      "icon": "icon_3133",
      "ranks": [31331,31332],
      "requires": []
    },
    3140: {
      "id": 3140,
      "row": 4,
      "col": 0,
      "icon": "icon_3140",
      "ranks": [31401,31402,31403],
      "requires": []
    },
    3141: {
      "id": 3141,
      "row": 4,
      "col": 1,
      "icon": "icon_3141",
      "ranks": [31411],
      "requires": []
    },
    3142: {
      "id": 3142,
      "row": 4,
      "col": 2,
      "icon": "icon_3142",
      "ranks": [31421],
      "requires": []
    },
    3143: {
      "id": 3143,
      "row": 4,
      "col": 3,
      "icon": "icon_3143",
      "ranks": [31431,31432],
      "requires": []
    },
    3151: {
      "id": 3151,
      "row": 5,
      "col": 1,
      "icon": "icon_3151",
      "ranks": [31511,31512],
      "requires": []
    },
    3152: {
      "id": 3152,
      "row": 5,
      "col": 2,
      "icon": "icon_3152",
      "ranks": [31521,31522,31523],
      "requires": []
    },
    3161: {
      "id": 3161,
      "row": 6,
      "col": 1,
      "icon": "icon_3161",
      "ranks": [31611],
      "requires": []
    },
    3162: {
      "id": 3162,
      "row": 6,
      "col": 2,
      "icon": "icon_3162",
      "ranks": [31621],
      "requires": []
    }
  },
  32: {
    3200: {
      "id": 3200,
      "row": 0,
      "col": 0,
      "icon": "icon_3200",
      "ranks": [32001,32002,32003],
      "requires": []
    },
    3201: {
      "id": 3201,
      "row": 0,
      "col": 1,
      "icon": "icon_3201",
      "ranks": [32011,32012],
      "requires": []
    },
    3202: {
      "id": 3202,
      "row": 0,
      "col": 2,
      "icon": "icon_3202",
      "ranks": [32021,32022,32023],
      "requires": []
    },
    3203: {
      "id": 3203,
      "row": 0,
      "col": 3,
      "icon": "icon_3203",
      "ranks": [32031,32032],
      "requires": []
    },
    3210: {
      "id": 3210,
      "row": 1,
      "col": 0,
      "icon": "icon_3210",
      "ranks": [32101,32102,32103],
      "requires": []
    },
    3211: {
      "id": 3211,
      "row": 1,
      "col": 1,
      "icon": "icon_3211",
      "ranks": [32111,32112],
      "requires": []
    },
    3212: {
      "id": 3212,
      "row": 1,
      "col": 2,
      "icon": "icon_3212",
      "ranks": [32121,32122,32123],
      "requires": []
    },
    3213: {
      "id": 3213,
      "row": 1,
      "col": 3,
      "icon": "icon_3213",
      "ranks": [32131,32132],
      "requires": []
    },
    3220: {
      "id": 3220,
      "row": 2,
      "col": 0,
      "icon": "icon_3220",
      "ranks": [32201,32202,32203],
      "requires": []
    },
    3221: {
      "id": 3221,
      "row": 2,
      "col": 1,
      "icon": "icon_3221",
      "ranks": [32211],
      "requires": []
    },
    3222: {
      "id": 3222,
      "row": 2,
      "col": 2,
      "icon": "icon_3222",
      "ranks": [32221],
      "requires": []
    },
    3223: {
      "id": 3223,
      "row": 2,
      "col": 3,
      "icon": "icon_3223",
      "ranks": [32231,32232],
      "requires": []
    },
    3230: {
      "id": 3230,
      "row": 3,
      "col": 0,
      "icon": "icon_3230",
      "ranks": [32301,32302,32303],
      "requires": []
    },
    3231: {
      "id": 3231,
      "row": 3,
      "col": 1,
      "icon": "icon_3231",
      "ranks": [32311,32312],
      "requires": []
    },
    3232: {
      "id": 3232,
      "row": 3,
      "col": 2,
      "icon": "icon_3232",
      "ranks": [32321,32322,32323],
      "requires": []
    },
    3233: {
      "id": 3233,
      "row": 3,
      "col": 3,
      "icon": "icon_3233",
      "ranks": [32331,32332],
      "requires": []
    },
    3240: {
      "id": 3240,
      "row": 4,
      "col": 0,
      "icon": "icon_3240",
      "ranks": [32401,32402,32403],
      "requires": []
    },
    3241: {
      "id": 3241,
      "row": 4,
      "col": 1,
      "icon": "icon_3241",
      "ranks": [32411],
      "requires": []
    },
    3242: {
      "id": 3242,
      "row": 4,
      "col": 2,
      "icon": "icon_3242",
      "ranks": [32421],
      "requires": []
    },
    3243: {
      "id": 3243,
      "row": 4,
      "col": 3,
      "icon": "icon_3243",
      "ranks": [32431,32432],
      "requires": []
    },
    3251: {
      "id": 3251,
      "row": 5,
      "col": 1,
      "icon": "icon_3251",
      "ranks": [32511,32512],
      "requires": []
    },
    3252: {
      "id": 3252,
      "row": 5,
      "col": 2,
      "icon": "icon_3252",
      "ranks": [32521,32522,32523],
      "requires": []
    },
    3261: {
      "id": 3261,
      "row": 6,
      "col": 1,
      "icon": "icon_3261",
      "ranks": [32611],
      "requires": []
    },
    3262: {
      "id": 3262,
      "row": 6,
      "col": 2,
      "icon": "icon_3262",
      "ranks": [32621],
      "requires": []
    }
  },
  40: {
    4000: {
      "id": 4000,
      "row": 0,
      "col": 0,
      "icon": "icon_4000",
      "ranks": [40001,40002,40003],
      "requires": []
    },
    4001: {
      "id": 4001,
      "row": 0,
      "col": 1,
      "icon": "icon_4001",
      "ranks": [40011,40012],
      "requires": []
    },
    4002: {
      "id": 4002,
      "row": 0,
      "col": 2,
      "icon": "icon_4002",
      "ranks": [40021,40022,40023],
      "requires": []
    },
    4003: {
      "id": 4003,
      "row": 0,
      "col": 3,
      "icon": "icon_4003",
      "ranks": [40031,40032],
      "requires": []
    },
    4010: {
      "id": 4010,
      "row": 1,
      "col": 0,
      "icon": "icon_4010",
      "ranks": [40101,40102,40103],
      "requires": []
    },
    4011: {
      "id": 4011,
      "row": 1,
      "col": 1,
      "icon": "icon_4011",
      "ranks": [40111,40112],
      "requires": []
    },
    4012: {
      "id": 4012,
      "row": 1,
      "col": 2,
      "icon": "icon_4012",
      "ranks": [40121,40122,40123],
      "requires": []
    },
    4013: {
      "id": 4013,
      "row": 1,
      "col": 3,
      "icon": "icon_4013",
      "ranks": [40131,40132],
      "requires": []
    },
    4020: {
      "id": 4020,
      "row": 2,
      "col": 0,
      "icon": "icon_4020",
      "ranks": [40201,40202,40203],
      "requires": []
    },
    4021: {
      "id": 4021,
      "row": 2,
      "col": 1,
      "icon": "icon_4021",
      "ranks": [40211],
      "requires": []
    },
    4022: {
      "id": 4022,
      "row": 2,
      "col": 2,
      "icon": "icon_4022",
      "ranks": [40221],
      "requires": []
    },
    4023: {
      "id": 4023,
      "row": 2,
      "col": 3,
      "icon": "icon_4023",
      "ranks": [40231,40232],
      "requires": []
    },
    4030: {
      "id": 4030,
      "row": 3,
      "col": 0,
      "icon": "icon_4030",
      "ranks": [40301,40302,40303],
      "requires": []
    },
    4031: {
      "id": 4031,
      "row": 3,
      "col": 1,
      "icon": "icon_4031",
      "ranks": [40311,40312],
      "requires": []
    },
    4032: {
      "id": 4032,
      "row": 3,
      "col": 2,
      "icon": "icon_4032",
      "ranks": [40321,40322,40323],
      "requires": []
    },
    4033: {
      "id": 4033,
      "row": 3,
      "col": 3,
      "icon": "icon_4033",
      "ranks": [40331,40332],
      "requires": []
    },
    4040: {
      "id": 4040,
      "row": 4,
      "col": 0,
      "icon": "icon_4040",
      "ranks": [40401,40402,40403],
      "requires": []
    },
    4041: {
      "id": 4041,
      "row": 4,
      "col": 1,
      "icon": "icon_4041",
      "ranks": [40411],
      "requires": []
    },
    4042: {
      "id": 4042,
      "row": 4,
      "col": 2,
      "icon": "icon_4042",
      "ranks": [40421],
      "requires": []
    },
    4043: {
      "id": 4043,
      "row": 4,
      "col": 3,
      "icon": "icon_4043",
      "ranks": [40431,40432],
      "requires": []
    },
    4051: {
      "id": 4051,
      "row": 5,
      "col": 1,
      "icon": "icon_4051",
      "ranks": [40511,40512],
      "requires": []
    },
    4052: {
      "id": 4052,
      "row": 5,
      "col": 2,
      "icon": "icon_4052",
      "ranks": [40521,40522,40523],
      "requires": []
    },
    4061: {
      "id": 4061,
      "row": 6,
      "col": 1,
      "icon": "icon_4061",
      "ranks": [40611],
      "requires": []
    },
    4062: {
      "id": 4062,
      "row": 6,
      "col": 2,
      "icon": "icon_4062",
      "ranks": [40621],
      "requires": []
    }
  },
  41: {
    4100: {
      "id": 4100,
      "row": 0,
      "col": 0,
      "icon": "icon_4100",
      "ranks": [41001,41002,41003],
      "requires": []
    },
    4101: {
      "id": 4101,
      "row": 0,
      "col": 1,
      "icon": "icon_4101",
      "ranks": [41011,41012],
      "requires": []
    },
    4102: {
      "id": 4102,
      "row": 0,
      "col": 2,
      "icon": "icon_4102",
      "ranks": [41021,41022,41023],
      "requires": []
    },
    4103: {
      "id": 4103,
      "row": 0,
      "col": 3,
      "icon": "icon_4103",
      "ranks": [41031,41032],
      "requires": []
    },
    4110: {
      "id": 4110,
      "row": 1,
      "col": 0,
      "icon": "icon_4110",
      "ranks": [41101,41102,41103],
      "requires": []
    },
    4111: {
      "id": 4111,
      "row": 1,
      "col": 1,
      "icon": "icon_4111",
      "ranks": [41111,41112],
      "requires": []
    },
    4112: {
      "id": 4112,
      "row": 1,
      "col": 2,
      "icon": "icon_4112",
      "ranks": [41121,41122,41123],
      "requires": []
    },
    4113: {
      "id": 4113,
      "row": 1,
      "col": 3,
      "icon": "icon_4113",
      "ranks": [41131,41132],
      "requires": []
    },
    4120: {
      "id": 4120,
      "row": 2,
      "col": 0,
      "icon": "icon_4120",
      "ranks": [41201,41202,41203],
      "requires": []
    },
    4121: {
      "id": 4121,
      "row": 2,
      "col": 1,
      "icon": "icon_4121",
      "ranks": [41211],
      "requires": []
    },
    4122: {
      "id": 4122,
      "row": 2,
      "col": 2,
      "icon": "icon_4122",
      "ranks": [41221],
      "requires": []
    },
    4123: {
      "id": 4123,
      "row": 2,
      "col": 3,
      "icon": "icon_4123",
      "ranks": [41231,41232],
      "requires": []
    },
    4130: {
      "id": 4130,
      "row": 3,
      "col": 0,
      "icon": "icon_4130",
      "ranks": [41301,41302,41303],
      "requires": []
    },
    4131: {
      "id": 4131,
      "row": 3,
      "col": 1,
      "icon": "icon_4131",
      "ranks": [41311,41312],
      "requires": []
    },
    4132: {
      "id": 4132,
      "row": 3,
      "col": 2,
      "icon": "icon_4132",
      "ranks": [41321,41322,41323],
      "requires": []
    },
    4133: {
      "id": 4133,
      "row": 3,
      "col": 3,
      "icon": "icon_4133",
      "ranks": [41331,41332],
      "requires": []
    },
    4140: {
      "id": 4140,
      "row": 4,
      "col": 0,
      "icon": "icon_4140",
      "ranks": [41401,41402,41403],
      "requires": []
    },
    4141: {
      "id": 4141,
      "row": 4,
      "col": 1,
      "icon": "icon_4141",
      "ranks": [41411],
      "requires": []
    },
    4142: {
      "id": 4142,
      "row": 4,
      "col": 2,
      "icon": "icon_4142",
      "ranks": [41421],
      "requires": []
    },
    4143: {
      "id": 4143,
      "row": 4,
      "col": 3,
      "icon": "icon_4143",
      "ranks": [41431,41432],
      "requires": []
    },
    4151: {
      "id": 4151,
      "row": 5,
      "col": 1,
      "icon": "icon_4151",
      "ranks": [41511,41512],
      "requires": []
    },
    4152: {
      "id": 4152,
      "row": 5,
      "col": 2,
      "icon": "icon_4152",
      "ranks": [41521,41522,41523],
      "requires": []
    },
    4161: {
      "id": 4161,
      "row": 6,
      "col": 1,
      "icon": "icon_4161",
      "ranks": [41611],
      "requires": []
    },
    4162: {
      "id": 4162,
      "row": 6,
      "col": 2,
      "icon": "icon_4162",
      "ranks": [41621],
      "requires": []
    }
  },
  42: {
    4200: {
      "id": 4200,
      "row": 0,
      "col": 0,
      "icon": "icon_4200",
      "ranks": [42001,42002,42003],
      "requires": []
    },
    4201: {
      "id": 4201,
      "row": 0,
      "col": 1,
      "icon": "icon_4201",
      "ranks": [42011,42012],
      "requires": []
    },
    4202: {
      "id": 4202,
      "row": 0,
      "col": 2,
      "icon": "icon_4202",
      "ranks": [42021,42022,42023],
      "requires": []
    },
    4203: {
      "id": 4203,
      "row": 0,
      "col": 3,
      "icon": "icon_4203",
      "ranks": [42031,42032],
      "requires": []
    },
    4210: {
      "id": 4210,
      "row": 1,
      "col": 0,
      "icon": "icon_4210",
      "ranks": [42101,42102,42103],
      "requires": []
    },
    4211: {
      "id": 4211,
      "row": 1,
      "col": 1,
      "icon": "icon_4211",
      "ranks": [42111,42112],
      "requires": []
    },
    4212: {
      "id": 4212,
      "row": 1,
      "col": 2,
      "icon": "icon_4212",
      "ranks": [42121,42122,42123],
      "requires": []
    },
    4213: {
      "id": 4213,
      "row": 1,
      "col": 3,
      "icon": "icon_4213",
      "ranks": [42131,42132],
      "requires": []
    },
    4220: {
      "id": 4220,
      "row": 2,
      "col": 0,
      "icon": "icon_4220",
      "ranks": [42201,42202,42203],
      "requires": []
    },
    4221: {
      "id": 4221,
      "row": 2,
      "col": 1,
      "icon": "icon_4221",
      "ranks": [42211],
      "requires": []
    },
    4222: {
      "id": 4222,
      "row": 2,
      "col": 2,
      "icon": "icon_4222",
      "ranks": [42221],
      "requires": []
    },
    4223: {
      "id": 4223,
      "row": 2,
      "col": 3,
      "icon": "icon_4223",
      "ranks": [42231,42232],
      "requires": []
    },
    4230: {
      "id": 4230,
      "row": 3,
      "col": 0,
      "icon": "icon_4230",
      "ranks": [42301,42302,42303],
      "requires": []
    },
    4231: {
      "id": 4231,
      "row": 3,
      "col": 1,
      "icon": "icon_4231",
      "ranks": [42311,42312],
      "requires": []
    },
    4232: {
      "id": 4232,
      "row": 3,
      "col": 2,
      "icon": "icon_4232",
      "ranks": [42321,42322,42323],
      "requires": []
    },
    4233: {
      "id": 4233,
      "row": 3,
      "col": 3,
      "icon": "icon_4233",
      "ranks": [42331,42332],
      "requires": []
    },
    4240: {
      "id": 4240,
      "row": 4,
      "col": 0,
      "icon": "icon_4240",
      "ranks": [42401,42402,42403],
      "requires": []
    },
    4241: {
      "id": 4241,
      "row": 4,
      "col": 1,
      "icon": "icon_4241",
      "ranks": [42411],
      "requires": []
    },
    4242: {
      "id": 4242,
      "row": 4,
      "col": 2,
      "icon": "icon_4242",
      "ranks": [42421],
      "requires": []
    },
    4243: {
      "id": 4243,
      "row": 4,
      "col": 3,
      "icon": "icon_4243",
      "ranks": [42431,42432],
      "requires": []
    },
    4251: {
      "id": 4251,
      "row": 5,
      "col": 1,
      "icon": "icon_4251",
      "ranks": [42511,42512],
      "requires": []
    },
    4252: {
      "id": 4252,
      "row": 5,
      "col": 2,
      "icon": "icon_4252",
      "ranks": [42521,42522,42523],
      "requires": []
    },
    4261: {
      "id": 4261,
      "row": 6,
      "col": 1,
      "icon": "icon_4261",
      "ranks": [42611],
      "requires": []
    },
    4262: {
      "id": 4262,
      "row": 6,
      "col": 2,
      "icon": "icon_4262",
      "ranks": [42621],
      "requires": []
    }
  },
  50: {
    5000: {
      "id": 5000,
      "row": 0,
      "col": 0,
      "icon": "icon_5000",
      "ranks": [50001,50002,50003],
      "requires": []
    },
    5001: {
      "id": 5001,
      "row": 0,
      "col": 1,
      "icon": "icon_5001",
      "ranks": [50011,50012],
      "requires": []
    },
    5002: {
      "id": 5002,
      "row": 0,
      "col": 2,
      "icon": "icon_5002",
      "ranks": [50021,50022,50023],
      "requires": []
    },
    5003: {
      "id": 5003,
      "row": 0,
      "col": 3,
      "icon": "icon_5003",
      "ranks": [50031,50032],
      "requires": []
    },
    5010: {
      "id": 5010,
      "row": 1,
      "col": 0,
      "icon": "icon_5010",
      "ranks": [50101,50102,50103],
      "requires": []
    },
    5011: {
      "id": 5011,
      "row": 1,
      "col": 1,
      "icon": "icon_5011",
      "ranks": [50111,50112],
      "requires": []
    },
    5012: {
      "id": 5012,
      "row": 1,
      "col": 2,
      "icon": "icon_5012",
      "ranks": [50121,50122,50123],
      "requires": []
    },
    5013: {
      "id": 5013,
      "row": 1,
      "col": 3,
      "icon": "icon_5013",
      "ranks": [50131,50132],
      "requires": []
    },
    5020: {
      "id": 5020,
      "row": 2,
      "col": 0,
      "icon": "icon_5020",
      "ranks": [50201,50202,50203],
      "requires": []
    },
    5021: {
      "id": 5021,
      "row": 2,
      "col": 1,
      "icon": "icon_5021",
      "ranks": [50211],
      "requires": []
    },
    5022: {
      "id": 5022,
      "row": 2,
      "col": 2,
      "icon": "icon_5022",
      "ranks": [50221],
      "requires": []
    },
    5023: {
      "id": 5023,
      "row": 2,
      "col": 3,
      "icon": "icon_5023",
      "ranks": [50231,50232],
      "requires": []
    },
    5030: {
      "id": 5030,
      "row": 3,
      "col": 0,
      "icon": "icon_5030",
      "ranks": [50301,50302,50303],
      "requires": []
    },
    5031: {
      "id": 5031,
      "row": 3,
      "col": 1,
      "icon": "icon_5031",
      "ranks": [50311,50312],
      "requires": []
    },
    5032: {
      "id": 5032,
      "row": 3,
      "col": 2,
      "icon": "icon_5032",
      "ranks": [50321,50322,50323],
      "requires": []
    },
    5033: {
      "id": 5033,
      "row": 3,
      "col": 3,
      "icon": "icon_5033",
      "ranks": [50331,50332],
      "requires": []
    },
    5040: {
      "id": 5040,
      "row": 4,
      "col": 0,
      "icon": "icon_5040",
      "ranks": [50401,50402,50403],
      "requires": []
    },
    5041: {
      "id": 5041,
      "row": 4,
      "col": 1,
      "icon": "icon_5041",
      "ranks": [50411],
      "requires": []
    },
    5042: {
      "id": 5042,
      "row": 4,
      "col": 2,
      "icon": "icon_5042",
      "ranks": [50421],
      "requires": []
    },
    5043: {
      "id": 5043,
      "row": 4,
      "col": 3,
      "icon": "icon_5043",
      "ranks": [50431,50432],
      "requires": []
    },
    5051: {
      "id": 5051,
      "row": 5,
      "col": 1,
      "icon": "icon_5051",
      "ranks": [50511,50512],
      "requires": []
    },
    5052: {
      "id": 5052,
      "row": 5,
      "col": 2,
      "icon": "icon_5052",
      "ranks": [50521,50522,50523],
      "requires": []
    },
    5061: {
      "id": 5061,
      "row": 6,
      "col": 1,
      "icon": "icon_5061",
      "ranks": [50611],
      "requires": []
    },
    5062: {
      "id": 5062,
      "row": 6,
      "col": 2,
      "icon": "icon_5062",
      "ranks": [50621],
      "requires": []
    }
  },
  51: {
    5100: {
      "id": 5100,
      "row": 0,
      "col": 0,
      "icon": "icon_5100",
      "ranks": [51001,51002,51003],
      "requires": []
    },
    5101: {
      "id": 5101,
      "row": 0,
      "col": 1,
      "icon": "icon_5101",
      "ranks": [51011,51012],
      "requires": []
    },
    5102: {
      "id": 5102,
      "row": 0,
      "col": 2,
      "icon": "icon_5102",
      "ranks": [51021,51022,51023],
      "requires": []
    },
    5103: {
      "id": 5103,
      "row": 0,
      "col": 3,
      "icon": "icon_5103",
      "ranks": [51031,51032],
      "requires": []
    },
    5110: {
      "id": 5110,
      "row": 1,
      "col": 0,
      "icon": "icon_5110",
      "ranks": [51101,51102,51103],
      "requires": []
    },
    5111: {
      "id": 5111,
      "row": 1,
      "col": 1,
      "icon": "icon_5111",
      "ranks": [51111,51112],
      "requires": []
    },
    5112: {
      "id": 5112,
      "row": 1,
      "col": 2,
      "icon": "icon_5112",
      "ranks": [51121,51122,51123],
      "requires": []
    },
    5113: {
      "id": 5113,
      "row": 1,
      "col": 3,
      "icon": "icon_5113",
      "ranks": [51131,51132],
      "requires": []
    },
    5120: {
      "id": 5120,
      "row": 2,
      "col": 0,
      "icon": "icon_5120",
      "ranks": [51201,51202,51203,],
      "requires": []
    },
    5121: {
      "id": 5121,
      "row": 2,
      "col": 1,
      "icon": "icon_5121",
      "ranks": [51211],
      "requires": []
    },
    5122: {
      "id": 5122,
      "row": 2,
      "col": 2,
      "icon": "icon_5122",
      "ranks": [51221],
      "requires": []
    },
    5123: {
      "id": 5123,
      "row": 2,
      "col": 3,
      "icon": "icon_5123",
      "ranks": [51231,51232],
      "requires": []
    },
    5130: {
      "id": 5130,
      "row": 3,
      "col": 0,
      "icon": "icon_5130",
      "ranks": [51301,51302,51303],
      "requires": []
    },
    5131: {
      "id": 5131,
      "row": 3,
      "col": 1,
      "icon": "icon_5131",
      "ranks": [51311,51312],
      "requires": []
    },
    5132: {
      "id": 5132,
      "row": 3,
      "col": 2,
      "icon": "icon_5132",
      "ranks": [51321,51322,51323],
      "requires": []
    },
    5133: {
      "id": 5133,
      "row": 3,
      "col": 3,
      "icon": "icon_5133",
      "ranks": [51331,51332],
      "requires": []
    },
    5140: {
      "id": 5140,
      "row": 4,
      "col": 0,
      "icon": "icon_5140",
      "ranks": [51401,51402,51403],
      "requires": []
    },
    5141: {
      "id": 5141,
      "row": 4,
      "col": 1,
      "icon": "icon_5141",
      "ranks": [51411],
      "requires": []
    },
    5142: {
      "id": 5142,
      "row": 4,
      "col": 2,
      "icon": "icon_5142",
      "ranks": [51421],
      "requires": []
    },
    5143: {
      "id": 5143,
      "row": 4,
      "col": 3,
      "icon": "icon_5143",
      "ranks": [51431,51432],
      "requires": []
    },
    5151: {
      "id": 5151,
      "row": 5,
      "col": 1,
      "icon": "icon_5151",
      "ranks": [51511,51512],
      "requires": []
    },
    5152: {
      "id": 5152,
      "row": 5,
      "col": 2,
      "icon": "icon_5152",
      "ranks": [51521,51522,51523],
      "requires": []
    },
    5161: {
      "id": 5161,
      "row": 6,
      "col": 1,
      "icon": "icon_5161",
      "ranks": [51611],
      "requires": []
    },
    5162: {
      "id": 5162,
      "row": 6,
      "col": 2,
      "icon": "icon_5162",
      "ranks": [51621],
      "requires": []
    }
  },
  52: {
    5200: {
      "id": 5200,
      "row": 0,
      "col": 0,
      "icon": "icon_5200",
      "ranks": [52001,52002,52003],
      "requires": []
    },
    5201: {
      "id": 5201,
      "row": 0,
      "col": 1,
      "icon": "icon_5201",
      "ranks": [52011,52012],
      "requires": []
    },
    5202: {
      "id": 5202,
      "row": 0,
      "col": 2,
      "icon": "icon_5202",
      "ranks": [52021,52022,52023],
      "requires": []
    },
    5203: {
      "id": 5203,
      "row": 0,
      "col": 3,
      "icon": "icon_5203",
      "ranks": [52031,52032],
      "requires": []
    },
    5210: {
      "id": 5210,
      "row": 1,
      "col": 0,
      "icon": "icon_5210",
      "ranks": [52101,52102,52103],
      "requires": []
    },
    5211: {
      "id": 5211,
      "row": 1,
      "col": 1,
      "icon": "icon_5211",
      "ranks": [52111,52112],
      "requires": []
    },
    5212: {
      "id": 5212,
      "row": 1,
      "col": 2,
      "icon": "icon_5212",
      "ranks": [52121,52122,52123],
      "requires": []
    },
    5213: {
      "id": 5213,
      "row": 1,
      "col": 3,
      "icon": "icon_5213",
      "ranks": [52131,52132],
      "requires": []
    },
    5220: {
      "id": 5220,
      "row": 2,
      "col": 0,
      "icon": "icon_5220",
      "ranks": [52201,52202,52203],
      "requires": []
    },
    5221: {
      "id": 5221,
      "row": 2,
      "col": 1,
      "icon": "icon_5221",
      "ranks": [52211],
      "requires": []
    },
    5222: {
      "id": 5222,
      "row": 2,
      "col": 2,
      "icon": "icon_5222",
      "ranks": [52221],
      "requires": []
    },
    5223: {
      "id": 5223,
      "row": 2,
      "col": 3,
      "icon": "icon_5223",
      "ranks": [52231,52232],
      "requires": []
    },
    5230: {
      "id": 5230,
      "row": 3,
      "col": 0,
      "icon": "icon_5230",
      "ranks": [52301,52302,52303],
      "requires": []
    },
    5231: {
      "id": 5231,
      "row": 3,
      "col": 1,
      "icon": "icon_5231",
      "ranks": [52311,52312],
      "requires": []
    },
    5232: {
      "id": 5232,
      "row": 3,
      "col": 2,
      "icon": "icon_5232",
      "ranks": [52321,52322,52323],
      "requires": []
    },
    5233: {
      "id": 5233,
      "row": 3,
      "col": 3,
      "icon": "icon_5233",
      "ranks": [52331,52332],
      "requires": []
    },
    5240: {
      "id": 5240,
      "row": 4,
      "col": 0,
      "icon": "icon_5240",
      "ranks": [52401,52402,52403],
      "requires": []
    },
    5241: {
      "id": 5241,
      "row": 4,
      "col": 1,
      "icon": "icon_5241",
      "ranks": [52411],
      "requires": []
    },
    5242: {
      "id": 5242,
      "row": 4,
      "col": 2,
      "icon": "icon_5242",
      "ranks": [52421],
      "requires": []
    },
    5243: {
      "id": 5243,
      "row": 4,
      "col": 3,
      "icon": "icon_5243",
      "ranks": [52431,52432],
      "requires": []
    },
    5251: {
      "id": 5251,
      "row": 5,
      "col": 1,
      "icon": "icon_5251",
      "ranks": [52511,52512],
      "requires": []
    },
    5252: {
      "id": 5252,
      "row": 5,
      "col": 2,
      "icon": "icon_5252",
      "ranks": [52521,52522,52523],
      "requires": []
    },
    5261: {
      "id": 5261,
      "row": 6,
      "col": 1,
      "icon": "icon_5261",
      "ranks": [52611],
      "requires": []
    },
    5262: {
      "id": 5262,
      "row": 6,
      "col": 2,
      "icon": "icon_5262",
      "ranks": [52621],
      "requires": []
    }
  },
  60: {
    6000: {
      "id": 6000,
      "row": 0,
      "col": 0,
      "icon": "icon_6000",
      "ranks": [60001,60002,60003],
      "requires": []
    },
    6001: {
      "id": 6001,
      "row": 0,
      "col": 1,
      "icon": "icon_6001",
      "ranks": [60011,60012],
      "requires": []
    },
    6002: {
      "id": 6002,
      "row": 0,
      "col": 2,
      "icon": "icon_6002",
      "ranks": [60021,60022,60023],
      "requires": []
    },
    6003: {
      "id": 6003,
      "row": 0,
      "col": 3,
      "icon": "icon_6003",
      "ranks": [60031,60032],
      "requires": []
    },
    6010: {
      "id": 6010,
      "row": 1,
      "col": 0,
      "icon": "icon_6010",
      "ranks": [60101,60102,60103],
      "requires": []
    },
    6011: {
      "id": 6011,
      "row": 1,
      "col": 1,
      "icon": "icon_6011",
      "ranks": [60111,60112],
      "requires": []
    },
    6012: {
      "id": 6012,
      "row": 1,
      "col": 2,
      "icon": "icon_6012",
      "ranks": [60121,60122,60123],
      "requires": []
    },
    6013: {
      "id": 6013,
      "row": 1,
      "col": 3,
      "icon": "icon_6013",
      "ranks": [60131,60132],
      "requires": []
    },
    6020: {
      "id": 6020,
      "row": 2,
      "col": 0,
      "icon": "icon_6020",
      "ranks": [60201,60202,60203],
      "requires": []
    },
    6021: {
      "id": 6021,
      "row": 2,
      "col": 1,
      "icon": "icon_6021",
      "ranks": [60211],
      "requires": []
    },
    6022: {
      "id": 6022,
      "row": 2,
      "col": 2,
      "icon": "icon_6022",
      "ranks": [60221],
      "requires": []
    },
    6023: {
      "id": 6023,
      "row": 2,
      "col": 3,
      "icon": "icon_6023",
      "ranks": [60231,60232],
      "requires": []
    },
    6030: {
      "id": 6030,
      "row": 3,
      "col": 0,
      "icon": "icon_6030",
      "ranks": [60301,60302,60303],
      "requires": []
    },
    6031: {
      "id": 6031,
      "row": 3,
      "col": 1,
      "icon": "icon_6031",
      "ranks": [60311,60312],
      "requires": []
    },
    6032: {
      "id": 6032,
      "row": 3,
      "col": 2,
      "icon": "icon_6032",
      "ranks": [60321,60322,60323],
      "requires": []
    },
    6033: {
      "id": 6033,
      "row": 3,
      "col": 3,
      "icon": "icon_6033",
      "ranks": [60331,60332],
      "requires": []
    },
    6040: {
      "id": 6040,
      "row": 4,
      "col": 0,
      "icon": "icon_6040",
      "ranks": [60401,60402,60403],
      "requires": []
    },
    6041: {
      "id": 6041,
      "row": 4,
      "col": 1,
      "icon": "icon_6041",
      "ranks": [60411],
      "requires": []
    },
    6042: {
      "id": 6042,
      "row": 4,
      "col": 2,
      "icon": "icon_6042",
      "ranks": [60421],
      "requires": []
    },
    6043: {
      "id": 6043,
      "row": 4,
      "col": 3,
      "icon": "icon_6043",
      "ranks": [60431,60432],
      "requires": []
    },
    6051: {
      "id": 6051,
      "row": 5,
      "col": 1,
      "icon": "icon_6051",
      "ranks": [60511,60512],
      "requires": []
    },
    6052: {
      "id": 6052,
      "row": 5,
      "col": 2,
      "icon": "icon_6052",
      "ranks": [60521,60522,60523],
      "requires": []
    },
    6061: {
      "id": 6061,
      "row": 6,
      "col": 1,
      "icon": "icon_6061",
      "ranks": [60611],
      "requires": []
    },
    6062: {
      "id": 6062,
      "row": 6,
      "col": 2,
      "icon": "icon_6062",
      "ranks": [60621],
      "requires": []
    }
  },
  61: {
    6100: {
      "id": 6100,
      "row": 0,
      "col": 0,
      "icon": "icon_6100",
      "ranks": [61001,61002,61003],
      "requires": []
    },
    6101: {
      "id": 6101,
      "row": 0,
      "col": 1,
      "icon": "icon_6101",
      "ranks": [61011,61012],
      "requires": []
    },
    6102: {
      "id": 6102,
      "row": 0,
      "col": 2,
      "icon": "icon_6102",
      "ranks": [61021,61022,61023],
      "requires": []
    },
    6103: {
      "id": 6103,
      "row": 0,
      "col": 3,
      "icon": "icon_6103",
      "ranks": [61031,61032],
      "requires": []
    },
    6110: {
      "id": 6110,
      "row": 1,
      "col": 0,
      "icon": "icon_6110",
      "ranks": [61101,61102,61103],
      "requires": []
    },
    6111: {
      "id": 6111,
      "row": 1,
      "col": 1,
      "icon": "icon_6111",
      "ranks": [61111,61112],
      "requires": []
    },
    6112: {
      "id": 6112,
      "row": 1,
      "col": 2,
      "icon": "icon_6112",
      "ranks": [61121,61122,61123],
      "requires": []
    },
    6113: {
      "id": 6113,
      "row": 1,
      "col": 3,
      "icon": "icon_6113",
      "ranks": [61131,61132],
      "requires": []
    },
    6120: {
      "id": 6120,
      "row": 2,
      "col": 0,
      "icon": "icon_6120",
      "ranks": [61201,61202,61203],
      "requires": []
    },
    6121: {
      "id": 6121,
      "row": 2,
      "col": 1,
      "icon": "icon_6121",
      "ranks": [61211],
      "requires": []
    },
    6122: {
      "id": 6122,
      "row": 2,
      "col": 2,
      "icon": "icon_6122",
      "ranks": [61221],
      "requires": []
    },
    6123: {
      "id": 6123,
      "row": 2,
      "col": 3,
      "icon": "icon_6123",
      "ranks": [61231,61232],
      "requires": []
    },
    6130: {
      "id": 6130,
      "row": 3,
      "col": 0,
      "icon": "icon_6130",
      "ranks": [61301,61302,61303],
      "requires": []
    },
    6131: {
      "id": 6131,
      "row": 3,
      "col": 1,
      "icon": "icon_6131",
      "ranks": [61311,61312],
      "requires": []
    },
    6132: {
      "id": 6132,
      "row": 3,
      "col": 2,
      "icon": "icon_6132",
      "ranks": [61321,61322,61323],
      "requires": []
    },
    6133: {
      "id": 6133,
      "row": 3,
      "col": 3,
      "icon": "icon_6133",
      "ranks": [61331,61332],
      "requires": []
    },
    6140: {
      "id": 6140,
      "row": 4,
      "col": 0,
      "icon": "icon_6140",
      "ranks": [61401,61402,61403],
      "requires": []
    },
    6141: {
      "id": 6141,
      "row": 4,
      "col": 1,
      "icon": "icon_6141",
      "ranks": [61411],
      "requires": []
    },
    6142: {
      "id": 6142,
      "row": 4,
      "col": 2,
      "icon": "icon_6142",
      "ranks": [61421],
      "requires": []
    },
    6143: {
      "id": 6143,
      "row": 4,
      "col": 3,
      "icon": "icon_6143",
      "ranks": [61431,61432],
      "requires": []
    },
    6151: {
      "id": 6151,
      "row": 5,
      "col": 1,
      "icon": "icon_6151",
      "ranks": [61511,61512],
      "requires": []
    },
    6152: {
      "id": 6152,
      "row": 5,
      "col": 2,
      "icon": "icon_6152",
      "ranks": [61521,61522,61523],
      "requires": []
    },
    6161: {
      "id": 6161,
      "row": 6,
      "col": 1,
      "icon": "icon_6161",
      "ranks": [61611],
      "requires": []
    },
    6162: {
      "id": 6162,
      "row": 6,
      "col": 2,
      "icon": "icon_6162",
      "ranks": [61621],
      "requires": []
    }
  },
  62: {
    6200: {
      "id": 6200,
      "row": 0,
      "col": 0,
      "icon": "icon_6200",
      "ranks": [62001,62002,62003],
      "requires": []
    },
    6201: {
      "id": 6201,
      "row": 0,
      "col": 1,
      "icon": "icon_6201",
      "ranks": [62011,62012],
      "requires": []
    },
    6202: {
      "id": 6202,
      "row": 0,
      "col": 2,
      "icon": "icon_6202",
      "ranks": [62021,62022,62023],
      "requires": []
    },
    6203: {
      "id": 6203,
      "row": 0,
      "col": 3,
      "icon": "icon_6203",
      "ranks": [62031,62032],
      "requires": []
    },
    6210: {
      "id": 6210,
      "row": 1,
      "col": 0,
      "icon": "icon_6210",
      "ranks": [62101,62102,62103],
      "requires": []
    },
    6211: {
      "id": 6211,
      "row": 1,
      "col": 1,
      "icon": "icon_6211",
      "ranks": [62111,62112],
      "requires": []
    },
    6212: {
      "id": 6212,
      "row": 1,
      "col": 2,
      "icon": "icon_6212",
      "ranks": [62121,62122,62123],
      "requires": []
    },
    6213: {
      "id": 6213,
      "row": 1,
      "col": 3,
      "icon": "icon_6213",
      "ranks": [62131,62132],
      "requires": []
    },
    6220: {
      "id": 6220,
      "row": 2,
      "col": 0,
      "icon": "icon_6220",
      "ranks": [62201,62202,62203],
      "requires": []
    },
    6221: {
      "id": 6221,
      "row": 2,
      "col": 1,
      "icon": "icon_6221",
      "ranks": [62211],
      "requires": []
    },
    6222: {
      "id": 6222,
      "row": 2,
      "col": 2,
      "icon": "icon_6222",
      "ranks": [62221],
      "requires": []
    },
    6223: {
      "id": 6223,
      "row": 2,
      "col": 3,
      "icon": "icon_6223",
      "ranks": [62231,62232],
      "requires": []
    },
    6230: {
      "id": 6230,
      "row": 3,
      "col": 0,
      "icon": "icon_6230",
      "ranks": [62301,62302,62303],
      "requires": []
    },
    6231: {
      "id": 6231,
      "row": 3,
      "col": 1,
      "icon": "icon_6231",
      "ranks": [62311,62312],
      "requires": []
    },
    6232: {
      "id": 6232,
      "row": 3,
      "col": 2,
      "icon": "icon_6232",
      "ranks": [62321,62322,62323],
      "requires": []
    },
    6233: {
      "id": 6233,
      "row": 3,
      "col": 3,
      "icon": "icon_6233",
      "ranks": [62331,62332],
      "requires": []
    },
    6240: {
      "id": 6240,
      "row": 4,
      "col": 0,
      "icon": "icon_6240",
      "ranks": [62401,62402,62403],
      "requires": []
    },
    6241: {
      "id": 6241,
      "row": 4,
      "col": 1,
      "icon": "icon_6241",
      "ranks": [62411],
      "requires": []
    },
    6242: {
      "id": 6242,
      "row": 4,
      "col": 2,
      "icon": "icon_6242",
      "ranks": [62421],
      "requires": []
    },
    6243: {
      "id": 6243,
      "row": 4,
      "col": 3,
      "icon": "icon_6243",
      "ranks": [62431,62432],
      "requires": []
    },
    6251: {
      "id": 6251,
      "row": 5,
      "col": 1,
      "icon": "icon_6251",
      "ranks": [62511,62512],
      "requires": []
    },
    6252: {
      "id": 6252,
      "row": 5,
      "col": 2,
      "icon": "icon_6252",
      "ranks": [62521,62522,62523],
      "requires": []
    },
    6261: {
      "id": 6261,
      "row": 6,
      "col": 1,
      "icon": "icon_6261",
      "ranks": [62611],
      "requires": []
    },
    6262: {
      "id": 6262,
      "row": 6,
      "col": 2,
      "icon": "icon_6262",
      "ranks": [62621],
      "requires": []
    }
  },
  70: {
    7000: {
      "id": 7000,
      "row": 0,
      "col": 0,
      "icon": "icon_7000",
      "ranks": [70001,70002,70003],
      "requires": []
    },
    7001: {
      "id": 7001,
      "row": 0,
      "col": 1,
      "icon": "icon_7001",
      "ranks": [70011,70012],
      "requires": []
    },
    7002: {
      "id": 7002,
      "row": 0,
      "col": 2,
      "icon": "icon_7002",
      "ranks": [70021,70022,70023],
      "requires": []
    },
    7003: {
      "id": 7003,
      "row": 0,
      "col": 3,
      "icon": "icon_7003",
      "ranks": [70031,70032],
      "requires": []
    },
    7010: {
      "id": 7010,
      "row": 1,
      "col": 0,
      "icon": "icon_7010",
      "ranks": [70101,70102,70103],
      "requires": []
    },
    7011: {
      "id": 7011,
      "row": 1,
      "col": 1,
      "icon": "icon_7011",
      "ranks": [70111,70112],
      "requires": []
    },
    7012: {
      "id": 7012,
      "row": 1,
      "col": 2,
      "icon": "icon_7012",
      "ranks": [70121,70122,70123],
      "requires": []
    },
    7013: {
      "id": 7013,
      "row": 1,
      "col": 3,
      "icon": "icon_7013",
      "ranks": [70131,70132],
      "requires": []
    },
    7020: {
      "id": 7020,
      "row": 2,
      "col": 0,
      "icon": "icon_7020",
      "ranks": [70201,70202,70203],
      "requires": []
    },
    7021: {
      "id": 7021,
      "row": 2,
      "col": 1,
      "icon": "icon_7021",
      "ranks": [70211],
      "requires": []
    },
    7022: {
      "id": 7022,
      "row": 2,
      "col": 2,
      "icon": "icon_7022",
      "ranks": [70221],
      "requires": []
    },
    7023: {
      "id": 7023,
      "row": 2,
      "col": 3,
      "icon": "icon_7023",
      "ranks": [70231,70232],
      "requires": []
    },
    7030: {
      "id": 7030,
      "row": 3,
      "col": 0,
      "icon": "icon_7030",
      "ranks": [70301,70302,70303],
      "requires": []
    },
    7031: {
      "id": 7031,
      "row": 3,
      "col": 1,
      "icon": "icon_7031",
      "ranks": [70311,70312],
      "requires": []
    },
    7032: {
      "id": 7032,
      "row": 3,
      "col": 2,
      "icon": "icon_7032",
      "ranks": [70321,70322,70323],
      "requires": []
    },
    7033: {
      "id": 7033,
      "row": 3,
      "col": 3,
      "icon": "icon_7033",
      "ranks": [70331,70332],
      "requires": []
    },
    7040: {
      "id": 7040,
      "row": 4,
      "col": 0,
      "icon": "icon_7040",
      "ranks": [70401,70402,70403],
      "requires": []
    },
    7041: {
      "id": 7041,
      "row": 4,
      "col": 1,
      "icon": "icon_7041",
      "ranks": [70411],
      "requires": []
    },
    7042: {
      "id": 7042,
      "row": 4,
      "col": 2,
      "icon": "icon_7042",
      "ranks": [70421],
      "requires": []
    },
    7043: {
      "id": 7043,
      "row": 4,
      "col": 3,
      "icon": "icon_7043",
      "ranks": [70431,70432],
      "requires": []
    },
    7051: {
      "id": 7051,
      "row": 5,
      "col": 1,
      "icon": "icon_7051",
      "ranks": [70511,70512],
      "requires": []
    },
    7052: {
      "id": 7052,
      "row": 5,
      "col": 2,
      "icon": "icon_7052",
      "ranks": [70521,70522,70523],
      "requires": []
    },
    7061: {
      "id": 7061,
      "row": 6,
      "col": 1,
      "icon": "icon_7061",
      "ranks": [70611],
      "requires": []
    },
    7062: {
      "id": 7062,
      "row": 6,
      "col": 2,
      "icon": "icon_7062",
      "ranks": [70621],
      "requires": []
    }
  },
  71: {
    7100: {
      "id": 7100,
      "row": 0,
      "col": 0,
      "icon": "icon_7100",
      "ranks": [71001,71002,71003],
      "requires": []
    },
    7101: {
      "id": 7101,
      "row": 0,
      "col": 1,
      "icon": "icon_7101",
      "ranks": [71011,71012],
      "requires": []
    },
    7102: {
      "id": 7102,
      "row": 0,
      "col": 2,
      "icon": "icon_7102",
      "ranks": [71021,71022,71023],
      "requires": []
    },
    7103: {
      "id": 7103,
      "row": 0,
      "col": 3,
      "icon": "icon_7103",
      "ranks": [71031,71032],
      "requires": []
    },
    7110: {
      "id": 7110,
      "row": 1,
      "col": 0,
      "icon": "icon_7110",
      "ranks": [71101,71102,71103],
      "requires": []
    },
    7111: {
      "id": 7111,
      "row": 1,
      "col": 1,
      "icon": "icon_7111",
      "ranks": [71111,71112],
      "requires": []
    },
    7112: {
      "id": 7112,
      "row": 1,
      "col": 2,
      "icon": "icon_7112",
      "ranks": [71121,71122,71123],
      "requires": []
    },
    7113: {
      "id": 7113,
      "row": 1,
      "col": 3,
      "icon": "icon_7113",
      "ranks": [71131,71132],
      "requires": []
    },
    7120: {
      "id": 7120,
      "row": 2,
      "col": 0,
      "icon": "icon_7120",
      "ranks": [71201,71202,71203],
      "requires": []
    },
    7121: {
      "id": 7121,
      "row": 2,
      "col": 1,
      "icon": "icon_7121",
      "ranks": [71211],
      "requires": []
    },
    7122: {
      "id": 7122,
      "row": 2,
      "col": 2,
      "icon": "icon_7122",
      "ranks": [71221],
      "requires": []
    },
    7123: {
      "id": 7123,
      "row": 2,
      "col": 3,
      "icon": "icon_7123",
      "ranks": [71231,71232],
      "requires": []
    },
    7130: {
      "id": 7130,
      "row": 3,
      "col": 0,
      "icon": "icon_7130",
      "ranks": [71301,71302,71303],
      "requires": []
    },
    7131: {
      "id": 7131,
      "row": 3,
      "col": 1,
      "icon": "icon_7131",
      "ranks": [71311,71312],
      "requires": []
    },
    7132: {
      "id": 7132,
      "row": 3,
      "col": 2,
      "icon": "icon_7132",
      "ranks": [71321,71322,71323],
      "requires": []
    },
    7133: {
      "id": 7133,
      "row": 3,
      "col": 3,
      "icon": "icon_7133",
      "ranks": [71331,71332],
      "requires": []
    },
    7140: {
      "id": 7140,
      "row": 4,
      "col": 0,
      "icon": "icon_7140",
      "ranks": [71401,71402,71403],
      "requires": []
    },
    7141: {
      "id": 7141,
      "row": 4,
      "col": 1,
      "icon": "icon_7141",
      "ranks": [71411],
      "requires": []
    },
    7142: {
      "id": 7142,
      "row": 4,
      "col": 2,
      "icon": "icon_7142",
      "ranks": [71421],
      "requires": []
    },
    7143: {
      "id": 7143,
      "row": 4,
      "col": 3,
      "icon": "icon_7143",
      "ranks": [71431,71432],
      "requires": []
    },
    7151: {
      "id": 7151,
      "row": 5,
      "col": 1,
      "icon": "icon_7151",
      "ranks": [71511,71512],
      "requires": []
    },
    7152: {
      "id": 7152,
      "row": 5,
      "col": 2,
      "icon": "icon_7152",
      "ranks": [71521,71522,71523],
      "requires": []
    },
    7161: {
      "id": 7161,
      "row": 6,
      "col": 1,
      "icon": "icon_7161",
      "ranks": [71611],
      "requires": []
    },
    7162: {
      "id": 7162,
      "row": 6,
      "col": 2,
      "icon": "icon_7162",
      "ranks": [71621],
      "requires": []
    }
  },
  72: {
    7200: {
      "id": 7200,
      "row": 0,
      "col": 0,
      "icon": "icon_7200",
      "ranks": [72001,72002,72003],
      "requires": []
    },
    7201: {
      "id": 7201,
      "row": 0,
      "col": 1,
      "icon": "icon_7201",
      "ranks": [72011,72012],
      "requires": []
    },
    7202: {
      "id": 7202,
      "row": 0,
      "col": 2,
      "icon": "icon_7202",
      "ranks": [72021,72022,72023],
      "requires": []
    },
    7203: {
      "id": 7203,
      "row": 0,
      "col": 3,
      "icon": "icon_7203",
      "ranks": [72031,72032],
      "requires": []
    },
    7210: {
      "id": 7210,
      "row": 1,
      "col": 0,
      "icon": "icon_7210",
      "ranks": [72101,72102,72103],
      "requires": []
    },
    7211: {
      "id": 7211,
      "row": 1,
      "col": 1,
      "icon": "icon_7211",
      "ranks": [72111,72112],
      "requires": []
    },
    7212: {
      "id": 7212,
      "row": 1,
      "col": 2,
      "icon": "icon_7212",
      "ranks": [72121,72122,72123],
      "requires": []
    },
    7213: {
      "id": 7213,
      "row": 1,
      "col": 3,
      "icon": "icon_7213",
      "ranks": [72131,72132],
      "requires": []
    },
    7220: {
      "id": 7220,
      "row": 2,
      "col": 0,
      "icon": "icon_7220",
      "ranks": [72201,72202,72203],
      "requires": []
    },
    7221: {
      "id": 7221,
      "row": 2,
      "col": 1,
      "icon": "icon_7221",
      "ranks": [72211],
      "requires": []
    },
    7222: {
      "id": 7222,
      "row": 2,
      "col": 2,
      "icon": "icon_7222",
      "ranks": [72221],
      "requires": []
    },
    7223: {
      "id": 7223,
      "row": 2,
      "col": 3,
      "icon": "icon_7223",
      "ranks": [72231,72232],
      "requires": []
    },
    7230: {
      "id": 7230,
      "row": 3,
      "col": 0,
      "icon": "icon_7230",
      "ranks": [72301,72302,72303],
      "requires": []
    },
    7231: {
      "id": 7231,
      "row": 3,
      "col": 1,
      "icon": "icon_7231",
      "ranks": [72311,72312],
      "requires": []
    },
    7232: {
      "id": 7232,
      "row": 3,
      "col": 2,
      "icon": "icon_7232",
      "ranks": [72321,72322,72323],
      "requires": []
    },
    7233: {
      "id": 7233,
      "row": 3,
      "col": 3,
      "icon": "icon_7233",
      "ranks": [72331,72332],
      "requires": []
    },
    7240: {
      "id": 7240,
      "row": 4,
      "col": 0,
      "icon": "icon_7240",
      "ranks": [72401,72402,72403],
      "requires": []
    },
    7241: {
      "id": 7241,
      "row": 4,
      "col": 1,
      "icon": "icon_7241",
      "ranks": [72411],
      "requires": []
    },
    7242: {
      "id": 7242,
      "row": 4,
      "col": 2,
      "icon": "icon_7242",
      "ranks": [72421],
      "requires": []
    },
    7243: {
      "id": 7243,
      "row": 4,
      "col": 3,
      "icon": "icon_7243",
      "ranks": [72431,72432],
      "requires": []
    },
    7251: {
      "id": 7251,
      "row": 5,
      "col": 1,
      "icon": "icon_7251",
      "ranks": [72511,72512],
      "requires": []
    },
    7252: {
      "id": 7252,
      "row": 5,
      "col": 2,
      "icon": "icon_7252",
      "ranks": [72521,72522,72523],
      "requires": []
    },
    7261: {
      "id": 7261,
      "row": 6,
      "col": 1,
      "icon": "icon_7261",
      "ranks": [72611],
      "requires": []
    },
    7262: {
      "id": 7262,
      "row": 6,
      "col": 2,
      "icon": "icon_7262",
      "ranks": [72621],
      "requires": []
    }
  },
  80: {
    8000: {
      "id": 8000,
      "row": 0,
      "col": 0,
      "icon": "icon_8000",
      "ranks": [80001,80002,80003],
      "requires": []
    },
    8001: {
      "id": 8001,
      "row": 0,
      "col": 1,
      "icon": "icon_8001",
      "ranks": [80011,80012],
      "requires": []
    },
    8002: {
      "id": 8002,
      "row": 0,
      "col": 2,
      "icon": "icon_8002",
      "ranks": [80021,80022,80023],
      "requires": []
    },
    8003: {
      "id": 8003,
      "row": 0,
      "col": 3,
      "icon": "icon_8003",
      "ranks": [80031,80032],
      "requires": []
    },
    8010: {
      "id": 8010,
      "row": 1,
      "col": 0,
      "icon": "icon_8010",
      "ranks": [80101,80102,80103],
      "requires": []
    },
    8011: {
      "id": 8011,
      "row": 1,
      "col": 1,
      "icon": "icon_8011",
      "ranks": [80111,80112],
      "requires": []
    },
    8012: {
      "id": 8012,
      "row": 1,
      "col": 2,
      "icon": "icon_8012",
      "ranks": [80121,80122,80123],
      "requires": []
    },
    8013: {
      "id": 8013,
      "row": 1,
      "col": 3,
      "icon": "icon_8013",
      "ranks": [80131,80132],
      "requires": []
    },
    8020: {
      "id": 8020,
      "row": 2,
      "col": 0,
      "icon": "icon_8020",
      "ranks": [80201,80202,80203],
      "requires": []
    },
    8021: {
      "id": 8021,
      "row": 2,
      "col": 1,
      "icon": "icon_8021",
      "ranks": [80211],
      "requires": []
    },
    8022: {
      "id": 8022,
      "row": 2,
      "col": 2,
      "icon": "icon_8022",
      "ranks": [80221],
      "requires": []
    },
    8023: {
      "id": 8023,
      "row": 2,
      "col": 3,
      "icon": "icon_8023",
      "ranks": [80231,80232],
      "requires": []
    },
    8030: {
      "id": 8030,
      "row": 3,
      "col": 0,
      "icon": "icon_8030",
      "ranks": [80301,80302,80303],
      "requires": []
    },
    8031: {
      "id": 8031,
      "row": 3,
      "col": 1,
      "icon": "icon_8031",
      "ranks": [80311,80312],
      "requires": []
    },
    8032: {
      "id": 8032,
      "row": 3,
      "col": 2,
      "icon": "icon_8032",
      "ranks": [80321,80322,80323],
      "requires": []
    },
    8033: {
      "id": 8033,
      "row": 3,
      "col": 3,
      "icon": "icon_8033",
      "ranks": [80331,80332],
      "requires": []
    },
    8040: {
      "id": 8040,
      "row": 4,
      "col": 0,
      "icon": "icon_8040",
      "ranks": [80401,80402,80403],
      "requires": []
    },
    8041: {
      "id": 8041,
      "row": 4,
      "col": 1,
      "icon": "icon_8041",
      "ranks": [80411],
      "requires": []
    },
    8042: {
      "id": 8042,
      "row": 4,
      "col": 2,
      "icon": "icon_8042",
      "ranks": [80421],
      "requires": []
    },
    8043: {
      "id": 8043,
      "row": 4,
      "col": 3,
      "icon": "icon_8043",
      "ranks": [80431,80432],
      "requires": []
    },
    8051: {
      "id": 8051,
      "row": 5,
      "col": 1,
      "icon": "icon_8051",
      "ranks": [80511,80512],
      "requires": []
    },
    8052: {
      "id": 8052,
      "row": 5,
      "col": 2,
      "icon": "icon_8052",
      "ranks": [80521,80522,80523],
      "requires": []
    },
    8061: {
      "id": 8061,
      "row": 6,
      "col": 1,
      "icon": "icon_8061",
      "ranks": [80611],
      "requires": []
    },
    8062: {
      "id": 8062,
      "row": 6,
      "col": 2,
      "icon": "icon_8062",
      "ranks": [80621],
      "requires": []
    }
  },
  81: {
    8100: {
      "id": 8100,
      "row": 0,
      "col": 0,
      "icon": "icon_8100",
      "ranks": [81001,81002,81003],
      "requires": []
    },
    8101: {
      "id": 8101,
      "row": 0,
      "col": 1,
      "icon": "icon_8101",
      "ranks": [81011,81012],
      "requires": []
    },
    8102: {
      "id": 8102,
      "row": 0,
      "col": 2,
      "icon": "icon_8102",
      "ranks": [81021,81022,81023],
      "requires": []
    },
    8103: {
      "id": 8103,
      "row": 0,
      "col": 3,
      "icon": "icon_8103",
      "ranks": [81031,81032],
      "requires": []
    },
    8110: {
      "id": 8110,
      "row": 1,
      "col": 0,
      "icon": "icon_8110",
      "ranks": [81101,81102,81103],
      "requires": []
    },
    8111: {
      "id": 8111,
      "row": 1,
      "col": 1,
      "icon": "icon_8111",
      "ranks": [81111,81112],
      "requires": []
    },
    8112: {
      "id": 8112,
      "row": 1,
      "col": 2,
      "icon": "icon_8112",
      "ranks": [81121,81122,81123],
      "requires": []
    },
    8113: {
      "id": 8113,
      "row": 1,
      "col": 3,
      "icon": "icon_8113",
      "ranks": [81131,81132],
      "requires": []
    },
    8120: {
      "id": 8120,
      "row": 2,
      "col": 0,
      "icon": "icon_8120",
      "ranks": [81201,81202,81203],
      "requires": []
    },
    8121: {
      "id": 8121,
      "row": 2,
      "col": 1,
      "icon": "icon_8121",
      "ranks": [81211],
      "requires": []
    },
    8122: {
      "id": 8122,
      "row": 2,
      "col": 2,
      "icon": "icon_8122",
      "ranks": [81221],
      "requires": []
    },
    8123: {
      "id": 8123,
      "row": 2,
      "col": 3,
      "icon": "icon_8123",
      "ranks": [81231,81232],
      "requires": []
    },
    8130: {
      "id": 8130,
      "row": 3,
      "col": 0,
      "icon": "icon_8130",
      "ranks": [81301,81302,81303],
      "requires": []
    },
    8131: {
      "id": 8131,
      "row": 3,
      "col": 1,
      "icon": "icon_8131",
      "ranks": [81311,81312],
      "requires": []
    },
    8132: {
      "id": 8132,
      "row": 3,
      "col": 2,
      "icon": "icon_8132",
      "ranks": [81321,81322,81323],
      "requires": []
    },
    8133: {
      "id": 8133,
      "row": 3,
      "col": 3,
      "icon": "icon_8133",
      "ranks": [81331,81332],
      "requires": []
    },
    8140: {
      "id": 8140,
      "row": 4,
      "col": 0,
      "icon": "icon_8140",
      "ranks": [81401,81402,81403],
      "requires": []
    },
    8141: {
      "id": 8141,
      "row": 4,
      "col": 1,
      "icon": "icon_8141",
      "ranks": [81411],
      "requires": []
    },
    8142: {
      "id": 8142,
      "row": 4,
      "col": 2,
      "icon": "icon_8142",
      "ranks": [81421],
      "requires": []
    },
    8143: {
      "id": 8143,
      "row": 4,
      "col": 3,
      "icon": "icon_8143",
      "ranks": [81431,81432],
      "requires": []
    },
    8151: {
      "id": 8151,
      "row": 5,
      "col": 1,
      "icon": "icon_8151",
      "ranks": [81511,81512],
      "requires": []
    },
    8152: {
      "id": 8152,
      "row": 5,
      "col": 2,
      "icon": "icon_8152",
      "ranks": [81521,81522,81523],
      "requires": []
    },
    8161: {
      "id": 8161,
      "row": 6,
      "col": 1,
      "icon": "icon_8161",
      "ranks": [81611],
      "requires": []
    },
    8162: {
      "id": 8162,
      "row": 6,
      "col": 2,
      "icon": "icon_8162",
      "ranks": [81621],
      "requires": []
    }
  },
  82: {
    8200: {
      "id": 8200,
      "row": 0,
      "col": 0,
      "icon": "icon_8200",
      "ranks": [82001,82002,82003],
      "requires": []
    },
    8201: {
      "id": 8201,
      "row": 0,
      "col": 1,
      "icon": "icon_8201",
      "ranks": [82011,82012],
      "requires": []
    },
    8202: {
      "id": 8202,
      "row": 0,
      "col": 2,
      "icon": "icon_8202",
      "ranks": [82021,82022,82023],
      "requires": []
    },
    8203: {
      "id": 8203,
      "row": 0,
      "col": 3,
      "icon": "icon_8203",
      "ranks": [82031,82032],
      "requires": []
    },
    8210: {
      "id": 8210,
      "row": 1,
      "col": 0,
      "icon": "icon_8210",
      "ranks": [82101,82102,82103],
      "requires": []
    },
    8211: {
      "id": 8211,
      "row": 1,
      "col": 1,
      "icon": "icon_8211",
      "ranks": [82111,82112],
      "requires": []
    },
    8212: {
      "id": 8212,
      "row": 1,
      "col": 2,
      "icon": "icon_8212",
      "ranks": [82121,82122,82123],
      "requires": []
    },
    8213: {
      "id": 8213,
      "row": 1,
      "col": 3,
      "icon": "icon_8213",
      "ranks": [82131,82132],
      "requires": []
    },
    8220: {
      "id": 8220,
      "row": 2,
      "col": 0,
      "icon": "icon_8220",
      "ranks": [82201,82202,82203],
      "requires": []
    },
    8221: {
      "id": 8221,
      "row": 2,
      "col": 1,
      "icon": "icon_8221",
      "ranks": [82211],
      "requires": []
    },
    8222: {
      "id": 8222,
      "row": 2,
      "col": 2,
      "icon": "icon_8222",
      "ranks": [82221],
      "requires": []
    },
    8223: {
      "id": 8223,
      "row": 2,
      "col": 3,
      "icon": "icon_8223",
      "ranks": [82231,82232],
      "requires": []
    },
    8230: {
      "id": 8230,
      "row": 3,
      "col": 0,
      "icon": "icon_8230",
      "ranks": [82301,82302,82303],
      "requires": []
    },
    8231: {
      "id": 8231,
      "row": 3,
      "col": 1,
      "icon": "icon_8231",
      "ranks": [82311,82312],
      "requires": []
    },
    8232: {
      "id": 8232,
      "row": 3,
      "col": 2,
      "icon": "icon_8232",
      "ranks": [82321,82322,82323],
      "requires": []
    },
    8233: {
      "id": 8233,
      "row": 3,
      "col": 3,
      "icon": "icon_8233",
      "ranks": [82331,82332],
      "requires": []
    },
    8240: {
      "id": 8240,
      "row": 4,
      "col": 0,
      "icon": "icon_8240",
      "ranks": [82401,82402,82403],
      "requires": []
    },
    8241: {
      "id": 8241,
      "row": 4,
      "col": 1,
      "icon": "icon_8241",
      "ranks": [82411],
      "requires": []
    },
    8242: {
      "id": 8242,
      "row": 4,
      "col": 2,
      "icon": "icon_8242",
      "ranks": [82421],
      "requires": []
    },
    8243: {
      "id": 8243,
      "row": 4,
      "col": 3,
      "icon": "icon_8243",
      "ranks": [82431,82432],
      "requires": []
    },
    8251: {
      "id": 8251,
      "row": 5,
      "col": 1,
      "icon": "icon_8251",
      "ranks": [82511,82512],
      "requires": []
    },
    8252: {
      "id": 8252,
      "row": 5,
      "col": 2,
      "icon": "icon_8252",
      "ranks": [82521,82522,82523],
      "requires": []
    },
    8261: {
      "id": 8261,
      "row": 6,
      "col": 1,
      "icon": "icon_8261",
      "ranks": [82611],
      "requires": []
    },
    8262: {
      "id": 8262,
      "row": 6,
      "col": 2,
      "icon": "icon_8262",
      "ranks": [82621],
      "requires": []
    }
  },
  90: {
    9000: {
      "id": 9000,
      "row": 0,
      "col": 0,
      "icon": "icon_9000",
      "ranks": [90001,90002,90003],
      "requires": []
    },
    9001: {
      "id": 9001,
      "row": 0,
      "col": 1,
      "icon": "icon_9001",
      "ranks": [90011,90012],
      "requires": []
    },
    9002: {
      "id": 9002,
      "row": 0,
      "col": 2,
      "icon": "icon_9002",
      "ranks": [90021,90022,90023],
      "requires": []
    },
    9003: {
      "id": 9003,
      "row": 0,
      "col": 3,
      "icon": "icon_9003",
      "ranks": [90031,90032],
      "requires": []
    },
    9010: {
      "id": 9010,
      "row": 1,
      "col": 0,
      "icon": "icon_9010",
      "ranks": [90101,90102,90103],
      "requires": []
    },
    9011: {
      "id": 9011,
      "row": 1,
      "col": 1,
      "icon": "icon_9011",
      "ranks": [90111,90112],
      "requires": []
    },
    9012: {
      "id": 9012,
      "row": 1,
      "col": 2,
      "icon": "icon_9012",
      "ranks": [90121,90122,90123],
      "requires": []
    },
    9013: {
      "id": 9013,
      "row": 1,
      "col": 3,
      "icon": "icon_9013",
      "ranks": [90131,90132],
      "requires": []
    },
    9020: {
      "id": 9020,
      "row": 2,
      "col": 0,
      "icon": "icon_9020",
      "ranks": [90201,90202,90203],
      "requires": []
    },
    9021: {
      "id": 9021,
      "row": 2,
      "col": 1,
      "icon": "icon_9021",
      "ranks": [90211],
      "requires": []
    },
    9022: {
      "id": 9022,
      "row": 2,
      "col": 2,
      "icon": "icon_9022",
      "ranks": [90221],
      "requires": []
    },
    9023: {
      "id": 9023,
      "row": 2,
      "col": 3,
      "icon": "icon_9023",
      "ranks": [90231,90232],
      "requires": []
    },
    9030: {
      "id": 9030,
      "row": 3,
      "col": 0,
      "icon": "icon_9030",
      "ranks": [90301,90302,90303],
      "requires": []
    },
    9031: {
      "id": 9031,
      "row": 3,
      "col": 1,
      "icon": "icon_9031",
      "ranks": [90311,90312],
      "requires": []
    },
    9032: {
      "id": 9032,
      "row": 3,
      "col": 2,
      "icon": "icon_9032",
      "ranks": [90321,90322,90323],
      "requires": []
    },
    9033: {
      "id": 9033,
      "row": 3,
      "col": 3,
      "icon": "icon_9033",
      "ranks": [90331,90332],
      "requires": []
    },
    9040: {
      "id": 9040,
      "row": 4,
      "col": 0,
      "icon": "icon_9040",
      "ranks": [90401,90402,90403],
      "requires": []
    },
    9041: {
      "id": 9041,
      "row": 4,
      "col": 1,
      "icon": "icon_9041",
      "ranks": [90411],
      "requires": []
    },
    9042: {
      "id": 9042,
      "row": 4,
      "col": 2,
      "icon": "icon_9042",
      "ranks": [90421],
      "requires": []
    },
    9043: {
      "id": 9043,
      "row": 4,
      "col": 3,
      "icon": "icon_9043",
      "ranks": [90431,90432],
      "requires": []
    },
    9051: {
      "id": 9051,
      "row": 5,
      "col": 1,
      "icon": "icon_9051",
      "ranks": [90511,90512],
      "requires": []
    },
    9052: {
      "id": 9052,
      "row": 5,
      "col": 2,
      "icon": "icon_9052",
      "ranks": [90521,90522,90523],
      "requires": []
    },
    9061: {
      "id": 9061,
      "row": 6,
      "col": 1,
      "icon": "icon_9061",
      "ranks": [90611],
      "requires": []
    },
    9062: {
      "id": 9062,
      "row": 6,
      "col": 2,
      "icon": "icon_9062",
      "ranks": [90621],
      "requires": []
    }
  },
  91: {
    9100: {
      "id": 9100,
      "row": 0,
      "col": 0,
      "icon": "icon_9100",
      "ranks": [91001,91002,91003],
      "requires": []
    },
    9101: {
      "id": 9101,
      "row": 0,
      "col": 1,
      "icon": "icon_9101",
      "ranks": [91011,91012],
      "requires": []
    },
    9102: {
      "id": 9102,
      "row": 0,
      "col": 2,
      "icon": "icon_9102",
      "ranks": [91021,91022,91023],
      "requires": []
    },
    9103: {
      "id": 9103,
      "row": 0,
      "col": 3,
      "icon": "icon_9103",
      "ranks": [91031,91032],
      "requires": []
    },
    9110: {
      "id": 9110,
      "row": 1,
      "col": 0,
      "icon": "icon_9110",
      "ranks": [91101,91102,91103],
      "requires": []
    },
    9111: {
      "id": 9111,
      "row": 1,
      "col": 1,
      "icon": "icon_9111",
      "ranks": [91111,91112],
      "requires": []
    },
    9112: {
      "id": 9112,
      "row": 1,
      "col": 2,
      "icon": "icon_9112",
      "ranks": [91121,91122,91123],
      "requires": []
    },
    9113: {
      "id": 9113,
      "row": 1,
      "col": 3,
      "icon": "icon_9113",
      "ranks": [91131,91132],
      "requires": []
    },
    9120: {
      "id": 9120,
      "row": 2,
      "col": 0,
      "icon": "icon_9120",
      "ranks": [91201,91202,91203],
      "requires": []
    },
    9121: {
      "id": 9121,
      "row": 2,
      "col": 1,
      "icon": "icon_9121",
      "ranks": [91211],
      "requires": []
    },
    9122: {
      "id": 9122,
      "row": 2,
      "col": 2,
      "icon": "icon_9122",
      "ranks": [91221],
      "requires": []
    },
    9123: {
      "id": 9123,
      "row": 2,
      "col": 3,
      "icon": "icon_9123",
      "ranks": [91231,91232],
      "requires": []
    },
    9130: {
      "id": 9130,
      "row": 3,
      "col": 0,
      "icon": "icon_9130",
      "ranks": [91301,91302,91303],
      "requires": []
    },
    9131: {
      "id": 9131,
      "row": 3,
      "col": 1,
      "icon": "icon_9131",
      "ranks": [91311,91312],
      "requires": []
    },
    9132: {
      "id": 9132,
      "row": 3,
      "col": 2,
      "icon": "icon_9132",
      "ranks": [91321,91322,91323],
      "requires": []
    },
    9133: {
      "id": 9133,
      "row": 3,
      "col": 3,
      "icon": "icon_9133",
      "ranks": [91331,91332],
      "requires": []
    },
    9140: {
      "id": 9140,
      "row": 4,
      "col": 0,
      "icon": "icon_9140",
      "ranks": [91401,91402,91403],
      "requires": []
    },
    9141: {
      "id": 9141,
      "row": 4,
      "col": 1,
      "icon": "icon_9141",
      "ranks": [91411],
      "requires": []
    },
    9142: {
      "id": 9142,
      "row": 4,
      "col": 2,
      "icon": "icon_9142",
      "ranks": [91421],
      "requires": []
    },
    9143: {
      "id": 9143,
      "row": 4,
      "col": 3,
      "icon": "icon_9143",
      "ranks": [91431,91432],
      "requires": []
    },
    9151: {
      "id": 9151,
      "row": 5,
      "col": 1,
      "icon": "icon_9151",
      "ranks": [91511,91512],
      "requires": []
    },
    9152: {
      "id": 9152,
      "row": 5,
      "col": 2,
      "icon": "icon_9152",
      "ranks": [91521,91522,91523],
      "requires": []
    },
    9161: {
      "id": 9161,
      "row": 6,
      "col": 1,
      "icon": "icon_9161",
      "ranks": [91611],
      "requires": []
    },
    9162: {
      "id": 9162,
      "row": 6,
      "col": 2,
      "icon": "icon_9162",
      "ranks": [91621],
      "requires": []
    }
  },
  92: {
    9200: {
      "id": 9200,
      "row": 0,
      "col": 0,
      "icon": "icon_9200",
      "ranks": [92001,92002,92003],
      "requires": []
    },
    9201: {
      "id": 9201,
      "row": 0,
      "col": 1,
      "icon": "icon_9201",
      "ranks": [92011,92012],
      "requires": []
    },
    9202: {
      "id": 9202,
      "row": 0,
      "col": 2,
      "icon": "icon_9202",
      "ranks": [92021,92022,92023],
      "requires": []
    },
    9203: {
      "id": 9203,
      "row": 0,
      "col": 3,
      "icon": "icon_9203",
      "ranks": [92031,92032],
      "requires": []
    },
    9210: {
      "id": 9210,
      "row": 1,
      "col": 0,
      "icon": "icon_9210",
      "ranks": [92101,92102,92103],
      "requires": []
    },
    9211: {
      "id": 9211,
      "row": 1,
      "col": 1,
      "icon": "icon_9211",
      "ranks": [92111,92112],
      "requires": []
    },
    9212: {
      "id": 9212,
      "row": 1,
      "col": 2,
      "icon": "icon_9212",
      "ranks": [92121,92122,92123],
      "requires": []
    },
    9213: {
      "id": 9213,
      "row": 1,
      "col": 3,
      "icon": "icon_9213",
      "ranks": [92131,92132],
      "requires": []
    },
    9220: {
      "id": 9220,
      "row": 2,
      "col": 0,
      "icon": "icon_9220",
      "ranks": [92201,92202,92203],
      "requires": []
    },
    9221: {
      "id": 9221,
      "row": 2,
      "col": 1,
      "icon": "icon_9221",
      "ranks": [92211],
      "requires": []
    },
    9222: {
      "id": 9222,
      "row": 2,
      "col": 2,
      "icon": "icon_9222",
      "ranks": [92221],
      "requires": []
    },
    9223: {
      "id": 9223,
      "row": 2,
      "col": 3,
      "icon": "icon_9223",
      "ranks": [92231,92232],
      "requires": []
    },
    9230: {
      "id": 9230,
      "row": 3,
      "col": 0,
      "icon": "icon_9230",
      "ranks": [92301,92302,92303],
      "requires": []
    },
    9231: {
      "id": 9231,
      "row": 3,
      "col": 1,
      "icon": "icon_9231",
      "ranks": [92311,92312],
      "requires": []
    },
    9232: {
      "id": 9232,
      "row": 3,
      "col": 2,
      "icon": "icon_9232",
      "ranks": [92321,92322,92323],
      "requires": []
    },
    9233: {
      "id": 9233,
      "row": 3,
      "col": 3,
      "icon": "icon_9233",
      "ranks": [92331,92332],
      "requires": []
    },
    9240: {
      "id": 9240,
      "row": 4,
      "col": 0,
      "icon": "icon_9240",
      "ranks": [92401,92402,92403],
      "requires": []
    },
    9241: {
      "id": 9241,
      "row": 4,
      "col": 1,
      "icon": "icon_9241",
      "ranks": [92411],
      "requires": []
    },
    9242: {
      "id": 9242,
      "row": 4,
      "col": 2,
      "icon": "icon_9242",
      "ranks": [92421],
      "requires": []
    },
    9243: {
      "id": 9243,
      "row": 4,
      "col": 3,
      "icon": "icon_9243",
      "ranks": [92431,92432],
      "requires": []
    },
    9251: {
      "id": 9251,
      "row": 5,
      "col": 1,
      "icon": "icon_9251",
      "ranks": [92511,92512],
      "requires": []
    },
    9252: {
      "id": 9252,
      "row": 5,
      "col": 2,
      "icon": "icon_9252",
      "ranks": [92521,92522,92523],
      "requires": []
    },
    9261: {
      "id": 9261,
      "row": 6,
      "col": 1,
      "icon": "icon_9261",
      "ranks": [92611],
      "requires": []
    },
    9262: {
      "id": 9262,
      "row": 6,
      "col": 2,
      "icon": "icon_9262",
      "ranks": [92621],
      "requires": []
    }
  }
}

export const talentsById: {[key: number]: TalentData} = {}
export const talentsBySpecArray: {[key: number]: TalentData[]} = {}
export const talentToSpec: {[key: number]: number} = {}

for (let specId in talentsBySpec) {
  for (let talentId in talentsBySpec[specId]) {
    talentsById[talentId] = talentsBySpec[specId][talentId]
    talentsBySpecArray[specId] = Object.values(talentsBySpec[specId])
    talentToSpec[talentId] = parseInt(specId, 10)
  }
}
