/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
export default function render(state) {
  const tagName = state.htmlElement;
  const el = document.createElement(tagName);

  el.className = 'fl-if_TextInput-input';

  el.setAttribute('name', state.title);

  el.setAttribute('type', state.htmlInputType);

  el.placeholder = state.placeholder;

  if (state.required) {
    el.setAttribute('required', true);
  }

  return el;
}
