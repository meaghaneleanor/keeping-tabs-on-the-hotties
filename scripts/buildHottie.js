'use strict';

export const shuffleArray = (hottiesArray) => {
  let length = hottiesArray.length;
  let temp;
  let index;

  // While there are objects in the array
  while (length > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * length);

    // // Decrease length by 1
    length--;

    // Swap last element with it
    temp = hottiesArray[length];
    hottiesArray[length] = hottiesArray[index];
    hottiesArray[index] = temp;
  }

  return hottiesArray[0];
}

// build out the hottie HTML
export const buildHottieHTML = (hottie) => {
  let knownForHTML = hottie.famousFor.map((role) => {
    return ` <a href=${role.link}>${role.name}</a>`
  });
  
  let hottieHTML = `
    <div class="hottie" id="${hottie.id}">
      <div>
        <img src="${hottie.image}" alt="${hottie.name}" />
      </div>
      <div>
        <p class="hottie-name">${hottie.name}</p>
        <p class="hottie-profession">(${hottie.profession})</p>
        <p class="hottie-known-for"><span class="hottie-title">You know them from:</span> <span>${knownForHTML}<span></p>
        <p class="hottie-fun-fact"><span class="hottie-title">Fun fact:</span> <span>${hottie.funFact} <sup><a href="${hottie.funFactLink}">[Source]</a></sup></span></p>
      </div>
    </div>
  `;

    document.getElementById('single-hottie').innerHTML = hottieHTML;
};
