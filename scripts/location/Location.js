export const Location = (harvestObj) => {
  return `<article class="tip-card">
        <ul>
            <li class="location-details">Blue Fish: ${harvestObj.blueFish}</li>
            <li class="location-details">Grey Fish: ${harvestObj.greyFish}</li>
            <li class="location-details">Orange Fish: ${harvestObj.orangeFish}</li>
        </ul>
    </article>
  `
}
// List renders each harvest object (each actual value from harvest/location collection) as html
