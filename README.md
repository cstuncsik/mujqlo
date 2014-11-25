[![Bower version](https://badge.fury.io/bo/mujqlo.svg)](http://badge.fury.io/bo/mujqlo)

MujQLo
======

**Multiple jQuery Loader**

Loads different versions of jquery based on its version number to a page

## Install

```sh
$ bower install --save mujqlo
```

### `index.html`

```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Multi jQuery loader</title>
    <script src="mujqlo.js"></script>
    <script>
    mujqlo.load([
        'bower_components/jquery-1.7.2/jquery.js',
        'bower_components/jquery-1.8.3/jquery.js',
        'bower_components/jquery-1.9.1/jquery.js',
        'bower_components/jquery-1.10.2/jquery.js',
        'bower_components/jquery-1.11.1/dist/jquery.js',
        'bower_components/jquery-2.1.1/dist/jquery.js'
    ],function(){
        mujqlo.load([
            'test/app.js'
        ]);
    });
    </script>
</head>

<body>
</body>

</html>

```

### `app.js`

```js
(function($){
    'use strict';
    console.log($.fn.jquery);
})(jq172);

(function($){
    'use strict';
    console.log($.fn.jquery);
})(jq183);

(function($){
    'use strict';
    console.log($.fn.jquery);
})(jq191);

(function($){
    'use strict';
    console.log($.fn.jquery);
})(jq1102);

(function($){
    'use strict';
    console.log($.fn.jquery);
})(jq1111);

(function($){
    'use strict';
    console.log($.fn.jquery);
})(jq211);
```

Copyright © 2014 Csaba Tuncsik <csaba.tuncsik@gmail.com>

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See [WTFPL](http://www.wtfpl.net) ![WTFPL icon](http://i.imgur.com/AsWaQQl.png) for more details.
