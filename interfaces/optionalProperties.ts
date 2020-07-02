// optional properties

interface Hero {
  weapon?: string;      // ? indicates optional
  name?: string;
}
function heroInfo(hero: Hero) {
  // yours responsibility to handle hero properties
  // may be default values????
  console.log(hero)
}

heroInfo({}) // works
heroInfo({} as Hero) // compiler is happy; works too
