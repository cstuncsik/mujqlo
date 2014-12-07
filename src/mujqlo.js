(function(root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.mujqlo = factory();
    }
}(this, function() {

    'use strict';

    var
    /**
     * Loads jquery files
     * @param  {array}   files     Array of file urls
     * @param  {Function} callback Runs after all jquery files loaded
     */
        load = function(files, callback) {

            var // head html element
                head = document.getElementsByTagName('head')[0],

                // files length for checking
                all = files.length,

                // how many files checked
                checked = 0,

                // check if all files treated and call callback
                checkAll = function() {
                    if (checked === all) {
                        checked = 0;
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                };

            // loop through jquery file urls
            for (var i = 0; i < all; i += 1) {

                // pass actual file url to closure
                (function(url) {
                    var // create a script tag
                        script = document.createElement('script'),

                        // script ready state
                        ready = script.readyState,

                        // file url
                        src = files[url],

                        // If there is jQuery then add it's version to global namespace
                        // from the version string from jQuery.fn.version property
                        // replacing dots to nothing (eg: jq172)
                        add = function() {
                            checked += 1;

                            if (typeof jQuery === 'function') {
                                window['jq' + jQuery.fn.jquery.replace(/\./g, '')] = jQuery.noConflict(true);
                            }
                        };

                    script.async = 'async';
                    script.src = src;

                    // check if the script is loaded
                    if (ready) { // IE
                        script.onreadystatechange = function() {
                            ready = script.readyState.toLowerCase();
                            if (ready === 'loaded' || ready === 'complete') {
                                script.onreadystatechange = null;
                                add();
                                checkAll();
                            }
                        };
                    } else { // others
                        script.onload = function() {
                            add();
                            checkAll();
                        };
                    }

                    // check for error
                    script.onerror = function(error) {
                        checked += 1;
                        checkAll();
                        throw new Error(error.target.src + ' failed');
                    };

                    // append script to head
                    head.appendChild(script);
                })(i);
            }
    };

    // return public api
    return {
        load: load
    };

}));
