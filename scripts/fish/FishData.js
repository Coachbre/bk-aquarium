export const getFish = () => {
  return fishCollection
}

const fishCollection = [
  {
    name: "Malcolm",
    species:"Blue Tang",
    length: 10,
    found: "Pacific Ocean",
    diet: "algae",
    image: "bluefish.jpg"
  },
  {
    name:"Bob",
    species:"Guppy",
    length:3,
    found: "Bali",
    diet: "really small fish",
    image: "pinkfish.jpg"
  },
  {
    name: "Jerry",
    species: "Swordfish",
    length:80,
    found:"Pacific Ocean",
    diet: "shellfish",
    image: "orangefish.jpg"
  },
  {
    name: "Predator",
    species: "Catfish",
    length: 22,
    found: "Ocoee River",
    diet: "tiny fish",
    image: "bluefish.jpg"
  },
  {
    name: "Sabre",
    species: "Angel Fish",
    length: 12,
    found: "Amazon Basin",
    diet: "brine shrimp",
    image: "pinkfish.jpg"
  },
  {
    name: "Una",
    species: "Clownfish",
    length: 5,
    found: "Atlantic Ocean",
    diet: "plankton",
    image: "orangefish.jpg"
  },
  {
    name: "Vacuum",
    species: "Catfish",
    length: 24,
    found: "Mississippi River",
    diet: "everything",
    image: "orangefish.jpg"
  },
  {
    name: "Ralph",
    species: "Smallmouth Bass",
    length:15,
    found: "Bobbies Fish",
    diet: "minnows",
    image: "bluefish.jpg"
  },
  {
    name: "Whiskers",
    species: "Ictalurus furcatus",
    length: 39,
    found: "Cumberland River",
    diet: "anything",
    image: "orangefish.jpg"
  },
  {
    name: "Bruno",
    species: "Tuna",
    length:64,
    found: "South Pacific",
    diet: "shrimp",
    image: "pinkfish.jpg"
  },
  {
    name: "Dorothy",
    species: "goldfish",
    length: 3,
    found: "Petsmart",
    diet: "algae",
    image: "orangefish.jpg"
  },
  {
    name: "Trent",
    species: "Rainbow trout",
    length: 21,
    found: "Lake Tahoe",
    diet: "insects",
    image: "pinkfish.jpg"
  }

]

export const getMostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFishArray = [] //initialize as empty array

  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) {
      holyFishArray.push(fish)
    }
  }
console.log(holyFishArray);
  return holyFishArray
} //for each fish in the collection, if length divided by 3 has a remainder of 0, add to array of 'holy' fish then creturn full list


export const getSoldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldierFishArray = []

  for (const fish of fishCollection)  {
    if (fish.length % 5 === 0) {
      soldierFishArray.push(fish)
    }
  }
  console.log(soldierFishArray);
  return soldierFishArray
}


export const getUnworthy = () => {
  // Any fish not a multiple of 3 or 5
  const unworthyFishArray = []

  for (const fish of fishCollection){
    if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
      unworthyFishArray.push(fish)
    }
  }
  console.log(unworthyFishArray);
  return unworthyFishArray
}
