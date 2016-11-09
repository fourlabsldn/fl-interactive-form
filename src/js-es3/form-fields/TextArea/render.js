import textFieldRender from '../TextBox/render';

/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
export default function render(state) {
  const el = textFieldRender(state);
  el.className = `${el.className} fl-if_TextAreaInput-input`;
  return el;
}
