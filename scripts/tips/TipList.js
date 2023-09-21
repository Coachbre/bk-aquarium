import { getTip } from "./TipData.js";

import { Tip } from "./Tip.js";

export const TipList = () => {
  const contentElement = document.querySelector(".tipListContainer");
  // targets tip list container section of html

  const tipArray = getTip();
  // sets tipArray equal to array of tips that getTip returns

  let storeTipHtml = "";
  // storeTipHtml is a variable set to an empty string at first

  for (const eachTip of tipArray) {

      storeTipHtml += Tip(eachTip)
    
  }
  //for each tip in the tip array, add tip to storeTipHtml variable 

  contentElement.innerHTML += `
        <section class="tipList">
        ${storeTipHtml}
        </section>`
        // set the inner html of tipListContainer section to this html snippet (the tip list)
}
