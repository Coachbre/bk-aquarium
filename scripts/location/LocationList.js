import { getLocation } from "./LocationData.js";
//imports locations array
import { Location } from "./Location.js";
//imports location card html

export const LocationCollection = () => {

  const contentElement = document.querySelector(".locationCollectionContainer")
  // selects section with class of locationCollectionContainer in index.html

  const locationArray = getLocation();
  //sets locationArray equal to locations array from getLocation()

  let storeLocationHtml = "";
  //sets as empty variable that will be changed later on

  for (const eachLocation of locationArray) {
    storeLocationHtml += Location(eachLocation)
  }
  //for each location in the array, pass the data to the Location (card) function then add each one to storeLocationHtml

  contentElement.innerHTML += `
   <section class="LocationList">
        ${storeLocationHtml}
    </section>
  `
  //sets inner html of LocationCollectionContainer to list of locations
}
