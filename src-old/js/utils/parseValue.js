import assert from 'fl-assert';

/**
 * Transforms '-10.5px' into -10.5
 * @method parseValue
 * @param  {String} s
 * @return {Number}
 */

export default function parseValue(s) {
  if (!s) { return 0; }
  if (typeof s === 'number') { return s; }
  assert(typeof s === 'string', `Expected string and got ${typeof s}`);
  const matches = s.match(/\-?[0-9]+(\.[0-9]+)?/g) || [];
  assert(matches.length < 2, 'Invalid string. More than one number found: ${s}');
  return parseFloat(matches[0], 10) || 0;
}
