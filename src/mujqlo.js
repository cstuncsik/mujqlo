var mujqlo = (function(win, doc, undefined) {
    'use strict';

    var
    /**
     * Loads jquery files
     * @param  {array}   files     Array of file urls
     * @param  {Function} callback Runs after all jquery files loaded
     */
        load = function(files, callback) {

            var // head html element
                head = doc.getElementsByTagName('head')[0],

                // files length for checking
                len = files.length,

                // how many files checked
                checked = 0,

                // check if all files treated and call callback
                checkAll = function() {
                    if (checked === len) {
                        checked = 0;
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                };

            // loop through jquery file urls
            for (var i = 0; i < len; i+=1) {
                // pass actual file url to closure
                (function(url) {
                    var // create a script tag
                        script = doc.createElement('script'),

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
                                win['jq' + jQuery.fn.jquery.replace(/\./g, '')] = jQuery.noConflict(true);
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
})(window, document);
