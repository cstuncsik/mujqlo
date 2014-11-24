var mujqlo = (function(win, doc, undefined) {
    'use strict';

    var
    // load method
        load = function(files, callback) {

        var // head html element
            head = doc.getElementsByTagName('head')[0],
            // files length for the while cycle
            i = files.length,
            // files length for checking all versions loaded
            len = i,
            // how many jquery files loaded
            loaded = 0,
            // check if all files loaded and call callback
            checkAll = function() {
                if (loaded === len) {
                    callback();
                }
            };
        // loop through jquery fil urls
        while (i--) {
            // pass actual file url to closure
            (function(item) {
                var // create a script tag
                    script = doc.createElement('script'),
                    // file url
                    url = files[item],
                    // add jquery version to global namespace
                    // from the version string from jQuery.fn.version property
                    // replacing dots to nothing (eg: jq172)
                    add = function() {
                        loaded += 1;
                        win['jq' + jQuery.fn.jquery.replace(/\./g, '')] = jQuery.noConflict(true);
                    };
                script.type = 'text/javascript';
                script.src = url;
                // check if the script is loaded
                if (script.readyState) {
                    script.onreadystatechange = function() {
                        if (script.readyState == "loaded" ||
                            script.readyState == "complete") {
                            script.onreadystatechange = null;
                            add();
                            checkAll();
                        }
                    };
                } else {
                    script.onload = function() {
                        add();
                        checkAll();
                    };
                }
                head.appendChild(script);
            })(i);
        }
    };
    return {
        load: load
    };
})(window, document);
