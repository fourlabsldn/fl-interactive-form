/* eslint-disable no-param-reassign */

import AnimationManager from './AnimationManager';
const animations = new AnimationManager();

/**
 * @public
 * @method scrollSlide
 * @param  {HTMLElement} container - Element whose scroll position will be changed
 * @param  {Int} targetScroll - Target scroll position;
 * @param  {Int} duration - Duration in milliseconds
 * @return {Promise} - To be fulfilled when transition ends
 */
export default function scrollSlide(container, targetScroll, duration = 500) {
  const initialScroll = container.scrollTop;
  const scrollDistance = targetScroll - initialScroll;

  // fps * duration / millisecondsPerSecond
  const totalFrames = 60 * duration / 1000;

  let f = 0; // frame number

  const doSliding = (callback) => {
    // scroll progress percentage from 0 to 1
    const p = f / totalFrames;

    // ease-in-out formula
    const displacementPercentage = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;

    const displacement = scrollDistance * displacementPercentage;
    container.scrollTop = initialScroll + displacement;

    f += 1;

    if (f < totalFrames) {
      animations.schedule(() => doSliding(callback), 'scrollSlide', 0);
    } else {
      callback();
    }
  };


  return new Promise((resolve, reject) => {
    let resolved = false;
    doSliding(() => { resolved = true; resolve(); });

    // In case another scroll comes up and any 'doSliding' callback is cancelled
    // we will make sure to reject the promise and not leave it hanging
    function rejectIfNotResolved() {
      if (!resolved) { reject('Animation frame cancelled'); }
    }

    setTimeout(rejectIfNotResolved, 1.5 * duration);
  });
}
