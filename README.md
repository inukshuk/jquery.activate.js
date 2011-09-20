jquery.activate.js
==================

jquery.activate.js is a simple plugin for jQuery to handle the repetitive
task of assigning event handlers that activate an element by assigning a
CSS class.

    $('#navigation > li').activate();
    // => if you click one of the li's it will be activated; behaves like check boxes on subsequent clicks

    $('#navigation > li').activate({ mode: 'toggle' });
    // => same as above
    
    $('#navigation > li').activate({ mode: 'once' });
    // => if you click one of the li's it will be activated; subsequent clicks will be ignored
    
    $('#navigation > li').activate({ mode: 'radio' });
    // => if you click one of the li's it will be activated; behaves like radio buttons on subsequent clicks

Additionally, you can define callbacks `activate` and `deactivate` that will
be applied to each element when it becomes active or inactive (this will
point to the extended element).

For more examples, take a look at the specs at
[spec/javascripts/activate_spec.js](https://github.com/inukshuk/jquery.activate.js/blob/master/spec/javascripts/activate_spec.js).

License
-------

Copyright 2011 Sylvester Keil and Johannes Krtek.

jquery.activate.js is distributed under the MIT license. See LICENSE for
details.