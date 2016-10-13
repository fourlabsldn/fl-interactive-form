# Interactive Form

Generates a nice looking form that can be navigated using keyboard keys. Open Source, **inspired by Typeform**.

## Quickstart

  To create a form just call `flInteractiveForm.create` with the configuration
  object from `form-builder` and a target element to create the form.

  Must use RequireJs.

``` html
  <link rel="stylesheet" href="../dist/fl-interactive-form.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">

  <!-- Where we will put the form -->
  <div id="container" style="height: 100vh"></div>

  <!-- RequireJS -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"></script>
  <!--[if lte IE 9]>
    <script>
      requirejs.config({
        paths: {
          'fl-interactive-form': '../../dist/fl-interactive-form-es3',
        },
      });
    </script>
  <![endif]-->
  <!--[if !lte IE 9]> -->
    <script>
      requirejs.config({
        paths: {
          'react': '//cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min',
          'react-dom': '//cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min',
          'fl-interactive-form': '../../dist/fl-interactive-form',
        },
      });
    </script>
  <!-- <![endif]-->

  <!-- Build the form -->
  <script>
    require(['fl-interactive-form'], function (flInteractiveForm) {
      var config = [{ question: 'What is your name?', placeholder: 'My name is...', type: 'Text', }];
      var targetUrl = 'http://google.com'; // This will be needed for IE 9 and below
      // NOTE: In IE browsers 9 and below the submission will happen through
      // form action. That means that the data may look a bit different.
      // You can cancel the event and handle it in the `submit` event listener
      // but that is discouraged as it is very error prone.
      var form = flInteractiveForm.create(config, targetUrl);

      form.addEventListener('submit', function logSubmission(e) {
        var answers = e.detail.answers;
        console.log('Answer:', answers);
      })

      var targetElement = document.querySelector('#formElement');
      targetElement.appendChild(form);
    });
  </script>
```

## Configuration

The configuration is a JSON object as generated by the [fl-form-builder](https://github.com/fourlabsldn/fl-form-builder), a native JS form builder inspired by Google Forms. [Try it here](https://fourlabsldn.github.io/fl-form-builder/demo/), you can use the JSON logged in the console when you hit save.


## Custom Types

With fl-form-builder you can create custom form types that look whatever way you want, but fl-interactive-form needs loads of bells and whistles attached to the components for the UI to work propperly. Therefore, for your custom types to work here they must be derived from one of the standard form input types. Basically, that is going to allow you to perform an initialisation task for every component and return a personalised config object.


Being derived from another component just means that the configuration object has the key `primitiveType` with the name of one of the standard types (`Dropdown`, `RadioButtons`, `TextBox`, etc) as its value.


fl-interactive-form calls the `initialState` function for every custom component field sending the provided configuration object as a parameter and using the returned value as the effective configuration for the field.


To be a valid derived type, the output of your `initialState` function must conform to its corresponding form field type signature. Here are the two possible signatures:

### text


This includes `TextBox`, `TextArea`, `EmailBox`, `TelephoneBox` and `NumberBox`.


``` javascript
{
  "type": "TextBox",
  "required": false,
  "title": "Answer a text question",
  "placeholder": "Here lies a placeholder that should be shown"
}
```

## options


This includes `Checkboxes`, `Dropdown` and `RadioButtons`.


``` javascript
{
 "required": true,
 "title": "Would you like to choose a dropdown option? (Not optional)",
 "type": "Dropdown",
 "options": ["Option number one", "Option number two"],
}
```
