import assert from 'fl-assert';
import parseValue from './parseValue';

class TranslationManager {

  /**
   * Transfers the translation values to top and left properties
   * @public
   * @method removeTranslation
   * @param  {HTMLElement} el
   * @return {void}
   */
  removeTranslation(el) {
    assert(typeof el === 'object', `Invalid element provided: ${el}`);
    const styles = window.getComputedStyle(el);
    const left = parseValue(styles.left);
    const top = parseValue(styles.top);
    const xTranslation = parseValue(el.getAttribute('data-x'));
    const yTranslation = parseValue(el.getAttribute('data-y'));

    /* eslint-disable no-param-reassign*/
    el.style.top = `${top + yTranslation}px`;
    el.style.left = `${left + xTranslation}px`;
    el.style.transform = 'translate3d(0px, 0px, 0px)';
    el.setAttribute('data-x', 0);
    el.setAttribute('data-y', 0);
    /* eslint-enable no-param-reassign*/
  }

  /**
   * Adds a value to the X and another to the Y translation of an element
   * @public
   * @method addTranslation
   * @param  {HTMLElement} el
   * @param  {Int} increaseX - in Pixels
   * @param  {Int} increaseY - in Pixels
   */
  addTranslation(el, increaseX = 0, increaseY = 0) {
    assert(typeof el === 'object', `Invalid element provided: ${el}`);
    const currentTranslation = this.getTranslation(el);
    const newTranslationX = currentTranslation.x + increaseX;
    const newTranslationY = currentTranslation.y + increaseY;

    this.setTranslation(el, newTranslationX, newTranslationY);
  }

  /**
   * @public
   * @method setTranslation
   * @param  {[type]} el [description]
   * @param  {[type]} translationX = 0 [description]
   * @param  {[type]} translationY = 0 [description]
   */
  setTranslation(el, translationX = 0, translationY = 0) {
    assert(typeof el === 'object', `Invalid element provided: ${el}`);
    el.setAttribute('data-x', translationX);
    el.setAttribute('data-y', translationY);
    console.log('Set data-y: ', translationY);
    el.style.transform = `translate3d(${translationX}px, ${translationY}px, 0)`; // eslint-disable-line no-param-reassign, max-len
  }

  /**
   * @private
   * @method getTranslation
   * @param  {HTMLElement} el
   * @return {Object} { x, y }
   */
  getTranslation(el) {
    assert(typeof el === 'object', `Invalid element provided: ${el}`);
    const currTranslationX = parseInt(el.getAttribute('data-x'), 10) || 0;
    const currTranslationY = parseInt(el.getAttribute('data-y'), 10) || 0;
    console.log('Read data-y: ', el.getAttribute('data-y'));
    return {
      x: currTranslationX,
      y: currTranslationY,
    };
  }
}

const translationManager = new TranslationManager();
export default translationManager;
