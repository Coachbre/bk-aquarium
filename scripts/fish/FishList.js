/**
 *  FishList renders individual fish objects as HTML
 */

import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js"

export const FishList = () => {

  // Get a reference to the location on the DOM you want to display the list of fish
  const contentElement = document.querySelector(".fishListContainer")

  //Pull in the array of fish
  const fishesArray = getFish()

  // Declare a variable to hold on to the fish HTML representation
  let storeFishHtml = "";

  // Loops over the array of fish
  for (const singleFish of fishesArray) {
    storeFishHtml += Fish(singleFish);
  }
  
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
        <section class="fishList">
            ${storeFishHtml}
        </section>
    `
}
