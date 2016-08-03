# Interactive Form

Generates a nice looking form that can be navigated using keyboard keys.

# Quickstart

  To create a form just call `flInteractiveForm.create` with the configuration
  object from `form-builder` and a target element to create the form.

``` html
  <!-- Where we will put the form -->
  <div id='container' style="max-height: 100vh"> </div>

  <!-- Load the adequate form conditionally -->
  <!--[if IE 8]>
  <script src="../dist/fl-interactive-form-es3.js"></script>
  <![endif]-->
  <!--[if !IE 8]> -->
  <script src="../dist/fl-interactive-form.js"></script>
  <!-- <![endif]-->

  <!-- Build the form -->
  <script>
    var config = ...
    var form = flInteractiveForm.create(config);

    form.addEventListener('submit', function logSubmission(e) {
      var answers = e.detail;
      console.log(answers);
    })

    var targetElement = document.querySelector('#container');
    targetElement.appendChild(form);
  </script>
```
