const me = {
  name: "Caine",
  age: 36,
  height: "5ft7",
  boy: true,
  notMarried: false,
  branchOfService: {
    branch: "Marine Corps",
    rank: "Sergeant",
    yearsOfService: 8,
    honorableDischarge: true,
    home: {
      games: "PS4",
      pets: {
        cats: 0,
        dogs: 0,
        hasPets: false
      }
    }
  }
};

console.log(me["rank"]["name"]);
