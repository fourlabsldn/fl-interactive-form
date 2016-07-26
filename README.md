# Interactive Form

Generates a nice looking form that can be navigated using keyboard keys.

# HTML

The `data-config` attribute accepts a json in the same format as the one
exported by [`fl-form-builder`](https://github.com/fourlabsldn/fl-form-builder).

``` html
  <x-div
    data-controller="fl-interactive-form.js"
    data-config='{
      "questions": [{
        "question": "What is your name?",
        "placeholder": "My name is...",
        "type": "Text"
      }, {
        "question": "What course are you interested in?",
        "placeholder": "I would like to take...",
        "type": "Textarea"
      }, {
        "question": "What is your nationality?",
        "placeholder": "My nationality is...",
        "type": "Text"
      }, {
        "question": "When do you plan to travel?",
        "placeholder": "I plan to travel by...",
        "type": "Textarea"
      }]
    }'
  />
```
