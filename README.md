# Interactive Form

Generates a nice looking form that can be navigated using keyboard keys.

# Quickstart

  To create a form just call `flInteractiveForm.create` with the configuration
  object from `form-builder` and a target element to create the form.

``` html
  <div id="formContainer"> </div>
  <!--[if IE 8]>
  <script src="../dist/fl-interactive-form-es3.js"></script>
  <![endif]-->
  <!--[if !IE 8]> -->
  <script src="../dist/fl-interactive-form.js"></script>
  <!-- <![endif]-->
  <script type="text/javascript">
    config = ...
    container = document.querySelector('#formContainer');
    flInteractiveForm.create(config, container);
  </script>
```
