MujQLo
======

**Multiple jQuery Loader**

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
        console.log('start app or load jquery dependent stuff');
        console.log('loaded jq:',jq172.fn.jquery);
        console.log('loaded jq:',jq183.fn.jquery);
        console.log('loaded jq:',jq191.fn.jquery);
        console.log('loaded jq:',jq1102.fn.jquery);
        console.log('loaded jq:',jq1111.fn.jquery);
        console.log('loaded jq:',jq211.fn.jquery);
    });
    </script>
</head>

<body>
</body>

</html>
```

Copyright © 2014 Csaba Tuncsik <csaba.tuncsik@gmail.com>

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See [WTFPL](http://www.wtfpl.net) ![WTFPL icon](http://i.imgur.com/AsWaQQl.png) for more details.
