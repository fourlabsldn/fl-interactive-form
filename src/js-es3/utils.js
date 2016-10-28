export function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function fakeEvent(answers) {
  return {
    detail: {
      answers: answers
    }
  };
}

export function applyDataMask(field, fieldMask) {
  var mask = fieldMask.split('');

  // For now, this just strips everything that's not a number
  function stripMask(maskedData) {
    function isDigit(char) {
      return /\d/.test(char);
    }
    return maskedData.split('').filter(isDigit);
  }

  // Replace `_` characters with characters from `data`
  function applyMask(data) {
    return mask.map(function (char) {
      if (char !== ' ') return char;
      if (data.length == 0) return char;
      return data.shift();
    }).join('')
  }

  function reapplyMask(data) {
    return applyMask(stripMask(data));
  }

  function changed() {
    var oldStart = field.selectionStart;
    var oldEnd = field.selectionEnd;

    field.value = reapplyMask(field.value);

    field.selectionStart = oldStart;
    field.selectionEnd = oldEnd;
  }

  field.addEventListener('click', changed)
  field.addEventListener('keyup', changed)
}

// createErrorMessage: String -> HTML
export function createErrorMessage(message) {
  const err = document.createElement('div');
  err.className = 'fl-if_Error fl-if_Error--speechBubble';
  err.innerHTML = message;
  return err;
}

export function removeErrorMessage(field) {
  Array.prototype.map.call(
    field.querySelectorAll('.fl-if-Error'),
    el => el.remove()
  );
}

export function trimSpaces(str) {
  return str.replace(/\s+/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
}
