export const classes: ClassData[] = [
  { 
    id: 1,
    name: 'Warrior',
    icon: 'class_warrior',
    specs: [10, 11, 12]
  },
  { 
    id: 2,
    name: 'Paladin',
    icon: 'class_paladin',
    specs: [20, 21, 22]
  },
  { 
    id: 3,
    name: 'Hunter',
    icon: 'class_hunter',
    specs: [30, 31, 32]
  },
  { 
    id: 4,
    name: 'Rogue',
    icon: 'class_rogue',
    specs: [40, 41, 42]
  },
  { 
    id: 5,
    name: 'Priest',
    icon: 'class_priest',
    specs: [50, 51, 52]
  },
  { 
    id: 6,
    name: 'Shaman',
    icon: 'class_shaman',
    specs: [60, 61, 62]
  },
  { 
    id: 7,
    name: 'Mage',
    icon: 'class_mage',
    specs: [70, 71, 72]
  },
  { 
    id: 8,
    name: 'Warlock',
    icon: 'class_warlock',
    specs: [80, 81, 82]
  },
  { 
    id: 9,
    name: 'Druid',
    icon: 'class_druid',
    specs: [90, 91, 92]
  },
]

export const classById: {[key: number]: ClassData} = 
  classes.reduce((previousValue: object, currentValue: ClassData) => {
    return {
      ...previousValue,
      [currentValue.id]: currentValue
    }
  }, {})  

export const classByName: {[key: string]: ClassData} = 
  classes.reduce((previousValue: object, currentValue: ClassData) => {
    return {
      ...previousValue,
      [currentValue.name.toLowerCase()]: currentValue
    }
  }, {})
