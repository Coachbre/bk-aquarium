/**
 *  FishList renders individual fish objects as HTML
 */

import { getFish } from "./FishData.js";
import { getMostHolyFish } from "./FishData.js";
import { getSoldierFish } from "./FishData.js";
import { getUnworthy } from "./FishData.js";
import { Fish } from "./Fish.js"

export const FishList = () => {

  // Get a reference to the location on the DOM you want to display the list of fish
  const contentElement = document.querySelector(".fishListContainer")

  //Pull in the array of fish
  const holyArray = getMostHolyFish();
  const soldierArray = getSoldierFish();
  const unworthyArray = getUnworthy();

  // Declare a variable to hold on to the fish HTML representation
  let storeFishHtml = "";

  // Loops over the array of fish and adds each one
  for (const singleFish of holyArray) {
    storeFishHtml += Fish(singleFish);
  }

  for (const singleFish of soldierArray) {
    storeFishHtml += Fish(singleFish);
  }

  for (const singleFish of unworthyArray) {
    storeFishHtml += Fish(singleFish);
  }

  
  
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
        <section class="fishList">
            ${storeFishHtml}
        </section>
    `
}
