import './requestAnimationFramePolyfill';
/**
 * Handled calling requestAnimationFrame and makes it easy to perform an
 * animation a reduced amount of frames per second by jumping frames.
 * @class AnimationManager
 */
class AnimationManager {
  constructor() {
    this.animations = {};
  }

  /**
   * Cancels a scheduled animation frame
   * @public
   * @method cancel
   * @param  {String} animationName Animation name set with scheduleAnimation
   * @return {void}
   */
  cancel(animationName) {
    cancelAnimationFrame(this.animations[animationName]);
  }

  /**
   * Will call animationFunction after a frameDelay amount of frames.
   * @public
   * @method schedule
   * @param  {Function} animationFunction
   * @param  {String} animationName - Optional, but you need one if you want to
   * be able to cancel it afterwards
   * @param  {Int} frameDelay - Optional. animationFunction will be called
   * immediately if it is not provided.
   * @return {void}
   */
  schedule(animationFunction, animationName = Math.random().toString(), frameDelay = 0) {
    this.cancel(animationName);
    if (frameDelay > 0) {
      this.animations[animationName] = requestAnimationFrame(
        () => this.schedule(animationFunction, animationName, frameDelay - 1)
      );
    } else {
      this.animations[animationName] = requestAnimationFrame(animationFunction);
    }
  }
}

export default AnimationManager;
