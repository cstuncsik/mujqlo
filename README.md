[![Bower version](https://badge.fury.io/bo/mujqlo.svg)](http://badge.fury.io/bo/mujqlo)

MujQLo
======

**Multiple jQuery Loader**

Loads different versions of jquery based on its version number to a page

## Install

```sh
bower install --save mujqlo
```

## Sample

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
            'app.js'
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

## Run test

```sh
npm install
bower install
gulp
```

The default gulp task starts a static web server at localhost:3000 (port may vary)

Just run specRunner.html at [http://localhost:3000/specRunner.html](http://localhost:3000/specRunner.html)

## Build production

```sh
gulp build
```

The **build** gulp task compresses the source (*src/mujqlo.js*) to **dist/mujqlo.js** and also starts the static web server
and you can run the test against the production at the same url.

If the test page is open the browser refreshes itself after build (by [browser-sync](http://www.browsersync.io/)) if not you just need to hit refresh.

## License

Copyright © 2014 Csaba Tuncsik <csaba.tuncsik@gmail.com>

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See [WTFPL](http://www.wtfpl.net) ![WTFPL icon](http://i.imgur.com/AsWaQQl.png) for more details.
