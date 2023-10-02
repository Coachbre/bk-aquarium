
/* import the getFish function
 import { getFish } from "./FishData.js";

 // set results equal to allTheFish
 const allTheFish = getFish();

 for (const fish of allTheFish){
   console.log(fish);
 }
 // iterate through each fish/object in all the fish and console log each object */

// Imports the FishList
import { FishList } from "./fish/FishList.js";

FishList();
//calls imported fishlist function

import { getMostHolyFish } from "./fish/FishData.js";
getMostHolyFish();

import { getSoldierFish } from "./fish/FishData.js";
getSoldierFish();

import { getUnworthy } from "./fish/FishData.js";
getUnworthy();

// Tip Data main js info

import { TipList } from "./tips/TipList.js";

TipList();


// Location Data main js info
import { LocationCollection } from "./location/LocationList.js";

LocationCollection();
