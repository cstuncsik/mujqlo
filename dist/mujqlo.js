var mujqlo=function(e,n){"use strict";var t=function(t,o){for(var r=n.getElementsByTagName("head")[0],a=t.length,c=0,u=function(){c===a&&(c=0,"function"==typeof o&&o())},f=0;a>f;f+=1)!function(o){var a=n.createElement("script"),f=a.readyState,i=t[o],d=function(){c+=1,"function"==typeof jQuery&&(e["jq"+jQuery.fn.jquery.replace(/\./g,"")]=jQuery.noConflict(!0))};a.async="async",a.src=i,f?a.onreadystatechange=function(){f=a.readyState.toLowerCase(),("loaded"===f||"complete"===f)&&(a.onreadystatechange=null,d(),u())}:a.onload=function(){d(),u()},a.onerror=function(e){throw c+=1,u(),new Error(e.target.src+" failed")},r.appendChild(a)}(f)};return{load:t}}(window,document);