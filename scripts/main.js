import {hotties} from './hottiesList.js';
import {shuffleArray,buildHottieHTML} from './buildHottie.js';

// on load, return and append a hottie to the DOM
let shuffledHottie = shuffleArray(hotties);
let hottieHTML = buildHottieHTML(shuffledHottie);


// refresh hottie functionality
document.getElementById('refresh-hottie').addEventListener('click', (event) => {
    event.preventDefault();
    let shuffledHottie = shuffleArray(hotties);
    let hottieHTML = buildHottieHTML(shuffledHottie);
});
